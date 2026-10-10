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

test('SDK mappings cover current manually reviewed operations', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const publicOperations = {
    paths: {
      '/v1/users/me': { get: {} },
      '/v1/users/{userId}': { get: {}, delete: {} },
      '/v1/users/{userId}/settings': { get: {}, patch: {} },
      '/v1/users/{userId}/connected-accounts': { get: {} },
      '/v1/users/{userId}/connected-accounts/{connectedAccountId}': { get: {} },
      '/v1/users/{userId}/subscriptions/chatgpt': { get: {} },
      '/v1/users/{userId}/subscriptions/chatgpt/usage': { get: {} },
      '/v1/users/{userId}/subscriptions/chatgpt/usage/reset': { post: {} },
      '/v1/users/{userId}/subscriptions/claude': { get: {} },
      '/v1/users/{userId}/subscriptions/claude/usage': { get: {} },
      '/v1/users/{userId}/subscriptions/supergrok': { get: {} },
      '/v1/users/{userId}/profile-picture': { get: {}, put: {}, delete: {} },
      '/v1/sessions/{sessionId}/fork': { post: {} },
      '/v1/runtimes': { get: {} },
    },
  };
  validateCoverage(publicOperations, {
    resources: {
      users: sdkConfig.resources.users,
      sessions: { methods: { fork: sdkConfig.resources.sessions.methods.fork } },
      runtimes: sdkConfig.resources.runtimes,
    },
  });
  assert.equal(sdkConfig.resources.users.subresources.settings.methods.update.bodyParamName, 'body');
  assert.equal(sdkConfig.resources.sessions.methods.fork.bodyParamName, 'body');
});

test('subscription mappings cover user and organization reads and preserve reset request bodies', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  for (const { resourceName, identifier } of [
    { resourceName: 'organizations', identifier: 'organizationId' },
    { resourceName: 'users', identifier: 'userId' },
  ]) {
    const subscriptions = sdkConfig.resources[resourceName].subresources.subscriptions;
    const prefix = `/v1/${resourceName}/{${identifier}}/subscriptions`;
    validateCoverage(
      {
        paths: {
          [`${prefix}/chatgpt`]: { get: {} },
          [`${prefix}/chatgpt/usage`]: { get: {} },
          [`${prefix}/chatgpt/usage/reset`]: { post: {} },
          [`${prefix}/claude`]: { get: {} },
          [`${prefix}/claude/usage`]: { get: {} },
          [`${prefix}/supergrok`]: { get: {} },
        },
      },
      { resources: { subscriptions } },
    );
    assert.equal(subscriptions.subresources.chatgpt.methods.reset_usage.bodyParamName, 'body');
    assert.equal(subscriptions.subresources.chatgpt.methods.reset_usage.kind, 'http');
    assert.equal(subscriptions.subresources.chatgpt.methods.reset_usage.verb, 'post');
    assert.equal(
      subscriptions.subresources.chatgpt.methods.reset_usage.path,
      `${prefix}/chatgpt/usage/reset`,
    );
  }
});

test('agent content revision mappings cover reads and preserve the restore request body', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const contentRevisions = sdkConfig.resources.agents.subresources.content_revisions;
  assert.ok(contentRevisions);
  const prefix = '/v1/agents/{agentId}/content-revisions';
  validateCoverage(
    {
      paths: {
        [prefix]: { get: {} },
        [`${prefix}/{version}`]: { get: {} },
        [`${prefix}/{version}/restore`]: { post: {} },
      },
    },
    { resources: { contentRevisions } },
  );
  assert.equal(contentRevisions.methods.restore.kind, 'http');
  assert.equal(contentRevisions.methods.restore.verb, 'post');
  assert.equal(contentRevisions.methods.restore.path, `${prefix}/{version}/restore`);
  assert.equal(contentRevisions.methods.restore.bodyParamName, 'body');
});

test('skills marketplace mappings cover catalog reads separately from organization skills', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const marketplace = sdkConfig.resources.skills.subresources?.marketplace;
  assert.ok(marketplace);
  validateCoverage(
    {
      paths: {
        '/v1/skills/marketplace': { get: {} },
        '/v1/skills/marketplace/{skillId}': { get: {} },
      },
    },
    { resources: { marketplace } },
  );
  assert.equal(sdkConfig.resources.skills.methods.retrieve, 'get /v1/skills/{skillId}');
});

test('integration mappings cover management routes and preserve request bodies', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const integrations = sdkConfig.resources.integrations;
  const prefix = '/v1/integrations/{integrationId}';
  validateCoverage(
    {
      paths: {
        '/v1/integrations': { get: {}, post: {} },
        '/v1/integrations/sync': { post: {} },
        '/v1/integrations/sync/status': { get: {} },
        '/v1/integrations/providers': { get: {} },
        '/v1/integrations/providers/snyk/organizations': { post: {} },
        '/v1/integrations/triggers': { get: {} },
        [prefix]: { get: {}, patch: {}, delete: {} },
        [`${prefix}/authorize`]: { post: {} },
        [`${prefix}/test`]: { post: {} },
        [`${prefix}/sync`]: { post: {} },
        [`${prefix}/rate-limit`]: { get: {} },
        [`${prefix}/sentry-environments`]: { get: {} },
        [`${prefix}/slack-channels`]: { get: {} },
      },
    },
    { resources: { integrations } },
  );
  for (const method of [
    integrations.methods.create,
    integrations.methods.update,
    integrations.methods.sync,
    integrations.methods.sync_all,
    integrations.subresources.providers.methods.discover_snyk_organizations,
  ]) {
    assert.equal(method.kind, 'http');
    assert.equal(method.bodyParamName, 'body');
  }
});

test('live message mappings use a WebSocket handshake and repository updates preserve request bodies', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const live = sdkConfig.resources.messages.subresources.live;
  const repositories = sdkConfig.resources.repositories;
  validateCoverage(
    {
      paths: {
        '/v1/messages/live': { get: {}, post: {} },
        '/v1/repositories': { get: {} },
        '/v1/repositories/{repositoryId}': { get: {}, patch: {} },
      },
    },
    { resources: { live, repositories } },
  );
  assert.equal(live.methods.authorize.bodyParamName, 'body');
  assert.equal(live.methods.connect.kind, 'websocket');
  assert.equal(live.methods.connect.verb, 'get');
  assert.equal(repositories.methods.update.verb, 'patch');
  assert.equal(repositories.methods.update.bodyParamName, 'body');
});

test('session live and profile picture mappings use a WebSocket handshake and preserve request bodies', () => {
  const sdkConfig = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));
  const live = sdkConfig.resources.sessions.subresources.live;
  const profilePicture = sdkConfig.resources.users.subresources.profile_picture;
  validateCoverage(
    {
      paths: {
        '/v1/sessions/live': { get: {}, post: {} },
        '/v1/users/{userId}/profile-picture': { get: {}, put: {}, delete: {} },
      },
    },
    { resources: { live, profilePicture } },
  );
  assert.equal(live.methods.authorize.bodyParamName, 'body');
  assert.equal(live.methods.connect.kind, 'websocket');
  assert.equal(profilePicture.methods.update.verb, 'put');
  assert.equal(profilePicture.methods.update.bodyParamName, 'body');
});
