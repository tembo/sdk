import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import Tembo, { AuthenticationError, BadRequestError } from '../dist/esm/index.js';

const require = createRequire(import.meta.url);
const schema = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const manifest = JSON.parse(readFileSync(new URL('../scalar-sdk.manifest.json', import.meta.url)));
const config = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const allowPendingScalarMappings = process.env.ALLOW_PENDING_SCALAR_MAPPINGS === 'true';
const document = {
  type: 'doc',
  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
};

function mockClient(response = { data: [], nextCursor: null }, status = 200, options = {}) {
  const requests = [];
  const client = new Tembo({
    apiKey: 'test-key',
    maxRetries: 0,
    ...options,
    fetch: async (input, init) => {
      const request = new Request(input, init);
      requests.push({
        url: request.url,
        method: request.method,
        headers: request.headers,
        body: await request.text(),
      });
      return Response.json(response, { status });
    },
  });
  return { client, requests };
}

test('manifest and configured methods satisfy the branch contract', () => {
  const methods = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace']);
  const expected = Object.entries(schema.paths)
    .flatMap(([path, item]) =>
      path.startsWith('/v1/')
        ? Object.keys(item)
            .filter((method) => methods.has(method))
            .map((method) => `${method.toUpperCase()} ${path}`)
        : [],
    )
    .sort();
  assert.ok(expected.length > 0);
  assert.deepEqual(
    manifest.operations.map((operation) => `${operation.method} ${operation.path}`).sort(),
    expected,
  );
  const endpoints = [];
  function collect(resources) {
    for (const resource of Object.values(resources)) {
      for (const method of Object.values(resource.methods ?? {})) {
        const endpoint = typeof method === 'string' ? method : method.endpoint;
        const [verb, ...path] = endpoint.split(' ');
        endpoints.push(`${verb.toUpperCase()} ${path.join(' ')}`);
      }
      collect(resource.subresources ?? {});
    }
  }
  collect(config.resources);
  assert.equal(new Set(endpoints).size, endpoints.length, 'Scalar resource mappings must be unique');
  if (!allowPendingScalarMappings) assert.deepEqual(endpoints.sort(), expected);
  const { client } = mockClient();
  for (const operation of manifest.operations) {
    const resource = operation.publicResource.split('.').reduce((value, key) => value[key], client);
    assert.equal(
      typeof resource[operation.publicOperation],
      'function',
      `${operation.publicResource}.${operation.publicOperation}`,
    );
  }
});

test('ESM and CommonJS entry points load with generated version metadata', async () => {
  assert.equal(typeof Tembo, 'function');
  assert.equal(typeof require('../dist/cjs/index.js').Tembo, 'function');
  const { VERSION } = await import('../dist/esm/version.js');
  assert.equal(typeof VERSION, 'string');
  assert.match(VERSION, /^\d+\.\d+\.\d+/);
});

test('production default URL, bearer authentication and pagination query are serialized', async () => {
  const { client, requests } = mockClient();
  await client.models.list({ limit: 2 });
  assert.equal(config.environments.production, 'https://api.tembo.io');
  assert.equal(requests[0].url, 'https://api.tembo.io/v1/models?limit=2');
  assert.equal(requests[0].headers.get('authorization'), 'Bearer test-key');
  assert.equal(requests[0].method, 'GET');
});

test('agent instructions and message richContent remain objects on the wire', async () => {
  const { client, requests } = mockClient();
  await client.agents.create({ instructions: document });
  await client.messages.create({ sessionId: 'test-session', content: 'Hello', richContent: document });
  assert.deepEqual(JSON.parse(requests[0].body), { instructions: document });
  assert.deepEqual(JSON.parse(requests[1].body), {
    sessionId: 'test-session',
    content: 'Hello',
    richContent: document,
  });
  assert.equal(requests[0].method, 'POST');
  assert.equal(requests[1].method, 'POST');
  assert.equal(requests[1].headers.get('content-type'), 'application/json');
});

test('responses pass through without renaming fields', async () => {
  const body = { id: 'test-session', richContent: document, pullRequests: [], durationMs: 42 };
  const { client } = mockClient(body);
  assert.deepEqual(await client.sessions.retrieve('test-session'), body);
});

test('base URL can be overridden and path parameters are escaped', async () => {
  const { client, requests } = mockClient({}, 200, { baseURL: 'https://example.invalid/public-api/' });
  await client.sessions.retrieve('identifier/with space');
  assert.equal(requests[0].url, 'https://example.invalid/public-api/v1/sessions/identifier%2Fwith%20space');
});

