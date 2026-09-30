// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as SettingsAPI from './settings';
import {
  Settings,
  type SettingRetrieveResponse,
  type SettingUpdateResponse,
  type SettingUpdateParams,
} from './settings';
import * as ConnectedAccountsAPI from './connected-accounts';
import {
  ConnectedAccounts,
  type ConnectedAccountListResponse,
  type ConnectedAccountRetrieveResponse,
  type ConnectedAccountListParams,
  type ConnectedAccountRetrieveParams,
} from './connected-accounts';

export class Users extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  connectedAccounts: ConnectedAccountsAPI.ConnectedAccounts = new ConnectedAccountsAPI.ConnectedAccounts(
    this._client,
  );

  /**
   * Retrieve the authenticated user.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserMeResponse>} Retrieve the current user
   *
   * @example
   * ```ts
   * const user = await client.users.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<UserMeResponse> {
    return this._client.get('/v1/users/me', options);
  }

  /**
   * Retrieve a user profile visible to the caller.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserRetrieveResponse>} Retrieve a user
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('userId');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}`, options);
  }

  /**
   * Queue permanent deletion of your user account.
   *
   * @param {string} userID
   * @param {UserDeleteParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserDeleteResponse>} Delete a user
   *
   * @example
   * ```ts
   * const user = await client.users.delete('userId', {});
   * ```
   */
  delete(userID: string, body: UserDeleteParams, options?: RequestOptions): APIPromise<UserDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/users/${userID}`, { body, ...options });
  }
}

export interface UserMeResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  email: string | null;
  emailVerified: boolean;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  image: string | null;
  name: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface UserRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  email: string | null;
  emailVerified: boolean;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  image: string | null;
  name: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface UserDeleteParams {
  deletionQuestionnaire?: UserDeleteParams.DeletionQuestionnaire;
}

export namespace UserDeleteParams {
  export interface DeletionQuestionnaire {
    /**
     * @maxItems 20
     */
    reasons: Array<string>;
    /**
     * @format date-time
     */
    submittedAt: string;
    /**
     * @minLength 1
     * @maxLength 2000
     */
    otherReason?: string;
  }
}

export interface UserDeleteResponse {
  /**
   * @minLength 1
   * @maxLength 255
   */
  deletionJobId: string;
  deletionQueued: true;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
}
Users.Settings = Settings;
Users.ConnectedAccounts = ConnectedAccounts;

export declare namespace Users {
  export {
    type UserMeResponse as UserMeResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };

  export {
    ConnectedAccounts as ConnectedAccounts,
    type ConnectedAccountListResponse as ConnectedAccountListResponse,
    type ConnectedAccountRetrieveResponse as ConnectedAccountRetrieveResponse,
    type ConnectedAccountListParams as ConnectedAccountListParams,
    type ConnectedAccountRetrieveParams as ConnectedAccountRetrieveParams,
  };
}
