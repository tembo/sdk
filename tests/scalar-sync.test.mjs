import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { syncScalarConfig } from '../scripts/sync-scalar-config.mjs';

const source = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const schema = {
  ...source,
  paths: { '/v1/users/me': source.paths['/v1/users/me'], '/auth/context': source.paths['/auth/context'] },
};
const config = { resources: { users: { methods: { me: 'get /v1/users/me' } } } };
const inferred = { resources: { users: { methods: { retrieve_current: 'get /v1/users/me' } } } };
const hostedConfig = {
  name: 'Tembo',
  targets: { typescript: { publish: { npm: true }, repo: 'tembo/sdk' } },
  environments: { production: 'https://api.tembo.io' },
  clientSettings: { retries: 2 },
  resources: { users: { methods: { retrieve: 'get /v1/users/{userId}' } } },
};

function fixture({
  hosted = hostedConfig,
  project = hostedConfig,
  draft,
  generated = inferred,
  patchStatus = 200,
  persist = true,
  authenticationStatus = 200,
  resolutionStatus = 200,
  slug = 'tembo-sdk',
} = {}) {
  let currentDraft = draft;
  const requests = [];
  const fetchImpl = async (url, options) => {
    requests.push({ url, ...options });
    if (url.endsWith('/login/personal-token/access')) {
      return Response.json({ accessToken: 'mock-access-token' }, { status: authenticationStatus });
    }
    assert.equal(options.headers.Authorization, 'Bearer mock-access-token');
    assert.ok(options.signal instanceof AbortSignal);
    if (url.endsWith('/sdk-generator/resolve-config')) {
      return Response.json({ config: JSON.stringify(generated) }, { status: resolutionStatus });
    }
    if (options.method === 'PATCH') {
      if (patchStatus === 200 && persist) currentDraft = JSON.parse(JSON.parse(options.body).config);
      return Response.json(null, { status: patchStatus });
    }
    return Response.json({
      uid: 'RDsZ66VRniKPeX4xQMJV5',
      namespace: 'tembo',
      slug,
      config: JSON.stringify(project),
      currentVersion: '0.4.0',
      versions: [
        { version: '0.4.0', status: 'published', config: JSON.stringify(hosted) },
        ...(currentDraft === undefined
          ? []
          : [{ version: '0.4.1', status: 'draft', config: JSON.stringify(currentDraft) }]),
      ],
    });
  };
  return { requests, fetchImpl };
}

function synchronize(fetchImpl, overrides = {}) {
  return syncScalarConfig({ apiKey: 'mock-personal-token', config, schema, fetchImpl, ...overrides });
}

test('Scalar resolves mappings from the raw schema before configuration or registry publication', async () => {
  const { requests, fetchImpl } = fixture();
  const result = await synchronize(fetchImpl);
  assert.equal(result.changed, true);
  const resolution = JSON.parse(requests.find((request) => request.url.endsWith('/resolve-config')).body);
  assert.equal(resolution.namespace, 'tembo');
  assert.equal(resolution.slug, 'tembo-sdk');
  assert.equal(JSON.parse(resolution.config).resources, undefined);
  const document = JSON.parse(resolution.spec);
  assert.deepEqual(Object.keys(document.paths), ['/v1/users/me']);
  assert.ok(document.components.schemas.TipTapImageContentNode);
  assert.equal(requests.length, 5);
  assert.deepEqual(JSON.parse(requests[0].body), { personalToken: 'mock-personal-token' });
});

test('sync preserves existing method names and hosted publishing settings', async () => {
  const { requests, fetchImpl } = fixture();
  const result = await synchronize(fetchImpl);
  assert.deepEqual(result.config.resources, config.resources);
  const payload = JSON.parse(requests.find((request) => request.method === 'PATCH').body);
  assert.deepEqual(JSON.parse(payload.config), { ...hostedConfig, resources: config.resources });
  assert.equal(payload.baseConfig, JSON.stringify(hostedConfig));
});

test('sync reads the active configuration rather than a stale project initialization', async () => {
  const active = { ...hostedConfig, clientSettings: { retries: 9 } };
  const { requests, fetchImpl } = fixture({ hosted: active, project: { ...hostedConfig, targets: {} } });
  await synchronize(fetchImpl);
  const payload = JSON.parse(requests.find((request) => request.method === 'PATCH').body);
  assert.deepEqual(JSON.parse(payload.config).clientSettings, active.clientSettings);
  assert.deepEqual(JSON.parse(payload.config).targets, active.targets);
  assert.equal(payload.baseConfig, JSON.stringify(active));
});

test('an editable SDK draft takes precedence over the published version', async () => {
  const draft = { ...hostedConfig, clientSettings: { retries: 7 } };
  const { requests, fetchImpl } = fixture({ draft });
  await synchronize(fetchImpl);
  const payload = JSON.parse(requests.find((request) => request.method === 'PATCH').body);
  assert.equal(payload.baseConfig, JSON.stringify(draft));
  assert.deepEqual(JSON.parse(payload.config).clientSettings, draft.clientSettings);
});

