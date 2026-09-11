// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as MessagesAPI from '../messages';
import * as SourcesAPI from './sources';
import {
  Sources,
  type SourceListResponse,
  type SourceRetrieveResponse,
  type SourceListParams,
} from './sources';
import * as FilesAPI from './files';
import {
  Files,
  type FileListResponse,
  type FileRetrieveResponse,
  type FileListParams,
  type FileRetrieveParams,
} from './files';
import * as DiffsAPI from './diffs';
import {
  Diffs,
  type DiffListResponse,
  type DiffRetrieveResponse,
  type DiffListParams,
  type DiffRetrieveParams,
} from './diffs';

export class Sessions extends APIResource {
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  diffs: DiffsAPI.Diffs = new DiffsAPI.Diffs(this._client);

  /**
   * List sessions you have permission to access, with cursor pagination.
   *
   * @param {SessionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionListResponse>} List sessions
   *
   * @example
   * ```ts
   * const session = await client.sessions.list({
   *   limit: 50,
   *   includeArchived: true,
   *   includeTotal: false,
   *   sortBy: 'lastQueuedAt',
   *   state: 'all',
   * });
   * ```
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionListResponse> {
    return this._client.get('/v1/sessions', { query, ...options });
  }

  /**
   * Create a session for a task. Provide the initial prompt in description and optionally configure its repositories and agent.
   *
   * @param {SessionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionCreateResponse>} Create a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.create({
   *   mcpServers: [],
   *   description: 'x',
   * });
   * ```
   */
  create(body: SessionCreateParams, options?: RequestOptions): APIPromise<SessionCreateResponse> {
    return this._client.post('/v1/sessions', { body, ...options });
  }

  /**
   * Retrieve a session you have permission to access.
   *
   * @param {string} sessionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionRetrieveResponse>} Retrieve a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<SessionRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}`, options);
  }

  /**
   * Update the configuration of a session you have permission to access.
   *
   * @param {string} sessionID
   * @param {SessionUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionUpdateResponse>} Update a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
   * ```
   */
  update(
    sessionID: string,
    body: SessionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SessionUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/sessions/${sessionID}`, { body, ...options });
  }

  /**
   * Delete a session you have permission to access.
   *
   * @param {string} sessionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionDeleteResponse>} Delete a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(sessionID: string, options?: RequestOptions): APIPromise<SessionDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/sessions/${sessionID}`, options);
  }

  /**
   * Interrupt active session work and continue with the next queued message.
   *
   * @param {string} sessionID
   * @param {SessionStopParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionStopResponse>} Stop a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  stop(
    sessionID: string,
    params: SessionStopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionStopResponse> {
    const { cancelQueued } = params ?? {};
    return this._client.post(__scalarPath`/v1/sessions/${sessionID}/stop`, {
      query: { cancelQueued },
      ...options,
    });
  }

  /**
   * List recorded session stream events with cursor pagination.
   *
   * @param {string} sessionID
   * @param {SessionListEventsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionListEventsResponse>} List session events
   *
   * @example
   * ```ts
   * const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  listEvents(
    sessionID: string,
    query: SessionListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionListEventsResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/events`, { query, ...options });
  }
}
export interface SessionEventData {
  /**
   * @maxLength 100
   */
  type: string;
  scope?: SessionEventData.Scope;
  /**
   * @maxLength 500
   */
  source?: string;
  providerEvent?: boolean;
  delivery?: 'realtime' | 'persist';
  event?: SessionEventData.Event;
  index?: number;
  /**
   * @maxLength 1000
   */
  itemId?: string;
  sequenceNumber?: number;
  /**
   * @maxLength 1000000
   */
  accumulatedText?: string;
  deltaType?: 'text_delta' | 'input_json_delta';
  responsePhase?: 'commentary' | 'final_answer';
  /**
   * @maxLength 1000
   */
  toolName?: string;
  snapshotId?: string;
  snapshotCreatedAt?: string;
}

