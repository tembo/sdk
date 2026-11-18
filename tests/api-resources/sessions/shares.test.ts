// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource shares', () => {
  smokeCase(
    'sessions.shares.list:required',
    { operation: 'list', path: '/v1/sessions/{sessionId}/sharing' },
    'list: only required params',
    async () => {
      const share = await client.sessions.shares.list('sessionId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'sessions.shares.list:all',
    { operation: 'list', path: '/v1/sessions/{sessionId}/sharing' },
    'list: required and optional params',
    async () => {
      const share = await client.sessions.shares.list('sessionId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'sessions.shares.create:single',
    { operation: 'create', path: '/v1/sessions/{sessionId}/sharing' },
    'create',
    async () => {
      const share = await client.sessions.shares.create('sessionId', {
        type: 'user',
        id: 'x',
      });
    },
  );
  smokeCase(
    'sessions.shares.delete:single',
    { operation: 'delete', path: '/v1/sessions/{sessionId}/sharing/{shareId}' },
    'delete',
    async () => {
      const share = await client.sessions.shares.delete('shareId', {
        sessionId: 'sessionId',
      });
    },
  );
});