test('new and removed endpoints are reconciled without hand-written mappings', async () => {
  const candidate = structuredClone(schema);
  candidate.paths['/v1/widgets'] = { get: { operationId: 'listWidgets', tags: ['Widgets'] } };
  const baseline = structuredClone(config);
  baseline.resources.users.methods.removed = 'patch /v1/users/{userId}';
  const generated = structuredClone(inferred);
  generated.resources.widgets = { methods: { list: 'get /v1/widgets' } };
  const { fetchImpl } = fixture({ generated });
  const result = await synchronize(fetchImpl, { config: baseline, schema: candidate });
  assert.equal(result.config.resources.users.methods.me, 'get /v1/users/me');
  assert.equal(result.config.resources.users.methods.removed, undefined);
  assert.equal(result.config.resources.widgets.methods.list, 'get /v1/widgets');
});

test('sync is idempotent when hosted and repository mappings are current', async () => {
  const { requests, fetchImpl } = fixture({ hosted: { ...hostedConfig, resources: config.resources } });
  assert.equal((await synchronize(fetchImpl)).changed, false);
  assert.equal(
    requests.some((request) => request.method === 'PATCH'),
    false,
  );
  assert.equal(requests.length, 3);
});

test('a partially completed sync still persists reconciled mappings to the repository on retry', async () => {
  const stale = structuredClone(config);
  stale.resources.users.methods.removed = 'patch /v1/users/{userId}';
  const { requests, fetchImpl } = fixture({ hosted: { ...hostedConfig, resources: config.resources } });
  const result = await synchronize(fetchImpl, { config: stale });
  assert.equal(result.changed, true);
  assert.equal(result.config.resources.users.methods.removed, undefined);
  assert.equal(
    requests.some((request) => request.method === 'PATCH'),
    false,
  );
});

test('missing credentials, configuration, or naming metadata are rejected before making requests', async () => {
  const { requests, fetchImpl } = fixture();
  await assert.rejects(synchronize(fetchImpl, { apiKey: undefined }), /SCALAR_API_KEY is required/);
  await assert.rejects(synchronize(fetchImpl, { config: undefined }), /SDK configuration is required/);
  const invalid = structuredClone(schema);
  delete invalid.paths['/v1/users/me'].get.operationId;
  await assert.rejects(synchronize(fetchImpl, { schema: invalid }), /Missing operationId/);
  assert.equal(requests.length, 0);
});

test('sync rejects a different SDK or missing hosted configuration without writing to it', async () => {
  for (const options of [{ slug: 'another-sdk' }, { hosted: null }]) {
    const { requests, fetchImpl } = fixture(options);
    await assert.rejects(
      synchronize(fetchImpl),
      /Unexpected Scalar SDK slug|Invalid Scalar project configuration/,
    );
    assert.equal(
      requests.some((request) => request.method === 'PATCH'),
      false,
    );
  }
});

test('authentication, resolver and concurrent configuration errors fail closed without exposing tokens', async () => {
  for (const options of [{ authenticationStatus: 401 }, { resolutionStatus: 503 }, { patchStatus: 409 }]) {
    const { fetchImpl } = fixture(options);
    await assert.rejects(synchronize(fetchImpl), (error) => {
      assert.match(error.message, /HTTP (401|409|503)/);
      assert.doesNotMatch(error.message, /mock-personal-token|mock-access-token/);
      return true;
    });
  }
});

test('incomplete generated mappings fail coverage before any hosted SDK mutation', async () => {
  const candidate = structuredClone(schema);
  candidate.paths['/v1/widgets'] = { get: { operationId: 'listWidgets', tags: ['Widgets'] } };
  const { requests, fetchImpl } = fixture();
  await assert.rejects(synchronize(fetchImpl, { schema: candidate }), /Review Scalar resource mappings/);
  assert.equal(
    requests.some((request) => request.method === 'PATCH'),
    false,
  );
});

test('sync verifies that Scalar persisted the complete reconciled mappings', async () => {
  const { fetchImpl } = fixture({ persist: false });
  await assert.rejects(synchronize(fetchImpl), /did not persist/);
});

test('workflow reconciles before registry publication, persists both snapshots and avoids rebuild loops', () => {
  const workflow = readFileSync(new URL('../.github/workflows/update-openapi.yml', import.meta.url), 'utf8');
  assert.ok(
    workflow.indexOf('Infer new mappings and sync Scalar configuration') <
      workflow.indexOf('Publish schema to Scalar Registry'),
  );
  assert.match(workflow, /branches: \[scalar-next\]/);
  assert.match(workflow, /paths: \[scalar\.config\.json\]/);
  assert.match(workflow, /steps\.scalar\.outputs\.changed == 'true'/);
  assert.match(workflow, /if: inputs\.dry_run != true\n        id: scalar/);
  assert.match(workflow, /github\.event\.client_payload\.sdk_sha/);
  assert.match(workflow, /git merge-base --is-ancestor "\$SDK_CONFIG_SHA" origin\/scalar-next/);
  assert.match(workflow, /git merge-file --stdout/);
  assert.match(workflow, /git add openapi\/openapi\.json scalar\.config\.json/);
  assert.match(workflow, /FORCE_SCHEMA_UPLOAD: \$\{\{ inputs\.force \|\| false \}\}/);
  assert.doesNotMatch(workflow, /FORCE_SCHEMA_UPLOAD:.*github\.event_name == 'push'/);
});
