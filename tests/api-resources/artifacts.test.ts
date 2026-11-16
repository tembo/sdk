// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource artifacts', () => {
  smokeCase(
    'artifacts.list:required',
    { operation: 'list', path: '/v1/artifacts' },
    'list: only required params',
    async () => {
      const artifact = await client.artifacts.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'artifacts.list:all',
    { operation: 'list', path: '/v1/artifacts' },
    'list: required and optional params',
    async () => {
      const artifact = await client.artifacts.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        jobId: 'jobId',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        types: ['PullRequest'],
      });
    },
  );
  smokeCase(
    'artifacts.create:required',
    { operation: 'create', path: '/v1/artifacts' },
    'create: only required params',
    async () => {
      const artifact = await client.artifacts.create({
        title: 'x',
        output: {
          type: 'html',
          content: 'x',
        },
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'artifacts.create:all',
    { operation: 'create', path: '/v1/artifacts' },
    'create: required and optional params',
    async () => {
      const artifact = await client.artifacts.create({
        title: 'x',
        description: 'x',
        category: 'code_walkthrough',
        output: {
          type: 'html',
          content: 'x',
        },
        relatedPullRequestUrls: ['https://example.com'],
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'artifacts.retrieve:single',
    { operation: 'retrieve', path: '/v1/artifacts/{artifactId}' },
    'retrieve',
    async () => {
      const artifact = await client.artifacts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'artifacts.retrieveAssetUrl:single',
    { operation: 'retrieveAssetUrl', path: '/v1/artifacts/assets/{assetId}' },
    'retrieveAssetUrl',
    async () => {
      const artifact = await client.artifacts.retrieveAssetURL('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'artifacts.delete:single',
    { operation: 'delete', path: '/v1/artifacts/{artifactId}' },
    'delete',
    async () => {
      const artifact = await client.artifacts.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
