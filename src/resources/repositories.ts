// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Repositories extends APIResource {
  /**
   * List enabled repositories in the authenticated organization.
   *
   * @param {RepositoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryListResponse>} List repositories
   *
   * @example
   * ```ts
   * const repository = await client.repositories.list({
   *   limit: 50,
   *   order: 'desc',
   *   sort: 'pullRequests',
   * });
   * ```
   */
  list(
    query: RepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryListResponse> {
    return this._client.get('/v1/repositories', { query, ...options });
  }

  /**
   * Retrieve an enabled repository in the authenticated organization.
   *
   * @param {string} repositoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryRetrieveResponse>} Retrieve a repository
   *
   * @example
   * ```ts
   * const repository = await client.repositories.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(repositoryID: string, options?: RequestOptions): APIPromise<RepositoryRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/repositories/${repositoryID}`, options);
  }
}
export interface RepositoryListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  ids?: string | Array<string>;
  /**
   * @format uuid
   */
  integrationId?: string;
  /**
   * @default desc
   */
  order?: 'asc' | 'desc';
  /**
   * @minLength 1
   * @maxLength 500
   */
  search?: string;
  /**
   * @default pullRequests
   */
  sort?: 'createdAt' | 'integration' | 'name' | 'pullRequests' | 'updatedAt';
}

export interface RepositoryListResponse {
  items: Array<RepositoryListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace RepositoryListResponse {
  export interface Item {
    baseBranch: string | null;
    /**
     * @format date-time
     */
    createdAt: string;
    description: string | null;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    owner: string | null;
    provider: Item.Provider;
    targetBranch: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    url: string;
  }

  export namespace Item {
    export interface Provider {
      /**
       * @minLength 1
       * @maxLength 500
       */
      displayName: string;
      /**
       * @format uuid
       */
      integrationId: string;
      /**
       * @minLength 1
       * @maxLength 100
       */
      type: string;
    }
  }
}

export interface RepositoryRetrieveResponse {
  baseBranch: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  description: string | null;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  owner: string | null;
  provider: RepositoryRetrieveResponse.Provider;
  targetBranch: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  url: string;
}

export namespace RepositoryRetrieveResponse {
  export interface Provider {
    /**
     * @minLength 1
     * @maxLength 500
     */
    displayName: string;
    /**
     * @format uuid
     */
    integrationId: string;
    /**
     * @minLength 1
     * @maxLength 100
     */
    type: string;
  }
}
export declare namespace Repositories {
  export {
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryRetrieveResponse as RepositoryRetrieveResponse,
    type RepositoryListParams as RepositoryListParams,
  };
}
