// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource schedules', () => {
  smokeCase(
    'agents.schedules.list:required',
    { operation: 'list', path: '/v1/agents/{agentId}/schedules' },
    'list: only required params',
    async () => {
      const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.schedules.list:all',
    { operation: 'list', path: '/v1/agents/{agentId}/schedules' },
    'list: required and optional params',
    async () => {
      const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
      });
    },
  );
  smokeCase(
    'agents.schedules.create:single',
    { operation: 'create', path: '/v1/agents/{agentId}/schedules' },
    'create',
    async () => {
      const schedule = await client.agents.schedules.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cron: 'x',
      });
    },
  );
  smokeCase(
    'agents.schedules.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agentId}/schedules/{scheduleId}' },
    'retrieve',
    async () => {
      const schedule = await client.agents.schedules.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'agents.schedules.update:single',
    { operation: 'update', path: '/v1/agents/{agentId}/schedules/{scheduleId}' },
    'update',
    async () => {
      const schedule = await client.agents.schedules.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        cron: 'x',
      });
    },
  );
  smokeCase(
    'agents.schedules.delete:single',
    { operation: 'delete', path: '/v1/agents/{agentId}/schedules/{scheduleId}' },
    'delete',
    async () => {
      const schedule = await client.agents.schedules.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});
