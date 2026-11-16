// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource profilePicture', () => {
  smokeCase(
    'users.profilePicture.retrieve:single',
    { operation: 'retrieve', path: '/v1/users/{userId}/profile-picture' },
    'retrieve',
    async () => {
      await client.users.profilePicture.retrieve('userId');
    },
  );
  smokeCase(
    'users.profilePicture.update:single',
    { operation: 'update', path: '/v1/users/{userId}/profile-picture' },
    'update',
    async () => {
      const profilePicture = await client.users.profilePicture.update('userId', {
        file: new File(['file'], 'file'),
      });
    },
  );
  smokeCase(
    'users.profilePicture.delete:single',
    { operation: 'delete', path: '/v1/users/{userId}/profile-picture' },
    'delete',
    async () => {
      const profilePicture = await client.users.profilePicture.delete('userId');
    },
  );
});
