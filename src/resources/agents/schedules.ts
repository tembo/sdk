// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * List the schedules configured for an agent.
   *
   * @param {string} agentID
   * @param {ScheduleListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleListResponse>} List agent schedules
   *
   * @example
   * ```ts
   * const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: '50',
   * });
   * ```
   */
  list(
    agentID: string,
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/schedules`, { query, ...options });
  }

  /**
   * Create a recurring schedule that starts agent runs using a cron expression.
   *
   * @param {string} agentID
   * @param {ScheduleCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleCreateResponse>} Create an agent schedule
   *
   * @example
   * ```ts
   * const schedule = await client.agents.schedules.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   cron: 'x',
   * });
   * ```
   */
  create(
    agentID: string,
    body: ScheduleCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/schedules`, { body, ...options });
  }

  /**
   * Retrieve an agent schedule, including its enabled state and next execution time.
   *
   * @param {string} scheduleID
   * @param {ScheduleRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleRetrieveResponse>} Retrieve an agent schedule
   *
   * @example
   * ```ts
   * const schedule = await client.agents.schedules.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    scheduleID: string,
    params: ScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleRetrieveResponse> {
    const { agentId } = params;
    return this._client.get(__scalarPath`/v1/agents/${agentId}/schedules/${scheduleID}`, options);
  }

  /**
   * Update an agent schedule, including its cron expression or enabled state.
   *
   * @param {string} scheduleID
   * @param {ScheduleUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleUpdateResponse>} Update an agent schedule
   *
   * @example
   * ```ts
   * const schedule = await client.agents.schedules.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   cron: 'x',
   * });
   * ```
   */
  update(
    scheduleID: string,
    params: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    const { agentId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/agents/${agentId}/schedules/${scheduleID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a recurring agent schedule.
   *
   * @param {string} scheduleID
   * @param {ScheduleDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleDeleteResponse>} Delete an agent schedule
   *
   * @example
   * ```ts
   * const schedule = await client.agents.schedules.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(
    scheduleID: string,
    params: ScheduleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleDeleteResponse> {
    const { agentId } = params;
    return this._client.delete(__scalarPath`/v1/agents/${agentId}/schedules/${scheduleID}`, options);
  }
}
export interface ScheduleListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface ScheduleListResponse {
  items: Array<ScheduleListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace ScheduleListResponse {
  export interface Item {
    /**
     * @format uuid
     */
    id: string;
    cron: string;
    /**
     * @format date-time
     */
    lastRunAt: string | null;
    /**
     * @format date-time
     */
    nextRunAt: string | null;
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
  }
}

export interface ScheduleCreateParams {
  /**
   * @minLength 1
   * @maxLength 500
   */
  cron: string;
}

export interface ScheduleCreateResponse {
  /**
   * @format uuid
   */
  id: string;
  cron: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
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
}

export interface ScheduleRetrieveParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface ScheduleRetrieveResponse {
  /**
   * @format uuid
   */
  id: string;
  cron: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
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
}

export interface ScheduleUpdateParams {
  /**
   * Path param
   * @format uuid
   */
  agentId: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 500
   */
  cron: string;
}

export interface ScheduleUpdateResponse {
  /**
   * @format uuid
   */
  id: string;
  cron: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
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
}

export interface ScheduleDeleteParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface ScheduleDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Schedules {
  export {
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
