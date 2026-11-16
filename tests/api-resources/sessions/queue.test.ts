// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource queue', () => {
  smokeCase(
    'sessions.queue.update:single',
    { operation: 'update', path: '/v1/sessions/{sessionId}/queue' },
    'update',
    async () => {
      const queue = await client.sessions.queue.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        messageIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
});
