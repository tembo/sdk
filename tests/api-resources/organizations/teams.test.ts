// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource teams', () => {
  smokeCase(
    'organizations.teams.list:required',
    { operation: 'list', path: '/v1/organizations/{organizationId}/teams' },
    'list: only required params',
    async () => {
      const team = await client.organizations.teams.list('organizationId', {
        limit: 50,
      });
    },
  );
  smokeCase(
    'organizations.teams.list:all',
    { operation: 'list', path: '/v1/organizations/{organizationId}/teams' },
    'list: required and optional params',
    async () => {
      const team = await client.organizations.teams.list('organizationId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        member: 'me',
      });
    },
  );
  smokeCase(
    'organizations.teams.create:required',
    { operation: 'create', path: '/v1/organizations/{organizationId}/teams' },
    'create: only required params',
    async () => {
      const team = await client.organizations.teams.create('organizationId', {
        name: 'x',
      });
    },
  );
  smokeCase(
    'organizations.teams.create:all',
    { operation: 'create', path: '/v1/organizations/{organizationId}/teams' },
    'create: required and optional params',
    async () => {
      const team = await client.organizations.teams.create('organizationId', {
        name: 'x',
        icon: 'folder',
        color: 'neutral',
      });
    },
  );
  smokeCase(
    'organizations.teams.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/teams/{teamId}' },
    'retrieve',
    async () => {
      const team = await client.organizations.teams.retrieve('teamId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.teams.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}/teams/{teamId}' },
    'update: only required params',
    async () => {
      const team = await client.organizations.teams.update('teamId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.teams.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}/teams/{teamId}' },
    'update: required and optional params',
    async () => {
      const team = await client.organizations.teams.update('teamId', {
        organizationId: 'organizationId',
        name: 'x',
        icon: 'folder',
        color: 'neutral',
      });
    },
  );
  smokeCase(
    'organizations.teams.delete:single',
    { operation: 'delete', path: '/v1/organizations/{organizationId}/teams/{teamId}' },
    'delete',
    async () => {
      const team = await client.organizations.teams.delete('teamId', {
        organizationId: 'organizationId',
      });
    },
  );
  smokeCase(
    'organizations.teams.addMember:single',
    { operation: 'addMember', path: '/v1/organizations/{organizationId}/teams/{teamId}/members' },
    'addMember',
    async () => {
      const team = await client.organizations.teams.addMember('teamId', {
        organizationId: 'organizationId',
        userId: 'x',
      });
    },
  );
  smokeCase(
    'organizations.teams.removeMember:single',
    { operation: 'removeMember', path: '/v1/organizations/{organizationId}/teams/{teamId}/members/{userId}' },
    'removeMember',
    async () => {
      const team = await client.organizations.teams.removeMember('userId', {
        organizationId: 'organizationId',
        teamId: 'teamId',
      });
    },
  );
});
