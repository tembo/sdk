// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as MessagesAPI from '../messages';
import type * as TemplatesAPI from './templates';
import * as TemplatesAPI2 from './templates';
import {
  Templates,
  type TriggerFilters,
  type AtlassianIssueAddedToBoardFilters,
  type AtlassianIssueAssignedToUserFilters,
  type AtlassianIssueCreatedFilters,
  type AtlassianIssueLabelAddedFilters,
  type AtlassianIssueStatusChangedFilters,
  type AtlassianIssueUpdatedFilters,
  type BitbucketPullRequestOpenedFilters,
  type GithubCreateFilters,
  type GithubIssueClosedFilters,
  type GithubIssueCommentCreatedFilters,
  type GithubIssueOpenedFilters,
  type GithubPullRequestClosedFilters,
  type GithubPullRequestMergedFilters,
  type GithubPullRequestOpenedFilters,
  type GithubPullRequestReadyForReviewFilters,
  type GithubPullRequestSynchronizeFilters,
  type GithubTemboPullRequestOpenedFilters,
  type GithubWorkflowRunFailedFilters,
  type GitlabBotMergeRequestCommentFilters,
  type GitlabIssueClosedFilters,
  type GitlabIssueOpenedFilters,
  type GitlabMergeRequestClosedFilters,
  type GitlabMergeRequestMergedFilters,
  type GitlabMergeRequestOpenedFilters,
  type GitlabMergeRequestUpdatedFilters,
  type GitlabPipelineFailedFilters,
  type GitlabRefCreatedFilters,
  type LinearIssueCreateFilters,
  type LinearIssueLabelAddedFilters,
  type LinearIssueStatusChangedFilters,
  type LinearIssueUpdatedFilters,
  type SentryIssueCreatedFilters,
  type SlackMessageReactionAddedFilters,
  type SlackMessageSentInChannelFilters,
  type EmptyTriggerFilters,
  type TemplateListResponse,
  type TemplateRetrieveResponse,
  type TemplateListParams,
} from './templates';
import * as SchedulesAPI from './schedules';
import {
  Schedules,
  type ScheduleListResponse,
  type ScheduleCreateResponse,
  type ScheduleRetrieveResponse,
  type ScheduleUpdateResponse,
  type ScheduleDeleteResponse,
  type ScheduleListParams,
  type ScheduleCreateParams,
  type ScheduleRetrieveParams,
  type ScheduleUpdateParams,
  type ScheduleDeleteParams,
} from './schedules';
import * as TriggersAPI from './triggers';
import {
  Triggers,
  type TriggerListResponse,
  type TriggerCreateResponse,
  type TriggerRetrieveResponse,
  type TriggerUpdateResponse,
  type TriggerDeleteResponse,
  type TriggerListParams,
  type TriggerCreateParams,
  type TriggerRetrieveParams,
  type TriggerUpdateParams,
  type TriggerDeleteParams,
} from './triggers';
import * as RunsAPI from './runs';
import {
  Runs,
  type RunListResponse,
  type RunCreateResponse,
  type RunRetrieveResponse,
  type RunListParams,
  type RunCreateParams,
  type RunRetrieveParams,
} from './runs';
import * as ContentRevisionsAPI from './content-revisions';
import {
  ContentRevisions,
  type ContentRevisionListResponse,
  type ContentRevisionRetrieveResponse,
  type ContentRevisionRestoreResponse,
  type ContentRevisionListParams,
  type ContentRevisionRetrieveParams,
  type ContentRevisionRestoreParams,
} from './content-revisions';

