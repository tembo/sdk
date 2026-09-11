// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * List the models available to the current organization, including enablement and inference-provider access.
   *
   * @param {ModelListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ModelListResponse>} List models
   *
   * @example
   * ```ts
   * const model = await client.models.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v1/models', { query, ...options });
  }

  /**
   * Enable or disable an organization model, or select its inference provider.
   *
   * @param {"claude-fable-5-1" | "claude-fable-5" | "claude-opus-5" | "claude-sonnet-5" | "claude-opus-4-8" | "claude-opus-4-7" | "claude-opus-4-6" | "claude-sonnet-4-6" | "claude-opus-4-5" | "claude-4-5-haiku" | "gpt-6-astra" | "gpt-5.6-sol" | "gpt-5.6-terra" | "gpt-5.6-luna" | "gpt-5.5-pro" | "gpt-5.5" | "gpt-5.4" | "gpt-5.4-mini" | "gpt-5.4-nano" | "gpt-5.3-codex" | "gpt-5.3-codex-spark" | "gpt-5.2-codex" | "gpt-5.2" | "glm-5p3" | "glm-5p3-flash" | "composer-1.5" | "composer-2" | "composer-2-fast" | "composer-2.5" | "gemini-3.1-pro" | "gemini-3.5-flash" | "grok-4.6" | "grok" | "kimi-k3" | "minimax-m2p7" | "minimax-m3" | "deepseek-v4-pro" | "deepseek-v4p1-flash"} modelName
   * @param {ModelUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ModelUpdateResponse>} Update a model
   *
   * @example
   * ```ts
   * const model = await client.models.update('claude-fable-5-1', {});
   * ```
   */
  update(
    modelName:
      | 'claude-fable-5-1'
      | 'claude-fable-5'
      | 'claude-opus-5'
      | 'claude-sonnet-5'
      | 'claude-opus-4-8'
      | 'claude-opus-4-7'
      | 'claude-opus-4-6'
      | 'claude-sonnet-4-6'
      | 'claude-opus-4-5'
      | 'claude-4-5-haiku'
      | 'gpt-6-astra'
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
      | 'grok-4.6'
      | 'grok'
      | 'kimi-k3'
      | 'minimax-m2p7'
      | 'minimax-m3'
      | 'deepseek-v4-pro'
      | 'deepseek-v4p1-flash',
    body: ModelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ModelUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/models/${modelName}`, { body, ...options });
  }
}

export interface ModelListParams {
  cursor?:
    | 'claude-fable-5-1'
    | 'claude-fable-5'
    | 'claude-opus-5'
    | 'claude-sonnet-5'
    | 'claude-opus-4-8'
    | 'claude-opus-4-7'
    | 'claude-opus-4-6'
    | 'claude-sonnet-4-6'
    | 'claude-opus-4-5'
    | 'claude-4-5-haiku'
    | 'gpt-6-astra'
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
    | 'grok-4.6'
    | 'grok'
    | 'kimi-k3'
    | 'minimax-m2p7'
    | 'minimax-m3'
    | 'deepseek-v4-pro'
    | 'deepseek-v4p1-flash';
  /**
   * @default 50
   */
  limit?: string;
}

export interface ModelListResponse {
  items: Array<ModelListResponse.Item>;
  nextCursor:
    | 'claude-fable-5-1'
    | 'claude-fable-5'
    | 'claude-opus-5'
    | 'claude-sonnet-5'
    | 'claude-opus-4-8'
    | 'claude-opus-4-7'
    | 'claude-opus-4-6'
    | 'claude-sonnet-4-6'
    | 'claude-opus-4-5'
    | 'claude-4-5-haiku'
    | 'gpt-6-astra'
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
    | 'grok-4.6'
    | 'grok'
    | 'kimi-k3'
    | 'minimax-m2p7'
    | 'minimax-m3'
    | 'deepseek-v4-pro'
    | 'deepseek-v4p1-flash'
    | null;
}

