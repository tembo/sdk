// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Teams extends APIResource {
  /**
   * List teams
   *
   * @param {string} organizationID
   * @param {TeamListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamListResponse>} List teams
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.list('organizationId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    organizationID: string,
    query: TeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamListResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/teams`, { query, ...options });
  }

  /**
   * Create a team
   *
   * @param {string} organizationID
   * @param {TeamCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamCreateResponse>} Create a team
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.create('organizationId', {
   *   name: 'x',
   * });
   * ```
   */
  create(
    organizationID: string,
    body: TeamCreateParams,
    options?: RequestOptions,
  ): APIPromise<TeamCreateResponse> {
    return this._client.post(__scalarPath`/v1/organizations/${organizationID}/teams`, { body, ...options });
  }

  /**
   * Retrieve a team
   *
   * @param {string} teamID
   * @param {TeamRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamRetrieveResponse>} Retrieve a team
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.retrieve('teamId', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  retrieve(
    teamID: string,
    params: TeamRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TeamRetrieveResponse> {
    const { organizationId } = params;
    return this._client.get(__scalarPath`/v1/organizations/${organizationId}/teams/${teamID}`, options);
  }

  /**
   * Rename a team or change its icon
   *
   * @param {string} teamID
   * @param {TeamUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamUpdateResponse>} Rename a team or change its icon
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.update('teamId', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  update(teamID: string, params: TeamUpdateParams, options?: RequestOptions): APIPromise<TeamUpdateResponse> {
    const { organizationId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/organizations/${organizationId}/teams/${teamID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a team, its memberships and its shares
   *
   * @param {string} teamID
   * @param {TeamDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamDeleteResponse>} Delete a team, its memberships and its shares
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.delete('teamId', {
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  delete(teamID: string, params: TeamDeleteParams, options?: RequestOptions): APIPromise<TeamDeleteResponse> {
    const { organizationId } = params;
    return this._client.delete(__scalarPath`/v1/organizations/${organizationId}/teams/${teamID}`, options);
  }

  /**
   * Add a member to a team
   *
   * @param {string} teamID
   * @param {TeamAddMemberParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamAddMemberResponse>} Add a member to a team
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.addMember('teamId', {
   *   organizationId: 'organizationId',
   *   userId: 'x',
   * });
   * ```
   */
  addMember(
    teamID: string,
    params: TeamAddMemberParams,
    options?: RequestOptions,
  ): APIPromise<TeamAddMemberResponse> {
    const { organizationId, ...body } = params;
    return this._client.post(__scalarPath`/v1/organizations/${organizationId}/teams/${teamID}/members`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a member from a team
   *
   * @param {string} userID
   * @param {TeamRemoveMemberParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamRemoveMemberResponse>} Remove a member from a team
   *
   * @example
   * ```ts
   * const team = await client.organizations.teams.removeMember('userId', {
   *   organizationId: 'organizationId',
   *   teamId: 'teamId',
   * });
   * ```
   */
  removeMember(
    userID: string,
    params: TeamRemoveMemberParams,
    options?: RequestOptions,
  ): APIPromise<TeamRemoveMemberResponse> {
    const { organizationId, teamId } = params;
    return this._client.delete(
      __scalarPath`/v1/organizations/${organizationId}/teams/${teamId}/members/${userID}`,
      options,
    );
  }
}

export interface TeamListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
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
   * Only the teams the caller belongs to.
   */
  member?: 'me';
}

export interface TeamListResponse {
  items: Array<TeamListResponse.Item>;
  nextCursor: string | null;
}

export namespace TeamListResponse {
  export interface Item {
    id: string;
    name: string;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    isDefault: boolean;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    memberCount: number;
  }
}

export interface TeamCreateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Team icon, from the project icons.
   */
  icon?:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  /**
   * Team icon color, from the project colors.
   */
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
}

export interface TeamCreateResponse {
  id: string;
}

export interface TeamRetrieveParams {
  organizationId: string;
}

export interface TeamRetrieveResponse {
  id: string;
  name: string;
  icon:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  isDefault: boolean;
  members: Array<TeamRetrieveResponse.Member>;
}

export namespace TeamRetrieveResponse {
  export interface Member {
    userId: string;
    name: string | null;
  }
}

export interface TeamUpdateParams {
  /**
   * Path param
   */
  organizationId: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * Body param: Team icon, from the project icons.
   */
  icon?:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  /**
   * Body param: Team icon color, from the project colors.
   */
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
}

export interface TeamUpdateResponse {
  id: string;
}

export interface TeamDeleteParams {
  organizationId: string;
}

export interface TeamDeleteResponse {
  id: string;
}

export interface TeamAddMemberParams {
  /**
   * Path param
   */
  organizationId: string;
  /**
   * Body param
   * @minLength 1
   */
  userId: string;
}

export interface TeamAddMemberResponse {
  teamId: string;
  userId: string;
}

export interface TeamRemoveMemberParams {
  organizationId: string;
  teamId: string;
}

export interface TeamRemoveMemberResponse {
  teamId: string;
  userId: string;
}
export declare namespace Teams {
  export {
    type TeamListResponse as TeamListResponse,
    type TeamCreateResponse as TeamCreateResponse,
    type TeamRetrieveResponse as TeamRetrieveResponse,
    type TeamUpdateResponse as TeamUpdateResponse,
    type TeamDeleteResponse as TeamDeleteResponse,
    type TeamAddMemberResponse as TeamAddMemberResponse,
    type TeamRemoveMemberResponse as TeamRemoveMemberResponse,
    type TeamListParams as TeamListParams,
    type TeamCreateParams as TeamCreateParams,
    type TeamRetrieveParams as TeamRetrieveParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamDeleteParams as TeamDeleteParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamRemoveMemberParams as TeamRemoveMemberParams,
  };
}
