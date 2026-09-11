// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as ConnectedAccountsAPI from './connected-accounts';
import {
  ConnectedAccounts,
  type ConnectedAccountListResponse,
  type ConnectedAccountRetrieveResponse,
  type ConnectedAccountListParams,
  type ConnectedAccountRetrieveParams,
} from './connected-accounts';

export class Users extends APIResource {
  connectedAccounts: ConnectedAccountsAPI.ConnectedAccounts = new ConnectedAccountsAPI.ConnectedAccounts(
    this._client,
  );

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
   * Update your user profile and onboarding information.
   *
   * @param {string} userID
   * @param {UserUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UserUpdateResponse>} Update a user
   *
   * @example
   * ```ts
   * const user = await client.users.update('userId', {
   *   onboarding: {
   *     positionInCompany: 'x',
   *     useCase: 'x',
   *     howDidYouHear: 'x',
   *   },
   * });
   * ```
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/users/${userID}`, { body, ...options });
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
  onboarding: UserRetrieveResponse.Onboarding | null;
}

export namespace UserRetrieveResponse {
  export interface Onboarding {
    /**
     * @minLength 1
     * @maxLength 255
     */
    positionInCompany: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    useCase: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    howDidYouHear: string;
  }
}

export interface UserUpdateParams {
  onboarding: UserUpdateParams.Onboarding;
}

export namespace UserUpdateParams {
  export interface Onboarding {
    /**
     * @minLength 1
     * @maxLength 255
     */
    positionInCompany: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    useCase: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    howDidYouHear: string;
  }
}

export interface UserUpdateResponse {
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
  onboarding: UserUpdateResponse.Onboarding | null;
}

export namespace UserUpdateResponse {
  export interface Onboarding {
    /**
     * @minLength 1
     * @maxLength 255
     */
    positionInCompany: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    useCase: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    howDidYouHear: string;
  }
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
Users.ConnectedAccounts = ConnectedAccounts;

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    ConnectedAccounts as ConnectedAccounts,
    type ConnectedAccountListResponse as ConnectedAccountListResponse,
    type ConnectedAccountRetrieveResponse as ConnectedAccountRetrieveResponse,
    type ConnectedAccountListParams as ConnectedAccountListParams,
    type ConnectedAccountRetrieveParams as ConnectedAccountRetrieveParams,
  };
}
