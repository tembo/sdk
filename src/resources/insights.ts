// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Insights extends APIResource {
  /**
   * Retrieve pull request contribution insights and their collection status for the current organization.
   *
   * @param {InsightRetrieveParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InsightRetrieveResponse>} Retrieve insights
   *
   * @example
   * ```ts
   * const insight = await client.insights.retrieve({
   *   range: '1y',
   * });
   * ```
   */
  retrieve(
    query: InsightRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightRetrieveResponse> {
    return this._client.get('/v1/insights', { query, ...options });
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
   *   limit: 50,
   *   range: '1y',
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
   *   limit: 50,
   *   range: '1y',
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

export interface InsightRetrieveParams {
  /**
   * Time range to aggregate: last day, 7 days, 30 days, or year. Defaults to 1y.
   */
  range?: '1d' | '7d' | '30d' | '1y';
}

export interface InsightRetrieveResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string | null;
  status: 'syncing' | 'ready' | 'failed' | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  rangeStart: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  rangeEnd: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  lastSyncedAt: string | null;
  enabled: boolean;
  data: InsightRetrieveResponse.Data | null;
}

export namespace InsightRetrieveResponse {
  export interface Data {
    range: '1d' | '7d' | '30d' | '1y';
    summary: Data.Summary;
    timeSeries: Array<Data.TimeSeries>;
  }

  export namespace Data {
    export interface Summary {
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      tasksCompleted: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsCreated: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsMerged: number;
      /**
       * Recorded model cost plus VM compute fees in USD across the organization divided by Tembo-created PRs in the selected sync window. Excludes subscription fees and inference billing markup. Null when there are no PRs or no recorded costs.
       */
      modelCostPerPrUsd: number | null;
      temboContribution: number;
      /**
       * Recent period compared with the previous one. Null when the previous period has no baseline, such as when the organization joined during it.
       */
      changes: Summary.Changes;
    }

    export namespace Summary {
      export interface Changes {
        prsCreated: number | null;
        prsMerged: number | null;
        tasksCompleted: number | null;
        temboContribution: number | null;
      }
    }

    export interface TimeSeries {
      /**
       * Bucket key: YYYY-MM for 1y, YYYY-MM-DD (UTC) for 7d and 30d, and an ISO 8601 hour start for 1d.
       */
      month: string;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsWithTembo: number;
      prsWithoutTembo: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsMerged: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsCreated: number;
      temboContribution: number;
    }
  }
}

export interface InsightUpdateParams {
  /**
   * Enable or disable pull request contribution insight collection. Enabling starts the initial refresh when needed.
   */
  enabled: boolean;
}

export interface InsightUpdateResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string | null;
  status: 'syncing' | 'ready' | 'failed' | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  rangeStart: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  rangeEnd: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  lastSyncedAt: string | null;
  enabled: boolean;
  data: InsightUpdateResponse.Data | null;
}

export namespace InsightUpdateResponse {
  export interface Data {
    range: '1d' | '7d' | '30d' | '1y';
    summary: Data.Summary;
    timeSeries: Array<Data.TimeSeries>;
  }

  export namespace Data {
    export interface Summary {
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      tasksCompleted: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsCreated: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsMerged: number;
      /**
       * Recorded model cost plus VM compute fees in USD across the organization divided by Tembo-created PRs in the selected sync window. Excludes subscription fees and inference billing markup. Null when there are no PRs or no recorded costs.
       */
      modelCostPerPrUsd: number | null;
      temboContribution: number;
      /**
       * Recent period compared with the previous one. Null when the previous period has no baseline, such as when the organization joined during it.
       */
      changes: Summary.Changes;
    }

    export namespace Summary {
      export interface Changes {
        prsCreated: number | null;
        prsMerged: number | null;
        tasksCompleted: number | null;
        temboContribution: number | null;
      }
    }

    export interface TimeSeries {
      /**
       * Bucket key: YYYY-MM for 1y, YYYY-MM-DD (UTC) for 7d and 30d, and an ISO 8601 hour start for 1d.
       */
      month: string;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsWithTembo: number;
      prsWithoutTembo: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsMerged: number;
      /**
       * @minimum -9007199254740991
       * @maximum 9007199254740991
       */
      prsCreated: number;
      temboContribution: number;
    }
  }
}

export interface InsightListMembersParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Time range to aggregate: last day, 7 days, 30 days, or year. Defaults to 1y.
   */
  range?: '1d' | '7d' | '30d' | '1y';
}

export interface InsightListMembersResponse {
  items: Array<InsightListMembersResponse.Item>;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  nextCursor: string | null;
}

export namespace InsightListMembersResponse {
  export interface Item {
    provider: string;
    username: string;
    name: string | null;
    avatarUrl: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    prsCreated: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    prsMerged: number;
    temboContribution: number;
  }
}

export interface InsightListRepositoriesParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Time range to aggregate: last day, 7 days, 30 days, or year. Defaults to 1y.
   */
  range?: '1d' | '7d' | '30d' | '1y';
}

export interface InsightListRepositoriesResponse {
  items: Array<InsightListRepositoriesResponse.Item>;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  nextCursor: string | null;
}

export namespace InsightListRepositoriesResponse {
  export interface Item {
    codeRepositoryId: string;
    name: string;
    url: string;
    provider: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    prsCreated: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
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
    type InsightRetrieveParams as InsightRetrieveParams,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightListMembersParams as InsightListMembersParams,
    type InsightListRepositoriesParams as InsightListRepositoriesParams,
  };
}