export namespace SessionEventData {
  export interface Scope {
    kind: 'foreground' | 'subagent' | 'background';
    /**
     * @maxLength 1000
     */
    parentToolUseId?: string;
    /**
     * @maxLength 1000
     */
    taskId?: string;
  }

  export interface Event {
    /**
     * @maxLength 500
     */
    event: string;
    /**
     * @maxLength 1000000
     */
    message: string;
    /**
     * @maxLength 100
     */
    provider?: string;
    /**
     * @maxLength 1000
     */
    messageId?: string;
  }
}

export interface SessionDocumentNode {
  /**
   * @minLength 1
   * @maxLength 100
   */
  type?: string;
  /**
   * @maxLength 1000000
   */
  text?: string;
  attrs?: Record<string, unknown>;
  /**
   * @maxItems 1000
   */
  marks?: Array<SessionDocumentNode.Mark>;
  /**
   * @maxItems 10000
   */
  content?: Array<SessionDocumentNode>;
}

export namespace SessionDocumentNode {
  export interface Mark {
    /**
     * @minLength 1
     * @maxLength 100
     */
    type: string;
    attrs?: Record<string, unknown>;
  }
}

export interface SessionListParams {
  /**
   * @format uuid
   */
  agentId?: string;
  createdBy?: string | Array<string>;
  /**
   * @format date-time
   */
  createdAfter?: string;
  /**
   * @maxLength 500
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  excludePinned?: 'true' | 'false' | boolean;
  externalIds?: string | Array<string>;
  hasProject?: 'true' | 'false' | boolean;
  /**
   * @default true
   */
  includeArchived?: 'true' | 'false' | boolean;
  /**
   * @default false
   */
  includeTotal?: 'true' | 'false' | boolean;
  participant?: string | Array<string>;
  pendingReviewerKeys?: string | Array<string>;
  projectIds?: string | Array<string>;
  pullRequestStatuses?: string | Array<string>;
  repositoryIds?: string | Array<string>;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  search?: string;
  /**
   * @default lastQueuedAt
   */
  sortBy?: 'lastQueuedAt' | 'createdAt' | 'updatedAt';
  sourceIds?: string | Array<string>;
  sourceTypes?: string | Array<string>;
  /**
   * @default all
   */
  state?: 'all' | 'active' | 'archived';
}

export interface SessionListResponse {
  items: Array<SessionListResponse.Item>;
  nextCursor: string | null;
  /**
   * @minimum 0
   */
  totalCount?: number;
}

export namespace SessionListResponse {
  export interface Item {
    agent: string | null;
    /**
     * @format uuid
     */
    agentId: string | null;
    /**
     * @format date-time
     */
    createdAt: string;
    externalId: string | null;
    /**
     * @format uuid
     */
    id: string;
    kind: string;
    /**
     * @format date-time
     */
    lastQueuedAt: string | null;
    /**
     * @format date-time
     */
    lastSeenAt: string;
    level: number;
    projectId: string | null;
    title: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    visibility: 'public' | 'private';
    artifacts: Array<Item.Artifact>;
    diffSummary: Item.DiffSummary | null;
    isPinned: boolean;
    project: Item.Project | null;
    sessionSource: Item.SessionSource;
    sourcePullRequest: Item.SourcePullRequest | null;
    state: Item.State;
  }

  export namespace Item {
    export interface Artifact {
      /**
       * @format uuid
       */
      id: string;
      pullRequests: Array<Artifact.PullRequest>;
      type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
    }

    export namespace Artifact {
      export interface PullRequest {
        agent: string | null;
        codeRepository: PullRequest.CodeRepository | null;
        /**
         * @format uuid
         */
        id: string;
        isDraft: boolean;
        status: 'open' | 'merged' | 'closed';
        /**
         * @format uri
         */
        url: string;
      }

      export namespace PullRequest {
        export interface CodeRepository {
          /**
           * @format uuid
           */
          id: string;
          provider: string;
        }
      }
    }

