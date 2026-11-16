// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource integrations', () => {
  smokeCase(
    'integrations.list:required',
    { operation: 'list', path: '/v1/integrations' },
    'list: only required params',
    async () => {
      const integration = await client.integrations.list({
        limit: 50,
        includeTotal: false,
      });
    },
  );
  smokeCase(
    'integrations.list:all',
    { operation: 'list', path: '/v1/integrations' },
    'list: required and optional params',
    async () => {
      const integration = await client.integrations.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        enabled: true,
        hasEnabledRepositories: true,
        ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        search: 'search',
        type: ['type'],
        createdAfter: '2024-01-01T00:00:00.000Z',
        excludeOrganizationName: 'excludeOrganizationName',
        includeTotal: false,
      });
    },
  );
  smokeCase(
    'integrations.create:single',
    { operation: 'create', path: '/v1/integrations' },
    'create',
    async () => {
      const integration = await client.integrations.create({
        environment: 'x',
        roleArn: 'x',
        type: 'aws',
      });
    },
  );
  smokeCase(
    'integrations.retrieve:single',
    { operation: 'retrieve', path: '/v1/integrations/{integrationId}' },
    'retrieve',
    async () => {
      const integration = await client.integrations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'integrations.update:single',
    { operation: 'update', path: '/v1/integrations/{integrationId}' },
    'update',
    async () => {
      const integration = await client.integrations.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        settings: {},
      });
    },
  );
  smokeCase(
    'integrations.delete:single',
    { operation: 'delete', path: '/v1/integrations/{integrationId}' },
    'delete',
    async () => {
      const integration = await client.integrations.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'integrations.authorize:required',
    { operation: 'authorize', path: '/v1/integrations/{integrationId}/authorize' },
    'authorize: only required params',
    async () => {
      const integration = await client.integrations.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'integrations.authorize:all',
    { operation: 'authorize', path: '/v1/integrations/{integrationId}/authorize' },
    'authorize: required and optional params',
    async () => {
      const integration = await client.integrations.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        returnUrl: 'https://example.com',
        capability: 'confluenceTriggers',
      });
    },
  );
  smokeCase(
    'integrations.test:single',
    { operation: 'test', path: '/v1/integrations/{integrationId}/test' },
    'test',
    async () => {
      const integration = await client.integrations.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'integrations.sync:single',
    { operation: 'sync', path: '/v1/integrations/{integrationId}/sync' },
    'sync',
    async () => {
      const integration = await client.integrations.sync('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        mode: 'queued',
      });
    },
  );
  smokeCase(
    'integrations.syncAll:single',
    { operation: 'syncAll', path: '/v1/integrations/sync' },
    'syncAll',
    async () => {
      const integration = await client.integrations.syncAll({});
    },
  );
  smokeCase(
    'integrations.retrieveSyncStatus:required',
    { operation: 'retrieveSyncStatus', path: '/v1/integrations/sync/status' },
    'retrieveSyncStatus: only required params',
    async () => {
      const integration = await client.integrations.retrieveSyncStatus();
    },
  );
  smokeCase(
    'integrations.retrieveSyncStatus:all',
    { operation: 'retrieveSyncStatus', path: '/v1/integrations/sync/status' },
    'retrieveSyncStatus: required and optional params',
    async () => {
      const integration = await client.integrations.retrieveSyncStatus({
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'integrations.retrieveRateLimit:single',
    { operation: 'retrieveRateLimit', path: '/v1/integrations/{integrationId}/rate-limit' },
    'retrieveRateLimit',
    async () => {
      const integration = await client.integrations.retrieveRateLimit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'integrations.listSentryEnvironments:required',
    { operation: 'listSentryEnvironments', path: '/v1/integrations/{integrationId}/sentry-environments' },
    'listSentryEnvironments: only required params',
    async () => {
      const integration = await client.integrations.listSentryEnvironments(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          limit: 50,
        },
      );
    },
  );
  smokeCase(
    'integrations.listSentryEnvironments:all',
    { operation: 'listSentryEnvironments', path: '/v1/integrations/{integrationId}/sentry-environments' },
    'listSentryEnvironments: required and optional params',
    async () => {
      const integration = await client.integrations.listSentryEnvironments(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          cursor: 'cursor',
          limit: 50,
        },
      );
    },
  );
  smokeCase(
    'integrations.listSlackChannels:required',
    { operation: 'listSlackChannels', path: '/v1/integrations/{integrationId}/slack-channels' },
    'listSlackChannels: only required params',
    async () => {
      const integration = await client.integrations.listSlackChannels(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          limit: 50,
        },
      );
    },
  );
  smokeCase(
    'integrations.listSlackChannels:all',
    { operation: 'listSlackChannels', path: '/v1/integrations/{integrationId}/slack-channels' },
    'listSlackChannels: required and optional params',
    async () => {
      const integration = await client.integrations.listSlackChannels(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          cursor: 'cursor',
          limit: 50,
          search: 'search',
        },
      );
    },
  );
});
