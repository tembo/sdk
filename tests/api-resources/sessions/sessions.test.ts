// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource sessions', () => {
  smokeCase(
    'sessions.list:required',
    { operation: 'list', path: '/v1/sessions' },
    'list: only required params',
    async () => {
      const session = await client.sessions.list({
        limit: 50,
        includeArchived: true,
        includeTotal: false,
        sortBy: 'lastQueuedAt',
        state: 'all',
      });
    },
  );
  smokeCase(
    'sessions.list:all',
    { operation: 'list', path: '/v1/sessions' },
    'list: required and optional params',
    async () => {
      const session = await client.sessions.list({
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        createdBy: ['createdBy'],
        createdAfter: '2024-01-01T00:00:00.000Z',
        cursor: 'cursor',
        limit: 50,
        excludePinned: true,
        excludeTeamId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        externalIds: ['externalId'],
        folderId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        hasProject: true,
        includeArchived: true,
        includeTotal: false,
        inFolder: true,
        parentSessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        participant: ['participant'],
        pendingReviewerKeys: ['pendingReviewerKey'],
        projectIds: ['projectId'],
        pullRequestStatuses: ['open'],
        repositoryIds: ['repositoryId'],
        search: 'search',
        sortBy: 'lastQueuedAt',
        sourceIds: ['sourceId'],
        sourceTypes: ['sourceType'],
        state: 'all',
        teamId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase('sessions.create:single', { operation: 'create', path: '/v1/sessions' }, 'create', async () => {
    const session = await client.sessions.create({
      description: 'Fix the authentication bug in the login component',
      projectId: 'your-project-id',
      agent: 'claudeCode:claude-fable-5-1',
      codeRepositoryIds: ['123e4567-e89b-12d3-a456-426614174000'],
      baseBranch: 'main',
      targetBranch: 'main',
      visibility: 'private',
      mcpServers: [],
    });
  });
  smokeCase(
    'sessions.retrieve:single',
    { operation: 'retrieve', path: '/v1/sessions/{sessionId}' },
    'retrieve',
    async () => {
      const session = await client.sessions.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'sessions.update:required',
    { operation: 'update', path: '/v1/sessions/{sessionId}' },
    'update: only required params',
    async () => {
      const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'sessions.update:all',
    { operation: 'update', path: '/v1/sessions/{sessionId}' },
    'update: required and optional params',
    async () => {
      const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        visibility: 'private',
        memoryMb: 1024,
        agent: 'x',
        agentOptions: {},
        baseBranch: 'x',
        branchName: 'x',
        description: 'x',
        richContent: {},
        level: 0,
        mcpServers: ['x'],
        mode: 'normal',
        projectId: '',
        sandboxSize: 'nano',
        targetBranch: 'x',
        title: 'x',
      });
    },
  );
  smokeCase(
    'sessions.delete:single',
    { operation: 'delete', path: '/v1/sessions/{sessionId}' },
    'delete',
    async () => {
      const session = await client.sessions.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'sessions.fork:required',
    { operation: 'fork', path: '/v1/sessions/{sessionId}/fork' },
    'fork: only required params',
    async () => {
      const session = await client.sessions.fork('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'sessions.fork:all',
    { operation: 'fork', path: '/v1/sessions/{sessionId}/fork' },
    'fork: required and optional params',
    async () => {
      const session = await client.sessions.fork('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        prompt: 'x',
        title: 'x',
        queueRightAway: true,
      });
    },
  );
  smokeCase(
    'sessions.import:single',
    { operation: 'import', path: '/v1/sessions/import' },
    'import',
    async () => {
      const session = await client.sessions.import({
        source: 'conductor',
        externalId: 'x',
        title: 'x',
        messages: [
          {
            id: 'x',
            role: 'user',
            content: '',
            sentAt: '2024-01-01T00:00:00.000Z',
          },
        ],
      });
    },
  );
  smokeCase(
    'sessions.stop:required',
    { operation: 'stop', path: '/v1/sessions/{sessionId}/stop' },
    'stop: only required params',
    async () => {
      const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'sessions.stop:all',
    { operation: 'stop', path: '/v1/sessions/{sessionId}/stop' },
    'stop: required and optional params',
    async () => {
      const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cancelQueued: true,
      });
    },
  );
  smokeCase(
    'sessions.listEvents:required',
    { operation: 'listEvents', path: '/v1/sessions/{sessionId}/events' },
    'listEvents: only required params',
    async () => {
      const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'sessions.listEvents:all',
    { operation: 'listEvents', path: '/v1/sessions/{sessionId}/events' },
    'listEvents: required and optional params',
    async () => {
      const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: 'cursor',
        limit: 50,
        messageId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        after: 'after',
      });
    },
  );
});
