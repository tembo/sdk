// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource shares', () => {
  smokeCase(
    'agents.shares.list:required',
    { operation: 'list', path: '/v1/agents/{agentId}/sharing' },
    'list: only required params',
    async () => {
      const share = await client.agents.shares.list('agentId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.shares.list:all',
    { operation: 'list', path: '/v1/agents/{agentId}/sharing' },
    'list: required and optional params',
    async () => {
      const share = await client.agents.shares.list('agentId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.shares.create:single',
    { operation: 'create', path: '/v1/agents/{agentId}/sharing' },
    'create',
    async () => {
      const share = await client.agents.shares.create('agentId', {
        type: 'user',
        id: 'x',
      });
    },
  );
  smokeCase(
    'agents.shares.delete:single',
    { operation: 'delete', path: '/v1/agents/{agentId}/sharing/{shareId}' },
    'delete',
    async () => {
      const share = await client.agents.shares.delete('shareId', {
        agentId: 'agentId',
      });
    },
  );
});
