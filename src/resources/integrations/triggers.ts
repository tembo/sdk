// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * List visible automation triggers grouped by provider.
   *
   * @param {TriggerListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerListResponse>} List integration triggers
   *
   * @example
   * ```ts
   * const trigger = await client.integrations.triggers.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: TriggerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TriggerListResponse> {
    return this._client.get('/v1/integrations/triggers', { query, ...options });
  }

  /**
   * Retrieve a trigger definition and its default filter values for an integration in the current organization.
   *
   * @param {string} triggerName
   * @param {TriggerRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerRetrieveResponse>} Retrieve an integration trigger
   *
   * @example
   * ```ts
   * const trigger = await client.integrations.triggers.retrieve('triggerName', {
   *   integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    triggerName: string,
    params: TriggerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TriggerRetrieveResponse> {
    const { integrationId } = params;
    return this._client.get(__scalarPath`/v1/integrations/${integrationId}/triggers/${triggerName}`, options);
  }

  /**
   * List one cursor-page of selectable values for an integration trigger filter field, with optional search.
   *
   * @param {string} field
   * @param {TriggerListFilterOptionsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerListFilterOptionsResponse>} List integration trigger filter options
   *
   * @example
   * ```ts
   * const trigger = await client.integrations.triggers.listFilterOptions('field', {
   *   integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   triggerName: 'triggerName',
   *   limit: 50,
   * });
   * ```
   */
  listFilterOptions(
    field: string,
    params: TriggerListFilterOptionsParams,
    options?: RequestOptions,
  ): APIPromise<TriggerListFilterOptionsResponse> {
    const { integrationId, triggerName, ...query } = params;
    return this._client.get(
      __scalarPath`/v1/integrations/${integrationId}/triggers/${triggerName}/filter-options/${field}`,
      { query, ...options },
    );
  }
}

export interface TriggerListParams {
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  cursor?: string;
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface TriggerListResponse {
  /**
   * @maxItems 100
   */
  items: Array<TriggerListResponse.Item>;
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  nextCursor: string | null;
}

export namespace TriggerListResponse {
  export interface Item {
    integrationType:
      | 'github'
      | 'gitlab'
      | 'bitbucket'
      | 'atlassian'
      | 'linear'
      | 'slack'
      | 'sentry'
      | 'aws'
      | 'agent'
      | 'notion'
      | 'postgres'
      | 'bigquery'
      | 'azure'
      | 'ms-teams'
      | 'snyk'
      | 'hubspot'
      | 'openconnect'
      | 'tailscale';
    /**
     * @maxItems 100
     */
    triggers: Array<Item.Trigger>;
  }

  export namespace Item {
    export interface Trigger {
      /**
       * @maxLength 4096
       */
      description: string;
      /**
       * @maxLength 500
       */
      displayName: string;
      hasFilterOptions: boolean;
      /**
       * @minLength 1
       * @maxLength 500
       */
      name: string;
      filters?: Trigger.Filters;
    }

    export namespace Trigger {
      export interface Filters {
        properties: Record<string, Filters.Properties | Filters.Properties2 | Filters.Properties3>;
      }

      export namespace Filters {
        export interface Properties {
          type: 'boolean';
          /**
           * @maxLength 2000
           */
          description?: string;
          default?: boolean;
        }

        export interface Properties2 {
          type: 'string';
          /**
           * @maxLength 2000
           */
          description?: string;
          /**
           * @maxItems 100
           */
          enum?: Array<string>;
        }

        export interface Properties3 {
          items: Properties3.Items;
          type: 'array';
          /**
           * @maxLength 2000
           */
          description?: string;
        }

        export namespace Properties3 {
          export interface Items {
            type: 'string';
            /**
             * @maxItems 100
             */
            enum?: Array<string>;
          }
        }
      }
    }
  }
}

export interface TriggerRetrieveParams {
  /**
   * @format uuid
   */
  integrationId: string;
}

export interface TriggerRetrieveResponse {
  /**
   * @maxLength 4096
   */
  description: string;
  /**
   * @maxLength 500
   */
  displayName: string;
  hasFilterOptions: boolean;
  /**
   * @minLength 1
   * @maxLength 500
   */
  name: string;
  /**
   * @format uuid
   */
  integrationId: string;
  integrationType:
    | 'github'
    | 'gitlab'
    | 'bitbucket'
    | 'atlassian'
    | 'linear'
    | 'slack'
    | 'sentry'
    | 'aws'
    | 'agent'
    | 'notion'
    | 'postgres'
    | 'bigquery'
    | 'azure'
    | 'ms-teams'
    | 'snyk'
    | 'hubspot'
    | 'openconnect'
    | 'tailscale';
  defaultFilters: Record<string, boolean | string | Array<string>>;
  filters?: TriggerRetrieveResponse.Filters;
}

export namespace TriggerRetrieveResponse {
  export interface Filters {
    properties: Record<string, Filters.Properties | Filters.Properties2 | Filters.Properties3>;
  }

  export namespace Filters {
    export interface Properties {
      type: 'boolean';
      /**
       * @maxLength 2000
       */
      description?: string;
      default?: boolean;
    }

    export interface Properties2 {
      type: 'string';
      /**
       * @maxLength 2000
       */
      description?: string;
      /**
       * @maxItems 100
       */
      enum?: Array<string>;
    }

    export interface Properties3 {
      items: Properties3.Items;
      type: 'array';
      /**
       * @maxLength 2000
       */
      description?: string;
    }

    export namespace Properties3 {
      export interface Items {
        type: 'string';
        /**
         * @maxItems 100
         */
        enum?: Array<string>;
      }
    }
  }
}

export interface TriggerListFilterOptionsParams {
  /**
   * Path param
   * @format uuid
   */
  integrationId: string;
  /**
   * Path param
   * @minLength 1
   * @maxLength 500
   */
  triggerName: string;
  /**
   * Query param
   * @minLength 1
   * @maxLength 8192
   */
  cursor?: string;
  /**
   * Query param
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Query param
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
}

export interface TriggerListFilterOptionsResponse {
  /**
   * @maxItems 100
   */
  items: Array<TriggerListFilterOptionsResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 8192
   */
  nextCursor: string | null;
}

export namespace TriggerListFilterOptionsResponse {
  export interface Item {
    /**
     * @maxLength 500
     */
    value: string;
    /**
     * @maxLength 500
     */
    label: string;
  }
}
export declare namespace Triggers {
  export {
    type TriggerListResponse as TriggerListResponse,
    type TriggerRetrieveResponse as TriggerRetrieveResponse,
    type TriggerListFilterOptionsResponse as TriggerListFilterOptionsResponse,
    type TriggerListParams as TriggerListParams,
    type TriggerRetrieveParams as TriggerRetrieveParams,
    type TriggerListFilterOptionsParams as TriggerListFilterOptionsParams,
  };
}
