// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource inputs', () => {
  smokeCase(
    'sessions.inputs.list:single',
    { operation: 'list', path: '/v1/sessions/{sessionId}/inputs' },
    'list',
    async () => {
      const input = await client.sessions.inputs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'sessions.inputs.update:single',
    { operation: 'update', path: '/v1/sessions/{sessionId}/inputs/{inputId}' },
    'update',
    async () => {
      const input = await client.sessions.inputs.update('inputId', {
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        answers: {},
      });
    },
  );
});
