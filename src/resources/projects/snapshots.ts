// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * List recent VM snapshots built for a project.
   *
   * @param {string} projectID
   * @param {SnapshotListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SnapshotListResponse>} List project snapshots
   *
   * @example
   * ```ts
   * const snapshot = await client.projects.snapshots.list('projectId', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    projectID: string,
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/snapshots`, { query, ...options });
  }

  /**
   * Retrieve one project snapshot.
   *
   * @param {string} snapshotID
   * @param {SnapshotRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SnapshotRetrieveResponse>} Retrieve a project snapshot
   *
   * @example
   * ```ts
   * const snapshot = await client.projects.snapshots.retrieve('snapshotId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  retrieve(
    snapshotID: string,
    params: SnapshotRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotRetrieveResponse> {
    const { projectId } = params;
    return this._client.get(__scalarPath`/v1/projects/${projectId}/snapshots/${snapshotID}`, options);
  }

  /**
   * Rename a snapshot or choose whether it is pinned.
   *
   * @param {string} snapshotID
   * @param {SnapshotUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SnapshotUpdateResponse>} Update a project snapshot
   *
   * @example
   * ```ts
   * const snapshot = await client.projects.snapshots.update('snapshotId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  update(
    snapshotID: string,
    params: SnapshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/projects/${projectId}/snapshots/${snapshotID}`, {
      body,
      ...options,
    });
  }

  /**
   * Archive a project snapshot.
   *
   * @param {string} snapshotID
   * @param {SnapshotDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SnapshotDeleteResponse>} Delete a project snapshot
   *
   * @example
   * ```ts
   * const snapshot = await client.projects.snapshots.delete('snapshotId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(
    snapshotID: string,
    params: SnapshotDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotDeleteResponse> {
    const { projectId } = params;
    return this._client.delete(__scalarPath`/v1/projects/${projectId}/snapshots/${snapshotID}`, options);
  }
}

export interface SnapshotListParams {
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

export interface SnapshotListResponse {
  items: Array<SnapshotListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
}

export namespace SnapshotListResponse {
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
    isActive: boolean;
    name: string | null;
    /**
     * @format date-time
     */
    pinnedAt: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * @minimum 0
     */
    buildDurationMs: number | null;
    /**
     * @format date-time
     */
    builtAt: string | null;
    /**
     * @exclusiveMinimum 0
     */
    cpu: number | null;
    hasSetupScript: boolean | null;
    includesDeps: boolean | null;
    includesRepos: boolean | null;
    includesSkills: boolean | null;
    isKvm: boolean | null;
    /**
     * @exclusiveMinimum 0
     */
    memoryMb: number | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    projectId: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    rebuildOfSnapshotId: string | null;
    repositoryIds: Array<string> | null;
    /**
     * @maxLength 20000
     */
    setupScript: string | null;
    size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
    /**
     * @pattern ^\d+$
     */
    sizeBytes: string | null;
    trigger: 'manual' | 'scheduled' | 'rebuild' | 'manager_reconcile' | 'admin' | null;
  }
}

export interface SnapshotRetrieveParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface SnapshotRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  isActive: boolean;
  name: string | null;
  /**
   * @format date-time
   */
  pinnedAt: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @minimum 0
   */
  buildDurationMs: number | null;
  /**
   * @format date-time
   */
  builtAt: string | null;
  /**
   * @exclusiveMinimum 0
   */
  cpu: number | null;
  hasSetupScript: boolean | null;
  includesDeps: boolean | null;
  includesRepos: boolean | null;
  includesSkills: boolean | null;
  isKvm: boolean | null;
  /**
   * @exclusiveMinimum 0
   */
  memoryMb: number | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  rebuildOfSnapshotId: string | null;
  repositoryIds: Array<string> | null;
  /**
   * @maxLength 20000
   */
  setupScript: string | null;
  size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * @pattern ^\d+$
   */
  sizeBytes: string | null;
  trigger: 'manual' | 'scheduled' | 'rebuild' | 'manager_reconcile' | 'admin' | null;
}

export interface SnapshotUpdateParams {
  /**
   * Path param
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
  /**
   * Body param
   * @maxLength 120
   */
  name?: string | null;
  /**
   * Body param
   */
  pinned?: boolean;
}

export interface SnapshotUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  isActive: boolean;
  name: string | null;
  /**
   * @format date-time
   */
  pinnedAt: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @minimum 0
   */
  buildDurationMs: number | null;
  /**
   * @format date-time
   */
  builtAt: string | null;
  /**
   * @exclusiveMinimum 0
   */
  cpu: number | null;
  hasSetupScript: boolean | null;
  includesDeps: boolean | null;
  includesRepos: boolean | null;
  includesSkills: boolean | null;
  isKvm: boolean | null;
  /**
   * @exclusiveMinimum 0
   */
  memoryMb: number | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  rebuildOfSnapshotId: string | null;
  repositoryIds: Array<string> | null;
  /**
   * @maxLength 20000
   */
  setupScript: string | null;
  size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * @pattern ^\d+$
   */
  sizeBytes: string | null;
  trigger: 'manual' | 'scheduled' | 'rebuild' | 'manager_reconcile' | 'admin' | null;
}

export interface SnapshotDeleteParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface SnapshotDeleteResponse {
  /**
   * @minimum 0
   */
  cleanupJobCount: number;
  deleted: true;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
}
export declare namespace Snapshots {
  export {
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotDeleteResponse as SnapshotDeleteResponse,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotUpdateParams as SnapshotUpdateParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
