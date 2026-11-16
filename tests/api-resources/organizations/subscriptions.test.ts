// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource subscriptions', () => {
  smokeCase(
    'organizations.subscriptions.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/subscriptions' },
    'retrieve',
    async () => {
      const subscription = await client.organizations.subscriptions.retrieve('organizationId');
    },
  );
});
