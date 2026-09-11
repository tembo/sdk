// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * List active API keys for the current organization.
   *
   * @param {APIKeyListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<APIKeyListResponse>} List API keys
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get('/v1/api-keys', { query, ...options });
  }

  /**
   * Create an API key for the current organization. The complete token is returned only by this operation.
   *
   * @param {APIKeyCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<APIKeyCreateResponse>} Create an API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.create({});
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/v1/api-keys', { body, ...options });
  }

  /**
   * Retrieve an active API key without exposing its complete token.
   *
   * @param {string} apiKeyID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<APIKeyRetrieveResponse>} Retrieve an API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(apiKeyID: string, options?: RequestOptions): APIPromise<APIKeyRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/api-keys/${apiKeyID}`, options);
  }

  /**
   * Rename an active API key.
   *
   * @param {string} apiKeyID
   * @param {APIKeyUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<APIKeyUpdateResponse>} Update an API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   * });
   * ```
   */
  update(
    apiKeyID: string,
    body: APIKeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/api-keys/${apiKeyID}`, { body, ...options });
  }

  /**
   * Revoke an active API key so it can no longer authenticate requests.
   *
   * @param {string} apiKeyID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<APIKeyDeleteResponse>} Delete an API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/api-keys/${apiKeyID}`, options);
  }
}
export interface APIKeyListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface APIKeyListResponse {
  items: Array<APIKeyListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace APIKeyListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format uuid
     */
    id: string;
    name: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    userId: string | null;
    tokenPreview: string;
  }
}

export interface APIKeyCreateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
}

export interface APIKeyCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  name: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  tokenPreview: string;
  token: string;
}

export interface APIKeyRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  name: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  tokenPreview: string;
}

export interface APIKeyUpdateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
}

export interface APIKeyUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  name: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  tokenPreview: string;
}

export interface APIKeyDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace APIKeys {
  export {
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyRetrieveResponse as APIKeyRetrieveResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
  };
}
