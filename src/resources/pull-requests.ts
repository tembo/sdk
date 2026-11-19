// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class PullRequests extends APIResource {
  /**
   * List pull requests for the authenticated organization with cursor pagination.
   *
   * @param {PullRequestListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PullRequestListResponse>} List pull requests
   *
   * @example
   * ```ts
   * const pullRequest = await client.pullRequests.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: PullRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PullRequestListResponse> {
    return this._client.get('/v1/pull-requests', { query, ...options });
  }

  /**
   * Retrieve a pull request for the authenticated organization.
   *
   * @param {string} pullRequestID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PullRequestRetrieveResponse>} Retrieve a pull request
   *
   * @example
   * ```ts
   * const pullRequest = await client.pullRequests.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(pullRequestID: string, options?: RequestOptions): APIPromise<PullRequestRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/pull-requests/${pullRequestID}`, options);
  }
}

export interface PullRequestListParams {
  /**
   * Filter authors by comma-separated provider:identifier values, such as github:octocat.
   */
  authorIds?: Array<string>;
  /**
   * Only pull requests created after this ISO 8601 timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAfter?: string;
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Exclude authors by comma-separated provider:identifier values.
   */
  excludeAuthorIds?: Array<string>;
  /**
   * Exclude pull requests from the named organization within the caller access scope.
   * @minLength 1
   */
  excludeOrganizationName?: string;
  /**
   * Exclude returned pull requests by these comma-separated provider:identifier author values.
   */
  excludeReturnedAuthorIds?: Array<string>;
  /**
   * Exclude pull requests assigned to these comma-separated reviewer identifiers.
   */
  excludeReviewerIds?: Array<string>;
  /**
   * When true, only return pull requests with a linked Tembo session.
   */
  hasTemboSession?: boolean;
  /**
   * Request author filter options. Public responses do not include organization-wide author options.
   */
  includeAuthors?: boolean;
  /**
   * Include the total count of matching pull requests.
   */
  includeTotal?: boolean;
  /**
   * Include each open pull request's position in its stack of dependent pull requests. Public responses do not include stacks.
   */
  includeStacks?: boolean;
  /**
   * Filter by repository IDs, supplied as a comma-separated list.
   */
  repositoryIds?: Array<string>;
  /**
   * Filter by assigned reviewer identifiers, supplied as a comma-separated list.
   */
  reviewerIds?: Array<string>;
  /**
   * Only pull requests merged after this ISO 8601 timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  mergedAfter?: string;
  /**
   * Search pull requests.
   * @minLength 1
   */
  search?: string;
  /**
   * Sort by creation time or last update time.
   */
  sortBy?: 'createdAt' | 'updatedAt';
  /**
   * Filter by lifecycle or review state, including open, returned, approved, needs review, draft, merged, or closed.
   */
  state?: 'open' | 'returned' | 'approved' | 'needs review' | 'draft' | 'merged' | 'closed';
  /**
   * Only pull requests updated after this ISO 8601 timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAfter?: string;
}

export interface PullRequestListResponse {
  items: Array<PullRequestListResponse.Item>;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  nextCursor: string | null;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  totalCount?: number;
}

export namespace PullRequestListResponse {
  export interface Item {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    description: string | null;
    externalId: string;
    externalProvider: string;
    id: string;
    isDraft: boolean;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    mergedAt: string | null;
    reviewDecision: 'APPROVED' | 'CHANGES_REQUESTED' | 'REVIEW_REQUIRED' | null;
    sourceBranch: string | null;
    status: 'open' | 'merged' | 'closed';
    title: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    url: string;
    author: Item.Author;
    baseBranch: string | null;
    codeRepository: Item.CodeRepository | null;
    headSha: string | null;
    /**
     * @maximum 9007199254740991
     * @exclusiveMinimum 0
     */
    number: number | null;
    owner: string | null;
    reviewers: Array<Item.Reviewer>;
    state: 'approved' | 'needs review' | 'draft' | 'merged' | 'closed';
    approvers: Array<Item.Approver>;
    diff: Item.Diff | null;
    session: Item.Session | null;
  }

  export namespace Item {
    export interface Author {
      id: string | null;
      login: string | null;
      name: string | null;
      avatarUrl: string | null;
      profileUrl: string | null;
    }

    export interface CodeRepository {
      /**
       * @format uuid
       * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
       */
      id: string;
      name: string;
      url: string;
      owner: string | null;
      targetBranch: string | null;
      baseBranch: string | null;
      provider: string;
    }

    export interface Reviewer {
      id: string;
      login: string;
      name: string;
      avatarUrl: string | null;
      profileUrl: string | null;
      reviewRequested: boolean;
      commented: boolean;
      approved: boolean;
      type?: 'bot' | 'user';
      state?: 'approved' | 'changes_requested' | 'commented' | 'awaiting';
      changesRequested?: boolean;
      awaitingReview?: boolean;
    }

    export interface Approver {
      login: string;
      avatarUrl: string | null;
    }

    export interface Diff {
      /**
       * @minimum 0
       * @maximum 9007199254740991
       */
      additions: number;
      /**
       * @minimum 0
       * @maximum 9007199254740991
       */
      deletions: number;
    }

    export interface Session {
      /**
       * @format uuid
       * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
       */
      id: string;
      title: string;
      kind: string;
      htmlUrl: string;
    }
  }
}

export interface PullRequestRetrieveResponse {
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  description: string | null;
  externalId: string;
  externalProvider: string;
  id: string;
  isDraft: boolean;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  mergedAt: string | null;
  reviewDecision: 'APPROVED' | 'CHANGES_REQUESTED' | 'REVIEW_REQUIRED' | null;
  sourceBranch: string | null;
  status: 'open' | 'merged' | 'closed';
  title: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  url: string;
  author: PullRequestRetrieveResponse.Author;
  baseBranch: string | null;
  codeRepository: PullRequestRetrieveResponse.CodeRepository | null;
  diff: PullRequestRetrieveResponse.Diff | null;
  headSha: string | null;
  /**
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  number: number | null;
  owner: string | null;
  reviewers: Array<PullRequestRetrieveResponse.Reviewer>;
  state: 'approved' | 'needs review' | 'draft' | 'merged' | 'closed';
  session: PullRequestRetrieveResponse.Session | null;
}

export namespace PullRequestRetrieveResponse {
  export interface Author {
    id: string | null;
    login: string | null;
    name: string | null;
    avatarUrl: string | null;
    profileUrl: string | null;
  }

  export interface CodeRepository {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    name: string;
    url: string;
    owner: string | null;
    targetBranch: string | null;
    baseBranch: string | null;
    provider: string;
  }

  export interface Diff {
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    additions: number;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    deletions: number;
    data: string;
  }

  export interface Reviewer {
    id: string;
    login: string;
    name: string;
    avatarUrl: string | null;
    profileUrl: string | null;
    reviewRequested: boolean;
    commented: boolean;
    approved: boolean;
    type?: 'bot' | 'user';
    state?: 'approved' | 'changes_requested' | 'commented' | 'awaiting';
    changesRequested?: boolean;
    awaitingReview?: boolean;
  }

  export interface Session {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    title: string;
    kind: string;
    htmlUrl: string;
  }
}
export declare namespace PullRequests {
  export {
    type PullRequestListResponse as PullRequestListResponse,
    type PullRequestRetrieveResponse as PullRequestRetrieveResponse,
    type PullRequestListParams as PullRequestListParams,
  };
}