export class Agents extends APIResource {
  templates: TemplatesAPI2.Templates = new TemplatesAPI2.Templates(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  contentRevisions: ContentRevisionsAPI.ContentRevisions = new ContentRevisionsAPI.ContentRevisions(
    this._client,
  );

  /**
   * List agents available in your organization, with optional search, status, integration, and author filters.
   *
   * @param {AgentListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentListResponse>} List agents
   *
   * @example
   * ```ts
   * const agent = await client.agents.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents', { query, ...options });
  }

  /**
   * Create an agent from instructions, a template, or another agent. sourceAgentId cannot be combined with other fields. Template creation accepts only templateName, name, and triggers; creation from scratch requires name.
   *
   * @param {AgentCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentCreateResponse>} Create an agent
   *
   * @example
   * ```ts
   * const agent = await client.agents.create({});
   * ```
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/v1/agents', { body, ...options });
  }

  /**
   * Retrieve an agent and its configuration, repository associations, and run summary.
   *
   * @param {string} agentID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentRetrieveResponse>} Retrieve an agent
   *
   * @example
   * ```ts
   * const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(agentID: string, options?: RequestOptions): APIPromise<AgentRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}`, options);
  }

  /**
   * Update agent instructions, model, workspace, repositories, or persistent state; enable or pause the agent; archive or restore it. enabled and archived also control its schedules and triggers. Supply expectedUpdatedAt to reject concurrent changes.
   *
   * @param {string} agentID
   * @param {AgentUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentUpdateResponse>} Update an agent
   *
   * @example
   * ```ts
   * const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
   * ```
   */
  update(
    agentID: string,
    body: AgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/agents/${agentID}`, { body, ...options });
  }

  /**
   * Archive an agent and disable its scheduled and triggered jobs without permanently deleting it. Restore with updateAgent and archived=false.
   *
   * @param {string} agentID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentDeleteResponse>} Delete an agent
   *
   * @example
   * ```ts
   * const agent = await client.agents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/agents/${agentID}`, options);
  }
}

/**
 * Execution settings for the selected agent runtime, including provider-specific options.
 */
export type AgentOptionsInput = AgentOptionsInput.AgentOptionsInputItem | Record<string, unknown>;

export namespace AgentOptionsInput {
  export interface AgentOptionsInputItem {
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
    goal?: AgentOptionsInputItem.Goal;
    [k: string]: unknown;
  }

  export namespace AgentOptionsInputItem {
    export interface Goal {
      enabled?: boolean;
      /**
       * @maxLength 100000
       */
      objective?: string;
    }
  }
}

/**
 * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
 */
export type AgentState = Record<string, unknown>;

export interface AgentListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @maxLength 2000
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
   * Filter by agent IDs, supplied as a comma-separated list.
   * @maxLength 10000
   */
  ids?: string;
  /**
   * Search agent names.
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
  /**
   * true lists archived agents; false or omitted lists unarchived agents. Use this to find agents to restore.
   */
  archived?: boolean;
  /**
   * Sort agents by latest run or run count.
   */
  sort?: 'latestRun' | 'runCount';
  /**
   * Filter by enabled (running) or paused status, supplied as a comma-separated list; this is not individual run execution status.
   * @maxLength 10000
   */
  status?: string;
  /**
   * Filter by integration provider types, supplied as a comma-separated list.
   * @maxLength 10000
   */
  integration?: string;
  /**
   * Filter by creator user IDs, supplied as a comma-separated list.
   * @maxLength 10000
   */
  author?: string;
}

export interface AgentListResponse {
  items: Array<AgentListResponse.Item>;
  nextCursor: string | null;
  filterOptions: AgentListResponse.FilterOptions;
}

export namespace AgentListResponse {
  export interface Item {
    /**
     * @format uuid
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    organizationId: string | null;
    organizationName: string | null;
    createdBy: string | null;
    name: string;
    /**
     * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
     */
    instructions: MessagesAPI.TipTapDocument | null;
    /**
     * Runtime and model selection key; not the ID of an agent resource.
     */
    agent: string | null;
    /**
     * Selected MCP server identifiers, including built-in server keys.
     * @maxItems 100
     */
    mcpServers: Array<string>;
    artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    archivedAt: string | null;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    lastRun: Item.LastRun | null;
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
    /**
     * @minimum 0
     */
    codeRepositoryCount: number;
  }

  export namespace Item {
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

  export interface FilterOptions {
    /**
     * @minimum 0
     */
    totalCount: number;
    integrationTypes: Array<string>;
  }
}

export interface AgentCreateParams {
  /**
   * Agent display name. Required when creating from scratch.
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /**
   * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
   */
  instructions?: MessagesAPI.TipTapDocument;
  /**
   * MCP server or connection IDs available to agent runs.
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * Coding agent and model key used for runs. Omit to use the default.
   * @minLength 1
   * @maxLength 200
   */
  agent?: string;
  /**
   * Agent-specific runtime options, such as reasoning effort.
   */
  agentOptions?: AgentOptionsInput;
  /**
   * Workspace VM size used for agent runs.
   */
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * Project environment used for agent runs.
   */
  projectId?: string | 'tembo' | null;
  /**
   * Artifact type produced by this agent.
   */
  artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  /**
   * Repository IDs available to agent runs.
   * @maxItems 250
   */
  repositoryIds?: Array<string>;
  /**
   * Integration events that automatically start agent runs.
   * @maxItems 50
   */
  triggers?: Array<AgentCreateParams.Trigger>;
  /**
   * Recurring cron schedules that automatically start agent runs.
   * @maxItems 50
   */
  schedules?: Array<AgentCreateParams.Schedule>;
  /**
   * Create from a template discovered with listAgentTemplates. Only name and triggers may also be supplied.
   */
  templateName?:
    | 'addTestCoverage'
    | 'addTestCoverageFromJira'
    | 'autoAgentsMdMaintainer'
    | 'autoDocsMaintainer'
    | 'publicApiReleaseMaintainer'
    | 'commitOfTheDay'
    | 'customerHealthMonitoringAgent'
    | 'deadCodeCleanup'
    | 'dependencySweepAgent'
    | 'autoFixCi'
    | 'autoFixSentryError'
    | 'dailySlackChangelog'
    | 'duplicateTicketDetector'
    | 'fixBugsReportedInSlack'
    | 'enrichGithubIssue'
    | 'enrichJiraIssue'
    | 'enrichLinearIssue'
    | 'hubspotCallTaskCoach'
    | 'hubspotEmailTaskDrafter'
    | 'hubspotTicketToLinearBug'
    | 'prDescription'
    | 'prReview'
    | 'pagePerformanceReport'
    | 'prioritizeSentry'
    | 'productFaqAgent'
    | 'productFinanceAgent'
    | 'queryPerformanceReport'
    | 'securityFixFromJira'
    | 'securityScan'
    | 'skillProgressionMap'
    | 'slackChannelListener'
    | 'slopCop'
    | 'testAudit'
    | 'staleCodeComments'
    | 'stalePullRequestNotifier'
    | 'summarizeChangesDaily'
    | 'triageNewJiraBug';
  /**
   * Duplicate an existing agent. Must be the only field; cannot be combined with templateName or overrides.
   * @format uuid
   */
  sourceAgentId?: string;
}

export namespace AgentCreateParams {
  export interface Trigger {
    /**
     * Integration event name. Use listIntegrationTriggers to discover supported triggers.
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /**
     * Provider type for the trigger, such as github or slack.
     * @minLength 1
     * @maxLength 100
     */
    integrationType?: string;
    /**
     * Connected integration that supplies trigger events.
     * @format uuid
     */
    integrationId?: string;
    /**
     * Event-specific trigger filters. Use retrieveIntegrationTrigger and listIntegrationTriggerFilterOptions to discover supported fields and values.
     */
    filters?: TemplatesAPI.TriggerFilters;
  }

  export interface Schedule {
    /**
     * Cron expression for recurring agent runs. Agent enabled and archived state controls whether the schedule runs.
     * @minLength 1
     * @maxLength 500
     */
    cron: string;
  }
}

export interface AgentCreateResponse {
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
  agentOptions: AgentOptionsInput;
  /**
   * Selected MCP server identifiers, including built-in server keys.
   * @maxItems 100
   */
  mcpServers: Array<string>;
  /**
   * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
   */
  userState: AgentState | null;
  /**
   * @maxItems 250
   */
  codeRepositories: Array<AgentCreateResponse.CodeRepository>;
  lastRun: AgentCreateResponse.LastRun | null;
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

export namespace AgentCreateResponse {
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

export interface AgentRetrieveResponse {
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
  agentOptions: AgentOptionsInput;
  /**
   * Selected MCP server identifiers, including built-in server keys.
   * @maxItems 100
   */
  mcpServers: Array<string>;
  /**
   * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
   */
  userState: AgentState | null;
  /**
   * @maxItems 250
   */
  codeRepositories: Array<AgentRetrieveResponse.CodeRepository>;
  lastRun: AgentRetrieveResponse.LastRun | null;
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

export namespace AgentRetrieveResponse {
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

export interface AgentUpdateParams {
  /**
   * Value of updatedAt from the last retrieved agent. A concurrent change causes a conflict instead of overwriting newer changes.
   * @format date-time
   */
  expectedUpdatedAt?: string;
  /**
   * Rename the agent.
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /**
   * Change the agent lookup key, or null to clear it.
   * @minLength 1
   * @maxLength 200
   */
  key?: string | null;
  /**
   * Replace the agent instruction document, or null to clear it.
   */
  instructions?: MessagesAPI.TipTapDocument | null;
  /**
   * Replace the MCP server or connection IDs. An empty array clears the selection.
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * Change the coding agent and model key. Null clears the override.
   * @minLength 1
   * @maxLength 200
   */
  agent?: string | null;
  /**
   * Change agent-specific runtime options, such as reasoning effort.
   */
  agentOptions?: AgentOptionsInput;
  /**
   * Replace the user-managed persistent agent state.
   */
  userState?: AgentState;
  /**
   * Change the workspace VM size. Null clears the override.
   */
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  /**
   * Change the project environment for runs. Null clears the override.
   */
  projectId?: string | 'tembo' | null;
  /**
   * Change the associated agent template identifier, or null to clear it.
   * @maxLength 200
   */
  templateId?: string | null;
  /**
   * Replace the agent script, or null to clear it.
   * @maxLength 100000
   */
  script?: string | null;
  /**
   * Change the artifact type produced by the agent, or null to clear it.
   */
  artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  /**
   * Replace repository associations. An empty array removes all associations.
   * @maxItems 250
   */
  repositoryIds?: Array<string>;
  /**
   * Enable or pause the agent and its schedules and triggers. Archived agents remain paused until restored.
   */
  enabled?: boolean;
  /**
   * Archive with true or restore with false. Archiving disables schedules and triggers; restoring follows the agent enabled state.
   */
  archived?: boolean;
}

export interface AgentUpdateResponse {
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
  agentOptions: AgentOptionsInput;
  /**
   * Selected MCP server identifiers, including built-in server keys.
   * @maxItems 100
   */
  mcpServers: Array<string>;
  /**
   * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
   */
  userState: AgentState | null;
  /**
   * @maxItems 250
   */
  codeRepositories: Array<AgentUpdateResponse.CodeRepository>;
  lastRun: AgentUpdateResponse.LastRun | null;
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

export namespace AgentUpdateResponse {
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

export interface AgentDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
Agents.Templates = Templates;
Agents.Schedules = Schedules;
Agents.Triggers = Triggers;
Agents.Runs = Runs;
Agents.ContentRevisions = ContentRevisions;

export declare namespace Agents {
  export {
    type AgentOptionsInput as AgentOptionsInput,
    type AgentState as AgentState,
    type AgentListResponse as AgentListResponse,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentListParams as AgentListParams,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
  };

  export {
    Templates as Templates,
    type TriggerFilters as TriggerFilters,
    type AtlassianIssueAddedToBoardFilters as AtlassianIssueAddedToBoardFilters,
    type AtlassianIssueAssignedToUserFilters as AtlassianIssueAssignedToUserFilters,
    type AtlassianIssueCreatedFilters as AtlassianIssueCreatedFilters,
    type AtlassianIssueLabelAddedFilters as AtlassianIssueLabelAddedFilters,
    type AtlassianIssueStatusChangedFilters as AtlassianIssueStatusChangedFilters,
    type AtlassianIssueUpdatedFilters as AtlassianIssueUpdatedFilters,
    type BitbucketPullRequestOpenedFilters as BitbucketPullRequestOpenedFilters,
    type GithubCreateFilters as GithubCreateFilters,
    type GithubIssueClosedFilters as GithubIssueClosedFilters,
    type GithubIssueCommentCreatedFilters as GithubIssueCommentCreatedFilters,
    type GithubIssueOpenedFilters as GithubIssueOpenedFilters,
    type GithubPullRequestClosedFilters as GithubPullRequestClosedFilters,
    type GithubPullRequestMergedFilters as GithubPullRequestMergedFilters,
    type GithubPullRequestOpenedFilters as GithubPullRequestOpenedFilters,
    type GithubPullRequestReadyForReviewFilters as GithubPullRequestReadyForReviewFilters,
    type GithubPullRequestSynchronizeFilters as GithubPullRequestSynchronizeFilters,
    type GithubTemboPullRequestOpenedFilters as GithubTemboPullRequestOpenedFilters,
    type GithubWorkflowRunFailedFilters as GithubWorkflowRunFailedFilters,
    type GitlabBotMergeRequestCommentFilters as GitlabBotMergeRequestCommentFilters,
    type GitlabIssueClosedFilters as GitlabIssueClosedFilters,
    type GitlabIssueOpenedFilters as GitlabIssueOpenedFilters,
    type GitlabMergeRequestClosedFilters as GitlabMergeRequestClosedFilters,
    type GitlabMergeRequestMergedFilters as GitlabMergeRequestMergedFilters,
    type GitlabMergeRequestOpenedFilters as GitlabMergeRequestOpenedFilters,
    type GitlabMergeRequestUpdatedFilters as GitlabMergeRequestUpdatedFilters,
    type GitlabPipelineFailedFilters as GitlabPipelineFailedFilters,
    type GitlabRefCreatedFilters as GitlabRefCreatedFilters,
    type LinearIssueCreateFilters as LinearIssueCreateFilters,
    type LinearIssueLabelAddedFilters as LinearIssueLabelAddedFilters,
    type LinearIssueStatusChangedFilters as LinearIssueStatusChangedFilters,
    type LinearIssueUpdatedFilters as LinearIssueUpdatedFilters,
    type SentryIssueCreatedFilters as SentryIssueCreatedFilters,
    type SlackMessageReactionAddedFilters as SlackMessageReactionAddedFilters,
    type SlackMessageSentInChannelFilters as SlackMessageSentInChannelFilters,
    type EmptyTriggerFilters as EmptyTriggerFilters,
    type TemplateListResponse as TemplateListResponse,
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Schedules as Schedules,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };

  export {
    Triggers as Triggers,
    type TriggerListResponse as TriggerListResponse,
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerRetrieveResponse as TriggerRetrieveResponse,
    type TriggerUpdateResponse as TriggerUpdateResponse,
    type TriggerDeleteResponse as TriggerDeleteResponse,
    type TriggerListParams as TriggerListParams,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerRetrieveParams as TriggerRetrieveParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerDeleteParams as TriggerDeleteParams,
  };

  export {
    Runs as Runs,
    type RunListResponse as RunListResponse,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunListParams as RunListParams,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };

  export {
    ContentRevisions as ContentRevisions,
    type ContentRevisionListResponse as ContentRevisionListResponse,
    type ContentRevisionRetrieveResponse as ContentRevisionRetrieveResponse,
    type ContentRevisionRestoreResponse as ContentRevisionRestoreResponse,
    type ContentRevisionListParams as ContentRevisionListParams,
    type ContentRevisionRetrieveParams as ContentRevisionRetrieveParams,
    type ContentRevisionRestoreParams as ContentRevisionRestoreParams,
  };
}