    export interface DiffSummary {
      additions: number;
      deletions: number;
    }

    export interface Project {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      icon:
        | 'folder'
        | 'code'
        | 'terminal'
        | 'book'
        | 'brain'
        | 'bug'
        | 'building'
        | 'cloud'
        | 'globe'
        | 'idea'
        | 'tools'
        | 'magic'
        | 'processor'
        | 'sandbox'
        | 'server'
        | 'tasks'
        | 'tactics'
        | 'images'
        | 'database'
        | 'api'
        | 'mobile'
        | 'package';
      color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    }

    export interface SessionSource {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      type: string;
      repositories: Array<SessionSource.Repository>;
    }

    export namespace SessionSource {
      export interface Repository {
        /**
         * @format uuid
         */
        id: string;
      }
    }

    export interface SourcePullRequest {
      /**
       * @format uuid
       */
      id: string;
      /**
       * @format uri
       */
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
    }

    export interface State {
      isQueued: boolean;
      isCancelled: boolean;
      isCompleted: boolean;
      isFailed: boolean;
      inProgress: boolean;
      current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
    }
  }
}

export interface SessionCreateParams {
  /**
   * Initial task or prompt for the session.
   * @minLength 1
   * @maxLength 1000000
   */
  description: string;
  /**
   * @minLength 1
   * @maxLength 500
   */
  agent?: string;
  /**
   * @minLength 1
   * @maxLength 500
   */
  baseBranch?: string | null;
  /**
   * @default []
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  projectId?: string | null;
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
  /**
   * @minLength 1
   * @maxLength 500
   */
  targetBranch?: string | null;
  visibility?: 'private' | 'public';
  agentOptions?: SessionCreateParams.AgentOptions;
  autoDetectRepositories?: boolean;
  /**
   * @minLength 1
   * @maxLength 500
   */
  branchName?: string | null;
  /**
   * @maxItems 100
   */
  codeRepositoryIds?: Array<string>;
  /**
   * @format uuid
   */
  id?: string;
  /**
   * Optional rich-text representation of the initial task. Provide description separately.
   */
  richContent?: SessionDocumentNode & MessagesAPI.TipTapDocument;
  /**
   * @format uuid
   */
  pullRequestId?: string;
  queueRightAway?: boolean;
  sessionMode?: 'chat' | 'terminal';
  startupAgent?: 'claudeCode' | 'codex' | 'opencode' | 'pi' | 'amp' | 'cursor';
}

export namespace SessionCreateParams {
  export interface AgentOptions {
    /**
     * @minLength 1
     * @maxLength 100
     */
    reasoningLevel?: string;
    mode?: 'normal' | 'planning';
    speed?: 'normal' | 'fast';
    goal?: AgentOptions.Goal;
  }

  export namespace AgentOptions {
    export interface Goal {
      enabled?: boolean;
      /**
       * @maxLength 100000
       */
      objective?: string;
    }
  }
}

export interface SessionCreateResponse {
  agent: string | null;
  /**
   * @format uuid
   */
  agentId: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  baseBranch: string | null;
  branchName: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  externalId: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  kind: string;
  /**
   * @format date-time
   */
  lastQueuedAt: string | null;
  /**
   * @format date-time
   */
  lastSeenAt: string;
  level: number;
  mode: 'normal' | 'planning';
  projectId: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  sessionType: 'Chat' | 'Terminal';
  targetBranch: string | null;
  title: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  visibility: 'public' | 'private';
  artifacts: Array<SessionCreateResponse.Artifact>;
  description: string | null;
  diffSummary: SessionCreateResponse.DiffSummary | null;
  /**
   * @format uri
   */
  htmlUrl: string;
  isPinned: boolean;
  project: SessionCreateResponse.Project | null;
  sessionSource: SessionCreateResponse.SessionSource;
  sourcePullRequest: SessionCreateResponse.SourcePullRequest | null;
  state: SessionCreateResponse.State;
}

