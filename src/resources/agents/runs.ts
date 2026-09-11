// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * List executions of an agent, including status, linked session, measured duration, and failure summary.
   *
   * @param {string} agentID
   * @param {RunListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunListResponse>} List agent runs
   *
   * @example
   * ```ts
   * const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: '50',
   * });
   * ```
   */
  list(
    agentID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/runs`, { query, ...options });
  }

  /**
   * Queue an agent run with optional event input. The response confirms queuing, not completed execution.
   *
   * @param {string} agentID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunCreateResponse>} Create an agent run
   *
   * @example
   * ```ts
   * const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  create(agentID: string, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/runs`, options);
  }

  /**
   * Retrieve the status, linked session, measured duration, and failure summary of an agent run.
   *
   * @param {string} runID
   * @param {RunRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunRetrieveResponse>} Retrieve an agent run
   *
   * @example
   * ```ts
   * const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    runID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RunRetrieveResponse> {
    const { agentId } = params;
    return this._client.get(__scalarPath`/v1/agents/${agentId}/runs/${runID}`, options);
  }
}

export interface RunListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface RunListResponse {
  items: Array<RunListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace RunListResponse {
  export interface Item {
    /**
     * @format uuid
     */
    id: string;
    sessionId: string | null;
    status: string;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * Measured duration of the agent run in milliseconds.
     */
    durationMs: number;
    errorMessage: string | null;
  }
}

export interface RunCreateResponse {
  /**
   * @format uuid
   */
  jobId: string;
  /**
   * @format uuid
   */
  agentId: string;
  status: 'queued';
}

export interface RunRetrieveParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface RunRetrieveResponse {
  /**
   * @format uuid
   */
  id: string;
  sessionId: string | null;
  status: string;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * Measured duration of the agent run in milliseconds.
   */
  durationMs: number;
  errorMessage: string | null;
}
export declare namespace Runs {
  export {
    type RunListResponse as RunListResponse,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunListParams as RunListParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}
