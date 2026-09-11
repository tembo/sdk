// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Billing extends APIResource {
  /**
   * Retrieve billing and credit information for the organization.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingRetrieveResponse>} Retrieve billing
   *
   * @example
   * ```ts
   * const billing = await client.billing.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<BillingRetrieveResponse> {
    return this._client.get('/v1/billing', options);
  }

  /**
   * List session usage with cursor pagination.
   *
   * @param {BillingListUsageParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingListUsageResponse>} List billing usage
   *
   * @example
   * ```ts
   * const billing = await client.billing.listUsage({
   *   limit: '50',
   * });
   * ```
   */
  listUsage(
    query: BillingListUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingListUsageResponse> {
    return this._client.get('/v1/billing/usage', { query, ...options });
  }
}
export interface BillingRetrieveResponse {
  billingEnabled: boolean;
  balance: BillingRetrieveResponse.Balance;
  onDemand: BillingRetrieveResponse.OnDemand;
  subscription: BillingRetrieveResponse.Subscription | BillingRetrieveResponse.Subscription2;
}

export namespace BillingRetrieveResponse {
  export interface Balance {
    calculatedBalance: number;
    availableBalance: number;
    availableOnDemandUsage: number;
    lastTransaction: Balance.LastTransaction | null;
    unlimitedCredits: boolean;
  }

  export namespace Balance {
    export interface LastTransaction {
      amount: number;
      /**
       * @format date-time
       */
      createdAt: string;
    }
  }

  export interface OnDemand {
    enabled: boolean;
    currentUsage: number;
    /**
     * @minimum 0
     */
    maxCreditUsage: number;
  }

  export interface Subscription {
    type: 'free';
    status: null;
    canceledAt: null;
    periodEnd: null;
    plan: null;
    currentTier: 0;
    /**
     * @maxItems 20
     */
    upgradablePlans: Array<Subscription.UpgradablePlan>;
  }

  export namespace Subscription {
    export interface UpgradablePlan {
      /**
       * @minLength 1
       * @maxLength 255
       */
      id: string;
      /**
       * @maxLength 255
       */
      title: string;
      /**
       * @minimum 0
       */
      tier: number;
      /**
       * @maxLength 2000
       */
      description: string;
      /**
       * @minimum 0
       */
      includedCredits: number;
      /**
       * @minimum 0
       */
      monthlyPrice: number;
      /**
       * @minimum 0
       */
      yearlyPrice: number | null;
    }
  }

  export interface Subscription2 {
    status: 'Active' | 'PastDue' | 'Unpaid' | 'Canceled' | 'Trialing' | 'Incomplete' | 'IncompleteExpired';
    /**
     * @format date-time
     */
    canceledAt: string | null;
    /**
     * @format date-time
     */
    periodEnd: string | null;
    type: 'paid';
    plan: Subscription2.Plan | null;
    /**
     * @minimum 0
     */
    currentTier: number;
    /**
     * @maxItems 20
     */
    upgradablePlans: Array<Subscription2.UpgradablePlan>;
  }

  export namespace Subscription2 {
    export interface Plan {
      /**
       * @minLength 1
       * @maxLength 255
       */
      id: string;
      /**
       * @maxLength 255
       */
      title: string;
      /**
       * @minimum 0
       */
      tier: number;
      /**
       * @maxLength 2000
       */
      description: string;
      /**
       * @minimum 0
       */
      includedCredits: number;
      /**
       * @minimum 0
       */
      monthlyPrice: number;
      /**
       * @minimum 0
       */
      yearlyPrice: number | null;
    }

    export interface UpgradablePlan {
      /**
       * @minLength 1
       * @maxLength 255
       */
      id: string;
      /**
       * @maxLength 255
       */
      title: string;
      /**
       * @minimum 0
       */
      tier: number;
      /**
       * @maxLength 2000
       */
      description: string;
      /**
       * @minimum 0
       */
      includedCredits: number;
      /**
       * @minimum 0
       */
      monthlyPrice: number;
      /**
       * @minimum 0
       */
      yearlyPrice: number | null;
    }
  }
}

export interface BillingListUsageParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface BillingListUsageResponse {
  /**
   * @maxItems 100
   */
  items: Array<BillingListUsageResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
  /**
   * @format date-time
   */
  asOf: string;
}

export namespace BillingListUsageResponse {
  export interface Item {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    title: string;
    kind: string;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @minimum 0
     */
    managedInferenceCredits: number;
    /**
     * @minimum 0
     */
    computeCredits: number;
    /**
     * @minimum 0
     */
    totalCredits: number;
  }
}
export declare namespace Billing {
  export {
    type BillingRetrieveResponse as BillingRetrieveResponse,
    type BillingListUsageResponse as BillingListUsageResponse,
    type BillingListUsageParams as BillingListUsageParams,
  };
}