export namespace SessionCreateResponse {
  export interface Artifact {
    /**
     * @format uuid
     */
    id: string;
    type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    pullRequests: Array<Artifact.PullRequest>;
  }

  export namespace Artifact {
    export interface PullRequest {
      /**
       * @format uuid
       */
      id: string;
      /**
       * @format uri
       */
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
      sourceBranch: string | null;
      /**
       * @format date-time
       */
      createdAt: string;
      agent: string | null;
      diff: PullRequest.Diff | null;
      /**
       * @format date-time
       */
      updatedAt: string;
      /**
       * @maxLength 500
       */
      baseBranch: string | null;
      /**
       * @maxLength 200
       */
      headSha: string | null;
      author: PullRequest.Author | null;
      codeRepository: PullRequest.CodeRepository | null;
    }

    export namespace PullRequest {
      export interface Diff {
        /**
         * @minimum 0
         */
        additions?: number;
        /**
         * @minimum 0
         */
        deletions?: number;
        /**
         * @maxLength 1000000
         */
        data?: string;
      }

      export interface Author {
        /**
         * @format uri
         */
        avatarUrl: string | null;
        /**
         * @maxLength 500
         */
        login: string | null;
      }

      export interface CodeRepository {
        /**
         * @format uuid
         */
        id: string;
        name: string;
        owner: string | null;
        baseBranch: string | null;
        provider: string;
      }
    }
  }

  export interface DiffSummary {
    additions: number;
    deletions: number;
  }

  export interface Project {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  }

  export interface SessionSource {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    type: string;
    repositories: Array<SessionSource.Repository>;
  }

  export namespace SessionSource {
    export interface Repository {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      provider: string;
    }
  }

  export interface SourcePullRequest {
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uri
     */
    url: string;
    title: string | null;
    status: 'open' | 'merged' | 'closed';
    isDraft: boolean;
  }

  export interface State {
    isQueued: boolean;
    isCancelled: boolean;
    isCompleted: boolean;
    isFailed: boolean;
    inProgress: boolean;
    current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
  }
}

export interface SessionRetrieveResponse {
  agent: string | null;
  /**
   * @format uuid
   */
  agentId: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  baseBranch: string | null;
  branchName: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  externalId: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  kind: string;
  /**
   * @format date-time
   */
  lastQueuedAt: string | null;
  /**
   * @format date-time
   */
  lastSeenAt: string;
  level: number;
  mode: 'normal' | 'planning';
  projectId: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  sessionType: 'Chat' | 'Terminal';
  targetBranch: string | null;
  title: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  visibility: 'public' | 'private';
  artifacts: Array<SessionRetrieveResponse.Artifact>;
  description: string | null;
  diffSummary: SessionRetrieveResponse.DiffSummary | null;
  /**
   * @format uri
   */
  htmlUrl: string;
  isPinned: boolean;
  project: SessionRetrieveResponse.Project | null;
  sessionSource: SessionRetrieveResponse.SessionSource;
  sourcePullRequest: SessionRetrieveResponse.SourcePullRequest | null;
  state: SessionRetrieveResponse.State;
}

export namespace SessionRetrieveResponse {
  export interface Artifact {
    /**
     * @format uuid
     */
    id: string;
    type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    pullRequests: Array<Artifact.PullRequest>;
  }

  export namespace Artifact {
    export interface PullRequest {
      /**
       * @format uuid
       */
      id: string;
      /**
       * @format uri
       */
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
      sourceBranch: string | null;
      /**
       * @format date-time
       */
      createdAt: string;
      agent: string | null;
      diff: PullRequest.Diff | null;
      /**
       * @format date-time
       */
      updatedAt: string;
      /**
       * @maxLength 500
       */
      baseBranch: string | null;
      /**
       * @maxLength 200
       */
      headSha: string | null;
      author: PullRequest.Author | null;
      codeRepository: PullRequest.CodeRepository | null;
    }

