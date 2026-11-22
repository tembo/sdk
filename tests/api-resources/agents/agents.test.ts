// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource agents', () => {
  smokeCase(
    'agents.list:required',
    { operation: 'list', path: '/v1/agents' },
    'list: only required params',
    async () => {
      const agent = await client.agents.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.list:all',
    { operation: 'list', path: '/v1/agents' },
    'list: required and optional params',
    async () => {
      const agent = await client.agents.list({
        cursor: 'cursor',
        limit: 50,
        teamId: 'teamId',
        ids: 'ids',
        search: 'search',
        archived: true,
        sort: 'latestRun',
        status: 'status',
        integration: 'integration',
        author: 'author',
      });
    },
  );
  smokeCase(
    'agents.create:required',
    { operation: 'create', path: '/v1/agents' },
    'create: only required params',
    async () => {
      const agent = await client.agents.create({});
    },
  );
  smokeCase(
    'agents.create:all',
    { operation: 'create', path: '/v1/agents' },
    'create: required and optional params',
    async () => {
      const agent = await client.agents.create({
        name: 'x',
        instructions: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
        mcpServers: ['x'],
        agent: 'x',
        agentOptions: {},
        sandboxSize: 'nano',
        projectId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        artifactType: 'PullRequest',
        repositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        triggers: [
          {
            name: 'x',
          },
        ],
        schedules: [
          {
            cron: 'x',
          },
        ],
        templateName: 'addTestCoverage',
        sourceAgentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'agents.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agentId}' },
    'retrieve',
    async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'agents.update:required',
    { operation: 'update', path: '/v1/agents/{agentId}' },
    'update: only required params',
    async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'agents.update:all',
    { operation: 'update', path: '/v1/agents/{agentId}' },
    'update: required and optional params',
    async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        expectedUpdatedAt: '2024-01-01T00:00:00.000Z',
        name: 'x',
        key: 'x',
        instructions: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
        mcpServers: ['x'],
        agent: 'x',
        agentOptions: {},
        userState: {},
        sandboxSize: 'nano',
        projectId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        templateId: '',
        script: '',
        artifactType: 'PullRequest',
        repositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        enabled: false,
        archived: false,
      });
    },
  );
  smokeCase(
    'agents.delete:single',
    { operation: 'delete', path: '/v1/agents/{agentId}' },
    'delete',
    async () => {
      const agent = await client.agents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
