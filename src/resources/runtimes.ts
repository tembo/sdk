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
  cursor?: 'claudeCode' | 'codex' | 'opencode' | 'cursor' | 'amp' | 'fx' | 'pi';
  /**
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
    defaultModelName:
      | 'claude-opus-5-5'
      | 'claude-fable-5-1'
      | 'claude-fable-5'
      | 'claude-opus-5'
      | 'claude-sonnet-5-5'
      | 'claude-haiku-5-5'
      | 'claude-opus-4-8'
      | 'claude-opus-4-7'
      | 'claude-opus-4-6'
      | 'claude-opus-4-5'
      | 'claude-4-5-haiku'
      | 'gpt-6.1-sol'
      | 'gpt-6-astra'
      | 'gpt-6-sol'
      | 'gpt-6-luna'
      | 'gpt-5.6-sol'
      | 'gpt-5.6-terra'
      | 'gpt-5.6-luna'
      | 'gpt-5.5-pro'
      | 'gpt-5.5'
      | 'gpt-5.4'
      | 'gpt-5.4-mini'
      | 'gpt-5.4-nano'
      | 'gpt-5.3-codex'
      | 'gpt-5.3-codex-spark'
      | 'gpt-5.2-codex'
      | 'gpt-5.2'
      | 'glm-5p3'
      | 'glm-5p3-flash'
      | 'composer-1.5'
      | 'composer-2'
      | 'composer-2-fast'
      | 'composer-2.5'
      | 'gemini-3.1-pro'
      | 'gemini-3.5-flash'
      | 'grok-4.7'
      | 'grok'
      | 'kimi-k3'
      | 'minimax-m2p7'
      | 'minimax-m3'
      | 'deepseek-v4-pro'
      | 'deepseek-v4p1-flash';
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
      name:
        | 'claude-opus-5-5'
        | 'claude-fable-5-1'
        | 'claude-fable-5'
        | 'claude-opus-5'
        | 'claude-sonnet-5-5'
        | 'claude-haiku-5-5'
        | 'claude-opus-4-8'
        | 'claude-opus-4-7'
        | 'claude-opus-4-6'
        | 'claude-opus-4-5'
        | 'claude-4-5-haiku'
        | 'gpt-6.1-sol'
        | 'gpt-6-astra'
        | 'gpt-6-sol'
        | 'gpt-6-luna'
        | 'gpt-5.6-sol'
        | 'gpt-5.6-terra'
        | 'gpt-5.6-luna'
        | 'gpt-5.5-pro'
        | 'gpt-5.5'
        | 'gpt-5.4'
        | 'gpt-5.4-mini'
        | 'gpt-5.4-nano'
        | 'gpt-5.3-codex'
        | 'gpt-5.3-codex-spark'
        | 'gpt-5.2-codex'
        | 'gpt-5.2'
        | 'glm-5p3'
        | 'glm-5p3-flash'
        | 'composer-1.5'
        | 'composer-2'
        | 'composer-2-fast'
        | 'composer-2.5'
        | 'gemini-3.1-pro'
        | 'gemini-3.5-flash'
        | 'grok-4.7'
        | 'grok'
        | 'kimi-k3'
        | 'minimax-m2p7'
        | 'minimax-m3'
        | 'deepseek-v4-pro'
        | 'deepseek-v4p1-flash';
      label: string;
      provider: string;
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
