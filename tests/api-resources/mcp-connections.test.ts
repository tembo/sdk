// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource mcpConnections', () => {
  smokeCase(
    'mcpConnections.list:required',
    { operation: 'list', path: '/v1/mcp-connections' },
    'list: only required params',
    async () => {
      const mcpConnection = await client.mcpConnections.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'mcpConnections.list:all',
    { operation: 'list', path: '/v1/mcp-connections' },
    'list: required and optional params',
    async () => {
      const mcpConnection = await client.mcpConnections.list({
        connected: true,
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        search: 'search',
      });
    },
  );
  smokeCase(
    'mcpConnections.create:required',
    { operation: 'create', path: '/v1/mcp-connections' },
    'create: only required params',
    async () => {
      const mcpConnection = await client.mcpConnections.create({
        name: 'x',
        args: [],
        command: 'x',
        type: 'stdio',
        visibility: 'shared',
      });
    },
  );
  smokeCase(
    'mcpConnections.create:all',
    { operation: 'create', path: '/v1/mcp-connections' },
    'create: required and optional params',
    async () => {
      const mcpConnection = await client.mcpConnections.create({
        name: 'x',
        args: [],
        command: 'x',
        env: {},
        type: 'stdio',
        visibility: 'shared',
      });
    },
  );
  smokeCase(
    'mcpConnections.retrieve:single',
    { operation: 'retrieve', path: '/v1/mcp-connections/{mcpConnectionId}' },
    'retrieve',
    async () => {
      const mcpConnection = await client.mcpConnections.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'mcpConnections.update:required',
    { operation: 'update', path: '/v1/mcp-connections/{mcpConnectionId}' },
    'update: only required params',
    async () => {
      const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        type: 'remote',
      });
    },
  );
  smokeCase(
    'mcpConnections.update:all',
    { operation: 'update', path: '/v1/mcp-connections/{mcpConnectionId}' },
    'update: required and optional params',
    async () => {
      const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        serverUrl: 'https://example.com',
        type: 'remote',
        authType: 'oauth',
        clientId: 'x',
        clientSecret: 'x',
        headers: {},
        oauthRegistration: 'automatic',
        scope: 'x',
      });
    },
  );
  smokeCase(
    'mcpConnections.delete:single',
    { operation: 'delete', path: '/v1/mcp-connections/{mcpConnectionId}' },
    'delete',
    async () => {
      const mcpConnection = await client.mcpConnections.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'mcpConnections.authorize:single',
    { operation: 'authorize', path: '/v1/mcp-connections/{mcpConnectionId}/authorize' },
    'authorize',
    async () => {
      const mcpConnection = await client.mcpConnections.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'mcpConnections.test:single',
    { operation: 'test', path: '/v1/mcp-connections/{mcpConnectionId}/test' },
    'test',
    async () => {
      const mcpConnection = await client.mcpConnections.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
