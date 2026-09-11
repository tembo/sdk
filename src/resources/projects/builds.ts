// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Builds extends APIResource {
  /**
   * List recent queued, running, and failed project builds.
   *
   * @param {string} projectID
   * @param {BuildListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildListResponse>} List project builds
   *
   * @example
   * ```ts
   * const build = await client.projects.builds.list('projectId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    projectID: string,
    query: BuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BuildListResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/builds`, { query, ...options });
  }

  /**
   * Build selected project sizes or rebuild one snapshot.
   *
   * @param {string} projectID
   * @param {BuildCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildCreateResponse>} Create a project build
   *
   * @example
   * ```ts
   * const build = await client.projects.builds.create('projectId', {});
   * ```
   */
  create(
    projectID: string,
    body: BuildCreateParams,
    options?: RequestOptions,
  ): APIPromise<BuildCreateResponse> {
    return this._client.post(__scalarPath`/v1/projects/${projectID}/builds`, { body, ...options });
  }

  /**
   * Retrieve project build status and captured logs.
   *
   * @param {string} buildID
   * @param {BuildRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildRetrieveResponse>} Retrieve a project build
   *
   * @example
   * ```ts
   * const build = await client.projects.builds.retrieve('buildId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  retrieve(
    buildID: string,
    params: BuildRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveResponse> {
    const { projectId } = params;
    return this._client.get(__scalarPath`/v1/projects/${projectId}/builds/${buildID}`, options);
  }

  /**
   * Cancel an active queued or running project build.
   *
   * @param {string} buildID
   * @param {BuildCancelParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildCancelResponse>} Cancel a project build
   *
   * @example
   * ```ts
   * const build = await client.projects.builds.cancel('buildId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  cancel(
    buildID: string,
    params: BuildCancelParams,
    options?: RequestOptions,
  ): APIPromise<BuildCancelResponse> {
    const { projectId } = params;
    return this._client.post(__scalarPath`/v1/projects/${projectId}/builds/${buildID}/cancel`, options);
  }
}
export interface BuildListParams {
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

export interface BuildListResponse {
  items: Array<BuildListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
}

export namespace BuildListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @format date-time
     */
    completedAt: string | null;
    /**
     * @minimum 0
     */
    durationMs: number | null;
    failure: string | null;
    includeDeps: boolean;
    includeSkills: boolean;
    name: string | null;
    progress: Item.Progress | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    projectId: string;
    repositoryIds: Array<string> | null;
    sandboxSize: 'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    /**
     * @maxLength 20000
     */
    setupScript: string | null;
    /**
     * @format date-time
     */
    startedAt: string | null;
    status: 'pending' | 'running' | 'failed' | 'completed' | 'cancelled';
    trigger: 'manual' | 'scheduled' | 'rebuild';
  }

  export namespace Item {
    export interface Progress {
      message: string | null;
      /**
       * @minimum 0
       * @maximum 100
       */
      percent: number | null;
      phase: string | null;
      /**
       * @format date-time
       */
      updatedAt: string | null;
    }
  }
}

export interface BuildCreateParams {
  /**
   * @minItems 1
   */
  sizes?: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  snapshotId?: string;
}

export interface BuildCreateResponse {
  /**
   * @minItems 1
   */
  jobIds: Array<string>;
}

export interface BuildRetrieveParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface BuildRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  /**
   * @format date-time
   */
  completedAt: string | null;
  /**
   * @minimum 0
   */
  durationMs: number | null;
  failure: string | null;
  includeDeps: boolean;
  includeSkills: boolean;
  logs: string;
  name: string | null;
  progress: BuildRetrieveResponse.Progress | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
  repositoryIds: Array<string> | null;
  sandboxSize: 'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
  /**
   * @maxLength 20000
   */
  setupScript: string | null;
  /**
   * @format date-time
   */
  startedAt: string | null;
  status: 'pending' | 'running' | 'failed' | 'completed' | 'cancelled';
  trigger: 'manual' | 'scheduled' | 'rebuild';
}

export namespace BuildRetrieveResponse {
  export interface Progress {
    message: string | null;
    /**
     * @minimum 0
     * @maximum 100
     */
    percent: number | null;
    phase: string | null;
    /**
     * @format date-time
     */
    updatedAt: string | null;
  }
}

export interface BuildCancelParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface BuildCancelResponse {
  cancelled: true;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
}
export declare namespace Builds {
  export {
    type BuildListResponse as BuildListResponse,
    type BuildCreateResponse as BuildCreateResponse,
    type BuildRetrieveResponse as BuildRetrieveResponse,
    type BuildCancelResponse as BuildCancelResponse,
    type BuildListParams as BuildListParams,
    type BuildCreateParams as BuildCreateParams,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildCancelParams as BuildCancelParams,
  };
}
