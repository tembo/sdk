// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Task extends APIResource {
  /**
   * Create a task for tembo to start working on in the background
   *
   * @example
   * ```ts
   * const task = await client.task.create();
   * ```
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskCreateResponse> {
    return this._client.post('/task/create', { body, ...options });
  }

  /**
   * Gets a paginated list of issues for the organization
   *
   * @example
   * ```ts
   * const tasks = await client.task.list();
   * ```
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/task/list', { query, ...options });
  }

  /**
   * Search issues for the organization with pagination
   *
   * @example
   * ```ts
   * const response = await client.task.search({
   *   q: 'authentication bug',
   * });
   * ```
   */
  search(query: TaskSearchParams, options?: RequestOptions): APIPromise<TaskSearchResponse> {
    return this._client.get('/task/search', { query, ...options });
  }
}

export interface TaskCreateResponse {
  id: string;

  createdAt: string;

  description: string;

  /**
   * URL to view this task in the Tembo web application
   */
  htmlUrl: string;

  organizationId: string;

  status: string;

  title: string;

  updatedAt: string;
}

export interface TaskListResponse {
  issues: Array<TaskListResponse.Issue>;

  meta: TaskListResponse.Meta;
}

export namespace TaskListResponse {
  export interface Issue {
    id: string;

    createdAt: string;

    description: string;

    /**
     * URL to view this task in the Tembo web application
     */
    htmlUrl: string;

    organizationId: string;

    status: string;

    title: string;

    updatedAt: string;
  }

  export interface Meta {
    currentPage: number;

    hasNext: boolean;

    hasPrevious: boolean;

    pageSize: number;

    totalCount: number;

    totalPages: number;
  }
}

export interface TaskSearchResponse {
  issues: Array<TaskSearchResponse.Issue>;

  meta: TaskSearchResponse.Meta;

  query: string;
}

export namespace TaskSearchResponse {
  export interface Issue {
    id: string;

    createdAt: string;

    description: string;

    /**
     * URL to view this task in the Tembo web application
     */
    htmlUrl: string;

    organizationId: string;

    status: string;

    title: string;

    updatedAt: string;
  }

  export interface Meta {
    currentPage: number;

    hasNext: boolean;

    hasPrevious: boolean;

    pageSize: number;

    totalCount: number;

    totalPages: number;
  }
}

export interface TaskCreateParams {
  /**
   * The agent to use for this task
   */
  agent?: string;

  /**
   * The branch name to use for the work
   */
  branchName?: string | null;

  /**
   * Description of the task to be performed. Supports tagging files.
   */
  prompt?: string;

  /**
   * Whether to immediately queue the task for processing (optional, defaults to
   * true)
   */
  queueRightAway?: boolean | null;

  /**
   * Array of code repository urls that this task relates to
   */
  repositories?: Array<string>;

  /**
   * The branch to open the pull request against (e.g. main, develop)
   */
  targetBranch?: string | null;
}

export interface TaskListParams {
  /**
   * Number of items to return per page (max 100)
   */
  limit?: number;

  /**
   * Page number to retrieve (starts from 1)
   */
  page?: number;
}

export interface TaskSearchParams {
  /**
   * Search query to find issues by title or description
   */
  q: string;

  /**
   * Number of items to return per page (max 100)
   */
  limit?: number;

  /**
   * Page number to retrieve (starts from 1)
   */
  page?: number;
}

export declare namespace Task {
  export {
    type TaskCreateResponse as TaskCreateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskSearchResponse as TaskSearchResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskListParams as TaskListParams,
    type TaskSearchParams as TaskSearchParams,
  };
}
