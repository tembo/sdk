// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Insights extends APIResource {
  /**
   * Retrieve pull request contribution insights and their collection status for the current organization.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InsightRetrieveResponse>} Retrieve insights
   *
   * @example
   * ```ts
   * const insight = await client.insights.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<InsightRetrieveResponse> {
    return this._client.get('/v1/insights', options);
  }

  /**
   * Enable or disable pull request insight collection. Enabling starts the initial refresh when needed.
   *
   * @param {InsightUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InsightUpdateResponse>} Update insights
   *
   * @example
   * ```ts
   * const insight = await client.insights.update({
   *   enabled: false,
   * });
   * ```
   */
  update(body: InsightUpdateParams, options?: RequestOptions): APIPromise<InsightUpdateResponse> {
    return this._client.patch('/v1/insights', { body, ...options });
  }

  /**
   * List organization members included in pull request insights.
   *
   * @param {InsightListMembersParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InsightListMembersResponse>} List insight members
   *
   * @example
   * ```ts
   * const insight = await client.insights.listMembers({
   *   limit: '50',
   * });
   * ```
   */
  listMembers(
    query: InsightListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightListMembersResponse> {
    return this._client.get('/v1/insights/members', { query, ...options });
  }

  /**
   * List repositories included in pull request insights for the current organization.
   *
   * @param {InsightListRepositoriesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InsightListRepositoriesResponse>} List insight repositories
   *
   * @example
   * ```ts
   * const insight = await client.insights.listRepositories({
   *   limit: '50',
   * });
   * ```
   */
  listRepositories(
    query: InsightListRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightListRepositoriesResponse> {
    return this._client.get('/v1/insights/repositories', { query, ...options });
  }
}
export interface InsightRetrieveResponse {
  /**
   * @format uuid
   */
  id: string | null;
  status: 'syncing' | 'ready' | 'failed' | null;
  /**
   * @format date-time
   */
  rangeStart: string | null;
  /**
   * @format date-time
   */
  rangeEnd: string | null;
  /**
   * @format date-time
   */
  lastSyncedAt: string | null;
  enabled: boolean;
  data: InsightRetrieveResponse.Data | null;
}

export namespace InsightRetrieveResponse {
  export interface Data {
    summary: Data.Summary;
    timeSeries: Array<Data.TimeSeries>;
  }

  export namespace Data {
    export interface Summary {
      tasksCompleted: number;
      prsCreated: number;
      prsMerged: number;
      temboContribution: number;
      changes: Summary.Changes;
    }

    export namespace Summary {
      export interface Changes {
        prsCreated: number;
        prsMerged: number;
        tasksCompleted: number;
        temboContribution: number;
      }
    }

    export interface TimeSeries {
      month: string;
      prsWithTembo: number;
      prsWithoutTembo: number;
      prsMerged: number;
      prsCreated: number;
      temboContribution: number;
    }
  }
}

export interface InsightUpdateParams {
  enabled: boolean;
}

export interface InsightUpdateResponse {
  /**
   * @format uuid
   */
  id: string | null;
  status: 'syncing' | 'ready' | 'failed' | null;
  /**
   * @format date-time
   */
  rangeStart: string | null;
  /**
   * @format date-time
   */
  rangeEnd: string | null;
  /**
   * @format date-time
   */
  lastSyncedAt: string | null;
  enabled: boolean;
  data: InsightUpdateResponse.Data | null;
}

export namespace InsightUpdateResponse {
  export interface Data {
    summary: Data.Summary;
    timeSeries: Array<Data.TimeSeries>;
  }

  export namespace Data {
    export interface Summary {
      tasksCompleted: number;
      prsCreated: number;
      prsMerged: number;
      temboContribution: number;
      changes: Summary.Changes;
    }

    export namespace Summary {
      export interface Changes {
        prsCreated: number;
        prsMerged: number;
        tasksCompleted: number;
        temboContribution: number;
      }
    }

    export interface TimeSeries {
      month: string;
      prsWithTembo: number;
      prsWithoutTembo: number;
      prsMerged: number;
      prsCreated: number;
      temboContribution: number;
    }
  }
}

export interface InsightListMembersParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface InsightListMembersResponse {
  items: Array<InsightListMembersResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace InsightListMembersResponse {
  export interface Item {
    provider: string;
    username: string;
    name: string | null;
    avatarUrl: string;
    prsCreated: number;
    prsMerged: number;
    temboContribution: number;
  }
}

export interface InsightListRepositoriesParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
}

export interface InsightListRepositoriesResponse {
  items: Array<InsightListRepositoriesResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace InsightListRepositoriesResponse {
  export interface Item {
    codeRepositoryId: string;
    name: string;
    url: string;
    provider: string;
    prsCreated: number;
    prsMerged: number;
    temboContribution: number;
  }
}
export declare namespace Insights {
  export {
    type InsightRetrieveResponse as InsightRetrieveResponse,
    type InsightUpdateResponse as InsightUpdateResponse,
    type InsightListMembersResponse as InsightListMembersResponse,
    type InsightListRepositoriesResponse as InsightListRepositoriesResponse,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightListMembersParams as InsightListMembersParams,
    type InsightListRepositoriesParams as InsightListRepositoriesParams,
  };
}
