// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as AgentsAPI from './agents';
import type * as MessagesAPI from '../messages/messages';

export class ContentRevisions extends APIResource {
  /**
   * List saved revisions of an agent’s instruction JSON document, newest first. Revisions do not include other agent configuration. Author details are redacted from public API responses.
   *
   * @param {string} agentID
   * @param {ContentRevisionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentRevisionListResponse>} List agent instruction revisions
   *
   * @example
   * ```ts
   * const contentRevision = await client.agents.contentRevisions.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    agentID: string,
    query: ContentRevisionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContentRevisionListResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/content-revisions`, { query, ...options });
  }

  /**
   * Retrieve the instruction JSON document saved in one revision. Other agent configuration is not included. Author details are redacted from public API responses.
   *
   * @param {number} version
   * @param {ContentRevisionRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentRevisionRetrieveResponse>} Retrieve an agent instruction revision
   *
   * @example
   * ```ts
   * const contentRevision = await client.agents.contentRevisions.retrieve(1, {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    version: number,
    params: ContentRevisionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContentRevisionRetrieveResponse> {
    const { agentId } = params;
    return this._client.get(__scalarPath`/v1/agents/${agentId}/content-revisions/${version}`, options);
  }

  /**
   * Restore a saved instruction JSON document and its mentioned integrations, without reverting other agent configuration. A changed document creates a new revision attributed to the caller. Supply the agent’s current contentVersion as expectedContentVersion; a concurrent instruction change returns 409.
   *
   * @param {number} version
   * @param {ContentRevisionRestoreParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentRevisionRestoreResponse>} Restore agent instructions
   *
   * @example
   * ```ts
   * const contentRevision = await client.agents.contentRevisions.restore(1, {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   expectedContentVersion: 1,
   * });
   * ```
   */
  restore(
    version: number,
    params: ContentRevisionRestoreParams,
    options?: RequestOptions,
  ): APIPromise<ContentRevisionRestoreResponse> {
    const { agentId, ...body } = params;
    return this._client.post(__scalarPath`/v1/agents/${agentId}/content-revisions/${version}/restore`, {
      body,
      ...options,
    });
  }
}

export interface ContentRevisionListParams {
  /**
   * @pattern ^[1-9]\d*$
   */
  cursor?: string;
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface ContentRevisionListResponse {
  items: Array<ContentRevisionListResponse.Item>;
  nextCursor: string | null;
}

export namespace ContentRevisionListResponse {
  export interface Item {
    /**
     * @exclusiveMinimum 0
     */
    version: number;
    authorId: string | null;
    authorName: string | null;
    source: string;
    /**
     * @exclusiveMinimum 0
     */
    restoredFromVersion: number | null;
    /**
     * @format date-time
     */
    createdAt: string;
  }
}

export interface ContentRevisionRetrieveParams {
  /**
   * @format uuid
   */
  agentId: string;
}

export interface ContentRevisionRetrieveResponse {
  /**
   * @exclusiveMinimum 0
   */
  version: number;
  authorId: string | null;
  authorName: string | null;
  source: string;
  /**
   * @exclusiveMinimum 0
   */
  restoredFromVersion: number | null;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * The instruction JSON document saved in this revision. Other agent configuration is not versioned.
   */
  instructions: MessagesAPI.TipTapDocument | null;
}

export interface ContentRevisionRestoreParams {
  /**
   * Path param
   * @format uuid
   */
  agentId: string;
  /**
   * Body param: The agent’s current instruction version, used to reject a restore if the instructions have changed.
   * @exclusiveMinimum 0
   */
  expectedContentVersion: number;
}

export interface ContentRevisionRestoreResponse {
  /**
   * @format uuid
   */
  id: string;
  name: string;
  key: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  projectId: string | null;
  templateId: string | null;
  contentVersion: number;
  script: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * @format date-time
   */
  archivedAt: string | null;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  organizationId: string | null;
  organizationName: string | null;
  createdBy: string | null;
  /**
   * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
   */
  instructions: MessagesAPI.TipTapDocument | null;
  /**
   * Runtime and model selection key; not the ID of an agent resource.
   */
  agent: string | null;
  /**
   * Execution settings for the selected agent runtime, including provider-specific options.
   */
  agentOptions: AgentsAPI.AgentOptionsInput;
  /**
   * Selected MCP server identifiers, including built-in server keys.
   * @maxItems 100
   */
  mcpServers: Array<string>;
  /**
   * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
   */
  userState: AgentsAPI.AgentState | null;
  /**
   * @maxItems 250
   */
  codeRepositories: Array<ContentRevisionRestoreResponse.CodeRepository>;
  lastRun: ContentRevisionRestoreResponse.LastRun | null;
  /**
   * @minimum 0
   */
  runCount: number;
  /**
   * @minimum 0
   */
  scheduleCount: number;
  /**
   * @minimum 0
   */
  triggerCount: number;
  hasPausedSchedule: boolean;
  hasPausedTrigger: boolean;
  integrationIds: Array<string>;
  integrationTypes: Array<string>;
}

export namespace ContentRevisionRestoreResponse {
  export interface CodeRepository {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    owner: string | null;
    /**
     * @format uuid
     */
    integrationId: string;
    integrationType: string;
  }

  export interface LastRun {
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
export declare namespace ContentRevisions {
  export {
    type ContentRevisionListResponse as ContentRevisionListResponse,
    type ContentRevisionRetrieveResponse as ContentRevisionRetrieveResponse,
    type ContentRevisionRestoreResponse as ContentRevisionRestoreResponse,
    type ContentRevisionListParams as ContentRevisionListParams,
    type ContentRevisionRetrieveParams as ContentRevisionRetrieveParams,
    type ContentRevisionRestoreParams as ContentRevisionRestoreParams,
  };
}
