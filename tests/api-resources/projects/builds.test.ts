// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource builds', () => {
  smokeCase(
    'projects.builds.list:required',
    { operation: 'list', path: '/v1/projects/{projectId}/builds' },
    'list: only required params',
    async () => {
      const build = await client.projects.builds.list('projectId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.builds.list:all',
    { operation: 'list', path: '/v1/projects/{projectId}/builds' },
    'list: required and optional params',
    async () => {
      const build = await client.projects.builds.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.builds.create:required',
    { operation: 'create', path: '/v1/projects/{projectId}/builds' },
    'create: only required params',
    async () => {
      const build = await client.projects.builds.create('projectId', {});
    },
  );
  smokeCase(
    'projects.builds.create:all',
    { operation: 'create', path: '/v1/projects/{projectId}/builds' },
    'create: required and optional params',
    async () => {
      const build = await client.projects.builds.create('projectId', {
        sizes: ['nano'],
        snapshotId: 'x',
      });
    },
  );
  smokeCase(
    'projects.builds.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{projectId}/builds/{buildId}' },
    'retrieve',
    async () => {
      const build = await client.projects.builds.retrieve('buildId', {
        projectId: 'projectId',
      });
    },
  );
  smokeCase(
    'projects.builds.cancel:single',
    { operation: 'cancel', path: '/v1/projects/{projectId}/builds/{buildId}/cancel' },
    'cancel',
    async () => {
      const build = await client.projects.builds.cancel('buildId', {
        projectId: 'projectId',
      });
    },
  );
});
