// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Repositories extends APIResource {
  /**
   * List repositories in the authenticated organization. Defaults to enabled repositories.
   *
   * @param {RepositoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryListResponse>} List repositories
   *
   * @example
   * ```ts
   * const repository = await client.repositories.list({
   *   limit: 50,
   *   enabled: 'all',
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
   * Retrieve a repository in the authenticated organization.
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

  /**
   * Update repository configuration or enable or disable it.
   *
   * @param {string} repositoryID
   * @param {RepositoryUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryUpdateResponse>} Update a repository
   *
   * @example
   * ```ts
   * const repository = await client.repositories.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   enabled: false,
   * });
   * ```
   */
  update(
    repositoryID: string,
    body: RepositoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/repositories/${repositoryID}`, { body, ...options });
  }
}

export interface RepositoryListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
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
   * Select enabled repositories, disabled repositories, or all. The public API defaults to enabled repositories.
   * @default all
   */
  enabled?: 'all' | 'true' | 'false';
  /**
   * Filter by repository IDs, supplied as a comma-separated list.
   * @minItems 1
   * @maxItems 100
   */
  ids?: Array<string>;
  /**
   * Filter repositories belonging to this integration.
   * @format uuid
   */
  integrationId?: string;
  /**
   * Sort direction: ascending or descending.
   * @default desc
   */
  order?: 'asc' | 'desc';
  /**
   * Search repository names and owners.
   * @minLength 1
   * @maxLength 500
   */
  search?: string;
  /**
   * Sort by creation time, integration, name, pull request count, or update time.
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

export interface RepositoryUpdateParams {
  /**
   * Enable or disable this repository for Tembo. Disabled by default on creation.
   * @default false
   */
  enabled?: boolean;
  /**
   * Default Git branch to start sessions from. Null clears the override.
   * @minLength 1
   * @maxLength 1024
   */
  baseBranch?: string | null;
  /**
   * Default target branch for agent-created pull requests. Null clears the override.
   * @minLength 1
   * @maxLength 1024
   */
  targetBranch?: string | null;
}

export interface RepositoryUpdateResponse {
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
  provider: RepositoryUpdateResponse.Provider;
  targetBranch: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  url: string;
}

export namespace RepositoryUpdateResponse {
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
    type RepositoryUpdateResponse as RepositoryUpdateResponse,
    type RepositoryListParams as RepositoryListParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
  };
}
