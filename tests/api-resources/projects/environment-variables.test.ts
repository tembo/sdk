// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource environmentVariables', () => {
  smokeCase(
    'projects.environmentVariables.list:single',
    { operation: 'list', path: '/v1/projects/{projectId}/environment-variables' },
    'list',
    async () => {
      const environmentVariable = await client.projects.environmentVariables.list('projectId');
    },
  );
  smokeCase(
    'projects.environmentVariables.create:single',
    { operation: 'create', path: '/v1/projects/{projectId}/environment-variables' },
    'create',
    async () => {
      const environmentVariable = await client.projects.environmentVariables.create('projectId', {
        secrets: [
          {
            key: '',
            value: 'x',
          },
        ],
      });
    },
  );
  smokeCase(
    'projects.environmentVariables.delete:single',
    { operation: 'delete', path: '/v1/projects/{projectId}/environment-variables/{key}' },
    'delete',
    async () => {
      const environmentVariable = await client.projects.environmentVariables.delete('key', {
        projectId: 'projectId',
      });
    },
  );
});
