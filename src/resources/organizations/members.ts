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
   *   roleId: 'x',
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
   * @returns {APIPromise<MemberDeleteResponse>} Remove an organization member
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
  /**
   * Search organization members or invitations.
   * @minLength 1
   * @maxLength 100
   */
  search?: string;
  /**
   * List active members or pending invitations.
   * @default active
   */
  status?: 'active' | 'pending';
}

export interface MemberListResponse {
  items: Array<MemberListResponse.Item | MemberListResponse.Item2>;
  nextCursor: string | null;
}

export namespace MemberListResponse {
  export interface Item {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: string;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: Item.Role;
    status: 'active';
  }

  export namespace Item {
    export interface Role {
      id: string;
      name: string;
    }
  }

  export interface Item2 {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: null;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: Item2.Role | null;
    status: 'pending';
    /**
     * Teams the invitee joins on accepting; empty for none. Null when the invitation was not created through Tembo.
     */
    teamIds: Array<string> | null;
  }

  export namespace Item2 {
    export interface Role {
      id: string;
      name: string;
    }
  }
}

export interface MemberCreateParams {
  /**
   * Email address of the user to add or invite.
   * @format email
   * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  emailAddress: string;
  /**
   * @minLength 1
   */
  roleId: string;
  /**
   * Teams the member joins on accepting. Omit to add them to the default team.
   * @maxItems 50
   */
  teamIds?: Array<string>;
}

export type MemberCreateResponse =
  | MemberCreateResponse.MemberCreateResponseItem
  | MemberCreateResponse.MemberCreateResponseItem2;

export namespace MemberCreateResponse {
  export interface MemberCreateResponseItem {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: string;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberCreateResponseItem.Role;
    status: 'active';
  }

  export namespace MemberCreateResponseItem {
    export interface Role {
      id: string;
      name: string;
    }
  }

  export interface MemberCreateResponseItem2 {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: null;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberCreateResponseItem2.Role | null;
    status: 'pending';
    /**
     * Teams the invitee joins on accepting; empty for none. Null when the invitation was not created through Tembo.
     */
    teamIds: Array<string> | null;
  }

  export namespace MemberCreateResponseItem2 {
    export interface Role {
      id: string;
      name: string;
    }
  }
}

export interface MemberRetrieveParams {
  organizationId: string;
}

export type MemberRetrieveResponse =
  | MemberRetrieveResponse.MemberRetrieveResponseItem
  | MemberRetrieveResponse.MemberRetrieveResponseItem2;

export namespace MemberRetrieveResponse {
  export interface MemberRetrieveResponseItem {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: string;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberRetrieveResponseItem.Role;
    status: 'active';
  }

  export namespace MemberRetrieveResponseItem {
    export interface Role {
      id: string;
      name: string;
    }
  }

  export interface MemberRetrieveResponseItem2 {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: null;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberRetrieveResponseItem2.Role | null;
    status: 'pending';
    /**
     * Teams the invitee joins on accepting; empty for none. Null when the invitation was not created through Tembo.
     */
    teamIds: Array<string> | null;
  }

  export namespace MemberRetrieveResponseItem2 {
    export interface Role {
      id: string;
      name: string;
    }
  }
}

export interface MemberUpdateParams {
  /**
   * Path param
   */
  organizationId: string;
  /**
   * Body param
   */
  roleId?: string;
}

export type MemberUpdateResponse =
  | MemberUpdateResponse.MemberUpdateResponseItem
  | MemberUpdateResponse.MemberUpdateResponseItem2;

export namespace MemberUpdateResponse {
  export interface MemberUpdateResponseItem {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: string;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberUpdateResponseItem.Role;
    status: 'active';
  }

  export namespace MemberUpdateResponseItem {
    export interface Role {
      id: string;
      name: string;
    }
  }

  export interface MemberUpdateResponseItem2 {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    userId: null;
    /**
     * @format email
     * @pattern ^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
     */
    emailAddress: string;
    firstName: string | null;
    /**
     * @format uri
     */
    imageUrl: string | null;
    lastName: string | null;
    role: MemberUpdateResponseItem2.Role | null;
    status: 'pending';
    /**
     * Teams the invitee joins on accepting; empty for none. Null when the invitation was not created through Tembo.
     */
    teamIds: Array<string> | null;
  }

  export namespace MemberUpdateResponseItem2 {
    export interface Role {
      id: string;
      name: string;
    }
  }
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
