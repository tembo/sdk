// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource marketplace', () => {
  smokeCase(
    'skills.marketplace.list:required',
    { operation: 'list', path: '/v1/skills/marketplace' },
    'list: only required params',
    async () => {
      const marketplace = await client.skills.marketplace.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'skills.marketplace.list:all',
    { operation: 'list', path: '/v1/skills/marketplace' },
    'list: required and optional params',
    async () => {
      const marketplace = await client.skills.marketplace.list({
        cursor: '',
        limit: 50,
        search: 'search',
      });
    },
  );
  smokeCase(
    'skills.marketplace.retrieve:single',
    { operation: 'retrieve', path: '/v1/skills/marketplace/{skillId}' },
    'retrieve',
    async () => {
      const marketplace = await client.skills.marketplace.retrieve('skillId', {
        source: 'source',
      });
    },
  );
});
