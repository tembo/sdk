import assert from 'node:assert/strict';
import test from 'node:test';
import { reconcileResources } from '../scripts/reconcile-resources.mjs';

const schema = {
  openapi: '3.1.0',
  paths: {
    '/v1/users/me': { get: {} },
    '/v1/users/{userId}/settings': { patch: {} },
    '/v1/widgets': { get: {} },
  },
  components: { schemas: { Settings: {}, Widget: {}, 'A/B~C': {} } },
};
const settings = {
  kind: 'http',
  endpoint: 'PATCH /v1/users/{userId}/settings',
  verb: 'patch',
  path: '/v1/users/{userId}/settings',
  bodyParamName: 'preferences',
};
const config = {
  targets: { typescript: { publish: { npm: true } } },
  resources: {
    users: {
      methods: { me: 'GET /v1/users/me', removed: 'patch /v1/users/{userId}' },
      models: { Preferences: '#/components/schemas/Settings', stale: '#/components/schemas/Removed' },
      subresources: { preferences: { methods: { save: settings } } },
    },
    obsolete: { subresources: { files: { methods: { list: 'get /v1/files' } } } },
  },
};
const inferred = {
  resources: {
    users: {
      methods: { retrieve_current: 'get /v1/users/me' },
      subresources: { settings: { methods: { update: 'patch /v1/users/{userId}/settings' } } },
    },
    widgets: {
      methods: { fetch_everything: 'get /v1/widgets' },
      models: { widget: '#/components/schemas/Widget' },
    },
    authentication: { methods: { context: 'get /auth/context' } },
  },
};

test('new methods use Scalar-generated names while existing names, nesting and body bindings remain unchanged', () => {
  const result = reconcileResources(schema, config, inferred);
  assert.equal(result.resources.users.methods.me, config.resources.users.methods.me);
  assert.deepEqual(result.resources.users.subresources.preferences.methods.save, settings);
  assert.equal(result.resources.users.methods.retrieve_current, undefined);
  assert.equal(result.resources.users.subresources.settings, undefined);
  assert.equal(result.resources.widgets.methods.fetch_everything, 'get /v1/widgets');
  assert.deepEqual(result.targets, config.targets);
});

test('removed operations and dangling model aliases are removed automatically', () => {
  const result = reconcileResources(schema, config, inferred);
  assert.equal(result.resources.users.methods.removed, undefined);
  assert.equal(result.resources.obsolete, undefined);
  assert.equal(result.resources.users.models.stale, undefined);
  assert.equal(result.resources.users.models.Preferences, '#/components/schemas/Settings');
  assert.equal(result.resources.widgets.models.widget, '#/components/schemas/Widget');
});

test('non-v1 operations never become SDK methods', () => {
  assert.equal(reconcileResources(schema, config, inferred).resources.authentication, undefined);
});

test('reconciliation is idempotent and does not mutate schema or configuration inputs', () => {
  const originals = structuredClone({ schema, config, inferred });
  const result = reconcileResources(schema, config, inferred);
  assert.deepEqual(reconcileResources(schema, result, inferred), result);
  assert.deepEqual({ schema, config, inferred }, originals);
});

test('Scalar omissions are blocked rather than silently dropping a new operation', () => {
  const missing = structuredClone(inferred);
  delete missing.resources.widgets;
  assert.throws(() => reconcileResources(schema, config, missing), /Review Scalar resource mappings/);
});

test('a new inferred method cannot overwrite an existing published SDK name', () => {
  const collision = structuredClone(inferred);
  delete collision.resources.widgets;
  collision.resources.users.methods.me = 'get /v1/widgets';
  assert.throws(() => reconcileResources(schema, config, collision), /SDK name collision: users.me/);
});

test('a new inferred subresource cannot collide with a retained method', () => {
  const collision = structuredClone(inferred);
  delete collision.resources.widgets;
  collision.resources.users.subresources.me = { methods: { list: 'get /v1/widgets' } };
  assert.throws(() => reconcileResources(schema, config, collision), /SDK name collision: users.me/);
});

