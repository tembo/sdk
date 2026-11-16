// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource commands', () => {
  smokeCase(
    'sessions.commands.list:single',
    { operation: 'list', path: '/v1/sessions/{sessionId}/commands' },
    'list',
    async () => {
      const command = await client.sessions.commands.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