    export namespace PullRequest {
      export interface Diff {
        /**
         * @minimum 0
         */
        additions?: number;
        /**
         * @minimum 0
         */
        deletions?: number;
        /**
         * @maxLength 1000000
         */
        data?: string;
      }

      export interface Author {
        /**
         * @format uri
         */
        avatarUrl: string | null;
        /**
         * @maxLength 500
         */
        login: string | null;
      }

      export interface CodeRepository {
        /**
         * @format uuid
         */
        id: string;
        name: string;
        owner: string | null;
        baseBranch: string | null;
        provider: string;
      }
    }
  }

  export interface DiffSummary {
    additions: number;
    deletions: number;
  }

  export interface Project {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  }

  export interface SessionSource {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    type: string;
    repositories: Array<SessionSource.Repository>;
  }

  export namespace SessionSource {
    export interface Repository {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      provider: string;
    }
  }

  export interface SourcePullRequest {
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uri
     */
    url: string;
    title: string | null;
    status: 'open' | 'merged' | 'closed';
    isDraft: boolean;
  }

  export interface State {
    isQueued: boolean;
    isCancelled: boolean;
    isCompleted: boolean;
    isFailed: boolean;
    inProgress: boolean;
    current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
  }
}

export interface SessionUpdateParams {
  /**
   * @minLength 1
   * @maxLength 500
   */
  agent?: string | null;
  agentOptions?: SessionUpdateParams.AgentOptions;
  /**
   * @minLength 1
   * @maxLength 500
   */
  baseBranch?: string | null;
  /**
   * @minLength 1
   * @maxLength 500
   */
  branchName?: string | null;
  /**
   * @minLength 1
   * @maxLength 1000000
   */
  description?: string;
  richContent?: (SessionDocumentNode & MessagesAPI.TipTapDocument) | null;
  /**
   * @minimum 0
   * @maximum 100
   */
  level?: number;
  /**
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  mode?: 'normal' | 'planning';
  projectId?: string | null;
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * @minLength 1
   * @maxLength 500
   */
  targetBranch?: string | null;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  title?: string;
  visibility?: 'private' | 'public';
}

export namespace SessionUpdateParams {
  export interface AgentOptions {
    /**
     * @minLength 1
     * @maxLength 100
     */
    reasoningLevel?: string;
    mode?: 'normal' | 'planning';
    speed?: 'normal' | 'fast';
    goal?: AgentOptions.Goal;
  }

  export namespace AgentOptions {
    export interface Goal {
      enabled?: boolean;
      /**
       * @maxLength 100000
       */
      objective?: string;
    }
  }
}

export interface SessionUpdateResponse {
  agent: string | null;
  /**
   * @format uuid
   */
  agentId: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  baseBranch: string | null;
  branchName: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  externalId: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  kind: string;
  /**
   * @format date-time
   */
  lastQueuedAt: string | null;
  /**
   * @format date-time
   */
  lastSeenAt: string;
  level: number;
  mode: 'normal' | 'planning';
  projectId: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  sessionType: 'Chat' | 'Terminal';
  targetBranch: string | null;
  title: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  visibility: 'public' | 'private';
  artifacts: Array<SessionUpdateResponse.Artifact>;
  description: string | null;
  diffSummary: SessionUpdateResponse.DiffSummary | null;
  /**
   * @format uri
   */
  htmlUrl: string;
  isPinned: boolean;
  project: SessionUpdateResponse.Project | null;
  sessionSource: SessionUpdateResponse.SessionSource;
  sourcePullRequest: SessionUpdateResponse.SourcePullRequest | null;
  state: SessionUpdateResponse.State;
}

export namespace SessionUpdateResponse {
  export interface Artifact {
    /**
     * @format uuid
     */
    id: string;
    type: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source';
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    pullRequests: Array<Artifact.PullRequest>;
  }

