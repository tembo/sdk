import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { normalizeOpenapiForScalar } from './normalize-openapi.mjs';
import { operationIds, validateCoverage } from './schema-contract.mjs';

export function checkCandidateSchema(schema) {
  assert.ok(schema.openapi?.startsWith('3.') && schema.paths, 'Expected an OpenAPI 3 document');
  const operations = operationIds(schema);
  assert.ok(operations.length > 0, 'Expected public /v1/ operations');
  const identifiers = new Set();
  for (const endpoint of operations) {
    const separator = endpoint.indexOf(' ');
    const method = endpoint.slice(0, separator);
    const path = endpoint.slice(separator + 1);
    const operation = schema.paths[path][method];
    assert.ok(
      typeof operation.operationId === 'string' && operation.operationId.trim(),
      `Missing operationId: ${endpoint}`,
    );
    assert.ok(!identifiers.has(operation.operationId), `Duplicate operationId: ${operation.operationId}`);
    identifiers.add(operation.operationId);
    assert.ok(
      Array.isArray(operation.tags) && operation.tags.some((tag) => typeof tag === 'string' && tag.trim()),
      `Missing SDK resource tags: ${endpoint}`,
    );
  }
  normalizeOpenapiForScalar(schema);
  return operations.length;
}

export function checkSchema(schema, config) {
  const count = checkCandidateSchema(schema);
  validateCoverage(schema, config);
  return count;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const candidate = process.argv[2] === '--candidate';
  const schema = JSON.parse(
    await readFile((candidate ? process.argv[3] : process.argv[2]) ?? 'openapi/openapi.json', 'utf8'),
  );
  if (candidate) {
    console.log(`Validated ${checkCandidateSchema(schema)} candidate operations for automatic SDK mapping.`);
  } else {
    const config = JSON.parse(await readFile(process.argv[3] ?? 'scalar.config.json', 'utf8'));
    console.log(`Validated ${checkSchema(schema, config)} public operations against SDK mappings.`);
  }
}
