import assert from 'node:assert/strict';
import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { checkCandidateSchema, checkSchema } from './check-schema.mjs';
import { normalizeOpenapiForScalar } from './normalize-openapi.mjs';
import { reconcileResources } from './reconcile-resources.mjs';

const apiOrigin = 'https://api.scalar.com';
const sdkUid = 'RDsZ66VRniKPeX4xQMJV5';

export async function syncScalarConfig({ apiKey, config, schema, fetchImpl = fetch }) {
  assert.ok(apiKey, 'SCALAR_API_KEY is required');
  assert.ok(config && typeof config === 'object', 'SDK configuration is required');
  checkCandidateSchema(schema);

  async function request(path, options) {
    const response = await fetchImpl(`${apiOrigin}${path}`, {
      ...options,
      signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) throw new Error(`Scalar ${options.method ?? 'GET'} ${path}: HTTP ${response.status}`);
    return response;
  }

  const authentication = await request('/core/login/personal-token/access', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ personalToken: apiKey }),
  });
  const { accessToken } = await authentication.json();
  assert.ok(typeof accessToken === 'string' && accessToken, 'Scalar authentication returned no access token');
  const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

  async function readConfig() {
    const response = await request(`/core/v1/sdks/${sdkUid}`, { headers });
    const sdk = await response.json();
    assert.equal(sdk.uid, sdkUid, 'Unexpected Scalar SDK');
    assert.equal(sdk.namespace, 'tembo', 'Unexpected Scalar namespace');
    assert.equal(sdk.slug, 'tembo-sdk', 'Unexpected Scalar SDK slug');
    const drafts = (sdk.versions ?? []).filter((version) => version.status === 'draft');
    assert.ok(drafts.length <= 1, 'Scalar returned multiple editable SDK drafts');
    const version = drafts[0] ?? sdk.versions?.find((version) => version.version === sdk.currentVersion);
    const source = version?.config ?? sdk.config;
    assert.ok(typeof source === 'string' && source, 'Scalar returned no project configuration');
    const config = JSON.parse(source);
    assert.ok(
      config && typeof config === 'object' && !Array.isArray(config),
      'Invalid Scalar project configuration',
    );
    return { config, source };
  }

  const hosted = await readConfig();
  const base = structuredClone(hosted.config);
  delete base.resources;
  const prepared = normalizeOpenapiForScalar(schema);
  prepared.paths = Object.fromEntries(
    Object.entries(prepared.paths).filter(([path]) => path.startsWith('/v1/')),
  );
  const resolution = await request('/sdk-generator/resolve-config', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      spec: JSON.stringify(prepared),
      config: JSON.stringify(base),
      namespace: 'tembo',
      slug: 'tembo-sdk',
    }),
  });
  const { config: inferredSource } = await resolution.json();
  assert.ok(
    typeof inferredSource === 'string' && inferredSource,
    'Scalar returned no inferred configuration',
  );
  const reconciled = reconcileResources(prepared, config, JSON.parse(inferredSource));
  checkSchema(schema, reconciled);
  const localChanged = !isDeepStrictEqual(config.resources, reconciled.resources);
  if (isDeepStrictEqual(hosted.config.resources, reconciled.resources))
    return { changed: localChanged, config: reconciled };

  await request(`/core/v1/sdks/${sdkUid}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      config: JSON.stringify({ ...hosted.config, resources: reconciled.resources }),
      baseConfig: hosted.source,
    }),
  });
  assert.deepEqual(
    (await readConfig()).config.resources,
    reconciled.resources,
    'Scalar resource mappings did not persist',
  );
  return { changed: true, config: reconciled };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const config = JSON.parse(await readFile(new URL('../scalar.config.json', import.meta.url), 'utf8'));
  const schema = JSON.parse(await readFile(new URL('../openapi/openapi.json', import.meta.url), 'utf8'));
  const { changed, config: reconciled } = await syncScalarConfig({
    apiKey: process.env.SCALAR_API_KEY,
    config,
    schema,
  });
  await writeFile(
    new URL('../scalar.config.json', import.meta.url),
    `${JSON.stringify(reconciled, null, 2)}\n`,
  );
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
  console.log(
    changed
      ? 'Reconciled and synced Scalar resource mappings; existing names and unrelated settings preserved.'
      : 'Scalar resource mappings are already current.',
  );
}
