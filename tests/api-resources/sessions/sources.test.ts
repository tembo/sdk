// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource sources', () => {
  smokeCase(
    'sessions.sources.list:required',
    { operation: 'list', path: '/v1/sessions/sources' },
    'list: only required params',
    async () => {
      const source = await client.sessions.sources.list({
        limit: 50,
        includeTotal: false,
      });
    },
  );
  smokeCase(
    'sessions.sources.list:all',
    { operation: 'list', path: '/v1/sessions/sources' },
    'list: required and optional params',
    async () => {
      const source = await client.sessions.sources.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        enabled: true,
        includeTotal: false,
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: 'search',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        types: ['type'],
      });
    },
  );
  smokeCase(
    'sessions.sources.retrieve:single',
    { operation: 'retrieve', path: '/v1/sessions/sources/{sourceId}' },
    'retrieve',
    async () => {
      const source = await client.sessions.sources.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
