// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource templates', () => {
  smokeCase(
    'agents.templates.list:required',
    { operation: 'list', path: '/v1/agents/templates' },
    'list: only required params',
    async () => {
      const template = await client.agents.templates.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.templates.list:all',
    { operation: 'list', path: '/v1/agents/templates' },
    'list: required and optional params',
    async () => {
      const template = await client.agents.templates.list({
        cursor: 'addTestCoverage',
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.templates.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/templates/{templateName}' },
    'retrieve',
    async () => {
      const template = await client.agents.templates.retrieve('templateName');
    },
  );
});
