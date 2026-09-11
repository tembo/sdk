// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as TemplatesAPI from './templates';

export class Triggers extends APIResource {
  /**
   * List the integration events configured to start runs of an agent.
   *
   * @param {string} agentID
   * @param {TriggerListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerListResponse>} List agent triggers
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: '50',
   * });
   * ```
   */
  list(
    agentID: string,
    query: TriggerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TriggerListResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/triggers`, { query, ...options });
  }

  /**
   * Configure an integration event to start agent runs. Available filters depend on the integration and event name.
   *
   * @param {string} agentID
   * @param {TriggerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerCreateResponse>} Create an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   * });
   * ```
   */
  create(
    agentID: string,
    body: TriggerCreateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/triggers`, { body, ...options });
  }

  /**
   * Retrieve an agent trigger and its integration event filters.
   *
   * @param {string} triggerID
   * @param {TriggerRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerRetrieveResponse>} Retrieve an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    triggerID: string,
    params: TriggerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TriggerRetrieveResponse> {
    const { agentId } = params;
    return this._client.get(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, options);
  }

  /**
   * Update an agent trigger configuration or enabled state.
   *
   * @param {string} triggerID
   * @param {TriggerUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerUpdateResponse>} Update an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   name: 'x',
   * });
   * ```
   */
  update(
    triggerID: string,
    params: TriggerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerUpdateResponse> {
    const { agentId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an integration event trigger for an agent.
   *
   * @param {string} triggerID
   * @param {TriggerDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerDeleteResponse>} Delete an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(
    triggerID: string,
    params: TriggerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TriggerDeleteResponse> {
    const { agentId } = params;
    return this._client.delete(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, options);
  }
}

export interface TriggerListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface TriggerListResponse {
  items: Array<TriggerListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace TriggerListResponse {
  export interface Item {
    /**
     * @format uuid
     */
    id: string;
    triggerName: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * @format uuid
     */
    agentId: string;
    /**
     * @minLength 1
     * @maxLength 200
     */
    triggerDisplayName: string;
    /**
     * @format uuid
     */
    integrationId: string | null;
    integrationType: string | null;
    /**
     * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
     */
    filters: TemplatesAPI.TriggerFilters;
  }
}

export interface TriggerCreateParams {
  /**
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  integrationType?: string;
  /**
   * @format uuid
   */
  integrationId?: string;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters?: TemplatesAPI.TriggerFilters;
}

export interface TriggerCreateResponse {
  /**
   * @format uuid
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format uuid
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters: TemplatesAPI.TriggerFilters;
}

export interface TriggerRetrieveParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface TriggerRetrieveResponse {
  /**
   * @format uuid
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format uuid
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters: TemplatesAPI.TriggerFilters;
}

export interface TriggerUpdateParams {
  /**
   * Path param
   * @format uuid
   */
  agentId: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * Body param
   * @format uuid
   */
  integrationId?: string;
  /**
   * Body param: Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters?: TemplatesAPI.TriggerFilters;
}

export interface TriggerUpdateResponse {
  /**
   * @format uuid
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format uuid
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters: TemplatesAPI.TriggerFilters;
}

export interface TriggerDeleteParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface TriggerDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Triggers {
  export {
    type TriggerListResponse as TriggerListResponse,
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerRetrieveResponse as TriggerRetrieveResponse,
    type TriggerUpdateResponse as TriggerUpdateResponse,
    type TriggerDeleteResponse as TriggerDeleteResponse,
    type TriggerListParams as TriggerListParams,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerRetrieveParams as TriggerRetrieveParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerDeleteParams as TriggerDeleteParams,
  };
}
