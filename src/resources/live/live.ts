// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { LiveWS, type LiveWSClientOptions } from './ws';

export class Live extends APIResource {
  /**
   * Issue a 30-second WebSocket ticket for one live connection that multiplexes resource subscriptions.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveAuthorizeResponse>} Connection ticket
   *
   * @example
   * ```ts
   * const live = await client.live.authorize();
   * ```
   */
  authorize(options?: RequestOptions): APIPromise<LiveAuthorizeResponse> {
    return this._client.post('/v1/live', options);
  }

  /**
   * Native WebSocket. Send `{ op: "subscribe", id, resource, input }` or `{ op: "unsubscribe", id }`; receive `{ id, type: "ready" | "event" | "error" }`.
   *
   * @param {LiveConnectParams} params - The parameters to send with the request.
   * @param {LiveWSClientOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {LiveWS} Authorized native WebSocket
   *
   * @example
   * ```ts
   * const connection = client.live.connect({
   *   ticket: 'ticket',
   * });
   *
   * try {
   *   for await (const message of connection) {
   *     console.log(message);
   *   }
   * } finally {
   *   connection.close();
   * }
   * ```
   */
  connect(params: LiveConnectParams, options?: LiveWSClientOptions): LiveWS {
    const { ticket } = params;
    return new LiveWS(this._client, { ticket: ticket }, options);
  }
}

export interface LiveAuthorizeResponse {
  ticket: string;
}

export interface LiveConnectParams {
  /**
   * @minLength 1
   */
  ticket: string;
}
export declare namespace Live {
  export { type LiveAuthorizeResponse as LiveAuthorizeResponse, type LiveConnectParams as LiveConnectParams };
}
