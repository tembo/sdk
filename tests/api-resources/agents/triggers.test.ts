// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource triggers', () => {
  smokeCase(
    'agents.triggers.list:required',
    { operation: 'list', path: '/v1/agents/{agentId}/triggers' },
    'list: only required params',
    async () => {
      const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.triggers.list:all',
    { operation: 'list', path: '/v1/agents/{agentId}/triggers' },
    'list: required and optional params',
    async () => {
      const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.triggers.create:required',
    { operation: 'create', path: '/v1/agents/{agentId}/triggers' },
    'create: only required params',
    async () => {
      const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  );
  smokeCase(
    'agents.triggers.create:all',
    { operation: 'create', path: '/v1/agents/{agentId}/triggers' },
    'create: required and optional params',
    async () => {
      const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        integrationType: 'x',
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        filters: {},
      });
    },
  );
  smokeCase(
    'agents.triggers.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agentId}/triggers/{triggerId}' },
    'retrieve',
    async () => {
      const trigger = await client.agents.triggers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'agents.triggers.update:required',
    { operation: 'update', path: '/v1/agents/{agentId}/triggers/{triggerId}' },
    'update: only required params',
    async () => {
      const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  );
  smokeCase(
    'agents.triggers.update:all',
    { operation: 'update', path: '/v1/agents/{agentId}/triggers/{triggerId}' },
    'update: required and optional params',
    async () => {
      const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        filters: {
          projects: [''],
          boards: [''],
          statuses: [''],
          assignedTo: [''],
          labels: [''],
          includeNewIssues: false,
        },
      });
    },
  );
  smokeCase(
    'agents.triggers.delete:single',
    { operation: 'delete', path: '/v1/agents/{agentId}/triggers/{triggerId}' },
    'delete',
    async () => {
      const trigger = await client.agents.triggers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});
