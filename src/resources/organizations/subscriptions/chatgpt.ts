// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';

export class Chatgpt extends APIResource {
  /**
   * Retrieve the connection status for an organization ChatGPT subscription.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChatgptRetrieveResponse>} Retrieve an organization ChatGPT subscription
   *
   * @example
   * ```ts
   * const chatgpt = await client.organizations.subscriptions.chatgpt.retrieve('organizationId');
   * ```
   */
  retrieve(organizationID: string, options?: RequestOptions): APIPromise<ChatgptRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/subscriptions/chatgpt`, options);
  }

  /**
   * Retrieve plan and rate-limit usage for an organization ChatGPT subscription.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChatgptRetrieveUsageResponse>} Retrieve organization ChatGPT subscription usage
   *
   * @example
   * ```ts
   * const chatgpt = await client.organizations.subscriptions.chatgpt.retrieveUsage('organizationId');
   * ```
   */
  retrieveUsage(organizationID: string, options?: RequestOptions): APIPromise<ChatgptRetrieveUsageResponse> {
    return this._client.get(
      __scalarPath`/v1/organizations/${organizationID}/subscriptions/chatgpt/usage`,
      options,
    );
  }

  /**
   * Redeem one earned rate-limit reset for an organization ChatGPT subscription.
   *
   * @param {string} organizationID
   * @param {ChatgptResetUsageParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChatgptResetUsageResponse>} Reset organization ChatGPT subscription usage
   *
   * @example
   * ```ts
   * const chatgpt = await client.organizations.subscriptions.chatgpt.resetUsage('organizationId', {
   *   idempotencyKey: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  resetUsage(
    organizationID: string,
    body: ChatgptResetUsageParams,
    options?: RequestOptions,
  ): APIPromise<ChatgptResetUsageResponse> {
    return this._client.post(
      __scalarPath`/v1/organizations/${organizationID}/subscriptions/chatgpt/usage/reset`,
      { body, ...options },
    );
  }
}

export interface ChatgptRetrieveResponse {
  connected: boolean;
}

export interface ChatgptRetrieveUsageResponse {
  planType:
    | 'free'
    | 'go'
    | 'plus'
    | 'pro'
    | 'prolite'
    | 'team'
    | 'self_serve_business_prolite'
    | 'self_serve_business_usage_based'
    | 'business'
    | 'ent26'
    | 'enterprise_cbp_automation'
    | 'enterprise_cbp_usage_based'
    | 'enterprise'
    | 'edu'
    | 'edu_plus'
    | 'edu_pro'
    | 'unknown';
  rateLimits: Array<ChatgptRetrieveUsageResponse.RateLimit>;
  rateLimitResetCredits: ChatgptRetrieveUsageResponse.RateLimitResetCredits | null;
  tokenUsage: ChatgptRetrieveUsageResponse.TokenUsage;
  /**
   * @format date-time
   */
  fetchedAt: string;
}

export namespace ChatgptRetrieveUsageResponse {
  export interface RateLimit {
    limitId: string | null;
    limitName: string | null;
    planType:
      | 'free'
      | 'go'
      | 'plus'
      | 'pro'
      | 'prolite'
      | 'team'
      | 'self_serve_business_prolite'
      | 'self_serve_business_usage_based'
      | 'business'
      | 'ent26'
      | 'enterprise_cbp_automation'
      | 'enterprise_cbp_usage_based'
      | 'enterprise'
      | 'edu'
      | 'edu_plus'
      | 'edu_pro'
      | 'unknown'
      | null;
    primary: RateLimit.Primary | null;
    secondary: RateLimit.Secondary | null;
    credits: RateLimit.Credits | null;
    individualLimit: RateLimit.IndividualLimit | null;
    spendControlReached: boolean | null;
    rateLimitReachedType:
      | 'rate_limit_reached'
      | 'workspace_owner_credits_depleted'
      | 'workspace_member_credits_depleted'
      | 'workspace_owner_usage_limit_reached'
      | 'workspace_member_usage_limit_reached'
      | 'unknown'
      | null;
  }

  export namespace RateLimit {
    export interface Primary {
      usedPercent: number;
      /**
       * @exclusiveMinimum 0
       */
      windowDurationMins: number | null;
      /**
       * @minimum 0
       */
      resetsAt: number | null;
    }

    export interface Secondary {
      usedPercent: number;
      /**
       * @exclusiveMinimum 0
       */
      windowDurationMins: number | null;
      /**
       * @minimum 0
       */
      resetsAt: number | null;
    }

    export interface Credits {
      hasCredits: boolean;
      unlimited: boolean;
      balance: string | null;
    }

    export interface IndividualLimit {
      limit: string;
      used: string;
      remainingPercent: number;
      /**
       * @minimum 0
       */
      resetsAt: number;
    }
  }

  export interface RateLimitResetCredits {
    /**
     * @minimum 0
     */
    availableCount: number;
    credits: Array<RateLimitResetCredits.Credit> | null;
  }

  export namespace RateLimitResetCredits {
    export interface Credit {
      id: string;
      resetType: 'codexRateLimits' | 'unknown';
      status: 'available' | 'redeeming' | 'redeemed' | 'unknown';
      /**
       * @minimum 0
       */
      grantedAt: number;
      /**
       * @minimum 0
       */
      expiresAt: number | null;
      title: string | null;
      description: string | null;
    }
  }

  export interface TokenUsage {
    summary: TokenUsage.Summary;
    dailyUsageBuckets: Array<TokenUsage.DailyUsageBucket> | null;
  }

  export namespace TokenUsage {
    export interface Summary {
      /**
       * @minimum 0
       */
      lifetimeTokens: number | null;
      /**
       * @minimum 0
       */
      peakDailyTokens: number | null;
      /**
       * @minimum 0
       */
      longestRunningTurnSec: number | null;
      /**
       * @minimum 0
       */
      currentStreakDays: number | null;
      /**
       * @minimum 0
       */
      longestStreakDays: number | null;
    }

    export interface DailyUsageBucket {
      /**
       * @format date
       */
      startDate: string;
      /**
       * @minimum 0
       */
      tokens: number;
    }
  }
}

export interface ChatgptResetUsageParams {
  /**
   * @format uuid
   */
  idempotencyKey: string;
}

export interface ChatgptResetUsageResponse {
  outcome: 'reset' | 'alreadyRedeemed' | 'nothingToReset' | 'noCredit';
}
export declare namespace Chatgpt {
  export {
    type ChatgptRetrieveResponse as ChatgptRetrieveResponse,
    type ChatgptRetrieveUsageResponse as ChatgptRetrieveUsageResponse,
    type ChatgptResetUsageResponse as ChatgptResetUsageResponse,
    type ChatgptResetUsageParams as ChatgptResetUsageParams,
  };
}
