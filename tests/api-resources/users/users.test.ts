// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource users', () => {
  smokeCase('users.me:single', { operation: 'me', path: '/v1/users/me' }, 'me', async () => {
    const user = await client.users.me();
  });
  smokeCase(
    'users.retrieve:single',
    { operation: 'retrieve', path: '/v1/users/{userId}' },
    'retrieve',
    async () => {
      const user = await client.users.retrieve('userId');
    },
  );
});
