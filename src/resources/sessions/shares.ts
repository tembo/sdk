// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Shares extends APIResource {
  /**
   * List the people, teams and organization this is shared with. Requires Write on it.
   *
   * @param {string} sessionID
   * @param {ShareListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShareListResponse>} List shares
   *
   * @example
   * ```ts
   * const share = await client.sessions.shares.list('sessionId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    sessionID: string,
    query: ShareListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShareListResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/sharing`, { query, ...options });
  }

  /**
   * Share with a person, a team or the whole organization. Each member then acts only as far as their role allows. Requires Write on it.
   *
   * @param {string} sessionID
   * @param {ShareCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShareCreateResponse>} Share
   *
   * @example
   * ```ts
   * const share = await client.sessions.shares.create('sessionId', {
   *   type: 'user',
   *   id: 'x',
   * });
   * ```
   */
  create(
    sessionID: string,
    body: ShareCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShareCreateResponse> {
    return this._client.post(__scalarPath`/v1/sessions/${sessionID}/sharing`, { body, ...options });
  }

  /**
   * Stop sharing with one person, team or the organization. Requires Write on it.
   *
   * @param {string} shareID
   * @param {ShareDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShareDeleteResponse>} Remove a share
   *
   * @example
   * ```ts
   * const share = await client.sessions.shares.delete('shareId', {
   *   sessionId: 'sessionId',
   * });
   * ```
   */
  delete(
    shareID: string,
    params: ShareDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ShareDeleteResponse> {
    const { sessionId } = params;
    return this._client.delete(__scalarPath`/v1/sessions/${sessionId}/sharing/${shareID}`, options);
  }
}

export interface ShareListParams {
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
}

export interface ShareListResponse {
  items: Array<ShareListResponse.Item>;
  nextCursor: string | null;
}

export namespace ShareListResponse {
  export interface Item {
    id: string;
    audience: Item.Audience;
    createdAt: string;
  }

  export namespace Item {
    export interface Audience {
      type: 'user' | 'team' | 'organization';
      id: string;
      name: string | null;
    }
  }
}

export type ShareCreateParams =
  | ShareCreateParams.Variant0
  | ShareCreateParams.Variant1
  | ShareCreateParams.Variant2;

export declare namespace ShareCreateParams {
  export interface Variant0 {
    /**
     * One active member.
     */
    type: 'user';
    /**
     * User ID of an active member.
     * @minLength 1
     */
    id: string;
  }

  export interface Variant1 {
    /**
     * Every member of a team.
     */
    type: 'team';
    /**
     * Team ID in this organization.
     * @minLength 1
     */
    id: string;
  }

  export interface Variant2 {
    /**
     * Everyone in the organization.
     */
    type: 'organization';
  }
}

export interface ShareCreateResponse {
  id: string;
  audience: ShareCreateResponse.Audience;
  createdAt: string;
}

export namespace ShareCreateResponse {
  export interface Audience {
    type: 'user' | 'team' | 'organization';
    id: string;
    name: string | null;
  }
}

export interface ShareDeleteParams {
  sessionId: string;
}

export interface ShareDeleteResponse {
  id: string;
  deleted: true;
}
export declare namespace Shares {
  export {
    type ShareListResponse as ShareListResponse,
    type ShareCreateResponse as ShareCreateResponse,
    type ShareDeleteResponse as ShareDeleteResponse,
    type ShareListParams as ShareListParams,
    type ShareCreateParams as ShareCreateParams,
    type ShareDeleteParams as ShareDeleteParams,
  };
}
