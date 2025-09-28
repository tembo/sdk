// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Task extends APIResource {
  /**
   * Create a user-supplied task
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/task/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets a paginated list of issues for the organization
   */
  list(query: TaskListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/task/list', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Search issues for the organization with pagination
   */
  search(query: TaskSearchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/task/search', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TaskCreateParams {
  json: string;

  agent?: string;

  branch?: string | null;

  codeRepoIds?: Array<string>;

  description?: string;

  prompt?: string;

  queueRightAway?: boolean;
}

export interface TaskListParams {
  limit?: number;

  page?: number;
}

export interface TaskSearchParams {
  q: string;

  limit?: number;

  page?: number;
}

export declare namespace Task {
  export {
    type TaskCreateParams as TaskCreateParams,
    type TaskListParams as TaskListParams,
    type TaskSearchParams as TaskSearchParams,
  };
}
