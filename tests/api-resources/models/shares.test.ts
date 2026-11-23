// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource shares', () => {
  smokeCase(
    'models.shares.list:required',
    { operation: 'list', path: '/v1/models/{modelId}/sharing' },
    'list: only required params',
    async () => {
      const share = await client.models.shares.list('modelId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'models.shares.list:all',
    { operation: 'list', path: '/v1/models/{modelId}/sharing' },
    'list: required and optional params',
    async () => {
      const share = await client.models.shares.list('modelId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'models.shares.create:single',
    { operation: 'create', path: '/v1/models/{modelId}/sharing' },
    'create',
    async () => {
      const share = await client.models.shares.create('modelId', {
        type: 'user',
        id: 'x',
      });
    },
  );
  smokeCase(
    'models.shares.delete:single',
    { operation: 'delete', path: '/v1/models/{modelId}/sharing/{shareId}' },
    'delete',
    async () => {
      const share = await client.models.shares.delete('shareId', {
        modelId: 'modelId',
      });
    },
  );
});
