// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * List recorded session files without returning file contents.
   *
   * @param {string} sessionID
   * @param {FileListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FileListResponse>} List session files
   *
   * @example
   * ```ts
   * const file = await client.sessions.files.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    sessionID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/files`, { query, ...options });
  }

  /**
   * Retrieve one recorded session file and its content.
   *
   * @param {string} fileID
   * @param {FileRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FileRetrieveResponse>} Retrieve a session file
   *
   * @example
   * ```ts
   * const file = await client.sessions.files.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    fileID: string,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FileRetrieveResponse> {
    const { sessionId } = params;
    return this._client.get(__scalarPath`/v1/sessions/${sessionId}/files/${fileID}`, options);
  }
}
export interface FileListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  search?: string;
}

export interface FileListResponse {
  items: Array<FileListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace FileListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format uuid
     */
    id: string;
    path: string;
    /**
     * @format uuid
     */
    sessionId: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface FileRetrieveParams {
  /**
   * @format uuid
   */
  sessionId: string;
}

export interface FileRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  path: string;
  /**
   * @format uuid
   */
  sessionId: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  content: string;
}
export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListParams as FileListParams,
    type FileRetrieveParams as FileRetrieveParams,
  };
}
