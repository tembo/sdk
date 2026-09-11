// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Artifacts extends APIResource {
  /**
   * List organization artifacts with optional session and type filters.
   *
   * @param {ArtifactListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactListResponse>} List artifacts
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: ArtifactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtifactListResponse> {
    return this._client.get('/v1/artifacts', { query, ...options });
  }

  /**
   * Create a file artifact for a session from inline content or an uploaded asset.
   *
   * @param {ArtifactCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactCreateResponse>} Create an artifact
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.create({
   *   title: 'x',
   *   output: {
   *     type: 'html',
   *     content: 'x',
   *   },
   *   sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  create(body: ArtifactCreateParams, options?: RequestOptions): APIPromise<ArtifactCreateResponse> {
    return this._client.post('/v1/artifacts', { body, ...options });
  }

  /**
   * Retrieve an organization artifact by ID.
   *
   * @param {string} artifactID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactRetrieveResponse>} Retrieve an artifact
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(artifactID: string, options?: RequestOptions): APIPromise<ArtifactRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/artifacts/${artifactID}`, options);
  }

  /**
   * Delete an organization artifact and its backing asset when present.
   *
   * @param {string} artifactID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactDeleteResponse>} Delete an artifact
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(artifactID: string, options?: RequestOptions): APIPromise<ArtifactDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/artifacts/${artifactID}`, options);
  }
}
export interface ArtifactListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  /**
   * @minLength 1
   */
  jobId?: string;
  /**
   * @format uuid
   */
  sessionId?: string;
  types?:
    | 'PullRequest'
    | 'ToolCall'
    | 'Plan'
    | 'Response'
    | 'File'
    | 'Service'
    | 'Source'
    | Array<'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source'>;
}

export interface ArtifactListResponse {
  items: Array<ArtifactListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace ArtifactListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uuid
     */
    sessionId: string;
    type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * @format uuid
     */
    assetId: string | null;
    category:
      | 'code_walkthrough'
      | 'bug_report'
      | 'incident_report'
      | 'license_audit'
      | 'data_flow_map'
      | 'security_findings'
      | 'cost_map'
      | 'ux_variations'
      | 'architecture_map'
      | 'migration_summary'
      | 'release_checklist'
      | 'shipped_summary'
      | 'rollout_plan'
      | 'diagram'
      | 'chart'
      | 'dashboard'
      | 'timeline'
      | 'comparison'
      | 'report'
      | null;
    contentType: string | null;
    description: string | null;
    fileKind: 'image' | 'video' | 'audio' | 'html' | 'markdown' | 'text' | 'file';
    fileName: string | null;
    outputType: 'html' | 'markdown' | 'json' | 'csv' | 'asset' | null;
    relatedPullRequestUrls: Array<string>;
    runtime: Item.Runtime | null;
    /**
     * @minimum 1
     * @maximum 65535
     */
    servicePort: number | null;
    /**
     * @format uri
     */
    serviceUrl: string | null;
    /**
     * @minimum 0
     */
    sizeBytes: number | null;
    /**
     * @format uri
     */
    sourceUrl: string | null;
    title: string;
  }

  export namespace Item {
    export interface Runtime {
      hostname: string | null;
      serviceName: string | null;
      serviceType: string | null;
    }
  }
}

export interface ArtifactCreateParams {
  /**
   * Human-readable title for the artifact.
   * @minLength 1
   * @maxLength 200
   */
  title: string;
  /**
   * Artifact content or a reference to an uploaded asset. The type field selects the required fields.
   */
  output:
    | ArtifactCreateParams.Output
    | ArtifactCreateParams.Output2
    | ArtifactCreateParams.Output3
    | ArtifactCreateParams.Output4
    | ArtifactCreateParams.Output5;
  /**
   * @format uuid
   */
  sessionId: string;
  /**
   * Short description of what the artifact shows.
   * @minLength 1
   * @maxLength 2000
   */
  description?: string;
  /**
   * Artifact category for display and filtering.
   */
  category?:
    | 'code_walkthrough'
    | 'bug_report'
    | 'incident_report'
    | 'license_audit'
    | 'data_flow_map'
    | 'security_findings'
    | 'cost_map'
    | 'ux_variations'
    | 'architecture_map'
    | 'migration_summary'
    | 'release_checklist'
    | 'shipped_summary'
    | 'rollout_plan'
    | 'diagram'
    | 'chart'
    | 'dashboard'
    | 'timeline'
    | 'comparison'
    | 'report';
  /**
   * URLs of pull requests related to this artifact.
   * @maxItems 20
   */
  relatedPullRequestUrls?: Array<string>;
}

export namespace ArtifactCreateParams {
  export interface Output {
    type: 'html';
    /**
     * Complete self-contained HTML document. Inline CSS and JavaScript are allowed. Do not depend on external network assets. Must be at most 5242880 bytes after UTF-8 encoding.
     * @minLength 1
     */
    content: string;
    /**
     * Optional stored filename. The extension is normalized.
     * @minLength 1
     * @maxLength 255
     */
    fileName?: string;
  }

