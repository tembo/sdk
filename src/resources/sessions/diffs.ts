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
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  hasChanges?: 'true' | 'false' | boolean;
}

export interface DiffListResponse {
  items: Array<DiffListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace DiffListResponse {
  export interface Item {
    additions: number;
    baselineSha: string | null;
    branch: string | null;
    /**
     * @format date-time
     */
    capturedAt: string;
    changedFiles: number;
    /**
     * @format uuid
     */
    codeRepositoryId: string | null;
    deletions: number;
    hasChanges: boolean;
    headSha: string | null;
    /**
     * @format uuid
     */
    id: string;
    remoteKey: string | null;
    root: string;
    /**
     * @format uuid
     */
    sessionId: string;
    untrackedFiles: number;
  }
}

export interface DiffRetrieveParams {
  /**
   * @format uuid
   */
  sessionId: string;
}

export interface DiffRetrieveResponse {
  additions: number;
  baselineSha: string | null;
  branch: string | null;
  /**
   * @format date-time
   */
  capturedAt: string;
  changedFiles: number;
  /**
   * @format uuid
   */
  codeRepositoryId: string | null;
  deletions: number;
  hasChanges: boolean;
  headSha: string | null;
  /**
   * @format uuid
   */
  id: string;
  remoteKey: string | null;
  root: string;
  /**
   * @format uuid
   */
  sessionId: string;
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
