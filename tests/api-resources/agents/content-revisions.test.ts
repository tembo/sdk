// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource contentRevisions', () => {
  smokeCase(
    'agents.contentRevisions.list:required',
    { operation: 'list', path: '/v1/agents/{agentId}/content-revisions' },
    'list: only required params',
    async () => {
      const contentRevision = await client.agents.contentRevisions.list(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          limit: 50,
        },
      );
    },
  );
  smokeCase(
    'agents.contentRevisions.list:all',
    { operation: 'list', path: '/v1/agents/{agentId}/content-revisions' },
    'list: required and optional params',
    async () => {
      const contentRevision = await client.agents.contentRevisions.list(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          cursor: 'cursor',
          limit: 50,
        },
      );
    },
  );
  smokeCase(
    'agents.contentRevisions.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agentId}/content-revisions/{version}' },
    'retrieve',
    async () => {
      const contentRevision = await client.agents.contentRevisions.retrieve(1, {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'agents.contentRevisions.restore:single',
    { operation: 'restore', path: '/v1/agents/{agentId}/content-revisions/{version}/restore' },
    'restore',
    async () => {
      const contentRevision = await client.agents.contentRevisions.restore(1, {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        expectedContentVersion: 1,
      });
    },
  );
});