test('HTTP failures become typed errors without retries', async () => {
  for (const [status, ErrorType] of [
    [401, AuthenticationError],
    [400, BadRequestError],
  ]) {
    const { client, requests } = mockClient({ error: 'Test failure' }, status);
    await assert.rejects(
      () => client.models.list(),
      (error) => error instanceof ErrorType && error.status === status,
    );
    assert.equal(requests.length, 1);
  }
});

test('publishing uses the Scalar release workflow and trusted publishing', () => {
  assert.equal(packageJson.name, '@tembo-io/sdk');
  assert.deepEqual(Object.keys(config.targets), ['typescript']);
  assert.deepEqual(config.targets.typescript.destinations.production, { repo: 'tembo/sdk', branch: 'main' });
  assert.equal(config.targets.typescript.publish.npm, true);
  assert.equal(existsSync(new URL('../.github/workflows/publish-npm.yml', import.meta.url)), false);
  const workflow = readFileSync(new URL('../.github/workflows/release-please.yml', import.meta.url), 'utf8');
  assert.match(workflow, /^  publish:/m);
  assert.match(workflow, /id-token: write/);
  assert.match(workflow, /needs\.release-please\.outputs\.release_created == 'true'/);
  assert.match(workflow, /ref: \$\{\{ needs\.release-please\.outputs\.tag_name \}\}/);
  assert.match(workflow, /npm install -g npm@11/);
  assert.doesNotMatch(workflow, /secrets\.NPM_TOKEN/);
});

test('pending scalar-next mappings are validated against production', () => {
  const workflow = readFileSync(new URL('../.github/workflows/contract-tests.yml', import.meta.url), 'utf8');
  assert.match(workflow, /ALLOW_PENDING_SCALAR_MAPPINGS/);
  assert.match(workflow, /push:\n    branches: \[main, scalar-next\]/);
  assert.match(workflow, /github\.base_ref == 'scalar-next'/);
  assert.match(workflow, /node scripts\/refresh-schema\.mjs/);
});

test('schema updates use matching pending mappings and fixtures', () => {
  const workflow = readFileSync(new URL('../.github/workflows/update-openapi.yml', import.meta.url), 'utf8');
  for (const filename of ['openapi/openapi.json', 'scalar.config.json', 'tests/schema-contract.test.mjs']) {
    assert.ok(workflow.includes(`git show origin/scalar-next:${filename} > ${filename}`));
  }
  assert.match(
    workflow,
    /github\.event_name == 'workflow_dispatch' && github\.ref == 'refs\/heads\/scalar-next'/,
  );
  assert.match(
    workflow,
    /apply_mappings:\n        description: [^\n]+\n        type: boolean\n        default: false/,
  );
  assert.match(
    workflow,
    /github\.event_name == 'workflow_dispatch' && inputs\.apply_mappings == true && inputs\.dry_run != true/,
  );
});

test('docs notification uses the published run commit, not npm latest', () => {
  const workflow = readFileSync(new URL('../.github/workflows/notify-docs.yml', import.meta.url), 'utf8');
  assert.match(workflow, /github\.event\.workflow_run\.head_sha/);
  assert.match(workflow, /contents\/package\.json\?ref=\$RELEASE_SHA/);
  assert.match(workflow, /releases\/tags\/v\$VERSION/);
  assert.match(workflow, /\.draft == false and \.prerelease == false/);
  assert.match(workflow, /REQUESTED_VERSION: \$\{\{ inputs\.version \}\}/);
  assert.match(workflow, /select\(\.name == "publish" and \.conclusion == "success"\)/);
  assert.doesNotMatch(workflow, /npm view|dist-tags\.latest|actions\/checkout/);
});

test('browser builds map every generated WebSocket adapter to its browser variant', () => {
  const adapters = [];
  const visit = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory()) visit(path);
      else if (entry.name === 'ws-browser.ts')
        adapters.push(path.slice('src/'.length, -'-browser.ts'.length));
    }
  };
  visit('src');
  assert.ok(adapters.length > 0);
  for (const adapter of adapters) {
    for (const format of ['esm', 'cjs']) {
      assert.equal(
        packageJson.browser?.[`./dist/${format}/${adapter}.js`],
        `./dist/${format}/${adapter}-browser.js`,
        `package.json "browser" must map ${format} ${adapter}.js`,
      );
    }
  }
  assert.equal(packageJson.browser?.ws, false);
  const commonJsManifest = JSON.parse(readFileSync(new URL('../dist/cjs/package.json', import.meta.url)));
  for (const adapter of adapters) {
    assert.equal(commonJsManifest.browser?.[`./${adapter}.js`], `./${adapter}-browser.js`);
  }
});
