// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

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
export declare namespace Triggers {
  export { type TriggerListResponse as TriggerListResponse, type TriggerListParams as TriggerListParams };
}
