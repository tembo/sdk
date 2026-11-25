// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource memories', () => {
  smokeCase(
    'memories.list:required',
    { operation: 'list', path: '/v1/memories' },
    'list: only required params',
    async () => {
      const memory = await client.memories.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'memories.list:all',
    { operation: 'list', path: '/v1/memories' },
    'list: required and optional params',
    async () => {
      const memory = await client.memories.list({
        cursor: 'cursor',
        limit: 50,
        type: 'user',
        query: 'query',
      });
    },
  );
  smokeCase('memories.create:single', { operation: 'create', path: '/v1/memories' }, 'create', async () => {
    const memory = await client.memories.create({
      description: 'x',
      type: 'user',
      content: 'x',
      name: '',
    });
  });
  smokeCase(
    'memories.retrieve:single',
    { operation: 'retrieve', path: '/v1/memories/{name}' },
    'retrieve',
    async () => {
      const memory = await client.memories.retrieve('name');
    },
  );
  smokeCase(
    'memories.update:required',
    { operation: 'update', path: '/v1/memories/{name}' },
    'update: only required params',
    async () => {
      const memory = await client.memories.update('name', {
        expectedRevision: 1,
      });
    },
  );
  smokeCase(
    'memories.update:all',
    { operation: 'update', path: '/v1/memories/{name}' },
    'update: required and optional params',
    async () => {
      const memory = await client.memories.update('name', {
        description: 'x',
        type: 'user',
        content: 'x',
        expectedRevision: 1,
      });
    },
  );
  smokeCase(
    'memories.delete:single',
    { operation: 'delete', path: '/v1/memories/{name}' },
    'delete',
    async () => {
      const memory = await client.memories.delete('name', {
        expectedRevision: 1,
      });
    },
  );
});
