// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class AuditLogs extends APIResource {
  /**
   * Read retained mutation history for the authenticated organization. Requires organization:audit_log:read.
   *
   * @param {AuditLogListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuditLogListResponse>} Paginated audit history
   *
   * @example
   * ```ts
   * const auditLog = await client.auditLogs.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditLogListResponse> {
    return this._client.get('/v1/audit-logs', { query, ...options });
  }

  /**
   * Resource and operation pairs recorded for the authenticated organization. Requires organization:audit_log:read.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuditLogListFiltersResponse>} Recorded resource and operation pairs
   *
   * @example
   * ```ts
   * const auditLog = await client.auditLogs.listFilters();
   * ```
   */
  listFilters(options?: RequestOptions): APIPromise<AuditLogListFiltersResponse> {
    return this._client.get('/v1/audit-logs/filters', options);
  }
}

export interface AuditLogListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @maxLength 300
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
   * @minLength 1
   * @maxLength 2000
   */
  actorId?: string;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  resourceType?: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  resourceId?: string;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  operation?: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  from?: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  to?: string;
  /**
   * Search actor names, targets, resource types, and operations, e.g. `api_key.create`.
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
}

export interface AuditLogListResponse {
  items: Array<AuditLogListResponse.Item>;
  nextCursor: string | null;
}

export namespace AuditLogListResponse {
  export interface Item {
    id: string;
    organizationId: string;
    actorType: string;
    actorId: string | null;
    actorLabel: string | null;
    source: string;
    resourceType: string;
    resourceId: string | null;
    resourceLabel: string | null;
    operation: string;
    details: Record<string, unknown> | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
  }
}

export interface AuditLogListFiltersResponse {
  items: Array<AuditLogListFiltersResponse.Item>;
}

export namespace AuditLogListFiltersResponse {
  export interface Item {
    resourceType: string;
    operation: string;
  }
}
export declare namespace AuditLogs {
  export {
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListFiltersResponse as AuditLogListFiltersResponse,
    type AuditLogListParams as AuditLogListParams,
  };
}
