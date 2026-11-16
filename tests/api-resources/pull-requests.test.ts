// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource pullRequests', () => {
  smokeCase(
    'pullRequests.list:required',
    { operation: 'list', path: '/v1/pull-requests' },
    'list: only required params',
    async () => {
      const pullRequest = await client.pullRequests.list({
        limit: 50,
      });
    },
  );
  smokeCase(
    'pullRequests.list:all',
    { operation: 'list', path: '/v1/pull-requests' },
    'list: required and optional params',
    async () => {
      const pullRequest = await client.pullRequests.list({
        authorIds: ['authorId'],
        createdAfter: '2024-01-01T00:00:00.000Z',
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        excludeAuthorIds: ['excludeAuthorId'],
        excludeOrganizationName: 'excludeOrganizationName',
        excludeReturnedAuthorIds: ['excludeReturnedAuthorId'],
        excludeReviewerIds: ['excludeReviewerId'],
        hasTemboSession: true,
        includeAuthors: true,
        includeTotal: true,
        includeStacks: true,
        repositoryIds: ['repositoryId'],
        reviewerIds: ['reviewerId'],
        mergedAfter: '2024-01-01T00:00:00.000Z',
        search: 'search',
        sortBy: 'createdAt',
        state: 'open',
        updatedAfter: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'pullRequests.retrieve:single',
    { operation: 'retrieve', path: '/v1/pull-requests/{pullRequestId}' },
    'retrieve',
    async () => {
      const pullRequest = await client.pullRequests.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});
