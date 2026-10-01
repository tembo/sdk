import assert from 'node:assert/strict';
import { appendFile, readFile, writeFile } from 'node:fs/promises';
import { contractHash, validateCoverage } from './schema-contract.mjs';
import { normalizeOpenapiForScalar } from './normalize-openapi.mjs';

const file = new URL('../openapi/openapi.json', import.meta.url);
const previous = JSON.parse(await readFile(file, 'utf8'));
const config = JSON.parse(await readFile(new URL('../scalar.config.json', import.meta.url), 'utf8'));
const response = await fetch('https://api.tembo.io/public-api/openapi/public', {
  signal: AbortSignal.timeout(30000),
});
assert.ok(response.ok, `Production schema download failed: HTTP ${response.status}`);
const schema = await response.json();
assert.ok(schema.openapi?.startsWith('3.') && schema.paths, 'Expected OpenAPI 3');
validateCoverage(schema, config);
normalizeOpenapiForScalar(schema);
const changed = process.env.FORCE_SCHEMA_UPLOAD === 'true' || contractHash(previous) !== contractHash(schema);
if (changed) await writeFile(file, `${JSON.stringify(schema, null, 2)}\n`);
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
console.log(
  changed ? 'Validated changed production schema.' : 'Public contract unchanged; skipping generation.',
);
