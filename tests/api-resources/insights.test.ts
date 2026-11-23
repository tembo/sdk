// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource insights', () => {
  smokeCase(
    'insights.retrieve:single',
    { operation: 'retrieve', path: '/v1/insights' },
    'retrieve',
    async () => {
      const insight = await client.insights.retrieve({
        range: '1y',
      });
    },
  );
  smokeCase('insights.update:single', { operation: 'update', path: '/v1/insights' }, 'update', async () => {
    const insight = await client.insights.update({
      enabled: false,
    });
  });
  smokeCase(
    'insights.listMembers:required',
    { operation: 'listMembers', path: '/v1/insights/members' },
    'listMembers: only required params',
    async () => {
      const insight = await client.insights.listMembers({
        limit: 50,
        range: '1y',
      });
    },
  );
  smokeCase(
    'insights.listMembers:all',
    { operation: 'listMembers', path: '/v1/insights/members' },
    'listMembers: required and optional params',
    async () => {
      const insight = await client.insights.listMembers({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        range: '1y',
      });
    },
  );
  smokeCase(
    'insights.listRepositories:required',
    { operation: 'listRepositories', path: '/v1/insights/repositories' },
    'listRepositories: only required params',
    async () => {
      const insight = await client.insights.listRepositories({
        limit: 50,
        range: '1y',
      });
    },
  );
  smokeCase(
    'insights.listRepositories:all',
    { operation: 'listRepositories', path: '/v1/insights/repositories' },
    'listRepositories: required and optional params',
    async () => {
      const insight = await client.insights.listRepositories({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        range: '1y',
      });
    },
  );
  smokeCase(
    'insights.listTeams:required',
    { operation: 'listTeams', path: '/v1/insights/teams' },
    'listTeams: only required params',
    async () => {
      const insight = await client.insights.listTeams({
        range: '1y',
        limit: 50,
      });
    },
  );
  smokeCase(
    'insights.listTeams:all',
    { operation: 'listTeams', path: '/v1/insights/teams' },
    'listTeams: required and optional params',
    async () => {
      const insight = await client.insights.listTeams({
        range: '1y',
        teamId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
});
