// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource auditLogs', () => {
  smokeCase(
    'auditLogs.list:required',
    { operation: 'list', path: '/v1/audit-logs' },
    'list: only required params',
    async () => {
      const auditLog = await client.auditLogs.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'auditLogs.list:all',
    { operation: 'list', path: '/v1/audit-logs' },
    'list: required and optional params',
    async () => {
      const auditLog = await client.auditLogs.list({
        cursor: 'cursor',
        limit: 50,
        actorId: 'actorId',
        resourceType: 'resourceType',
        resourceId: 'resourceId',
        operation: 'operation',
        from: '2024-01-01T00:00:00.000Z',
        to: '2024-01-01T00:00:00.000Z',
        search: 'search',
      });
    },
  );
  smokeCase(
    'auditLogs.listFilters:single',
    { operation: 'listFilters', path: '/v1/audit-logs/filters' },
    'listFilters',
    async () => {
      const auditLog = await client.auditLogs.listFilters();
    },
  );
});
