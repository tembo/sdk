// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { LiveWS, type LiveWSClientOptions } from './ws';

export class Live extends APIResource {
  /**
   * Issue a 30-second, session-bound WebSocket ticket.
   *
   * @param {LiveAuthorizeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LiveAuthorizeResponse>} Authorize live message changes
   *
   * @example
   * ```ts
   * const live = await client.messages.live.authorize({
   *   scope: {
   *     sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * });
   * ```
   */
  authorize(body: LiveAuthorizeParams, options?: RequestOptions): APIPromise<LiveAuthorizeResponse> {
    return this._client.post('/v1/messages/live', { body, ...options });
  }

  /**
   * Live persisted message changes
   *
   * @param {LiveConnectParams} params - The parameters to send with the request.
   * @param {LiveWSClientOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {LiveWS} Authorized native WebSocket
   *
   * @example
   * ```ts
   * const connection = client.messages.live.connect({
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

export interface LiveAuthorizeParams {
  scope: LiveAuthorizeParams.Scope;
}

export namespace LiveAuthorizeParams {
  export interface Scope {
    /**
     * @format uuid
     */
    sessionId: string;
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
  export {
    type LiveAuthorizeResponse as LiveAuthorizeResponse,
    type LiveAuthorizeParams as LiveAuthorizeParams,
    type LiveConnectParams as LiveConnectParams,
  };
}