  export interface Output2 {
    type: 'markdown';
    /**
     * Markdown content for a readable report, checklist, walkthrough, or notes artifact. Must be at most 5242880 bytes after UTF-8 encoding.
     * @minLength 1
     */
    content: string;
    /**
     * Optional stored filename. The extension is normalized.
     * @minLength 1
     * @maxLength 255
     */
    fileName?: string;
  }

  export interface Output3 {
    type: 'json';
    /**
     * JSON text for structured data, diagnostics, or machine-readable findings. Send the JSON as a string, not as an object. Must be at most 5242880 bytes after UTF-8 encoding.
     * @minLength 1
     */
    content: string;
    /**
     * Optional stored filename. The extension is normalized.
     * @minLength 1
     * @maxLength 255
     */
    fileName?: string;
  }

  export interface Output4 {
    type: 'csv';
    /**
     * CSV content for audits, tables, inventories, reports, and spreadsheet-friendly exports. Must be at most 5242880 bytes after UTF-8 encoding.
     * @minLength 1
     */
    content: string;
    /**
     * Optional stored filename. The extension is normalized.
     * @minLength 1
     * @maxLength 255
     */
    fileName?: string;
  }

  export interface Output5 {
    type: 'asset';
    /**
     * ID of an existing uploaded Tembo asset.
     * @format uuid
     */
    assetId: string;
    /**
     * Optional display filename for the uploaded asset.
     * @minLength 1
     * @maxLength 255
     */
    fileName?: string;
  }
}

export interface ArtifactCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format uuid
   */
  sessionId: string;
  type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format uuid
   */
  assetId: string | null;
  /**
   * @format uri
   */
  assetUrl: string | null;
  category:
    | 'code_walkthrough'
    | 'bug_report'
    | 'incident_report'
    | 'license_audit'
    | 'data_flow_map'
    | 'security_findings'
    | 'cost_map'
    | 'ux_variations'
    | 'architecture_map'
    | 'migration_summary'
    | 'release_checklist'
    | 'shipped_summary'
    | 'rollout_plan'
    | 'diagram'
    | 'chart'
    | 'dashboard'
    | 'timeline'
    | 'comparison'
    | 'report'
    | null;
  content: string;
  contentType: string | null;
  description: string | null;
  fileKind: 'image' | 'video' | 'audio' | 'html' | 'markdown' | 'text' | 'file';
  fileName: string | null;
  outputType: 'html' | 'markdown' | 'json' | 'csv' | 'asset' | null;
  relatedPullRequestUrls: Array<string>;
  runtime: ArtifactCreateResponse.Runtime | null;
  /**
   * @minimum 1
   * @maximum 65535
   */
  servicePort: number | null;
  /**
   * @format uri
   */
  serviceUrl: string | null;
  /**
   * @minimum 0
   */
  sizeBytes: number | null;
  /**
   * @format uri
   */
  sourceUrl: string | null;
  title: string;
}

export namespace ArtifactCreateResponse {
  export interface Runtime {
    hostname: string | null;
    serviceName: string | null;
    serviceType: string | null;
  }
}

export interface ArtifactRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format uuid
   */
  sessionId: string;
  type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format uuid
   */
  assetId: string | null;
  /**
   * @format uri
   */
  assetUrl: string | null;
  category:
    | 'code_walkthrough'
    | 'bug_report'
    | 'incident_report'
    | 'license_audit'
    | 'data_flow_map'
    | 'security_findings'
    | 'cost_map'
    | 'ux_variations'
    | 'architecture_map'
    | 'migration_summary'
    | 'release_checklist'
    | 'shipped_summary'
    | 'rollout_plan'
    | 'diagram'
    | 'chart'
    | 'dashboard'
    | 'timeline'
    | 'comparison'
    | 'report'
    | null;
  content: string;
  contentType: string | null;
  description: string | null;
  fileKind: 'image' | 'video' | 'audio' | 'html' | 'markdown' | 'text' | 'file';
  fileName: string | null;
  outputType: 'html' | 'markdown' | 'json' | 'csv' | 'asset' | null;
  relatedPullRequestUrls: Array<string>;
  runtime: ArtifactRetrieveResponse.Runtime | null;
  /**
   * @minimum 1
   * @maximum 65535
   */
  servicePort: number | null;
  /**
   * @format uri
   */
  serviceUrl: string | null;
  /**
   * @minimum 0
   */
  sizeBytes: number | null;
  /**
   * @format uri
   */
  sourceUrl: string | null;
  title: string;
}

export namespace ArtifactRetrieveResponse {
  export interface Runtime {
    hostname: string | null;
    serviceName: string | null;
    serviceType: string | null;
  }
}

export interface ArtifactDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Artifacts {
  export {
    type ArtifactListResponse as ArtifactListResponse,
    type ArtifactCreateResponse as ArtifactCreateResponse,
    type ArtifactRetrieveResponse as ArtifactRetrieveResponse,
    type ArtifactDeleteResponse as ArtifactDeleteResponse,
    type ArtifactListParams as ArtifactListParams,
    type ArtifactCreateParams as ArtifactCreateParams,
  };
}
