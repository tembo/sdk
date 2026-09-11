// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * List schedules linked to a project.
   *
   * @param {string} projectID
   * @param {ScheduleListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleListResponse>} List project schedules
   *
   * @example
   * ```ts
   * const schedule = await client.projects.schedules.list('projectId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    projectID: string,
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/schedules`, { query, ...options });
  }

  /**
   * Create a recurring project build schedule.
   *
   * @param {string} projectID
   * @param {ScheduleCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleCreateResponse>} Create a project schedule
   *
   * @example
   * ```ts
   * const schedule = await client.projects.schedules.create('projectId', {
   *   cron: 'x',
   * });
   * ```
   */
  create(
    projectID: string,
    body: ScheduleCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleCreateResponse> {
    return this._client.post(__scalarPath`/v1/projects/${projectID}/schedules`, { body, ...options });
  }

  /**
   * Retrieve one project build schedule.
   *
   * @param {string} scheduleID
   * @param {ScheduleRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleRetrieveResponse>} Retrieve a project schedule
   *
   * @example
   * ```ts
   * const schedule = await client.projects.schedules.retrieve('scheduleId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  retrieve(
    scheduleID: string,
    params: ScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleRetrieveResponse> {
    const { projectId } = params;
    return this._client.get(__scalarPath`/v1/projects/${projectId}/schedules/${scheduleID}`, options);
  }

  /**
   * Update timing or enabled state for a project schedule.
   *
   * @param {string} scheduleID
   * @param {ScheduleUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleUpdateResponse>} Update a project schedule
   *
   * @example
   * ```ts
   * const schedule = await client.projects.schedules.update('scheduleId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  update(
    scheduleID: string,
    params: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/projects/${projectId}/schedules/${scheduleID}`, {
      body,
      ...options,
    });
  }

  /**
   * Disable a project build schedule.
   *
   * @param {string} scheduleID
   * @param {ScheduleDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScheduleDeleteResponse>} Delete a project schedule
   *
   * @example
   * ```ts
   * const schedule = await client.projects.schedules.delete('scheduleId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(
    scheduleID: string,
    params: ScheduleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleDeleteResponse> {
    const { projectId } = params;
    return this._client.delete(__scalarPath`/v1/projects/${projectId}/schedules/${scheduleID}`, options);
  }
}
export interface ScheduleListParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
}

export interface ScheduleListResponse {
  items: Array<ScheduleListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
}

export namespace ScheduleListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    cron: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     */
    lastRunAt: string | null;
    /**
     * @format date-time
     */
    nextRunAt: string | null;
    timezone: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    projectId: string;
  }
}

export interface ScheduleCreateParams {
  /**
   * @minLength 1
   * @maxLength 120
   */
  cron: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  timezone?: string;
}

export interface ScheduleCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  cron: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
  timezone: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface ScheduleRetrieveParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface ScheduleRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  cron: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
  timezone: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface ScheduleUpdateParams {
  /**
   * Path param
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 120
   */
  cron?: string;
  /**
   * Body param
   */
  enabled?: boolean;
  /**
   * Body param
   * @minLength 1
   * @maxLength 100
   */
  timezone?: string | null;
}

export interface ScheduleUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  cron: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  /**
   * @format date-time
   */
  lastRunAt: string | null;
  /**
   * @format date-time
   */
  nextRunAt: string | null;
  timezone: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface ScheduleDeleteParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface ScheduleDeleteResponse {
  deleted: true;
  /**
   * @minLength 1
   * @maxLength 255
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