test('a new inferred method cannot collide with a retained subresource', () => {
  const collision = structuredClone(inferred);
  delete collision.resources.widgets;
  collision.resources.users.methods.preferences = 'get /v1/widgets';
  assert.throws(() => reconcileResources(schema, config, collision), /SDK name collision: users.preferences/);
});

test('a deleted subresource does not block reuse of its name by a new method', () => {
  const baseline = structuredClone(config);
  baseline.resources.users.subresources.widgets = { methods: { list: 'get /v1/obsolete' } };
  const generated = structuredClone(inferred);
  delete generated.resources.widgets;
  generated.resources.users.methods.widgets = 'get /v1/widgets';
  const result = reconcileResources(schema, baseline, generated);
  assert.equal(result.resources.users.methods.widgets, 'get /v1/widgets');
  assert.equal(result.resources.users.subresources.widgets, undefined);
});

test('a deleted method does not block reuse of its name by a new subresource', () => {
  const baseline = structuredClone(config);
  baseline.resources.users.methods.widgets = 'get /v1/obsolete';
  const generated = structuredClone(inferred);
  delete generated.resources.widgets;
  generated.resources.users.subresources.widgets = { methods: { list: 'get /v1/widgets' } };
  const result = reconcileResources(schema, baseline, generated);
  assert.equal(result.resources.users.methods.widgets, undefined);
  assert.equal(result.resources.users.subresources.widgets.methods.list, 'get /v1/widgets');
});

test('duplicate existing or inferred mappings are rejected', () => {
  const duplicateConfig = structuredClone(config);
  duplicateConfig.resources.users.methods.current = 'get /v1/users/me';
  assert.throws(
    () => reconcileResources(schema, duplicateConfig, inferred),
    /Duplicate existing SDK mapping/,
  );
  const duplicateInference = structuredClone(inferred);
  duplicateInference.resources.widgets.methods.list = 'get /v1/widgets';
  assert.throws(
    () => reconcileResources(schema, config, duplicateInference),
    /Duplicate Scalar-inferred mapping/,
  );
});

test('escaped model pointers are preserved and existing model aliases win over inferred defaults', () => {
  const mapped = structuredClone(config);
  mapped.resources.users.models.complex = '#/components/schemas/A~1B~0C';
  const generated = structuredClone(inferred);
  generated.resources.users.models = { Preferences: '#/components/schemas/Widget' };
  const result = reconcileResources(schema, mapped, generated);
  assert.equal(result.resources.users.models.complex, '#/components/schemas/A~1B~0C');
  assert.equal(result.resources.users.models.Preferences, '#/components/schemas/Settings');
});

test('named model references are preserved and inferred aliases added while missing names are removed', () => {
  const baseline = structuredClone(config);
  baseline.resources.users.models.NamedPreferences = 'Settings';
  baseline.resources.users.models.staleName = 'Missing';
  baseline.resources.users.models.inherited = 'constructor';
  const generated = structuredClone(inferred);
  generated.resources.users.models = { NamedPreferences: 'Widget' };
  generated.resources.widgets.models = { widget: 'Widget', staleName: 'Missing', inherited: 'toString' };
  const result = reconcileResources(schema, baseline, generated);
  assert.equal(result.resources.users.models.NamedPreferences, 'Settings');
  assert.equal(result.resources.users.models.Preferences, '#/components/schemas/Settings');
  assert.equal(result.resources.users.models.staleName, undefined);
  assert.equal(result.resources.users.models.inherited, undefined);
  assert.deepEqual(result.resources.widgets.models, { widget: 'Widget' });
});

test('resource and method keys from config cannot mutate object prototypes', () => {
  const generated = JSON.parse('{"resources":{"__proto__":{"methods":{"constructor":"get /v1/widgets"}}}}');
  const result = reconcileResources(
    { ...schema, paths: { '/v1/widgets': { get: {} } } },
    { resources: {} },
    generated,
  );
  assert.ok(Object.hasOwn(result.resources, '__proto__'));
  assert.equal(result.resources.__proto__.methods.constructor, 'get /v1/widgets');
  assert.equal(Object.prototype.methods, undefined);
});
