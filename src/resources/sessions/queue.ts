// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Queue extends APIResource {
  /**
   * Replace the order of messages waiting in a session queue.
   *
   * @param {string} sessionID
   * @param {QueueUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<QueueUpdateResponse>} Update a session queue
   *
   * @example
   * ```ts
   * const queue = await client.sessions.queue.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   messageIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
   * });
   * ```
   */
  update(
    sessionID: string,
    body: QueueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QueueUpdateResponse> {
    return this._client.put(__scalarPath`/v1/sessions/${sessionID}/queue`, { body, ...options });
  }
}

export interface QueueUpdateParams {
  /**
   * @maxItems 500
   */
  messageIds: Array<string>;
}

export interface QueueUpdateResponse {
  messageIds: Array<string>;
}
export declare namespace Queue {
  export { type QueueUpdateResponse as QueueUpdateResponse, type QueueUpdateParams as QueueUpdateParams };
}
