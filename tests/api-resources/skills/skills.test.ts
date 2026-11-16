// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource skills', () => {
  smokeCase(
    'skills.list:required',
    { operation: 'list', path: '/v1/skills' },
    'list: only required params',
    async () => {
      const skill = await client.skills.list({
        limit: 50,
        source: 'organization',
      });
    },
  );
  smokeCase(
    'skills.list:all',
    { operation: 'list', path: '/v1/skills' },
    'list: required and optional params',
    async () => {
      const skill = await client.skills.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        names: ['name'],
        repositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        projectId: 'projectId',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: 'search',
        source: 'organization',
      });
    },
  );
  smokeCase('skills.create:single', { operation: 'create', path: '/v1/skills' }, 'create', async () => {
    const skill = await client.skills.create({
      description: '',
      name: 'x',
      files: [
        {
          content: '',
          encoding: 'utf8',
          filename: 'x',
        },
      ],
    });
  });
  smokeCase(
    'skills.retrieve:single',
    { operation: 'retrieve', path: '/v1/skills/{skillId}' },
    'retrieve',
    async () => {
      const skill = await client.skills.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'skills.update:required',
    { operation: 'update', path: '/v1/skills/{skillId}' },
    'update: only required params',
    async () => {
      const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  );
  smokeCase(
    'skills.update:all',
    { operation: 'update', path: '/v1/skills/{skillId}' },
    'update: required and optional params',
    async () => {
      const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        description: '',
        name: 'x',
        files: [
          {
            content: '',
            encoding: 'utf8',
            filename: 'x',
          },
        ],
      });
    },
  );
  smokeCase(
    'skills.delete:single',
    { operation: 'delete', path: '/v1/skills/{skillId}' },
    'delete',
    async () => {
      const skill = await client.skills.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
