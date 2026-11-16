// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource providers', () => {
  smokeCase(
    'integrations.providers.list:required',
    { operation: 'list', path: '/v1/integrations/providers' },
    'list: only required params',
    async () => {
      const provider = await client.integrations.providers.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'integrations.providers.list:all',
    { operation: 'list', path: '/v1/integrations/providers' },
    'list: required and optional params',
    async () => {
      const provider = await client.integrations.providers.list({
        cursor: 'cursor',
        limit: 50,
        returnUrl: 'https://example.com',
      });
    },
  );
  smokeCase(
    'integrations.providers.discoverSnykOrganizations:required',
    { operation: 'discoverSnykOrganizations', path: '/v1/integrations/providers/snyk/organizations' },
    'discoverSnykOrganizations: only required params',
    async () => {
      const provider = await client.integrations.providers.discoverSnykOrganizations({
        clientId: 'x',
        clientSecret: 'x',
        limit: 50,
      });
    },
  );
  smokeCase(
    'integrations.providers.discoverSnykOrganizations:all',
    { operation: 'discoverSnykOrganizations', path: '/v1/integrations/providers/snyk/organizations' },
    'discoverSnykOrganizations: required and optional params',
    async () => {
      const provider = await client.integrations.providers.discoverSnykOrganizations({
        clientId: 'x',
        clientSecret: 'x',
        cursor: 'x',
        limit: 50,
      });
    },
  );
});
