// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource messages', () => {
  smokeCase(
    'messages.list:required',
    { operation: 'list', path: '/v1/messages' },
    'list: only required params',
    async () => {
      const message = await client.messages.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'messages.list:all',
    { operation: 'list', path: '/v1/messages' },
    'list: required and optional params',
    async () => {
      const message = await client.messages.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        threadId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'messages.create:required',
    { operation: 'create', path: '/v1/messages' },
    'create: only required params',
    async () => {
      const message = await client.messages.create({
        content: 'x',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'messages.create:all',
    { operation: 'create', path: '/v1/messages' },
    'create: required and optional params',
    async () => {
      const message = await client.messages.create({
        artifactId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        content: 'x',
        mcpServers: ['x'],
        pullRequestId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        agentOptions: {},
        deliveryMode: 'queue',
        richContent: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
        slashCommand: {
          command: 'x',
        },
      });
    },
  );
  smokeCase(
    'messages.retrieve:single',
    { operation: 'retrieve', path: '/v1/messages/{messageId}' },
    'retrieve',
    async () => {
      const message = await client.messages.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'messages.update:required',
    { operation: 'update', path: '/v1/messages/{messageId}' },
    'update: only required params',
    async () => {
      const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'messages.update:all',
    { operation: 'update', path: '/v1/messages/{messageId}' },
    'update: required and optional params',
    async () => {
      const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        content: 'x',
        richContent: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
      });
    },
  );
  smokeCase(
    'messages.delete:single',
    { operation: 'delete', path: '/v1/messages/{messageId}' },
    'delete',
    async () => {
      const message = await client.messages.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
