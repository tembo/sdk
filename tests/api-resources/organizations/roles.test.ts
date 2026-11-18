// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource roles', () => {
  smokeCase(
    'organizations.roles.list:single',
    { operation: 'list', path: '/v1/organizations/{organizationId}/roles' },
    'list',
    async () => {
      const role = await client.organizations.roles.list('organizationId');
    },
  );
  smokeCase(
    'organizations.roles.create:required',
    { operation: 'create', path: '/v1/organizations/{organizationId}/roles' },
    'create: only required params',
    async () => {
      const role = await client.organizations.roles.create('organizationId', {
        name: 'x',
        description: '',
        permissions: ['organization:audit_log:read'],
      });
    },
  );
  smokeCase(
    'organizations.roles.create:all',
    { operation: 'create', path: '/v1/organizations/{organizationId}/roles' },
    'create: required and optional params',
    async () => {
      const role = await client.organizations.roles.create('organizationId', {
        name: 'x',
        description: '',
        icon: 'key',
        color: 'neutral',
        permissions: ['organization:audit_log:read'],
      });
    },
  );
  smokeCase(
    'organizations.roles.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/roles/{roleId}' },
    'retrieve',
    async () => {
      const role = await client.organizations.roles.retrieve('roleId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.roles.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}/roles/{roleId}' },
    'update: only required params',
    async () => {
      const role = await client.organizations.roles.update('roleId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.roles.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}/roles/{roleId}' },
    'update: required and optional params',
    async () => {
      const role = await client.organizations.roles.update('roleId', {
        organizationId: 'organizationId',
        name: 'x',
        description: '',
        icon: 'key',
        color: 'neutral',
        permissions: ['organization:audit_log:read'],
        isDefault: false,
      });
    },
  );
  smokeCase(
    'organizations.roles.delete:single',
    { operation: 'delete', path: '/v1/organizations/{organizationId}/roles/{roleId}' },
    'delete',
    async () => {
      const role = await client.organizations.roles.delete('roleId', {
        organizationId: 'organizationId',
        replacementRoleId: 'x',
      });
    },
  );
});
