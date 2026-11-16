// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource runtimes', () => {
  smokeCase(
    'runtimes.list:required',
    { operation: 'list', path: '/v1/runtimes' },
    'list: only required params',
    async () => {
      const runtime = await client.runtimes.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'runtimes.list:all',
    { operation: 'list', path: '/v1/runtimes' },
    'list: required and optional params',
    async () => {
      const runtime = await client.runtimes.list({
        cursor: 'claudeCode',
        limit: 50,
      });
    },
  );
});
