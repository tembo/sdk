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
   *   limit: '50',
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
  authorIds?: string | Array<string>;
  /**
   * @format date-time
   */
  createdAfter?: string;
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  excludeAuthorIds?: string | Array<string>;
  /**
   * @minLength 1
   */
  excludeOrganizationName?: string;
  excludeReturnedAuthorIds?: string | Array<string>;
  excludeReviewerIds?: string | Array<string>;
  hasTemboSession?: 'true' | 'false';
  includeAuthors?: 'true' | 'false';
  includeTotal?: 'true' | 'false';
  repositoryIds?: string | Array<string>;
  reviewerIds?: string | Array<string>;
  /**
   * @format date-time
   */
  mergedAfter?: string;
  /**
   * @minLength 1
   */
  search?: string;
  sortBy?: 'createdAt' | 'updatedAt';
  state?: 'open' | 'returned' | 'approved' | 'needs review' | 'draft' | 'merged' | 'closed';
  /**
   * @format date-time
   */
  updatedAfter?: string;
}

export interface PullRequestListResponse {
  items: Array<PullRequestListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
  /**
   * @minimum 0
   */
  totalCount?: number;
}

export namespace PullRequestListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    description: string | null;
    externalId: string;
    externalProvider: string;
    id: string;
    isDraft: boolean;
    /**
     * @format date-time
     */
    mergedAt: string | null;
    reviewDecision: 'APPROVED' | 'CHANGES_REQUESTED' | 'REVIEW_REQUIRED' | null;
    sourceBranch: string | null;
    status: 'open' | 'merged' | 'closed';
    title: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    url: string;
    author: Item.Author;
    baseBranch: string | null;
    codeRepository: Item.CodeRepository | null;
    headSha: string | null;
    /**
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
       */
      additions: number;
      /**
       * @minimum 0
       */
      deletions: number;
    }

    export interface Session {
      /**
       * @format uuid
       */
      id: string;
      title: string;
      kind: string;
      htmlUrl: string;
      visibility?: 'private' | 'public';
    }
  }
}

export interface PullRequestRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string | null;
  externalId: string;
  externalProvider: string;
  id: string;
  isDraft: boolean;
  /**
   * @format date-time
   */
  mergedAt: string | null;
  reviewDecision: 'APPROVED' | 'CHANGES_REQUESTED' | 'REVIEW_REQUIRED' | null;
  sourceBranch: string | null;
  status: 'open' | 'merged' | 'closed';
  title: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  url: string;
  author: PullRequestRetrieveResponse.Author;
  baseBranch: string | null;
  codeRepository: PullRequestRetrieveResponse.CodeRepository | null;
  diff: PullRequestRetrieveResponse.Diff | null;
  headSha: string | null;
  /**
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
     */
    additions: number;
    /**
     * @minimum 0
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
     */
    id: string;
    title: string;
    kind: string;
    htmlUrl: string;
    visibility?: 'private' | 'public';
  }
}
export declare namespace PullRequests {
  export {
    type PullRequestListResponse as PullRequestListResponse,
    type PullRequestRetrieveResponse as PullRequestRetrieveResponse,
    type PullRequestListParams as PullRequestListParams,
  };
}
