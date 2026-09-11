import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import Tembo, { AuthenticationError, BadRequestError } from '../dist/esm/index.js';

const require = createRequire(import.meta.url);
const schema = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const manifest = JSON.parse(readFileSync(new URL('../scalar-sdk.manifest.json', import.meta.url)));
const config = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const document = { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }] };

function mockClient(response = { data: [], nextCursor: null }, status = 200, options = {}) {
  const requests = [];
  const client = new Tembo({
    baseURL: config.environments.development,
    apiKey: 'test-key',
    maxRetries: 0,
    ...options,
    fetch: async (input, init) => {
      const request = new Request(input, init);
      requests.push({ url: request.url, method: request.method, headers: request.headers, body: await request.text() });
      return Response.json(response, { status });
    },
  });
  return { client, requests };
}

test('manifest and configured methods cover exactly the public v1 operations', () => {
  const methods = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace']);
  const expected = Object.entries(schema.paths).flatMap(([path, item]) =>
    path.startsWith('/v1/') ? Object.keys(item).filter(method => methods.has(method)).map(method => `${method.toUpperCase()} ${path}`) : [],
  ).sort();
  assert.ok(expected.length > 0);
  assert.deepEqual(manifest.operations.map(operation => `${operation.method} ${operation.path}`).sort(), expected);
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
  assert.deepEqual(endpoints.sort(), expected);
  const { client } = mockClient();
  for (const operation of manifest.operations) {
    const resource = operation.publicResource.split('.').reduce((value, key) => value[key], client);
    assert.equal(typeof resource[operation.publicOperation], 'function', `${operation.publicResource}.${operation.publicOperation}`);
  }
});

test('ESM and CommonJS entry points load and agree on the package version', async () => {
  assert.equal(typeof Tembo, 'function');
  assert.equal(typeof require('../dist/cjs/index.js').Tembo, 'function');
  const { VERSION } = await import('../dist/esm/version.js');
  assert.equal(VERSION, packageJson.version);
});

test('dev URL, bearer authentication and pagination query are serialized', async () => {
  const { client, requests } = mockClient();
  await client.models.list({ limit: '2' });
  assert.equal(requests[0].url, `${config.environments.development}/v1/models?limit=2`);
  assert.equal(requests[0].headers.get('authorization'), 'Bearer test-key');
  assert.equal(requests[0].method, 'GET');
});

test('agent instructions and message richContent remain objects on the wire', async () => {
  const { client, requests } = mockClient();
  await client.agents.create({ instructions: document });
  await client.messages.create({ sessionId: 'test-session', content: 'Hello', richContent: document });
  assert.deepEqual(JSON.parse(requests[0].body), { instructions: document });
  assert.deepEqual(JSON.parse(requests[1].body), { sessionId: 'test-session', content: 'Hello', richContent: document });
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
  for (const [status, ErrorType] of [[401, AuthenticationError], [400, BadRequestError]]) {
    const { client, requests } = mockClient({ error: 'Test failure' }, status);
    await assert.rejects(() => client.models.list(), error => error instanceof ErrorType && error.status === status);
    assert.equal(requests.length, 1);
  }
});

test('publishing stays disabled during migration', () => {
  assert.equal(packageJson.private, true);
  assert.deepEqual(Object.keys(config.targets), ['typescript']);
  assert.equal(config.targets.typescript.destinations, undefined);
  assert.equal(config.targets.typescript.publish, undefined);
});
