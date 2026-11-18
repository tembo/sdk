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
   *   limit: 50,
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
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
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
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
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
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string | null;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
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
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string | null;
  /**
   * @format email
   * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
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
