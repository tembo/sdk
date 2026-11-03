// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Runtimes extends APIResource {
  /**
   * List execution runtimes and their compatible model references for the current organization.
   *
   * @param {RuntimeListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuntimeListResponse>} List runtimes
   *
   * @example
   * ```ts
   * const runtime = await client.runtimes.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: RuntimeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuntimeListResponse> {
    return this._client.get('/v1/runtimes', { query, ...options });
  }
}

export interface RuntimeListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   */
  cursor?: 'claudeCode' | 'codex' | 'opencode' | 'cursor' | 'amp' | 'fx' | 'pi';
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface RuntimeListResponse {
  items: Array<RuntimeListResponse.Item>;
  nextCursor: 'claudeCode' | 'codex' | 'opencode' | 'cursor' | 'amp' | 'fx' | 'pi' | null;
}

export namespace RuntimeListResponse {
  export interface Item {
    name: 'claudeCode' | 'codex' | 'opencode' | 'cursor' | 'amp' | 'fx' | 'pi';
    displayName: string;
    /**
     * @minLength 1
     * @maxLength 200
     */
    defaultModelName: string;
    requiresApiKey: boolean;
    hasApiKey: boolean;
    runCapabilities: Item.RunCapabilities;
    availability: Item.Availability | Item.Availability2;
    compatibleModels: Array<Item.CompatibleModel>;
  }

  export namespace Item {
    export interface RunCapabilities {
      modes: Array<'normal' | 'planning'>;
      speeds: Array<'normal' | 'fast' | 'ultrafast'>;
      supportsGoals: boolean;
      /**
       * Models that support ultracode workflow orchestration.
       */
      ultracodeModels: Array<string>;
    }

    export interface Availability {
      status: 'available';
    }

    export interface Availability2 {
      status: 'unavailable';
      code: 'plan_required' | 'missing_credentials';
      reason: string;
    }

    export interface CompatibleModel {
      /**
       * @minLength 1
       * @maxLength 200
       */
      name: string;
      label: string;
      provider: string;
      /**
       * Selected subscription, API provider, or CLI API billing source for this runtime and model.
       */
      inferenceSource: string | null;
      isDefault: boolean;
      isPlatformDefault: boolean;
      reasoningLevels: Array<string>;
      availability: CompatibleModel.Availability | CompatibleModel.Availability2;
    }

    export namespace CompatibleModel {
      export interface Availability {
        status: 'available';
      }

      export interface Availability2 {
        status: 'unavailable';
        code:
          | 'model_disabled'
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
        reason: string;
      }
    }
  }
}
export declare namespace Runtimes {
  export { type RuntimeListResponse as RuntimeListResponse, type RuntimeListParams as RuntimeListParams };
}
