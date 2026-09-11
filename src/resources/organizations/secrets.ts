// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * List redacted organization secret summaries with cursor pagination.
   *
   * @param {string} organizationID
   * @param {SecretListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SecretListResponse>} List organization secrets
   *
   * @example
   * ```ts
   * const secret = await client.organizations.secrets.list('organizationId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    organizationID: string,
    query: SecretListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecretListResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/secrets`, { query, ...options });
  }

  /**
   * Create an encrypted organization secret.
   *
   * @param {string} organizationID
   * @param {SecretCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SecretCreateResponse>} Create an organization secret
   *
   * @example
   * ```ts
   * const secret = await client.organizations.secrets.create('organizationId', {
   *   key: 'x',
   *   value: 'x',
   * });
   * ```
   */
  create(
    organizationID: string,
    body: SecretCreateParams,
    options?: RequestOptions,
  ): APIPromise<SecretCreateResponse> {
    return this._client.post(__scalarPath`/v1/organizations/${organizationID}/secrets`, { body, ...options });
  }

  /**
   * Retrieve a redacted organization secret summary.
   *
   * @param {string} secretID
   * @param {SecretRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SecretRetrieveResponse>} Retrieve an organization secret
   *
   * @example
   * ```ts
   * const secret = await client.organizations.secrets.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  retrieve(
    secretID: string,
    params: SecretRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SecretRetrieveResponse> {
    const { organizationId } = params;
    return this._client.get(__scalarPath`/v1/organizations/${organizationId}/secrets/${secretID}`, options);
  }

  /**
   * Update a secret name, encrypted value, or both.
   *
   * @param {string} secretID
   * @param {SecretUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SecretUpdateResponse>} Update an organization secret
   *
   * @example
   * ```ts
   * const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  update(
    secretID: string,
    params: SecretUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SecretUpdateResponse> {
    const { organizationId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/organizations/${organizationId}/secrets/${secretID}`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently delete an organization secret.
   *
   * @param {string} secretID
   * @param {SecretDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SecretDeleteResponse>} Delete an organization secret
   *
   * @example
   * ```ts
   * const secret = await client.organizations.secrets.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  delete(
    secretID: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { organizationId } = params;
    return this._client.delete(
      __scalarPath`/v1/organizations/${organizationId}/secrets/${secretID}`,
      options,
    );
  }
}
export interface SecretListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  /**
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
}

export interface SecretListResponse {
  items: Array<SecretListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace SecretListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    key: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface SecretCreateParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  key: string;
  /**
   * @minLength 1
   * @maxLength 64000
   */
  value: string;
}

export interface SecretCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  key: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface SecretRetrieveParams {
  organizationId: string;
}

export interface SecretRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  key: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface SecretUpdateParams {
  /**
   * Path param
   */
  organizationId: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 255
   */
  key?: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 64000
   */
  value?: string;
}

export interface SecretUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  key: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface SecretDeleteParams {
  organizationId: string;
}

export interface SecretDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Secrets {
  export {
    type SecretListResponse as SecretListResponse,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretRetrieveResponse as SecretRetrieveResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretListParams as SecretListParams,
    type SecretCreateParams as SecretCreateParams,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretDeleteParams as SecretDeleteParams,
  };
}
