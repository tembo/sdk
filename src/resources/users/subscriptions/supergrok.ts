// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Supergrok extends APIResource {
  /**
   * Retrieve the connection status for a user SuperGrok subscription.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SupergrokRetrieveResponse>} Retrieve a user SuperGrok subscription
   *
   * @example
   * ```ts
   * const supergrok = await client.users.subscriptions.supergrok.retrieve('userId');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<SupergrokRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/subscriptions/supergrok`, options);
  }
}

export interface SupergrokRetrieveResponse {
  connected: boolean;
}
export declare namespace Supergrok {
  export { type SupergrokRetrieveResponse as SupergrokRetrieveResponse };
}
