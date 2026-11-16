// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource billing', () => {
  smokeCase(
    'billing.retrieve:single',
    { operation: 'retrieve', path: '/v1/billing' },
    'retrieve',
    async () => {
      const billing = await client.billing.retrieve();
    },
  );
  smokeCase(
    'billing.listUsage:required',
    { operation: 'listUsage', path: '/v1/billing/usage' },
    'listUsage: only required params',
    async () => {
      const billing = await client.billing.listUsage({
        limit: 50,
      });
    },
  );
  smokeCase(
    'billing.listUsage:all',
    { operation: 'listUsage', path: '/v1/billing/usage' },
    'listUsage: required and optional params',
    async () => {
      const billing = await client.billing.listUsage({
        cursor: 'cursor',
        limit: 50,
        type: 'all',
        sessionId: 'sessionId',
        createdAfter: '2024-01-01T00:00:00.000Z',
        createdBefore: '2024-01-01T00:00:00.000Z',
        createdBy: ['createdBy'],
        models: ['model'],
        agentIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
});
