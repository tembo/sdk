// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource shares', () => {
  smokeCase(
    'skills.shares.list:required',
    { operation: 'list', path: '/v1/skills/{skillId}/sharing' },
    'list: only required params',
    async () => {
      const share = await client.skills.shares.list('skillId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'skills.shares.list:all',
    { operation: 'list', path: '/v1/skills/{skillId}/sharing' },
    'list: required and optional params',
    async () => {
      const share = await client.skills.shares.list('skillId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'skills.shares.create:single',
    { operation: 'create', path: '/v1/skills/{skillId}/sharing' },
    'create',
    async () => {
      const share = await client.skills.shares.create('skillId', {
        type: 'user',
        id: 'x',
      });
    },
  );
  smokeCase(
    'skills.shares.delete:single',
    { operation: 'delete', path: '/v1/skills/{skillId}/sharing/{shareId}' },
    'delete',
    async () => {
      const share = await client.skills.shares.delete('shareId', {
        skillId: 'skillId',
      });
    },
  );
});
