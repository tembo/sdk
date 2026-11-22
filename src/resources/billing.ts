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
   * List session usage by default, or include warm pool compute with the type filter. Uses cursor pagination.
   *
   * @param {BillingListUsageParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BillingListUsageResponse>} List billing usage
   *
   * @example
   * ```ts
   * const billing = await client.billing.listUsage({
   *   limit: 50,
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
  access: BillingRetrieveResponse.Access;
  trial: BillingRetrieveResponse.Trial | null;
  billingEnabled: boolean;
  /**
   * @maxItems 20
   */
  availablePlans: Array<BillingRetrieveResponse.AvailablePlan>;
  balance: BillingRetrieveResponse.Balance;
  onDemand: BillingRetrieveResponse.OnDemand;
  subscription: BillingRetrieveResponse.Subscription | null;
}

export namespace BillingRetrieveResponse {
  export interface Access {
    state: 'blocked' | 'trial' | 'paid';
    canExecute: boolean;
    blockedReason:
      | 'awaiting_demo'
      | 'trial_expired'
      | 'trial_allowance_exhausted'
      | 'subscription_ended'
      | null;
  }

  export interface Trial {
    status: 'Trialing';
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    startedAt: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    endsAt: string;
    allowance: number;
    remainingAllowance: number;
    purchasedCredits: number;
    exhausted: boolean;
    managedInferenceAllowance: number | null;
    remainingManagedInference: number | null;
    managedInferenceExhausted: boolean;
  }

  export interface AvailablePlan {
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
     * @maximum 9007199254740991
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

  export interface Balance {
    calculatedBalance: number;
    availableBalance: number;
    availableOnDemandUsage: number;
    lastTransaction: Balance.LastTransaction | null;
    unlimitedCredits: boolean;
  }

  export namespace Balance {
    export interface LastTransaction {
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      amount: number;
      /**
       * @format date-time
       * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
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
    status: 'Active' | 'PastDue' | 'Unpaid' | 'Canceled' | 'Trialing' | 'Incomplete' | 'IncompleteExpired';
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    canceledAt: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    periodEnd: string | null;
    type: 'paid';
    plan: Subscription.Plan | null;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    currentTier: number;
    /**
     * @maxItems 20
     */
    upgradablePlans: Array<Subscription.UpgradablePlan>;
  }

  export namespace Subscription {
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
       * @maximum 9007199254740991
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
       * @maximum 9007199254740991
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
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @minLength 1
   * @maxLength 2048
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Usage types to include. Defaults to sessions for backwards compatibility. `cloud-devices` lists the cloud devices (macOS VMs) behind session compute charges and is never combined with other types.
   */
  type?: 'all' | 'sessions' | 'warm-pool' | 'cloud-devices';
  /**
   * Filter billing usage to this session.
   * @minLength 1
   * @maxLength 255
   */
  sessionId?: string;
  /**
   * Include sessions created or warm pool runtime at or after this ISO 8601 timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAfter?: string;
  /**
   * Include sessions created or warm pool runtime before this ISO 8601 timestamp.
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdBefore?: string;
  /**
   * Filter by creator IDs, supplied as a comma-separated list.
   */
  createdBy?: Array<string>;
  /**
   * Filter by model names, supplied as a comma-separated list.
   */
  models?: Array<string>;
  /**
   * Filter by the agents that created sessions, supplied as a comma-separated list of agent IDs.
   */
  agentIds?: Array<string>;
}

export interface BillingListUsageResponse {
  /**
   * @maxItems 100
   */
  items: Array<
    BillingListUsageResponse.Item | BillingListUsageResponse.Item2 | BillingListUsageResponse.Item3
  >;
  /**
   * @maxLength 2048
   */
  nextCursor: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  asOf: string;
}

export namespace BillingListUsageResponse {
  export interface Item {
    agent: string | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    title: string;
    kind: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @minimum 0
     */
    managedInferenceCredits: number;
    /**
     * @minimum 0
     */
    cloudDeviceCredits: number;
    /**
     * @minimum 0
     */
    computeCredits: number;
    /**
     * @minimum 0
     */
    totalCredits: number;
    type: 'session';
  }

  export interface Item2 {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    sessionId: string;
    sessionTitle: string;
    platform: 'ios' | 'android' | 'macos';
    model: string | null;
    osVersion: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    startedAt: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    endedAt: string | null;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    billedSeconds: number;
    /**
     * @minimum 0
     */
    computeCredits: number;
    type: 'cloud-device';
  }

  export interface Item3 {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    virtualMachineId: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    startedAt: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    endedAt: string | null;
    /**
     * @minimum 0
     */
    runtimeMs: number;
    cpu: number;
    memoryMb: number;
    /**
     * @minimum 0
     */
    computeCredits: number;
    type: 'warm-pool';
  }
}
export declare namespace Billing {
  export {
    type BillingRetrieveResponse as BillingRetrieveResponse,
    type BillingListUsageResponse as BillingListUsageResponse,
    type BillingListUsageParams as BillingListUsageParams,
  };
}
