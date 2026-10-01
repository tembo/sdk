import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { contractHash, validateCoverage } from '../scripts/schema-contract.mjs';

const source = {
  openapi: '3.1.0',
  paths: { '/v1/models': { get: { description: 'Models' } }, '/agent': { post: { default: 'timestamp' } } },
  components: { schemas: { Model: { type: 'object' } } },
};
const config = { resources: { models: { methods: { list: 'get /v1/models' } } } };

test('schema comparison ignores key order and non-v1 timestamp churn', () => {
  const next = structuredClone(source);
  next.paths['/agent'].post.default = 'new timestamp';
  assert.equal(contractHash(source), contractHash(next));
  assert.equal(
    contractHash(source),
    contractHash({ components: source.components, paths: source.paths, openapi: source.openapi }),
  );
});

test('schema comparison preserves v1 documentation and component changes', () => {
  for (const change of [
    (next) => {
      next.paths['/v1/models'].get.description = 'New documentation';
    },
    (next) => {
      next.components.schemas.Model.type = 'string';
    },
  ]) {
    const next = structuredClone(source);
    change(next);
    assert.notEqual(contractHash(source), contractHash(next));
  }
});

test('unmapped or removed operations stop generation instead of dropping endpoints', () => {
  validateCoverage(source, config);
  const added = structuredClone(source);
  added.paths['/v1/models'].post = {};
  assert.throws(() => validateCoverage(added, config));
  assert.throws(() => validateCoverage({ paths: {} }, config));
});

test('SDK mappings cover current user settings and session fork operations', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const source = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
  const publicOperations = {
    paths: Object.fromEntries(
      Object.entries(source.paths).filter(
        ([path]) => path.startsWith('/v1/users/') || path === '/v1/sessions/{sessionId}/fork',
      ),
    ),
  };
  validateCoverage(publicOperations, {
    resources: {
      users: sdkConfig.resources.users,
      sessions: {
        methods: sdkConfig.resources.sessions?.methods?.fork
          ? { fork: sdkConfig.resources.sessions.methods.fork }
          : {},
      },
    },
  });
  if (source.paths['/v1/users/{userId}/settings']?.patch) {
    assert.equal(sdkConfig.resources.users.subresources.settings.methods.update.bodyParamName, 'body');
  }
  if (source.paths['/v1/sessions/{sessionId}/fork']?.post) {
    assert.equal(sdkConfig.resources.sessions.methods.fork.bodyParamName, 'body');
  }
});
