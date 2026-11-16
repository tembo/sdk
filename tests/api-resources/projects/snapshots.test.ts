// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource snapshots', () => {
  smokeCase(
    'projects.snapshots.list:required',
    { operation: 'list', path: '/v1/projects/{projectId}/snapshots' },
    'list: only required params',
    async () => {
      const snapshot = await client.projects.snapshots.list('projectId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.snapshots.list:all',
    { operation: 'list', path: '/v1/projects/{projectId}/snapshots' },
    'list: required and optional params',
    async () => {
      const snapshot = await client.projects.snapshots.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.snapshots.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{projectId}/snapshots/{snapshotId}' },
    'retrieve',
    async () => {
      const snapshot = await client.projects.snapshots.retrieve('snapshotId', {
        projectId: 'projectId',
      });
    },
  );
  smokeCase(
    'projects.snapshots.update:required',
    { operation: 'update', path: '/v1/projects/{projectId}/snapshots/{snapshotId}' },
    'update: only required params',
    async () => {
      const snapshot = await client.projects.snapshots.update('snapshotId', {
        projectId: 'projectId',
      });
    },
  );
  smokeCase(
    'projects.snapshots.update:all',
    { operation: 'update', path: '/v1/projects/{projectId}/snapshots/{snapshotId}' },
    'update: required and optional params',
    async () => {
      const snapshot = await client.projects.snapshots.update('snapshotId', {
        projectId: 'projectId',
        name: '',
        pinned: false,
      });
    },
  );
  smokeCase(
    'projects.snapshots.delete:single',
    { operation: 'delete', path: '/v1/projects/{projectId}/snapshots/{snapshotId}' },
    'delete',
    async () => {
      const snapshot = await client.projects.snapshots.delete('snapshotId', {
        projectId: 'projectId',
      });
    },
  );
});