  export namespace Artifact {
    export interface PullRequest {
      /**
       * @format uuid
       */
      id: string;
      /**
       * @format uri
       */
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
      sourceBranch: string | null;
      /**
       * @format date-time
       */
      createdAt: string;
      agent: string | null;
      diff: PullRequest.Diff | null;
      /**
       * @format date-time
       */
      updatedAt: string;
      /**
       * @maxLength 500
       */
      baseBranch: string | null;
      /**
       * @maxLength 200
       */
      headSha: string | null;
      author: PullRequest.Author | null;
      codeRepository: PullRequest.CodeRepository | null;
    }

    export namespace PullRequest {
      export interface Diff {
        /**
         * @minimum 0
         */
        additions?: number;
        /**
         * @minimum 0
         */
        deletions?: number;
        /**
         * @maxLength 1000000
         */
        data?: string;
      }

      export interface Author {
        /**
         * @format uri
         */
        avatarUrl: string | null;
        /**
         * @maxLength 500
         */
        login: string | null;
      }

      export interface CodeRepository {
        /**
         * @format uuid
         */
        id: string;
        name: string;
        owner: string | null;
        baseBranch: string | null;
        provider: string;
      }
    }
  }

  export interface DiffSummary {
    additions: number;
    deletions: number;
  }

  export interface Project {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  }

  export interface SessionSource {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    type: string;
    repositories: Array<SessionSource.Repository>;
  }

  export namespace SessionSource {
    export interface Repository {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      provider: string;
    }
  }

  export interface SourcePullRequest {
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uri
     */
    url: string;
    title: string | null;
    status: 'open' | 'merged' | 'closed';
    isDraft: boolean;
  }

  export interface State {
    isQueued: boolean;
    isCancelled: boolean;
    isCompleted: boolean;
    isFailed: boolean;
    inProgress: boolean;
    current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
  }
}

export interface SessionDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}

export interface SessionStopParams {
  cancelQueued?: 'true';
}

export interface SessionStopResponse {
  /**
   * @minimum 0
   */
  cancelledSessions: number;
  /**
   * @minimum 0
   */
  cancelledJobs: number;
  /**
   * @minimum 0
   */
  stoppedRuntimeSessions: number;
  /**
   * @minimum 0
   */
  interruptedRuntimeTurns: number;
  /**
   * @minimum 0
   */
  cancelledRuntimeTurns: number;
}

export interface SessionListEventsParams {
  cursor?: string | number;
  /**
   * @default 50
   */
  limit?: string | number;
  /**
   * @format uuid
   */
  messageId?: string;
}

export interface SessionListEventsResponse {
  items: Array<SessionListEventsResponse.Item>;
  nextCursor: string | null;
}

export namespace SessionListEventsResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    eventType: string;
    /**
     * @exclusiveMinimum 0
     */
    id: number;
    /**
     * @format uuid
     */
    messageId: string | null;
    provider: 'anthropic' | 'openai' | 'openai_responses' | 'openai_completions' | 'tembo';
    /**
     * @format uuid
     */
    sessionId: string;
    eventData: SessionEventData;
  }
}
Sessions.Sources = Sources;
Sessions.Files = Files;
Sessions.Diffs = Diffs;

export declare namespace Sessions {
  export {
    type SessionEventData as SessionEventData,
    type SessionDocumentNode as SessionDocumentNode,
    type SessionListResponse as SessionListResponse,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionUpdateResponse as SessionUpdateResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionStopResponse as SessionStopResponse,
    type SessionListEventsResponse as SessionListEventsResponse,
    type SessionListParams as SessionListParams,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionStopParams as SessionStopParams,
    type SessionListEventsParams as SessionListEventsParams,
  };

  export {
    Sources as Sources,
    type SourceListResponse as SourceListResponse,
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceListParams as SourceListParams,
  };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListParams as FileListParams,
    type FileRetrieveParams as FileRetrieveParams,
  };

  export {
    Diffs as Diffs,
    type DiffListResponse as DiffListResponse,
    type DiffRetrieveResponse as DiffRetrieveResponse,
    type DiffListParams as DiffListParams,
    type DiffRetrieveParams as DiffRetrieveParams,
  };
}
