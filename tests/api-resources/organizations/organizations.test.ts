// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource organizations', () => {
  smokeCase(
    'organizations.create:required',
    { operation: 'create', path: '/v1/organizations' },
    'create: only required params',
    async () => {
      const organization = await client.organizations.create({
        name: 'x',
      });
    },
  );
  smokeCase(
    'organizations.create:all',
    { operation: 'create', path: '/v1/organizations' },
    'create: required and optional params',
    async () => {
      const organization = await client.organizations.create({
        name: 'x',
        slug: 'x',
      });
    },
  );
  smokeCase(
    'organizations.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}' },
    'retrieve',
    async () => {
      const organization = await client.organizations.retrieve('organizationId');
    },
  );
  smokeCase(
    'organizations.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}' },
    'update: only required params',
    async () => {
      const organization = await client.organizations.update('organizationId', {});
    },
  );
  smokeCase(
    'organizations.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}' },
    'update: required and optional params',
    async () => {
      const organization = await client.organizations.update('organizationId', {
        name: 'x',
        slug: 'x',
        onboardingCompleted: false,
      });
    },
  );
  smokeCase(
    'organizations.delete:single',
    { operation: 'delete', path: '/v1/organizations/{organizationId}' },
    'delete',
    async () => {
      const organization = await client.organizations.delete('organizationId');
    },
  );
});
