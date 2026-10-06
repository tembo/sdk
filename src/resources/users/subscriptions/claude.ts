// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Claude extends APIResource {
  /**
   * Retrieve the connection status for a user Claude subscription.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ClaudeRetrieveResponse>} Retrieve a user Claude subscription
   *
   * @example
   * ```ts
   * const claude = await client.users.subscriptions.claude.retrieve('userId');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<ClaudeRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/subscriptions/claude`, options);
  }

  /**
   * Retrieve rate-limit usage for a user Claude subscription.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ClaudeRetrieveUsageResponse>} Retrieve user Claude subscription usage
   *
   * @example
   * ```ts
   * const claude = await client.users.subscriptions.claude.retrieveUsage('userId');
   * ```
   */
  retrieveUsage(userID: string, options?: RequestOptions): APIPromise<ClaudeRetrieveUsageResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/subscriptions/claude/usage`, options);
  }
}

export interface ClaudeRetrieveResponse {
  connected: boolean;
  reconnectRequired: boolean;
}

export interface ClaudeRetrieveUsageResponse {
  rateLimits: Array<
    | ClaudeRetrieveUsageResponse.RateLimit
    | ClaudeRetrieveUsageResponse.RateLimit2
    | ClaudeRetrieveUsageResponse.RateLimit3
    | ClaudeRetrieveUsageResponse.RateLimit4
    | ClaudeRetrieveUsageResponse.RateLimit5
    | ClaudeRetrieveUsageResponse.RateLimit6
  >;
}

export namespace ClaudeRetrieveUsageResponse {
  export interface RateLimit {
    key: 'five_hour';
    label: '5-hour limit';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }

  export interface RateLimit2 {
    key: 'seven_day';
    label: 'Weekly limit';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }

  export interface RateLimit3 {
    key: 'seven_day_oauth_apps';
    label: 'Weekly limit · OAuth apps';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }

  export interface RateLimit4 {
    key: 'seven_day_opus';
    label: 'Weekly limit · Opus';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }

  export interface RateLimit5 {
    key: 'seven_day_sonnet';
    label: 'Weekly limit · Sonnet';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }

  export interface RateLimit6 {
    key: 'seven_day_cowork';
    label: 'Weekly limit · Cowork';
    detail: null;
    /**
     * @minimum 0
     * @maximum 100
     */
    remainingPercent: number;
    /**
     * @minimum 0
     */
    resetsAt: number | null;
  }
}
export declare namespace Claude {
  export {
    type ClaudeRetrieveResponse as ClaudeRetrieveResponse,
    type ClaudeRetrieveUsageResponse as ClaudeRetrieveUsageResponse,
  };
}
