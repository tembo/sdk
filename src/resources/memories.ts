// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Memories extends APIResource {
  /**
   * List your active persistent memories. Optionally search by query or filter by type.
   *
   * @param {MemoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryListResponse>} List memories
   *
   * @example
   * ```ts
   * const memory = await client.memories.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemoryListResponse> {
    return this._client.get('/v1/memories', { query, ...options });
  }

  /**
   * Save a persistent memory for yourself across sessions. Memory names are unique per user.
   *
   * @param {MemoryCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryCreateResponse>} Create a memory
   *
   * @example
   * ```ts
   * const memory = await client.memories.create({
   *   description: 'x',
   *   type: 'user',
   *   content: 'x',
   *   name: '',
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<MemoryCreateResponse> {
    return this._client.post('/v1/memories', { body, ...options });
  }

  /**
   * Retrieve the full content and revision of one of your persistent memories.
   *
   * @param {string} name
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryRetrieveResponse>} Retrieve a memory
   *
   * @example
   * ```ts
   * const memory = await client.memories.retrieve('name');
   * ```
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<MemoryRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/memories/${name}`, options);
  }

  /**
   * Update content, description or type. Pass the revision last retrieved to prevent overwriting concurrent changes.
   *
   * @param {string} name
   * @param {MemoryUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryUpdateResponse>} Update a memory
   *
   * @example
   * ```ts
   * const memory = await client.memories.update('name', {
   *   expectedRevision: 1,
   * });
   * ```
   */
  update(name: string, body: MemoryUpdateParams, options?: RequestOptions): APIPromise<MemoryUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/memories/${name}`, { body, ...options });
  }

  /**
   * Archive one of your persistent memories, provided its revision has not changed.
   *
   * @param {string} name
   * @param {MemoryDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryDeleteResponse>} Delete a memory
   *
   * @example
   * ```ts
   * const memory = await client.memories.delete('name', {
   *   expectedRevision: 1,
   * });
   * ```
   */
  delete(
    name: string,
    params: MemoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemoryDeleteResponse> {
    const { expectedRevision } = params;
    return this._client.delete(__scalarPath`/v1/memories/${name}`, {
      query: { expectedRevision },
      ...options,
    });
  }
}

export interface MemoryListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  type?: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * Search names, descriptions and content, ranked by relevance.
   * @minLength 1
   * @maxLength 200
   */
  query?: string;
}

export interface MemoryListResponse {
  items: Array<MemoryListResponse.Item>;
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  nextCursor: string | null;
}

export namespace MemoryListResponse {
  export interface Item {
    /**
     * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
     */
    name: string;
    description: string;
    type: 'user' | 'feedback' | 'project' | 'reference';
    /**
     * @maximum 9007199254740991
     * @exclusiveMinimum 0
     */
    revision: number;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    snippet?: string;
  }
}

export interface MemoryCreateParams {
  /**
   * One-line summary used to decide relevance later.
   * @minLength 1
   * @maxLength 300
   */
  description: string;
  /**
   * user: who the user is; feedback: how they want you to work; project: ongoing context; reference: external resources.
   */
  type: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * @minLength 1
   * @maxLength 10000
   */
  content: string;
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  name: string;
}

export interface MemoryCreateResponse {
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  name: string;
  description: string;
  type: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  revision: number;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  content: string;
}

export interface MemoryRetrieveResponse {
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  name: string;
  description: string;
  type: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  revision: number;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  content: string;
}

export interface MemoryUpdateParams {
  /**
   * Revision last retrieved. Stale updates fail.
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  expectedRevision: number;
  /**
   * One-line summary used to decide relevance later.
   * @minLength 1
   * @maxLength 300
   */
  description?: string;
  /**
   * user: who the user is; feedback: how they want you to work; project: ongoing context; reference: external resources.
   */
  type?: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * @minLength 1
   * @maxLength 10000
   */
  content?: string;
}

export interface MemoryUpdateResponse {
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  name: string;
  description: string;
  type: 'user' | 'feedback' | 'project' | 'reference';
  /**
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  revision: number;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  content: string;
}

export interface MemoryDeleteParams {
  /**
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  expectedRevision: number;
}

export interface MemoryDeleteResponse {
  /**
   * @pattern ^[a-z0-9][a-z0-9-]{0,99}$
   */
  name: string;
  deleted: true;
}
export declare namespace Memories {
  export {
    type MemoryListResponse as MemoryListResponse,
    type MemoryCreateResponse as MemoryCreateResponse,
    type MemoryRetrieveResponse as MemoryRetrieveResponse,
    type MemoryUpdateResponse as MemoryUpdateResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryListParams as MemoryListParams,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
  };
}
