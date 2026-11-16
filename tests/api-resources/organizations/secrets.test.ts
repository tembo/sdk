// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource secrets', () => {
  smokeCase(
    'organizations.secrets.list:required',
    { operation: 'list', path: '/v1/organizations/{organizationId}/secrets' },
    'list: only required params',
    async () => {
      const secret = await client.organizations.secrets.list('organizationId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'organizations.secrets.list:all',
    { operation: 'list', path: '/v1/organizations/{organizationId}/secrets' },
    'list: required and optional params',
    async () => {
      const secret = await client.organizations.secrets.list('organizationId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        search: 'search',
      });
    },
  );
  smokeCase(
    'organizations.secrets.create:single',
    { operation: 'create', path: '/v1/organizations/{organizationId}/secrets' },
    'create',
    async () => {
      const secret = await client.organizations.secrets.create('organizationId', {
        key: 'x',
        value: 'x',
      });
    },
  );
  smokeCase(
    'organizations.secrets.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/secrets/{secretId}' },
    'retrieve',
    async () => {
      const secret = await client.organizations.secrets.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.secrets.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}/secrets/{secretId}' },
    'update: only required params',
    async () => {
      const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.secrets.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}/secrets/{secretId}' },
    'update: required and optional params',
    async () => {
      const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
        key: 'x',
        value: 'x',
      });
    },
  );
  smokeCase(
    'organizations.secrets.delete:single',
    { operation: 'delete', path: '/v1/organizations/{organizationId}/secrets/{secretId}' },
    'delete',
    async () => {
      const secret = await client.organizations.secrets.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  );
});
