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
  type RunRetrieveParams,
} from './runs';

export class Agents extends APIResource {
  templates: TemplatesAPI2.Templates = new TemplatesAPI2.Templates(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

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
   *   limit: '50',
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
   * Update agent configuration. Supply expectedUpdatedAt to reject an update if the agent changed since it was retrieved. Enabling or archiving an agent also updates its schedules and triggers.
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
   * Delete an agent and its scheduled and triggered jobs.
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
    mode?: 'normal' | 'planning';
    speed?: 'normal' | 'fast';
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
   * @maxLength 2000
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  /**
   * @maxLength 10000
   */
  ids?: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
  archived?: 'true' | 'false';
  sort?: 'latestRun' | 'runCount';
  /**
   * @maxLength 10000
   */
  status?: string;
  /**
   * @maxLength 10000
   */
  integration?: string;
  /**
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
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /**
   * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
   */
  instructions?: MessagesAPI.TipTapDocument;
  /**
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * @minLength 1
   * @maxLength 200
   */
  agent?: string;
  /**
   * Execution settings for the selected agent runtime, including provider-specific options.
   */
  agentOptions?: AgentOptionsInput;
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  projectId?: string | 'tembo' | null;
  artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  autoDetectRepositories?: boolean;
  /**
   * @maxItems 250
   */
  repositoryIds?: Array<string>;
  /**
   * @maxItems 50
   */
  triggers?: Array<AgentCreateParams.Trigger>;
  /**
   * @maxItems 50
   */
  schedules?: Array<AgentCreateParams.Schedule>;
  templateName?:
    | 'addTestCoverage'
    | 'addTestCoverageFromJira'
    | 'autoAgentsMdMaintainer'
    | 'autoDocsMaintainer'
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
    | 'staleCodeComments'
    | 'stalePullRequestNotifier'
    | 'summarizeChangesDaily'
    | 'triageNewJiraBug';
  /**
   * @format uuid
   */
  sourceAgentId?: string;
}

export namespace AgentCreateParams {
  export interface Trigger {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /**
     * @minLength 1
     * @maxLength 100
     */
    integrationType?: string;
    /**
     * @format uuid
     */
    integrationId?: string;
    /**
     * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
     */
    filters?: TemplatesAPI.TriggerFilters;
  }

  export interface Schedule {
    /**
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
  script: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  autoDetectRepositories: boolean;
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
  script: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  autoDetectRepositories: boolean;
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
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  key?: string | null;
  instructions?: MessagesAPI.TipTapDocument | null;
  /**
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * @minLength 1
   * @maxLength 200
   */
  agent?: string | null;
  /**
   * Execution settings for the selected agent runtime, including provider-specific options.
   */
  agentOptions?: AgentOptionsInput;
  /**
   * User-defined state keyed by name. Values may be any JSON value, including nested objects and arrays. No application-specific keys are required.
   */
  userState?: AgentState;
  sandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra' | null;
  projectId?: string | 'tembo' | null;
  /**
   * @maxLength 200
   */
  templateId?: string | null;
  /**
   * @maxLength 100000
   */
  script?: string | null;
  artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  autoDetectRepositories?: boolean;
  /**
   * @maxItems 250
   */
  repositoryIds?: Array<string>;
  enabled?: boolean;
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
  script: string | null;
  artifactType: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  autoDetectRepositories: boolean;
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
    type RunRetrieveParams as RunRetrieveParams,
  };
}
