// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource folders', () => {
  smokeCase('folders.list:single', { operation: 'list', path: '/v1/folders' }, 'list', async () => {
    const folder = await client.folders.list();
  });
  smokeCase(
    'folders.create:required',
    { operation: 'create', path: '/v1/folders' },
    'create: only required params',
    async () => {
      const folder = await client.folders.create({
        name: 'x',
      });
    },
  );
  smokeCase(
    'folders.create:all',
    { operation: 'create', path: '/v1/folders' },
    'create: required and optional params',
    async () => {
      const folder = await client.folders.create({
        name: 'x',
        color: 'neutral',
      });
    },
  );
  smokeCase(
    'folders.update:required',
    { operation: 'update', path: '/v1/folders/{folderId}' },
    'update: only required params',
    async () => {
      const folder = await client.folders.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'folders.update:all',
    { operation: 'update', path: '/v1/folders/{folderId}' },
    'update: required and optional params',
    async () => {
      const folder = await client.folders.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        color: 'neutral',
        placement: {
          target: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          position: 'before',
        },
        addSession: {
          id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
        removeSession: {
          id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      });
    },
  );
  smokeCase(
    'folders.delete:single',
    { operation: 'delete', path: '/v1/folders/{folderId}' },
    'delete',
    async () => {
      const folder = await client.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
