// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class ConnectedAccounts extends APIResource {
  /**
   * List the user identity-provider accounts without returning credentials.
   *
   * @param {string} userID
   * @param {ConnectedAccountListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ConnectedAccountListResponse>} List user connected accounts
   *
   * @example
   * ```ts
   * const connectedAccount = await client.users.connectedAccounts.list('userId', {
   *   limit: '50',
   * });
   * ```
   */
  list(
    userID: string,
    query: ConnectedAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectedAccountListResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/connected-accounts`, { query, ...options });
  }

  /**
   * Retrieve one identity-provider account without returning credentials.
   *
   * @param {string} connectedAccountID
   * @param {ConnectedAccountRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ConnectedAccountRetrieveResponse>} Retrieve a user connected account
   *
   * @example
   * ```ts
   * const connectedAccount = await client.users.connectedAccounts.retrieve('connectedAccountId', {
   *   userId: 'userId',
   * });
   * ```
   */
  retrieve(
    connectedAccountID: string,
    params: ConnectedAccountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedAccountRetrieveResponse> {
    const { userId } = params;
    return this._client.get(
      __scalarPath`/v1/users/${userId}/connected-accounts/${connectedAccountID}`,
      options,
    );
  }
}

export interface ConnectedAccountListParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface ConnectedAccountListResponse {
  items: Array<ConnectedAccountListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
}

export namespace ConnectedAccountListResponse {
  export interface Item {
    accountId: string;
    /**
     * @format date-time
     */
    createdAt: string | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    providerId: string;
    /**
     * @format date-time
     */
    updatedAt: string | null;
    /**
     * @format email
     */
    email: string | null;
    scopes: Array<string>;
    username: string | null;
  }
}

export interface ConnectedAccountRetrieveParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  userId: string;
}

export interface ConnectedAccountRetrieveResponse {
  accountId: string;
  /**
   * @format date-time
   */
  createdAt: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  providerId: string;
  /**
   * @format date-time
   */
  updatedAt: string | null;
  /**
   * @format email
   */
  email: string | null;
  scopes: Array<string>;
  username: string | null;
}
export declare namespace ConnectedAccounts {
  export {
    type ConnectedAccountListResponse as ConnectedAccountListResponse,
    type ConnectedAccountRetrieveResponse as ConnectedAccountRetrieveResponse,
    type ConnectedAccountListParams as ConnectedAccountListParams,
    type ConnectedAccountRetrieveParams as ConnectedAccountRetrieveParams,
  };
}
