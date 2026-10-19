// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Sources extends APIResource {
  /**
   * List session sources in the authenticated organization.
   *
   * @param {SourceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SourceListResponse>} List session sources
   *
   * @example
   * ```ts
   * const source = await client.sessions.sources.list({
   *   limit: 50,
   *   includeTotal: false,
   * });
   * ```
   */
  list(
    query: SourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceListResponse> {
    return this._client.get('/v1/sessions/sources', { query, ...options });
  }

  /**
   * Retrieve one session source.
   *
   * @param {string} sourceID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SourceRetrieveResponse>} Retrieve a session source
   *
   * @example
   * ```ts
   * const source = await client.sessions.sources.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(sourceID: string, options?: RequestOptions): APIPromise<SourceRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/sessions/sources/${sourceID}`, options);
  }
}

export interface SourceListParams {
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
   * Filter by whether the source is enabled.
   */
  enabled?: boolean;
  /**
   * Include totalCount for matching sources.
   * @default false
   */
  includeTotal?: boolean;
  /**
   * Filter sources belonging to this integration.
   * @format uuid
   */
  integrationId?: string;
  /**
   * Search session source names or types.
   * @minLength 1
   * @maxLength 1000
   */
  search?: string;
  /**
   * Find the source associated with an accessible session.
   * @format uuid
   */
  sessionId?: string;
  /**
   * Filter source types, supplied as a comma-separated list.
   */
  types?: Array<string>;
}

export interface SourceListResponse {
  items: Array<SourceListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
  /**
   * @minimum 0
   */
  totalCount?: number;
}

export namespace SourceListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    externalId: string | null;
    externalUrl: string | null;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format date-time
     */
    lastScannedAt: string | null;
    /**
     * @format date-time
     */
    lastSeenAt: string | null;
    name: string;
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    integration: Item.Integration | null;
    repositories: Array<Item.Repository>;
  }

  export namespace Item {
    export interface Integration {
      type: string;
    }

    export interface Repository {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      owner: string | null;
      baseBranch: string | null;
      provider: string;
    }
  }
}

export interface SourceRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  externalId: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format date-time
   */
  lastScannedAt: string | null;
  /**
   * @format date-time
   */
  lastSeenAt: string | null;
  name: string;
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  integration: SourceRetrieveResponse.Integration | null;
  repositories: Array<SourceRetrieveResponse.Repository>;
}

export namespace SourceRetrieveResponse {
  export interface Integration {
    type: string;
  }

  export interface Repository {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    owner: string | null;
    baseBranch: string | null;
    provider: string;
  }
}
export declare namespace Sources {
  export {
    type SourceListResponse as SourceListResponse,
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceListParams as SourceListParams,
  };
}
