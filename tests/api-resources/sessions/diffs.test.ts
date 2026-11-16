// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource diffs', () => {
  smokeCase(
    'sessions.diffs.list:required',
    { operation: 'list', path: '/v1/sessions/{sessionId}/diffs' },
    'list: only required params',
    async () => {
      const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'sessions.diffs.list:all',
    { operation: 'list', path: '/v1/sessions/{sessionId}/diffs' },
    'list: required and optional params',
    async () => {
      const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        hasChanges: true,
      });
    },
  );
  smokeCase(
    'sessions.diffs.retrieve:single',
    { operation: 'retrieve', path: '/v1/sessions/{sessionId}/diffs/{diffId}' },
    'retrieve',
    async () => {
      const diff = await client.sessions.diffs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});
