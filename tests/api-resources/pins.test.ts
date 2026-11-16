// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource pins', () => {
  smokeCase(
    'pins.list:required',
    { operation: 'list', path: '/v1/pins' },
    'list: only required params',
    async () => {
      const pin = await client.pins.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'pins.list:all',
    { operation: 'list', path: '/v1/pins' },
    'list: required and optional params',
    async () => {
      const pin = await client.pins.list({
        cursor: 'cursor',
        limit: 50,
      });
    },
  );
  smokeCase(
    'pins.create:required',
    { operation: 'create', path: '/v1/pins' },
    'create: only required params',
    async () => {
      const pin = await client.pins.create({
        type: 'session',
        id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'pins.create:all',
    { operation: 'create', path: '/v1/pins' },
    'create: required and optional params',
    async () => {
      const pin = await client.pins.create({
        type: 'session',
        id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        placement: {
          target: {
            type: 'session',
            id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
          position: 'before',
        },
      });
    },
  );
  smokeCase(
    'pins.update:single',
    { operation: 'update', path: '/v1/pins/{resourceType}/{resourceId}' },
    'update',
    async () => {
      const pin = await client.pins.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        resourceType: 'session',
        placement: {
          target: {
            type: 'session',
            id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
          position: 'before',
        },
      });
    },
  );
  smokeCase(
    'pins.delete:single',
    { operation: 'delete', path: '/v1/pins/{resourceType}/{resourceId}' },
    'delete',
    async () => {
      const pin = await client.pins.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        resourceType: 'session',
      });
    },
  );
});