export namespace ModelListResponse {
  export interface Item {
    name:
      | 'claude-fable-5-1'
      | 'claude-fable-5'
      | 'claude-opus-5'
      | 'claude-sonnet-5'
      | 'claude-opus-4-8'
      | 'claude-opus-4-7'
      | 'claude-opus-4-6'
      | 'claude-sonnet-4-6'
      | 'claude-opus-4-5'
      | 'claude-4-5-haiku'
      | 'gpt-6-astra'
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
      | 'grok-4.6'
      | 'grok'
      | 'kimi-k3'
      | 'minimax-m2p7'
      | 'minimax-m3'
      | 'deepseek-v4-pro'
      | 'deepseek-v4p1-flash';
    label: string;
    provider: string;
    enabled: boolean;
    available: boolean;
    unavailableReason: string | null;
    supportedInferenceProviders: Array<
      'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter'
    > | null;
    availableInferenceProviders: Array<
      'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter'
    >;
    configuredInferenceProvider:
      | 'TemboManagedInference'
      | 'BYOK'
      | 'AWSBedrock'
      | 'GCPVertexAI'
      | 'OpenRouter'
      | null;
    inferenceProvider: 'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter';
    inferenceProviderAccess: Item.InferenceProviderAccess;
    selectedInferenceProviderAvailable: boolean;
    selectedInferenceProviderUnavailableReason: string | null;
    chatgptAvailable: boolean;
    chatgptSupported: boolean;
    workspaceChatgptAvailable: boolean;
    supergrokAvailable: boolean;
    agentInferenceAvailable: boolean;
  }

  export namespace Item {
    export interface InferenceProviderAccess {
      TemboManagedInference:
        | InferenceProviderAccess.TemboManagedInference
        | InferenceProviderAccess.TemboManagedInference2;
      BYOK: InferenceProviderAccess.Byok | InferenceProviderAccess.Byok2;
      AWSBedrock: InferenceProviderAccess.AwsBedrock | InferenceProviderAccess.AwsBedrock2;
      GCPVertexAI: InferenceProviderAccess.GcpVertexAI | InferenceProviderAccess.GcpVertexAI2;
      OpenRouter: InferenceProviderAccess.OpenRouter | InferenceProviderAccess.OpenRouter2;
    }

    export namespace InferenceProviderAccess {
      export interface TemboManagedInference {
        available: true;
        unavailableCode: null;
        unavailableReason: null;
      }

      export interface TemboManagedInference2 {
        available: false;
        unavailableCode:
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected';
        unavailableReason: string;
      }

      export interface Byok {
        available: true;
        unavailableCode: null;
        unavailableReason: null;
      }

      export interface Byok2 {
        available: false;
        unavailableCode:
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected';
        unavailableReason: string;
      }

      export interface AwsBedrock {
        available: true;
        unavailableCode: null;
        unavailableReason: null;
      }

      export interface AwsBedrock2 {
        available: false;
        unavailableCode:
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected';
        unavailableReason: string;
      }

      export interface GcpVertexAI {
        available: true;
        unavailableCode: null;
        unavailableReason: null;
      }

      export interface GcpVertexAI2 {
        available: false;
        unavailableCode:
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected';
        unavailableReason: string;
      }

      export interface OpenRouter {
        available: true;
        unavailableCode: null;
        unavailableReason: null;
      }

      export interface OpenRouter2 {
        available: false;
        unavailableCode:
          | 'plan_required'
          | 'missing_credentials'
          | 'unsupported_provider'
          | 'chatgpt_not_connected'
          | 'supergrok_not_connected';
        unavailableReason: string;
      }
    }
  }
}

export interface ModelUpdateParams {
  enabled?: boolean;
  inferenceProvider?: 'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter' | null;
}

