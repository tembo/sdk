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
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  enabled?: 'true' | 'false' | boolean;
  /**
   * @default false
   */
  includeTotal?: 'true' | 'false' | boolean;
  /**
   * @format uuid
   */
  integrationId?: string;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  search?: string;
  /**
   * @format uuid
   */
  sessionId?: string;
  types?: string | Array<string>;
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
