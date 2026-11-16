// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource connectedAccounts', () => {
  smokeCase(
    'users.connectedAccounts.list:required',
    { operation: 'list', path: '/v1/users/{userId}/connected-accounts' },
    'list: only required params',
    async () => {
      const connectedAccount = await client.users.connectedAccounts.list('userId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'users.connectedAccounts.list:all',
    { operation: 'list', path: '/v1/users/{userId}/connected-accounts' },
    'list: required and optional params',
    async () => {
      const connectedAccount = await client.users.connectedAccounts.list('userId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'users.connectedAccounts.retrieve:single',
    { operation: 'retrieve', path: '/v1/users/{userId}/connected-accounts/{connectedAccountId}' },
    'retrieve',
    async () => {
      const connectedAccount = await client.users.connectedAccounts.retrieve('connectedAccountId', {
        userId: 'userId',
      });
    },
  );
});
