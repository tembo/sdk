// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource environmentVariables', () => {
  smokeCase(
    'users.environmentVariables.list:single',
    { operation: 'list', path: '/v1/users/{userId}/environment-variables' },
    'list',
    async () => {
      const environmentVariable = await client.users.environmentVariables.list('userId');
    },
  );
  smokeCase(
    'users.environmentVariables.create:single',
    { operation: 'create', path: '/v1/users/{userId}/environment-variables' },
    'create',
    async () => {
      const environmentVariable = await client.users.environmentVariables.create('userId', {
        key: 'x',
        value: 'x',
      });
    },
  );
  smokeCase(
    'users.environmentVariables.delete:single',
    { operation: 'delete', path: '/v1/users/{userId}/environment-variables/{environmentVariableId}' },
    'delete',
    async () => {
      const environmentVariable = await client.users.environmentVariables.delete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          userId: 'userId',
        },
      );
    },
  );
});
