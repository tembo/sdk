// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource runs', () => {
  smokeCase(
    'agents.runs.list:required',
    { operation: 'list', path: '/v1/agents/{agentId}/runs' },
    'list: only required params',
    async () => {
      const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.runs.list:all',
    { operation: 'list', path: '/v1/agents/{agentId}/runs' },
    'list: required and optional params',
    async () => {
      const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.runs.create:required',
    { operation: 'create', path: '/v1/agents/{agentId}/runs' },
    'create: only required params',
    async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'agents.runs.create:all',
    { operation: 'create', path: '/v1/agents/{agentId}/runs' },
    'create: required and optional params',
    async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'agents.runs.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agentId}/runs/{runId}' },
    'retrieve',
    async () => {
      const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});
