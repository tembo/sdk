// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Retrieve connection statuses and available ChatGPT and Claude usage. Provider usage errors are reported without failing the response.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SubscriptionRetrieveResponse>} Retrieve organization subscriptions
   *
   * @example
   * ```ts
   * const subscription = await client.organizations.subscriptions.retrieve('organizationId');
   * ```
   */
  retrieve(organizationID: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/subscriptions`, options);
  }

  /**
   * Redeem an earned ChatGPT rate-limit reset.
   *
   * @param {string} organizationID
   * @param {SubscriptionResetParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SubscriptionResetResponse>} Reset organization subscription usage
   *
   * @example
   * ```ts
   * const subscription = await client.organizations.subscriptions.reset('organizationId', {
   *   idempotencyKey: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   provider: 'chatgpt',
   * });
   * ```
   */
  reset(
    organizationID: string,
    body: SubscriptionResetParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionResetResponse> {
    return this._client.post(__scalarPath`/v1/organizations/${organizationID}/subscriptions/reset`, {
      body,
      ...options,
    });
  }
}

export interface SubscriptionRetrieveResponse {
  chatgpt: SubscriptionRetrieveResponse.Chatgpt;
  claude: SubscriptionRetrieveResponse.Claude;
  supergrok: SubscriptionRetrieveResponse.Supergrok;
}

export namespace SubscriptionRetrieveResponse {
  export interface Chatgpt {
    connected: boolean;
    usage: Chatgpt.Usage | null;
    usageError: Chatgpt.UsageError | null;
  }

  export namespace Chatgpt {
    export interface Usage {
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
      rateLimits: Array<Usage.RateLimit>;
      rateLimitResetCredits: Usage.RateLimitResetCredits | null;
      tokenUsage: Usage.TokenUsage;
      /**
       * @format date-time
       */
      fetchedAt: string;
    }

    export namespace Usage {
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

    export interface UsageError {
      code: 'reconnectRequired' | 'rateLimited' | 'unavailable';
      message: string;
      retryAfter: string | null;
    }
  }

  export interface Claude {
    connected: boolean;
    reconnectRequired: boolean;
    usage: Claude.Usage | null;
    usageError: Claude.UsageError | null;
  }

  export namespace Claude {
    export interface Usage {
      rateLimits: Array<
        | Usage.RateLimit
        | Usage.RateLimit2
        | Usage.RateLimit3
        | Usage.RateLimit4
        | Usage.RateLimit5
        | Usage.RateLimit6
      >;
    }

    export namespace Usage {
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

    export interface UsageError {
      code: 'reconnectRequired' | 'rateLimited' | 'unavailable';
      message: string;
      retryAfter: string | null;
    }
  }

  export interface Supergrok {
    connected: boolean;
  }
}

export interface SubscriptionResetParams {
  /**
   * Unique UUID for this reset attempt. Reuse the same UUID when retrying to avoid redeeming another reset credit.
   * @format uuid
   */
  idempotencyKey: string;
  /**
   * Subscription provider whose rate-limit reset credit to redeem. Currently only chatgpt is supported.
   */
  provider: 'chatgpt';
}

export interface SubscriptionResetResponse {
  outcome: 'reset' | 'alreadyRedeemed' | 'nothingToReset' | 'noCredit';
}
export declare namespace Subscriptions {
  export {
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionResetResponse as SubscriptionResetResponse,
    type SubscriptionResetParams as SubscriptionResetParams,
  };
}
