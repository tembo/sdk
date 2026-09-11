// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Members extends APIResource {
  /**
   * List active members or pending invitations with cursor pagination.
   *
   * @param {string} organizationID
   * @param {MemberListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberListResponse>} List organization members
   *
   * @example
   * ```ts
   * const member = await client.organizations.members.list('organizationId', {
   *   limit: 50,
   *   status: 'active',
   * });
   * ```
   */
  list(
    organizationID: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/members`, { query, ...options });
  }

  /**
   * Invite or add a user to an organization with a role.
   *
   * @param {string} organizationID
   * @param {MemberCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberCreateResponse>} Create an organization member
   *
   * @example
   * ```ts
   * const member = await client.organizations.members.create('organizationId', {
   *   emailAddress: 'user@example.com',
   *   role: 'org:member',
   * });
   * ```
   */
  create(
    organizationID: string,
    body: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MemberCreateResponse> {
    return this._client.post(__scalarPath`/v1/organizations/${organizationID}/members`, { body, ...options });
  }

  /**
   * Retrieve an active member or pending member invitation.
   *
   * @param {string} memberID
   * @param {MemberRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberRetrieveResponse>} Retrieve an organization member
   *
   * @example
   * ```ts
   * const member = await client.organizations.members.retrieve('memberId', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  retrieve(
    memberID: string,
    params: MemberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MemberRetrieveResponse> {
    const { organizationId } = params;
    return this._client.get(__scalarPath`/v1/organizations/${organizationId}/members/${memberID}`, options);
  }

  /**
   * Update an organization member role.
   *
   * @param {string} memberID
   * @param {MemberUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberUpdateResponse>} Update an organization member
   *
   * @example
   * ```ts
   * const member = await client.organizations.members.update('memberId', {
   *   organizationId: 'organizationId',
   *   role: 'org:admin',
   * });
   * ```
   */
  update(
    memberID: string,
    params: MemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MemberUpdateResponse> {
    const { organizationId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/organizations/${organizationId}/members/${memberID}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an active member or revoke a pending invitation.
   *
   * @param {string} memberID
   * @param {MemberDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberDeleteResponse>} Delete an organization member
   *
   * @example
   * ```ts
   * const member = await client.organizations.members.delete('memberId', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  delete(
    memberID: string,
    params: MemberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemberDeleteResponse> {
    const { organizationId } = params;
    return this._client.delete(
      __scalarPath`/v1/organizations/${organizationId}/members/${memberID}`,
      options,
    );
  }
}
export interface MemberListParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  search?: string;
  /**
   * @default active
   */
  status?: 'active' | 'pending';
}

export interface MemberListResponse {
  items: Array<MemberListResponse.Item>;
  nextCursor: string | null;
}

export namespace MemberListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    role: 'org:admin' | 'org:member';
    /**
     * @format date-time
     */
    updatedAt: string;
    userId: string | null;
    /**
     * @format email
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    status: 'active' | 'pending';
  }
}

export interface MemberCreateParams {
  /**
   * @format email
   */
  emailAddress: string;
  /**
   * @default org:member
   */
  role?: 'org:admin' | 'org:member';
}

export interface MemberCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  role: 'org:admin' | 'org:member';
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  /**
   * @format email
   */
  emailAddress: string;
  firstName: string | null;
  /**
   * @format uri
   */
  imageUrl: string | null;
  lastName: string | null;
  status: 'active' | 'pending';
}

export interface MemberRetrieveParams {
  organizationId: string;
}

export interface MemberRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  role: 'org:admin' | 'org:member';
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  /**
   * @format email
   */
  emailAddress: string;
  firstName: string | null;
  /**
   * @format uri
   */
  imageUrl: string | null;
  lastName: string | null;
  status: 'active' | 'pending';
}

export interface MemberUpdateParams {
  /**
   * Path param
   */
  organizationId: string;
  /**
   * Body param
   */
  role: 'org:admin' | 'org:member';
}

export interface MemberUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  role: 'org:admin' | 'org:member';
  /**
   * @format date-time
   */
  updatedAt: string;
  userId: string | null;
  /**
   * @format email
   */
  emailAddress: string;
  firstName: string | null;
  /**
   * @format uri
   */
  imageUrl: string | null;
  lastName: string | null;
  status: 'active' | 'pending';
}

export interface MemberDeleteParams {
  organizationId: string;
}

export interface MemberDeleteResponse {
  deleted: true;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
}
export declare namespace Members {
  export {
    type MemberListResponse as MemberListResponse,
    type MemberCreateResponse as MemberCreateResponse,
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberUpdateResponse as MemberUpdateResponse,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberListParams as MemberListParams,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberDeleteParams as MemberDeleteParams,
  };
}
