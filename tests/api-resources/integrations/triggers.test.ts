// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource triggers', () => {
  smokeCase(
    'integrations.triggers.list:required',
    { operation: 'list', path: '/v1/integrations/triggers' },
    'list: only required params',
    async () => {
      const trigger = await client.integrations.triggers.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'integrations.triggers.list:all',
    { operation: 'list', path: '/v1/integrations/triggers' },
    'list: required and optional params',
    async () => {
      const trigger = await client.integrations.triggers.list({
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'integrations.triggers.retrieve:single',
    { operation: 'retrieve', path: '/v1/integrations/{integrationId}/triggers/{triggerName}' },
    'retrieve',
    async () => {
      const trigger = await client.integrations.triggers.retrieve('triggerName', {
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'integrations.triggers.listFilterOptions:required',
    {
      operation: 'listFilterOptions',
      path: '/v1/integrations/{integrationId}/triggers/{triggerName}/filter-options/{field}',
    },
    'listFilterOptions: only required params',
    async () => {
      const trigger = await client.integrations.triggers.listFilterOptions('field', {
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        triggerName: 'triggerName',
        limit: 50,
      });
    },
  );
  smokeCase(
    'integrations.triggers.listFilterOptions:all',
    {
      operation: 'listFilterOptions',
      path: '/v1/integrations/{integrationId}/triggers/{triggerName}/filter-options/{field}',
    },
    'listFilterOptions: required and optional params',
    async () => {
      const trigger = await client.integrations.triggers.listFilterOptions('field', {
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        triggerName: 'triggerName',
        cursor: 'cursor',
        limit: 50,
        search: 'search',
      });
    },
  );
});
