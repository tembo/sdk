import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const methods = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace']);

export function operationIds(schema) {
  return Object.entries(schema.paths)
    .filter(([path]) => path.startsWith('/v1/'))
    .flatMap(([path, item]) =>
      Object.keys(item)
        .filter((method) => methods.has(method))
        .map((method) => `${method} ${path}`),
    )
    .sort();
}

export function validateCoverage(schema, config) {
  const configured = [];
  function visit(resources) {
    for (const resource of Object.values(resources ?? {})) {
      for (const method of Object.values(resource.methods ?? {})) {
        const endpoint = typeof method === 'string' ? method : method.endpoint;
        configured.push(endpoint.replace(/^\S+/, (verb) => verb.toLowerCase()));
      }
      visit(resource.subresources);
    }
  }
  visit(config.resources);
  assert.deepEqual(
    configured.sort(),
    operationIds(schema),
    'Review Scalar resource mappings: public API operations changed',
  );
}

export function contractHash(schema) {
  const contract = {
    ...schema,
    paths: Object.fromEntries(Object.entries(schema.paths).filter(([path]) => path.startsWith('/v1/'))),
  };
  function canonical(value) {
    if (Array.isArray(value)) return value.map(canonical);
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.keys(value)
          .sort()
          .map((key) => [key, canonical(value[key])]),
      );
    }
    return value;
  }
  return createHash('sha256')
    .update(JSON.stringify(canonical(contract)))
    .digest('hex');
}
