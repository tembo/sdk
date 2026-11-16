// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource apiKeys', () => {
  smokeCase(
    'apiKeys.list:required',
    { operation: 'list', path: '/v1/api-keys' },
    'list: only required params',
    async () => {
      const apiKey = await client.apiKeys.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'apiKeys.list:all',
    { operation: 'list', path: '/v1/api-keys' },
    'list: required and optional params',
    async () => {
      const apiKey = await client.apiKeys.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'apiKeys.create:required',
    { operation: 'create', path: '/v1/api-keys' },
    'create: only required params',
    async () => {
      const apiKey = await client.apiKeys.create({});
    },
  );
  smokeCase(
    'apiKeys.create:all',
    { operation: 'create', path: '/v1/api-keys' },
    'create: required and optional params',
    async () => {
      const apiKey = await client.apiKeys.create({
        expiresAt: '2024-01-01T00:00:00.000Z',
        name: 'x',
      });
    },
  );
  smokeCase(
    'apiKeys.retrieve:single',
    { operation: 'retrieve', path: '/v1/api-keys/{apiKeyId}' },
    'retrieve',
    async () => {
      const apiKey = await client.apiKeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'apiKeys.update:single',
    { operation: 'update', path: '/v1/api-keys/{apiKeyId}' },
    'update',
    async () => {
      const apiKey = await client.apiKeys.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  );
  smokeCase(
    'apiKeys.delete:single',
    { operation: 'delete', path: '/v1/api-keys/{apiKeyId}' },
    'delete',
    async () => {
      const apiKey = await client.apiKeys.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
