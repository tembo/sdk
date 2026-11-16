// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource repositories', () => {
  smokeCase(
    'repositories.list:required',
    { operation: 'list', path: '/v1/repositories' },
    'list: only required params',
    async () => {
      const repository = await client.repositories.list({
        limit: 50,
        enabled: 'all',
        order: 'desc',
        sort: 'pullRequests',
      });
    },
  );
  smokeCase(
    'repositories.list:all',
    { operation: 'list', path: '/v1/repositories' },
    'list: required and optional params',
    async () => {
      const repository = await client.repositories.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        enabled: 'all',
        ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        order: 'desc',
        search: 'search',
        sort: 'pullRequests',
      });
    },
  );
  smokeCase(
    'repositories.retrieve:single',
    { operation: 'retrieve', path: '/v1/repositories/{repositoryId}' },
    'retrieve',
    async () => {
      const repository = await client.repositories.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'repositories.update:required',
    { operation: 'update', path: '/v1/repositories/{repositoryId}' },
    'update: only required params',
    async () => {
      const repository = await client.repositories.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        enabled: false,
      });
    },
  );
  smokeCase(
    'repositories.update:all',
    { operation: 'update', path: '/v1/repositories/{repositoryId}' },
    'update: required and optional params',
    async () => {
      const repository = await client.repositories.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        enabled: false,
        baseBranch: 'x',
        targetBranch: 'x',
      });
    },
  );
});