export interface ModelUpdateResponse {
  name:
    | 'claude-fable-5-1'
    | 'claude-fable-5'
    | 'claude-opus-5'
    | 'claude-sonnet-5'
    | 'claude-opus-4-8'
    | 'claude-opus-4-7'
    | 'claude-opus-4-6'
    | 'claude-sonnet-4-6'
    | 'claude-opus-4-5'
    | 'claude-4-5-haiku'
    | 'gpt-6-astra'
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
    | 'grok-4.6'
    | 'grok'
    | 'kimi-k3'
    | 'minimax-m2p7'
    | 'minimax-m3'
    | 'deepseek-v4-pro'
    | 'deepseek-v4p1-flash';
  label: string;
  provider: string;
  enabled: boolean;
  available: boolean;
  unavailableReason: string | null;
  supportedInferenceProviders: Array<
    'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter'
  > | null;
  availableInferenceProviders: Array<
    'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter'
  >;
  configuredInferenceProvider:
    | 'TemboManagedInference'
    | 'BYOK'
    | 'AWSBedrock'
    | 'GCPVertexAI'
    | 'OpenRouter'
    | null;
  inferenceProvider: 'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter';
  inferenceProviderAccess: ModelUpdateResponse.InferenceProviderAccess;
  selectedInferenceProviderAvailable: boolean;
  selectedInferenceProviderUnavailableReason: string | null;
  chatgptAvailable: boolean;
  chatgptSupported: boolean;
  workspaceChatgptAvailable: boolean;
  supergrokAvailable: boolean;
  agentInferenceAvailable: boolean;
}

export namespace ModelUpdateResponse {
  export interface InferenceProviderAccess {
    TemboManagedInference:
      | InferenceProviderAccess.TemboManagedInference
      | InferenceProviderAccess.TemboManagedInference2;
    BYOK: InferenceProviderAccess.Byok | InferenceProviderAccess.Byok2;
    AWSBedrock: InferenceProviderAccess.AwsBedrock | InferenceProviderAccess.AwsBedrock2;
    GCPVertexAI: InferenceProviderAccess.GcpVertexAI | InferenceProviderAccess.GcpVertexAI2;
    OpenRouter: InferenceProviderAccess.OpenRouter | InferenceProviderAccess.OpenRouter2;
  }

  export namespace InferenceProviderAccess {
    export interface TemboManagedInference {
      available: true;
      unavailableCode: null;
      unavailableReason: null;
    }

    export interface TemboManagedInference2 {
      available: false;
      unavailableCode:
        | 'plan_required'
        | 'missing_credentials'
        | 'unsupported_provider'
        | 'chatgpt_not_connected'
        | 'supergrok_not_connected';
      unavailableReason: string;
    }

    export interface Byok {
      available: true;
      unavailableCode: null;
      unavailableReason: null;
    }

    export interface Byok2 {
      available: false;
      unavailableCode:
        | 'plan_required'
        | 'missing_credentials'
        | 'unsupported_provider'
        | 'chatgpt_not_connected'
        | 'supergrok_not_connected';
      unavailableReason: string;
    }

    export interface AwsBedrock {
      available: true;
      unavailableCode: null;
      unavailableReason: null;
    }

    export interface AwsBedrock2 {
      available: false;
      unavailableCode:
        | 'plan_required'
        | 'missing_credentials'
        | 'unsupported_provider'
        | 'chatgpt_not_connected'
        | 'supergrok_not_connected';
      unavailableReason: string;
    }

    export interface GcpVertexAI {
      available: true;
      unavailableCode: null;
      unavailableReason: null;
    }

    export interface GcpVertexAI2 {
      available: false;
      unavailableCode:
        | 'plan_required'
        | 'missing_credentials'
        | 'unsupported_provider'
        | 'chatgpt_not_connected'
        | 'supergrok_not_connected';
      unavailableReason: string;
    }

    export interface OpenRouter {
      available: true;
      unavailableCode: null;
      unavailableReason: null;
    }

    export interface OpenRouter2 {
      available: false;
      unavailableCode:
        | 'plan_required'
        | 'missing_credentials'
        | 'unsupported_provider'
        | 'chatgpt_not_connected'
        | 'supergrok_not_connected';
      unavailableReason: string;
    }
  }
}
export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelUpdateResponse as ModelUpdateResponse,
    type ModelListParams as ModelListParams,
    type ModelUpdateParams as ModelUpdateParams,
  };
}
