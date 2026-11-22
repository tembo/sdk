// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource models', () => {
  smokeCase(
    'models.list:required',
    { operation: 'list', path: '/v1/models' },
    'list: only required params',
    async () => {
      const model = await client.models.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'models.list:all',
    { operation: 'list', path: '/v1/models' },
    'list: required and optional params',
    async () => {
      const model = await client.models.list({
        cursor: 'cursor',
        limit: 50,
        teamId: 'teamId',
      });
    },
  );
  smokeCase(
    'models.update:required',
    { operation: 'update', path: '/v1/models/{modelName}' },
    'update: only required params',
    async () => {
      const model = await client.models.update('modelName', {});
    },
  );
  smokeCase(
    'models.update:all',
    { operation: 'update', path: '/v1/models/{modelName}' },
    'update: required and optional params',
    async () => {
      const model = await client.models.update('modelName', {
        enabled: false,
        inferenceProvider: 'TemboManagedInference',
      });
    },
  );
});
