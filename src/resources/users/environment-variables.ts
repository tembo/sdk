// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class EnvironmentVariables extends APIResource {
  /**
   * List your personal environment variables in the current organization. Values are never returned.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableListResponse>} List personal environment variables
   *
   * @example
   * ```ts
   * const environmentVariable = await client.users.environmentVariables.list('userId');
   * ```
   */
  list(userID: string, options?: RequestOptions): APIPromise<EnvironmentVariableListResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/environment-variables`, options);
  }

  /**
   * Store an encrypted environment variable that is injected into every session you start in the current organization.
   *
   * @param {string} userID
   * @param {EnvironmentVariableCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableCreateResponse>} Create a personal environment variable
   *
   * @example
   * ```ts
   * const environmentVariable = await client.users.environmentVariables.create('userId', {
   *   key: 'x',
   *   value: 'x',
   * });
   * ```
   */
  create(
    userID: string,
    body: EnvironmentVariableCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableCreateResponse> {
    return this._client.post(__scalarPath`/v1/users/${userID}/environment-variables`, { body, ...options });
  }

  /**
   * Permanently delete a personal environment variable. Sessions started afterwards no longer receive it.
   *
   * @param {string} environmentVariableID
   * @param {EnvironmentVariableDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableDeleteResponse>} Delete a personal environment variable
   *
   * @example
   * ```ts
   * const environmentVariable = await client.users.environmentVariables.delete(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     userId: 'userId',
   *   },
   * );
   * ```
   */
  delete(
    environmentVariableID: string,
    params: EnvironmentVariableDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableDeleteResponse> {
    const { userId } = params;
    return this._client.delete(
      __scalarPath`/v1/users/${userId}/environment-variables/${environmentVariableID}`,
      options,
    );
  }
}

export interface EnvironmentVariableListResponse {
  items: Array<EnvironmentVariableListResponse.Item>;
}

export namespace EnvironmentVariableListResponse {
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
     * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
     */
    key: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface EnvironmentVariableCreateParams {
  /**
   * Environment variable name, e.g. GITHUB_TOKEN.
   * @minLength 1
   * @maxLength 255
   * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
   */
  key: string;
  /**
   * Plaintext value to encrypt and store. List operations never return it.
   * @minLength 1
   * @maxLength 10000
   */
  value: string;
}

export interface EnvironmentVariableCreateResponse {
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
   * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
   */
  key: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface EnvironmentVariableDeleteParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  userId: string;
}

export interface EnvironmentVariableDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableDeleteResponse as EnvironmentVariableDeleteResponse,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}
