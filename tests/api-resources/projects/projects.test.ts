// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource projects', () => {
  smokeCase(
    'projects.updateDefaults:single',
    { operation: 'updateDefaults', path: '/v1/projects/defaults' },
    'updateDefaults',
    async () => {
      const project = await client.projects.updateDefaults({
        projectId: 'x',
        sandboxSize: 'nano',
      });
    },
  );
  smokeCase(
    'projects.retrieveDefaults:single',
    { operation: 'retrieveDefaults', path: '/v1/projects/defaults' },
    'retrieveDefaults',
    async () => {
      const project = await client.projects.retrieveDefaults();
    },
  );
  smokeCase(
    'projects.list:required',
    { operation: 'list', path: '/v1/projects' },
    'list: only required params',
    async () => {
      const project = await client.projects.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'projects.list:all',
    { operation: 'list', path: '/v1/projects' },
    'list: required and optional params',
    async () => {
      const project = await client.projects.list({
        cursor: 'cursor',
        limit: 50,
        defaultOnly: 'true',
        search: 'search',
      });
    },
  );
  smokeCase(
    'projects.create:required',
    { operation: 'create', path: '/v1/projects' },
    'create: only required params',
    async () => {
      const project = await client.projects.create({
        name: 'x',
        sizes: ['medium'],
        resourceSettings: { automaticSizing: false },
      });
    },
  );
  smokeCase(
    'projects.create:all',
    { operation: 'create', path: '/v1/projects' },
    'create: required and optional params',
    async () => {
      const project = await client.projects.create({
        description: '',
        name: 'x',
        setupScript: '',
        codeRepositoryIds: ['x'],
        agentInstructions: '',
        color: 'neutral',
        icon: 'folder',
        includeDeps: false,
        includeSkills: false,
        onboardingDefault: false,
        runNow: false,
        schedule: {
          cron: 'x',
        },
        sizes: ['medium'],
        resourceSettings: { automaticSizing: false },
      });
    },
  );
  smokeCase(
    'projects.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{projectId}' },
    'retrieve',
    async () => {
      const project = await client.projects.retrieve('projectId');
    },
  );
  smokeCase(
    'projects.update:required',
    { operation: 'update', path: '/v1/projects/{projectId}' },
    'update: only required params',
    async () => {
      const project = await client.projects.update('projectId', {});
    },
  );
  smokeCase(
    'projects.update:all',
    { operation: 'update', path: '/v1/projects/{projectId}' },
    'update: required and optional params',
    async () => {
      const project = await client.projects.update('projectId', {
        description: '',
        name: 'x',
        setupScript: '',
        codeRepositoryIds: ['x'],
        agentInstructions: '',
        color: 'neutral',
        icon: 'folder',
        includeDeps: false,
        includeSkills: false,
        resourceSettings: {
          automaticSizing: true,
        },
        defaultForSizes: ['nano'],
        environmentVariables: {},
        schedule: {},
        sizes: ['nano'],
        warmPoolSchedule: {
          timezone: 'x',
          days: [0],
          startTime: '',
          endTime: '',
        },
        warmPoolEnabled: false,
      });
    },
  );
  smokeCase(
    'projects.delete:single',
    { operation: 'delete', path: '/v1/projects/{projectId}' },
    'delete',
    async () => {
      const project = await client.projects.delete('projectId');
    },
  );
  smokeCase(
    'projects.duplicate:single',
    { operation: 'duplicate', path: '/v1/projects/{projectId}/duplicate' },
    'duplicate',
    async () => {
      const project = await client.projects.duplicate('projectId');
    },
  );
});
