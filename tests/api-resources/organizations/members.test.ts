// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource members', () => {
  smokeCase(
    'organizations.members.list:required',
    { operation: 'list', path: '/v1/organizations/{organizationId}/members' },
    'list: only required params',
    async () => {
      const member = await client.organizations.members.list('organizationId', {
        limit: 50,
        status: 'active',
      });
    },
  );
  smokeCase(
    'organizations.members.list:all',
    { operation: 'list', path: '/v1/organizations/{organizationId}/members' },
    'list: required and optional params',
    async () => {
      const member = await client.organizations.members.list('organizationId', {
        cursor: 'cursor',
        limit: 50,
        search: 'search',
        status: 'active',
      });
    },
  );
  smokeCase(
    'organizations.members.create:required',
    { operation: 'create', path: '/v1/organizations/{organizationId}/members' },
    'create: only required params',
    async () => {
      const member = await client.organizations.members.create('organizationId', {
        emailAddress: 'user@example.com',
        roleId: 'x',
      });
    },
  );
  smokeCase(
    'organizations.members.create:all',
    { operation: 'create', path: '/v1/organizations/{organizationId}/members' },
    'create: required and optional params',
    async () => {
      const member = await client.organizations.members.create('organizationId', {
        emailAddress: 'user@example.com',
        roleId: 'x',
        teamIds: ['x'],
      });
    },
  );
  smokeCase(
    'organizations.members.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/members/{memberId}' },
    'retrieve',
    async () => {
      const member = await client.organizations.members.retrieve('memberId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.members.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}/members/{memberId}' },
    'update: only required params',
    async () => {
      const member = await client.organizations.members.update('memberId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.members.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}/members/{memberId}' },
    'update: required and optional params',
    async () => {
      const member = await client.organizations.members.update('memberId', {
        organizationId: 'organizationId',
        roleId: '',
      });
    },
  );
  smokeCase(
    'organizations.members.delete:single',
    { operation: 'delete', path: '/v1/organizations/{organizationId}/members/{memberId}' },
    'delete',
    async () => {
      const member = await client.organizations.members.delete('memberId', {
        organizationId: 'organizationId',
      });
    },
  );
});
