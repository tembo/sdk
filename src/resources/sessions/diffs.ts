// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Diffs extends APIResource {
  /**
   * List recorded session diff metadata with cursor pagination.
   *
   * @param {string} sessionID
   * @param {DiffListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DiffListResponse>} List session diffs
   *
   * @example
   * ```ts
   * const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    sessionID: string,
    query: DiffListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiffListResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/diffs`, { query, ...options });
  }

  /**
   * Retrieve one recorded session diff and its content.
   *
   * @param {string} diffID
   * @param {DiffRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DiffRetrieveResponse>} Retrieve a session diff
   *
   * @example
   * ```ts
   * const diff = await client.sessions.diffs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    diffID: string,
    params: DiffRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DiffRetrieveResponse> {
    const { sessionId } = params;
    return this._client.get(__scalarPath`/v1/sessions/${sessionId}/diffs/${diffID}`, options);
  }
}

export interface DiffListParams {
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
   * Filter by whether a recorded diff contains changes.
   */
  hasChanges?: boolean;
}

export interface DiffListResponse {
  items: Array<DiffListResponse.Item>;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  nextCursor: string | null;
}

export namespace DiffListResponse {
  export interface Item {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    additions: number;
    baselineSha: string | null;
    branch: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    capturedAt: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    changedFiles: number;
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    codeRepositoryId: string | null;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    deletions: number;
    hasChanges: boolean;
    headSha: string | null;
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    remoteKey: string | null;
    root: string;
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    sessionId: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    untrackedFiles: number;
  }
}

export interface DiffRetrieveParams {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  sessionId: string;
}

export interface DiffRetrieveResponse {
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  additions: number;
  baselineSha: string | null;
  branch: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  capturedAt: string;
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  changedFiles: number;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  codeRepositoryId: string | null;
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  deletions: number;
  hasChanges: boolean;
  headSha: string | null;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  remoteKey: string | null;
  root: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  sessionId: string;
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  untrackedFiles: number;
  data: string;
}
export declare namespace Diffs {
  export {
    type DiffListResponse as DiffListResponse,
    type DiffRetrieveResponse as DiffRetrieveResponse,
    type DiffListParams as DiffListParams,
    type DiffRetrieveParams as DiffRetrieveParams,
  };
}
