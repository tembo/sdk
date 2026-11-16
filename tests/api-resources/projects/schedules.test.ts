// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource schedules', () => {
  smokeCase(
    'projects.schedules.list:required',
    { operation: 'list', path: '/v1/projects/{projectId}/schedules' },
    'list: only required params',
    async () => {
      const schedule = await client.projects.schedules.list('projectId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.schedules.list:all',
    { operation: 'list', path: '/v1/projects/{projectId}/schedules' },
    'list: required and optional params',
    async () => {
      const schedule = await client.projects.schedules.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.schedules.create:required',
    { operation: 'create', path: '/v1/projects/{projectId}/schedules' },
    'create: only required params',
    async () => {
      const schedule = await client.projects.schedules.create('projectId', {
        cron: 'x',
      });
    },
  );
  smokeCase(
    'projects.schedules.create:all',
    { operation: 'create', path: '/v1/projects/{projectId}/schedules' },
    'create: required and optional params',
    async () => {
      const schedule = await client.projects.schedules.create('projectId', {
        cron: 'x',
        timezone: 'x',
      });
    },
  );
  smokeCase(
    'projects.schedules.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{projectId}/schedules/{scheduleId}' },
    'retrieve',
    async () => {
      const schedule = await client.projects.schedules.retrieve('scheduleId', {
        projectId: 'projectId',
      });
    },
  );
  smokeCase(
    'projects.schedules.update:required',
    { operation: 'update', path: '/v1/projects/{projectId}/schedules/{scheduleId}' },
    'update: only required params',
    async () => {
      const schedule = await client.projects.schedules.update('scheduleId', {
        projectId: 'projectId',
      });
    },
  );
  smokeCase(
    'projects.schedules.update:all',
    { operation: 'update', path: '/v1/projects/{projectId}/schedules/{scheduleId}' },
    'update: required and optional params',
    async () => {
      const schedule = await client.projects.schedules.update('scheduleId', {
        projectId: 'projectId',
        cron: 'x',
        enabled: false,
        timezone: 'x',
      });
    },
  );
  smokeCase(
    'projects.schedules.delete:single',
    { operation: 'delete', path: '/v1/projects/{projectId}/schedules/{scheduleId}' },
    'delete',
    async () => {
      const schedule = await client.projects.schedules.delete('scheduleId', {
        projectId: 'projectId',
      });
    },
  );
});
