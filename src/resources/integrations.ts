// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * List integrations for the authenticated organization.
   *
   * @param {IntegrationListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationListResponse>} List integrations
   *
   * @example
   * ```ts
   * const integration = await client.integrations.list({
   *   limit: '50',
   *   includeTotal: 'false',
   * });
   * ```
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListResponse> {
    return this._client.get('/v1/integrations', { query, ...options });
  }

  /**
   * Retrieve an integration for the authenticated organization.
   *
   * @param {string} integrationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationRetrieveResponse>} Retrieve an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(integrationID: string, options?: RequestOptions): APIPromise<IntegrationRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/integrations/${integrationID}`, options);
  }
}
export interface IntegrationListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  enabled?: 'true' | 'false';
  hasEnabledRepositories?: 'true' | 'false';
  ids?: string | Array<string>;
  /**
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
  type?: string | Array<string>;
  /**
   * @format date-time
   */
  createdAfter?: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  excludeOrganizationName?: string;
  /**
   * @default false
   */
  includeTotal?: 'true' | 'false';
}

export interface IntegrationListResponse {
  items: Array<IntegrationListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
  /**
   * @minimum 0
   */
  totalCount?: number;
}

export namespace IntegrationListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    displayName: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    id: string;
    /**
     * @format date-time
     */
    lastSyncedAt: string | null;
    /**
     * @minimum 0
     */
    repositoryCount: number;
    /**
     * @minimum 0
     */
    sourceCount: number;
    /**
     * @minLength 1
     * @maxLength 100
     */
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface IntegrationRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  displayName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  id: string;
  /**
   * @format date-time
   */
  lastSyncedAt: string | null;
  /**
   * @minimum 0
   */
  repositoryCount: number;
  /**
   * @minimum 0
   */
  sourceCount: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}
export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationListParams as IntegrationListParams,
  };
}
