// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { SessionEvents as PublicSessionEvents } from '../../live';
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
import * as DiffsAPI from './diffs';
import {
  Diffs,
  type DiffListResponse,
  type DiffRetrieveResponse,
  type DiffListParams,
  type DiffRetrieveParams,
} from './diffs';

export class Sessions extends APIResource {
  events: PublicSessionEvents = new PublicSessionEvents(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  diffs: DiffsAPI.Diffs = new DiffsAPI.Diffs(this._client);

  /**
   * List and search sessions, including active or archived sessions, with repository, project, creator, and source filters and cursor pagination.
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
   * Create a session for a task. Provide the initial prompt in description and optionally configure its repositories, agent, Build (normal) or Plan (planning) mode, and private or workspace visibility.
   *
   * @param {SessionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionCreateResponse>} Create a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.create({
   *   description: 'Fix the authentication bug in the login component',
   *   projectId: 'your-project-id',
   *   agent: 'claudeCode:claude-fable-5-1',
   *   codeRepositoryIds: ['123e4567-e89b-12d3-a456-426614174000'],
   *   baseBranch: 'main',
   *   targetBranch: 'main',
   *   visibility: 'private',
   *   mcpServers: [],
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
   * Update a session: archive or restore it, set priority, rename it, change agent/model, switch between Build (normal) and Plan (planning) modes, configure its workspace and branches, or change visibility between private and visible to workspace (public). Archiving uses level=0; restoring archived sessions uses level=1 and does not restart work. Use pins to pin or unpin sessions.
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
   * Archive a session and stop its VM without permanently deleting it. Equivalent to updateSession with level=0; restore with updateSession and level=1.
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
   * Create an independent session from a fresh workspace snapshot, or the latest saved snapshot when stopped, without replaying messages or adding context.
   *
   * @param {string} sessionID
   * @param {SessionForkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SessionForkResponse>} Fork a session
   *
   * @example
   * ```ts
   * const session = await client.sessions.fork('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   queueRightAway: true,
   * });
   * ```
   */
  fork(
    sessionID: string,
    body: SessionForkParams,
    options?: RequestOptions,
  ): APIPromise<SessionForkResponse> {
    return this._client.post(__scalarPath`/v1/sessions/${sessionID}/fork`, { body, ...options });
  }

  /**
   * Interrupt active session work without archiving it. Continue with the next queued message, or set cancelQueued=true to cancel pending messages too.
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
  toolResult?: SessionEventData.ToolResult;
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

  export interface ToolResult {
    status: 'running' | 'completed' | 'error';
    output?: string;
    exitCode?: number;
    error?: string;
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
   * Filter sessions created by this automation agent.
   * @format uuid
   */
  agentId?: string;
  /**
   * Filter by creator IDs, supplied as a comma-separated list.
   */
  createdBy?: Array<string>;
  /**
   * Only sessions created after this ISO 8601 timestamp.
   * @format date-time
   */
  createdAfter?: string;
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @maxLength 500
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
   * Exclude sessions pinned by the authenticated user.
   */
  excludePinned?: boolean;
  /**
   * Filter by external source IDs, supplied as a comma-separated list.
   */
  externalIds?: Array<string>;
  /**
   * Filter by whether a session has an assigned project.
   */
  hasProject?: boolean;
  /**
   * Include archived sessions in the all-state view. Defaults to true; state=archived explicitly selects archived sessions.
   */
  includeArchived?: boolean;
  /**
   * Include totalCount. Not supported with state=active.
   * @default false
   */
  includeTotal?: boolean;
  /**
   * Filter by participant IDs, supplied as a comma-separated list.
   */
  participant?: Array<string>;
  /**
   * Filter by pending reviewer keys, supplied as a comma-separated list.
   */
  pendingReviewerKeys?: Array<string>;
  /**
   * Filter by project IDs, supplied as a comma-separated list.
   */
  projectIds?: Array<string>;
  /**
   * Filter by linked pull request statuses: open, merged, or closed, supplied as a comma-separated list.
   */
  pullRequestStatuses?: Array<'open' | 'merged' | 'closed'>;
  /**
   * Filter by repository IDs, supplied as a comma-separated list.
   */
  repositoryIds?: Array<string>;
  /**
   * Search session titles, task prompts, kinds, and source names or types.
   * @minLength 1
   * @maxLength 1000
   */
  search?: string;
  /**
   * Timestamp used to sort sessions, newest first.
   * @default lastQueuedAt
   */
  sortBy?: 'lastQueuedAt' | 'createdAt' | 'updatedAt';
  /**
   * Filter by session source IDs, supplied as a comma-separated list.
   */
  sourceIds?: Array<string>;
  /**
   * Filter by session source types, supplied as a comma-separated list.
   */
  sourceTypes?: Array<string>;
  /**
   * Select all sessions, currently active work, or archived sessions. Use archived to find sessions to restore.
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
   * Agent and model key to run, such as claudeCode:claude-fable-5-1. Omit to use the default.
   * @minLength 1
   * @maxLength 500
   */
  agent?: string;
  /**
   * Git branch to start work from. Omit or use null for the repository default.
   * @minLength 1
   * @maxLength 500
   */
  baseBranch?: string | null;
  /**
   * MCP server or connection IDs to enable for the session.
   * @default []
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * Project environment to use for the workspace. Omit or use null for the default.
   */
  projectId?: string | null;
  /**
   * VM size for the session workspace.
   */
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
  /**
   * Default target branch for pull requests created by the session.
   * @minLength 1
   * @maxLength 500
   */
  targetBranch?: string | null;
  /**
   * Session visibility: private or visible to workspace (public).
   */
  visibility?: 'private' | 'public';
  /**
   * Agent-specific runtime options, such as reasoning effort.
   */
  agentOptions?: SessionCreateParams.AgentOptions;
  /**
   * Git branch for this session. Omit or use null to generate a branch name.
   * @minLength 1
   * @maxLength 500
   */
  branchName?: string | null;
  /**
   * Repository IDs to make available in the session workspace.
   * @maxItems 100
   */
  codeRepositoryIds?: Array<string>;
  /**
   * Optional caller-supplied session UUID. Omit to generate one.
   * @format uuid
   */
  id?: string;
  /**
   * Optional rich-text representation of the initial task. Provide description separately.
   */
  richContent?: SessionDocumentNode & MessagesAPI.TipTapDocument;
  /**
   * Pull request to associate with the session. Requires richContent.
   * @format uuid
   */
  pullRequestId?: string;
  /**
   * Whether to queue the initial task immediately instead of only creating the session.
   */
  queueRightAway?: boolean;
  /**
   * Whether to create a chat session or a terminal session.
   */
  sessionMode?: 'chat' | 'terminal';
  /**
   * Coding agent to start in a terminal session.
   */
  startupAgent?: 'claudeCode' | 'codex' | 'opencode' | 'pi' | 'amp' | 'cursor';
}

export namespace SessionCreateParams {
  export interface AgentOptions {
    /**
     * @minLength 1
     * @maxLength 100
     */
    reasoningLevel?: string;
    /**
     * Use Build (normal) to execute work or Plan (planning) to plan before writing code.
     */
    mode?: 'normal' | 'planning';
    /**
     * Preferred execution speed when supported by the selected runtime.
     */
    speed?: 'normal' | 'fast' | 'ultrafast';
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
   * Change the agent and model key. Null clears the session override.
   * @minLength 1
   * @maxLength 500
   */
  agent?: string | null;
  /**
   * Change agent-specific runtime options, such as reasoning effort.
   */
  agentOptions?: SessionUpdateParams.AgentOptions;
  /**
   * Change the starting Git branch. Null clears the session override.
   * @minLength 1
   * @maxLength 500
   */
  baseBranch?: string | null;
  /**
   * Change the session Git branch name. Null clears the stored name.
   * @minLength 1
   * @maxLength 500
   */
  branchName?: string | null;
  /**
   * Replace the initial task prompt; only the session creator can change it. Use createMessage to send a follow-up task.
   * @minLength 1
   * @maxLength 1000000
   */
  description?: string;
  /**
   * Replace the initial prompt rich-text document, or null to clear it. Only the session creator can change it.
   */
  richContent?: (SessionDocumentNode & MessagesAPI.TipTapDocument) | null;
  /**
   * Archive or restore the session and set its priority: 0 archives and stops its VM; 1 restores without restarting work; 2–100 also keep it unarchived and set its priority level. Omit to preserve the current level.
   * @minimum 0
   * @maximum 100
   */
  level?: number;
  /**
   * Replace the enabled MCP server or connection IDs. An empty array clears the selection.
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * Switch between Build (normal) and Plan (planning) modes.
   */
  mode?: 'normal' | 'planning';
  /**
   * Change the project environment used for the workspace. Null clears the session override.
   */
  projectId?: string | null;
  /**
   * Change the workspace VM size. Null clears the session override.
   */
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * Change the default pull request target branch. Null clears the session override.
   * @minLength 1
   * @maxLength 500
   */
  targetBranch?: string | null;
  /**
   * Rename the session.
   * @minLength 1
   * @maxLength 1000
   */
  title?: string;
  /**
   * Change session visibility: private or visible to workspace (public). Only the session creator can change it.
   */
  visibility?: 'private' | 'public';
}

export namespace SessionUpdateParams {
  export interface AgentOptions {
    /**
     * @minLength 1
     * @maxLength 100
     */
    reasoningLevel?: string;
    /**
     * Use Build (normal) to execute work or Plan (planning) to plan before writing code.
     */
    mode?: 'normal' | 'planning';
    /**
     * Preferred execution speed when supported by the selected runtime.
     */
    speed?: 'normal' | 'fast' | 'ultrafast';
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

export interface SessionForkParams {
  /**
   * Optional first task for the independent fork. Existing messages are not replayed.
   * @minLength 1
   * @maxLength 1000000
   */
  prompt?: string;
  /**
   * Display title for the forked session.
   * @minLength 1
   * @maxLength 1000
   */
  title?: string;
  /**
   * Start the supplied prompt immediately. Without a prompt, the fork waits for a new message.
   * @default true
   */
  queueRightAway?: boolean;
}

export interface SessionForkResponse {
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
  artifacts: Array<SessionForkResponse.Artifact>;
  description: string | null;
  diffSummary: SessionForkResponse.DiffSummary | null;
  /**
   * @format uri
   */
  htmlUrl: string;
  isPinned: boolean;
  project: SessionForkResponse.Project | null;
  sessionSource: SessionForkResponse.SessionSource;
  sourcePullRequest: SessionForkResponse.SourcePullRequest | null;
  state: SessionForkResponse.State;
}

export namespace SessionForkResponse {
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

export interface SessionStopParams {
  /**
   * Also cancel pending queued messages instead of continuing with the next queued message. Does not archive the session.
   */
  cancelQueued?: boolean;
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
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   */
  cursor?: string | number;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Filter by message ID, or "null" for session-level events.
   */
  messageId?: string | 'null';
  /**
   * Only return events recorded after this event ID.
   */
  after?: string | number;
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
    type SessionForkResponse as SessionForkResponse,
    type SessionStopResponse as SessionStopResponse,
    type SessionListEventsResponse as SessionListEventsResponse,
    type SessionListParams as SessionListParams,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionForkParams as SessionForkParams,
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
    Diffs as Diffs,
    type DiffListResponse as DiffListResponse,
    type DiffRetrieveResponse as DiffRetrieveResponse,
    type DiffListParams as DiffListParams,
    type DiffRetrieveParams as DiffRetrieveParams,
  };
}
