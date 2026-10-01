import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { checkCandidateSchema, checkSchema } from '../scripts/check-schema.mjs';

const source = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const config = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));

test('candidate schema checks cover every public operation without modifying the source', () => {
  const original = structuredClone(source);
  assert.ok(checkSchema(source, config) > 0);
  assert.deepEqual(source, original);
});

test('candidate schema checks reject added, removed, or duplicate operation mappings', () => {
  const added = structuredClone(source);
  added.paths['/v1/new-resource'] = { get: { operationId: 'listNewResource', tags: ['New Resource'] } };
  assert.throws(() => checkSchema(added, config), /Review Scalar resource mappings/);
  const removed = structuredClone(source);
  delete removed.paths['/v1/users/me'];
  assert.throws(() => checkSchema(removed, config), /Review Scalar resource mappings/);
  const duplicate = structuredClone(config);
  duplicate.resources.users.methods.current = 'get /v1/users/me';
  assert.throws(() => checkSchema(source, duplicate), /Review Scalar resource mappings/);
});

test('new endpoints with naming metadata pass the candidate check before mappings exist', () => {
  const added = structuredClone(source);
  added.paths['/v1/new-resource'] = { get: { operationId: 'listNewResource', tags: ['New Resource'] } };
  assert.equal(checkCandidateSchema(added), checkCandidateSchema(source) + 1);
  assert.throws(() => checkSchema(added, config), /Review Scalar resource mappings/);
});

test('candidate checks reject missing or duplicate operation IDs and missing resource tags', () => {
  for (const mutate of [
    (schema) => {
      delete schema.paths['/v1/users/me'].get.operationId;
    },
    (schema) => {
      schema.paths['/v1/users/me'].get.operationId = schema.paths['/v1/models'].get.operationId;
    },
    (schema) => {
      delete schema.paths['/v1/users/me'].get.tags;
    },
  ]) {
    const candidate = structuredClone(source);
    mutate(candidate);
    assert.throws(() => checkCandidateSchema(candidate), /operationId|resource tags/);
  }
});

test('candidate schema checks reject empty schemas and changed normalization assumptions', () => {
  assert.throws(() => checkSchema({ openapi: '2.0', paths: {} }, config), /Expected an OpenAPI 3/);
  assert.throws(() => checkSchema({ openapi: '3.1.0', paths: {} }, config), /Expected public \/v1\//);
  const changed = structuredClone(source);
  changed.components.schemas.TipTapNode.anyOf[0].oneOf[0].required = [];
  assert.throws(() => checkSchema(changed, config));
});
