// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Marketplace extends APIResource {
  /**
   * List popular marketplace skills or search the catalog. Results have no continuation cursor.
   *
   * @param {MarketplaceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketplaceListResponse>} List marketplace skills
   *
   * @example
   * ```ts
   * const marketplace = await client.skills.marketplace.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: MarketplaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketplaceListResponse> {
    return this._client.get('/v1/skills/marketplace', { query, ...options });
  }

  /**
   * Retrieve the files and content hash for a marketplace skill. This does not install the skill.
   *
   * @param {string} skillID
   * @param {MarketplaceRetrieveParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketplaceRetrieveResponse>} Retrieve a marketplace skill
   *
   * @example
   * ```ts
   * const marketplace = await client.skills.marketplace.retrieve('skillId', {
   *   source: 'source',
   * });
   * ```
   */
  retrieve(
    skillID: string,
    query: MarketplaceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/skills/marketplace/${skillID}`, { query, ...options });
  }
}

export interface MarketplaceListParams {
  /**
   * No continuation cursor is supported for marketplace results.
   */
  cursor?: '';
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Search the marketplace catalog. Omit to list popular skills.
   * @minLength 1
   * @maxLength 500
   */
  search?: string;
}

export interface MarketplaceListResponse {
  items: Array<MarketplaceListResponse.Item>;
  /**
   * Always null; marketplace results have no continuation page.
   */
  nextCursor: null;
}

export namespace MarketplaceListResponse {
  export interface Item {
    source: string;
    /**
     * @maxLength 255
     * @pattern ^[a-zA-Z0-9][a-zA-Z0-9_.-]*$
     */
    skillId: string;
    /**
     * @minLength 1
     */
    name: string;
    /**
     * @minimum 0
     */
    installs: number;
  }
}

export interface MarketplaceRetrieveParams {
  /**
   * The source repository in owner/repo format. Domain-only sources cannot be downloaded and return 404.
   */
  source: string;
}

export interface MarketplaceRetrieveResponse {
  source: string;
  /**
   * @maxLength 255
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9_.-]*$
   */
  skillId: string;
  /**
   * @minItems 1
   */
  files: Array<MarketplaceRetrieveResponse.File>;
  /**
   * @minLength 1
   */
  hash: string;
}

export namespace MarketplaceRetrieveResponse {
  export interface File {
    content: string;
    /**
     * @minLength 1
     */
    filename: string;
  }
}
export declare namespace Marketplace {
  export {
    type MarketplaceListResponse as MarketplaceListResponse,
    type MarketplaceRetrieveResponse as MarketplaceRetrieveResponse,
    type MarketplaceListParams as MarketplaceListParams,
    type MarketplaceRetrieveParams as MarketplaceRetrieveParams,
  };
}
