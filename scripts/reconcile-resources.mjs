import assert from 'node:assert/strict';
import { operationIds, validateCoverage } from './schema-contract.mjs';

export function* resourceEntries(resources, parent = []) {
  for (const [name, resource] of Object.entries(resources ?? {})) {
    const path = [...parent, name];
    yield { path, resource };
    yield* resourceEntries(resource.subresources, path);
  }
}

function endpointOf(method) {
  const endpoint = typeof method === 'string' ? method : method?.endpoint;
  assert.ok(typeof endpoint === 'string', 'Expected an HTTP resource mapping');
  return endpoint.replace(/^\S+/, (verb) => verb.toLowerCase());
}

function setOwn(object, name, value) {
  Object.defineProperty(object, name, { value, enumerable: true, writable: true, configurable: true });
}

function ensureResource(resources, path) {
  let container = resources;
  let resource;
  for (const [index, name] of path.entries()) {
    if (!Object.hasOwn(container, name)) setOwn(container, name, {});
    resource = container[name];
    if (index < path.length - 1) {
      resource.subresources ??= {};
      container = resource.subresources;
    }
  }
  return resource;
}

function referenceExists(schema, reference) {
  assert.ok(typeof reference === 'string' && reference.startsWith('#/'), 'Expected a local model reference');
  return (
    reference
      .slice(2)
      .split('/')
      .reduce((value, part) => {
        const name = part.replace(/~1/g, '/').replace(/~0/g, '~');
        return value && Object.hasOwn(value, name) ? value[name] : undefined;
      }, schema) !== undefined
  );
}

function pruneEmptyResources(resources) {
  for (const [name, resource] of Object.entries(resources)) {
    if (resource.subresources) pruneEmptyResources(resource.subresources);
    for (const field of ['methods', 'models', 'subresources']) {
      if (resource[field] && Object.keys(resource[field]).length === 0) delete resource[field];
    }
    if (!resource.methods && !resource.models && !resource.subresources) delete resources[name];
  }
}

export function reconcileResources(schema, config, inferredConfig) {
  const result = structuredClone(config);
  result.resources ??= {};
  const operations = new Set(operationIds(schema));
  const retained = new Set();
  for (const { resource } of resourceEntries(result.resources)) {
    for (const [name, method] of Object.entries(resource.methods ?? {})) {
      const endpoint = endpointOf(method);
      if (!operations.has(endpoint)) {
        delete resource.methods[name];
      } else {
        assert.ok(!retained.has(endpoint), `Duplicate existing SDK mapping: ${endpoint}`);
        retained.add(endpoint);
      }
    }
    for (const [name, reference] of Object.entries(resource.models ?? {})) {
      if (!referenceExists(schema, reference)) delete resource.models[name];
    }
  }

  assert.ok(
    inferredConfig.resources && typeof inferredConfig.resources === 'object',
    'Scalar returned no resources',
  );
  const inferredOperations = new Set();
  for (const { path, resource } of resourceEntries(inferredConfig.resources)) {
    for (const [name, method] of Object.entries(resource.methods ?? {})) {
      const endpoint = endpointOf(method);
      if (!operations.has(endpoint)) continue;
      assert.ok(!inferredOperations.has(endpoint), `Duplicate Scalar-inferred mapping: ${endpoint}`);
      inferredOperations.add(endpoint);
      if (retained.has(endpoint)) continue;
      const target = ensureResource(result.resources, path);
      target.methods ??= {};
      assert.ok(
        !Object.hasOwn(target.methods, name),
        `SDK name collision: ${[...path, name].join('.')}. Review the API operationId or x-scalar-method.`,
      );
      setOwn(target.methods, name, structuredClone(method));
      retained.add(endpoint);
    }
    const target = path.reduce((container, name, index) => {
      if (!container || !Object.hasOwn(container, name)) return undefined;
      return index === path.length - 1 ? container[name] : container[name].subresources;
    }, result.resources);
    if (!target) continue;
    for (const [name, reference] of Object.entries(resource.models ?? {})) {
      if (!referenceExists(schema, reference)) continue;
      target.models ??= {};
      if (!Object.hasOwn(target.models, name)) setOwn(target.models, name, reference);
    }
  }
  pruneEmptyResources(result.resources);
  validateCoverage(schema, result);
  return result;
}
