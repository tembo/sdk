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
   *   limit: 50,
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
   * @param {string} modelName
   * @param {ModelUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ModelUpdateResponse>} Update a model
   *
   * @example
   * ```ts
   * const model = await client.models.update('modelName', {});
   * ```
   */
  update(
    modelName: string,
    body: ModelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ModelUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/models/${modelName}`, { body, ...options });
  }
}

export interface ModelListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @minLength 1
   * @maxLength 200
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface ModelListResponse {
  items: Array<ModelListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 200
   */
  nextCursor: string | null;
}

export namespace ModelListResponse {
  export interface Item {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
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
    claudeSubscriptionSupported: boolean;
    workspaceClaudeSubscriptionAvailable: boolean;
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
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
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
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
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
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
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
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
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
          | 'supergrok_not_connected'
          | 'claude_subscription_not_connected';
        unavailableReason: string;
      }
    }
  }
}

export interface ModelUpdateParams {
  /**
   * Enable or disable this model for the organization.
   */
  enabled?: boolean;
  /**
   * Select the inference provider used to run this model. Use listModels to discover available provider access.
   */
  inferenceProvider?: 'TemboManagedInference' | 'BYOK' | 'AWSBedrock' | 'GCPVertexAI' | 'OpenRouter' | null;
}

export interface ModelUpdateResponse {
  /**
   * @minLength 1
   * @maxLength 200
   */
  name: string;
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
  claudeSubscriptionSupported: boolean;
  workspaceClaudeSubscriptionAvailable: boolean;
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
        | 'supergrok_not_connected'
        | 'claude_subscription_not_connected';
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
        | 'supergrok_not_connected'
        | 'claude_subscription_not_connected';
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
        | 'supergrok_not_connected'
        | 'claude_subscription_not_connected';
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
        | 'supergrok_not_connected'
        | 'claude_subscription_not_connected';
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
        | 'supergrok_not_connected'
        | 'claude_subscription_not_connected';
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
