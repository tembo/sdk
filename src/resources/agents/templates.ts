// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as MessagesAPI from '../messages';

export class Templates extends APIResource {
  /**
   * List reusable agent templates and their configuration requirements.
   *
   * @param {TemplateListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TemplateListResponse>} List agent templates
   *
   * @example
   * ```ts
   * const template = await client.agents.templates.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v1/agents/templates', { query, ...options });
  }

  /**
   * Retrieve a reusable agent template by name, including its instructions and required parameters.
   *
   * @param {string} templateName
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TemplateRetrieveResponse>} Retrieve an agent template
   *
   * @example
   * ```ts
   * const template = await client.agents.templates.retrieve('templateName');
   * ```
   */
  retrieve(templateName: string, options?: RequestOptions): APIPromise<TemplateRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/agents/templates/${templateName}`, options);
  }
}

/**
 * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
 */
export type TriggerFilters =
  | TriggerFilters.TriggerFiltersItem
  | TriggerFilters.TriggerFiltersItem2
  | TriggerFilters.TriggerFiltersItem3
  | TriggerFilters.TriggerFiltersItem4
  | TriggerFilters.TriggerFiltersItem5
  | TriggerFilters.TriggerFiltersItem6
  | TriggerFilters.TriggerFiltersItem7
  | TriggerFilters.TriggerFiltersItem8
  | TriggerFilters.TriggerFiltersItem9
  | TriggerFilters.TriggerFiltersItem10
  | TriggerFilters.TriggerFiltersItem11
  | TriggerFilters.TriggerFiltersItem12
  | TriggerFilters.TriggerFiltersItem13
  | TriggerFilters.TriggerFiltersItem14
  | TriggerFilters.TriggerFiltersItem15
  | TriggerFilters.TriggerFiltersItem16
  | TriggerFilters.TriggerFiltersItem17
  | TriggerFilters.TriggerFiltersItem18
  | TriggerFilters.TriggerFiltersItem19
  | TriggerFilters.TriggerFiltersItem20
  | TriggerFilters.TriggerFiltersItem21
  | TriggerFilters.TriggerFiltersItem22
  | TriggerFilters.TriggerFiltersItem23
  | TriggerFilters.TriggerFiltersItem24
  | TriggerFilters.TriggerFiltersItem25
  | TriggerFilters.TriggerFiltersItem26
  | TriggerFilters.TriggerFiltersItem27
  | TriggerFilters.TriggerFiltersItem28
  | TriggerFilters.TriggerFiltersItem29
  | TriggerFilters.TriggerFiltersItem30
  | TriggerFilters.TriggerFiltersItem31
  | TriggerFilters.TriggerFiltersItem32
  | TriggerFilters.TriggerFiltersItem33
  | TriggerFilters.TriggerFiltersItem34
  | TriggerFilters.TriggerFiltersItem35
  | TriggerFilters.TriggerFiltersItem36
  | TriggerFilters.TriggerFiltersItem37
  | TriggerFilters.TriggerFiltersItem38
  | TriggerFilters.TriggerFiltersItem39
  | TriggerFilters.TriggerFiltersItem40
  | Record<string, unknown>;

export namespace TriggerFilters {
  export interface TriggerFiltersItem extends AtlassianIssueAddedToBoardFilters {}

  export interface TriggerFiltersItem2 extends AtlassianIssueAssignedToUserFilters {}

  export interface TriggerFiltersItem3 extends AtlassianIssueCreatedFilters {}

  export interface TriggerFiltersItem4 extends AtlassianIssueLabelAddedFilters {}

  export interface TriggerFiltersItem5 extends AtlassianIssueStatusChangedFilters {}

  export interface TriggerFiltersItem6 extends AtlassianIssueUpdatedFilters {}

  export interface TriggerFiltersItem7 extends BitbucketPullRequestOpenedFilters {}

  export interface TriggerFiltersItem8 extends GithubCreateFilters {}

  export interface TriggerFiltersItem9 extends GithubIssueClosedFilters {}

  export interface TriggerFiltersItem10 extends GithubIssueCommentCreatedFilters {}

  export interface TriggerFiltersItem11 extends GithubIssueOpenedFilters {}

  export interface TriggerFiltersItem12 extends GithubPullRequestClosedFilters {}

  export interface TriggerFiltersItem13 extends GithubPullRequestMergedFilters {}

  export interface TriggerFiltersItem14 extends GithubPullRequestOpenedFilters {}

  export interface TriggerFiltersItem15 extends GithubPullRequestReadyForReviewFilters {}

  export interface TriggerFiltersItem16 {
    /**
     * Only trigger if the release is in one of the repositories
     */
    repositories?: Array<string>;
  }

  export interface TriggerFiltersItem17 extends GithubPullRequestSynchronizeFilters {}

  export interface TriggerFiltersItem18 extends GithubTemboPullRequestOpenedFilters {}

  export interface TriggerFiltersItem19 extends GithubWorkflowRunFailedFilters {}

  export interface TriggerFiltersItem20 extends GitlabBotMergeRequestCommentFilters {}

  export interface TriggerFiltersItem21 extends GitlabIssueClosedFilters {}

  export interface TriggerFiltersItem22 extends GitlabIssueOpenedFilters {}

  export interface TriggerFiltersItem23 extends GitlabMergeRequestClosedFilters {}

  export interface TriggerFiltersItem24 extends GitlabMergeRequestMergedFilters {}

  export interface TriggerFiltersItem25 extends GitlabMergeRequestOpenedFilters {}

  export interface TriggerFiltersItem26 extends GitlabMergeRequestUpdatedFilters {}

  export interface TriggerFiltersItem27 extends GitlabPipelineFailedFilters {}

  export interface TriggerFiltersItem28 extends GitlabRefCreatedFilters {}

  export interface TriggerFiltersItem29 extends LinearIssueCreateFilters {}

  export interface TriggerFiltersItem30 extends LinearIssueLabelAddedFilters {}

  export interface TriggerFiltersItem31 extends LinearIssueStatusChangedFilters {}

  export interface TriggerFiltersItem32 extends LinearIssueUpdatedFilters {}

  export interface TriggerFiltersItem33 extends SentryIssueCreatedFilters {}

  export interface TriggerFiltersItem34 extends SlackMessageReactionAddedFilters {}

  export interface TriggerFiltersItem35 extends SlackMessageSentInChannelFilters {}

  export interface TriggerFiltersItem36 {
    /**
     * Only trigger if the page is in a space with one of these names or IDs
     */
    spaces?: Array<string>;
    /**
     * Only trigger if the page title contains one of these substrings
     */
    titleContains?: Array<string>;
    [k: string]: unknown;
  }

  export interface TriggerFiltersItem37 {
    /**
     * Only trigger if the page is in a space with one of these names or IDs
     */
    spaces?: Array<string>;
    /**
     * Only trigger if the page title contains one of these substrings
     */
    titleContains?: Array<string>;
    /**
     * Only trigger if the page was moved from a space with one of these names or IDs
     */
    previousSpaces?: Array<string>;
    [k: string]: unknown;
  }

  export interface TriggerFiltersItem38 {
    /**
     * Only trigger if the page is in a space with one of these names or IDs
     */
    spaces?: Array<string>;
    /**
     * Only trigger if the page title contains one of these substrings
     */
    titleContains?: Array<string>;
    /**
     * Only trigger for footer comments, inline comments, or both
     */
    locations?: Array<'footer' | 'inline'>;
    [k: string]: unknown;
  }

  export interface TriggerFiltersItem39 {
    /**
     * Only trigger if the page is in a space with one of these names or IDs
     */
    spaces?: Array<string>;
    /**
     * Only trigger if the page title contains one of these substrings
     */
    titleContains?: Array<string>;
    /**
     * Only trigger if the added label has one of these values
     */
    labels?: Array<string>;
    /**
     * Only trigger if the comment contains one of these substrings
     */
    commentContains?: Array<string>;
    [k: string]: unknown;
  }

  export interface TriggerFiltersItem40 {
    /**
     * Only trigger if the page is in a space with one of these names or IDs
     */
    spaces?: Array<string>;
    /**
     * Only trigger if the page title contains one of these substrings
     */
    titleContains?: Array<string>;
    /**
     * Only trigger if the removed label has one of these values
     */
    labels?: Array<string>;
    /**
     * Only trigger if the comment contains one of these substrings
     */
    commentContains?: Array<string>;
    [k: string]: unknown;
  }
}

export interface AtlassianIssueAddedToBoardFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger if the issue is on one of the specified boards
   */
  boards?: Array<string>;
  /**
   * Only trigger if the issue was moved to one of the specified statuses (board columns)
   */
  statuses?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
  /**
   * Also trigger for newly created issues (not just status changes)
   */
  includeNewIssues?: boolean;
}

export interface AtlassianIssueAssignedToUserFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
  /**
   * Also trigger for newly created issues that are already assigned
   */
  includeNewIssues?: boolean;
}

export interface AtlassianIssueCreatedFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger for the specified issue types, such as Story, Bug, or Sub-task.
   */
  issueTypes?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
}

export interface AtlassianIssueLabelAddedFilters {
  /**
   * Only trigger if one of the specified labels was added
   */
  labels?: Array<string>;
}

export interface AtlassianIssueStatusChangedFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger if the issue was moved to one of the specified statuses
   */
  statuses?: Array<string>;
  /**
   * Only trigger when the issue changes from one of the specified previous statuses.
   */
  previousStatuses?: Array<string>;
  /**
   * Only trigger for the specified issue types, such as Story, Bug, or Sub-task.
   */
  issueTypes?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
}

export interface AtlassianIssueUpdatedFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger for the specified issue types, such as Story, Bug, or Sub-task.
   */
  issueTypes?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
}

export interface BitbucketPullRequestOpenedFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the pull request was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubCreateFilters {
  repositories?: Array<string>;
  /**
   * Only trigger for the specified Git reference type: branch or tag.
   */
  refType?: Array<'branch' | 'tag'>;
  branchNames?: Array<string>;
  tagNames?: Array<string>;
}

export interface GithubIssueClosedFilters {
  /**
   * Only trigger if the issue is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the issue was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface GithubIssueCommentCreatedFilters {
  /**
   * Only trigger if the comment is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the comment was created by one of the specified users
   */
  commentedBy?: Array<string>;
  /**
   * Trigger on comments on issues, pull requests, or both
   */
  commentOn?: Array<'issues' | 'pull_requests'>;
  /**
   * Only trigger if the comment contains one of these substrings
   */
  messageContains?: Array<string>;
}

export interface GithubIssueOpenedFilters {
  /**
   * Only trigger if the issue is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the issue was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface GithubPullRequestClosedFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the pull request was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubPullRequestMergedFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the pull request was merged by one of the specified users
   */
  mergedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubPullRequestOpenedFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the pull request has at least one of the specified labels
   */
  labels?: Array<string>;
  /**
   * Only trigger if the pull request was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Only trigger if the pull request targets one of these branches
   */
  branches?: Array<string>;
  /**
   * Trigger also for draft pull requests (disabled by default)
   */
  draftPrs?: boolean;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubPullRequestReadyForReviewFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the pull request was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubPullRequestSynchronizeFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the commits were pushed by one of the specified users
   */
  pushedBy?: Array<string>;
  /**
   * Trigger even if the pull request is a draft
   */
  draftPrs?: boolean;
  /**
   * Enable agent for Tembo-created pull requests (disabled by default)
   */
  temboPrs?: boolean;
}

export interface GithubTemboPullRequestOpenedFilters {
  /**
   * Only trigger if the pull request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Also trigger for draft pull requests
   */
  draftPrs?: boolean;
}

export interface GithubWorkflowRunFailedFilters {
  /**
   * Only trigger if the workflow run is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger for specific workflow names
   */
  workflowNames?: Array<string>;
  /**
   * Only trigger for specific branches
   */
  branches?: Array<string>;
}

export interface GitlabBotMergeRequestCommentFilters {
  /**
   * Only trigger if the comment is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the comment is from one of these bot usernames
   */
  botUsernames?: Array<string>;
}

export interface GitlabIssueClosedFilters {
  /**
   * Only trigger if the issue is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the issue was closed by one of the specified users
   */
  closedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface GitlabIssueOpenedFilters {
  /**
   * Only trigger if the issue is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the issue was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface GitlabMergeRequestClosedFilters {
  /**
   * Only trigger if the merge request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the merge request was closed by one of the specified users
   */
  closedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created merge requests (disabled by default)
   */
  temboMrs?: boolean;
}

export interface GitlabMergeRequestMergedFilters {
  /**
   * Only trigger if the merge request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the merge request was merged by one of the specified users
   */
  mergedBy?: Array<string>;
  /**
   * Enable agent for Tembo-created merge requests (disabled by default)
   */
  temboMrs?: boolean;
}

export interface GitlabMergeRequestOpenedFilters {
  /**
   * Only trigger if the merge request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Include draft merge requests. Drafts are excluded when omitted or false.
   */
  draftMrs?: boolean;
  /**
   * Enable agent for Tembo-created merge requests (disabled by default)
   */
  temboMrs?: boolean;
}

export interface GitlabMergeRequestUpdatedFilters {
  /**
   * Only trigger if the merge request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger if the commits were pushed by one of the specified users
   */
  pushedBy?: Array<string>;
  /**
   * Include draft merge requests. Drafts are excluded when omitted or false.
   */
  draftMrs?: boolean;
  /**
   * Enable agent for Tembo-created merge requests (disabled by default)
   */
  temboMrs?: boolean;
}

export interface GitlabPipelineFailedFilters {
  /**
   * Only trigger if the pipeline is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Only trigger for specific branches
   */
  branches?: Array<string>;
}

export interface GitlabRefCreatedFilters {
  repositories?: Array<string>;
  /**
   * Only trigger for the specified Git reference type: branch or tag.
   */
  refType?: Array<'branch' | 'tag'>;
  branchNames?: Array<string>;
  tagNames?: Array<string>;
}

export interface LinearIssueCreateFilters {
  /**
   * Only trigger if the issue belongs to one of the specified teams
   */
  teams?: Array<string>;
  /**
   * Only trigger if the issue state type matches one of the specified types
   */
  states?: Array<string>;
  /**
   * Only trigger if the issue was opened by one of the specified users
   */
  openedBy?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
  /**
   * Enable agent for Tembo-created issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface LinearIssueLabelAddedFilters {
  /**
   * Only trigger if the issue belongs to one of the specified teams
   */
  teams?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if one of the specified labels was added to the issue
   */
  labels?: Array<string>;
}

export interface LinearIssueStatusChangedFilters {
  /**
   * Only trigger if the issue belongs to one of the specified teams
   */
  teams?: Array<string>;
  /**
   * Only trigger if the issue was moved to one of the specified statuses
   */
  statuses?: Array<string>;
  /**
   * Only trigger when the issue changes from one of the specified previous statuses.
   */
  previousStatuses?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
}

export interface LinearIssueUpdatedFilters {
  /**
   * Only trigger if the issue belongs to one of the specified teams
   */
  teams?: Array<string>;
  /**
   * Only trigger if the issue state type matches one of the specified types
   */
  states?: Array<string>;
  /**
   * Only trigger if the issue is assigned to one of the specified users
   */
  assignedTo?: Array<string>;
  /**
   * Only trigger if the issue has at least one of the specified labels
   */
  labels?: Array<string>;
  /**
   * Enable agent for Tembo-updated issues (disabled by default)
   */
  temboIssues?: boolean;
}

export interface SentryIssueCreatedFilters {
  /**
   * Only trigger if the issue has one of the specified priorities
   */
  priorities?: Array<'high' | 'medium' | 'low'>;
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projectSlugs?: Array<string>;
}

export interface SlackMessageReactionAddedFilters {
  /**
   * Only trigger if one of these emoji reactions is added
   */
  emojis?: Array<string>;
  /**
   * Only trigger if the reaction is added in one of these channels
   */
  channels?: Array<string>;
  /**
   * Only trigger if the reaction is added by one of these user names
   */
  users?: Array<string>;
}

export interface SlackMessageSentInChannelFilters {
  /**
   * Only trigger if the message is sent in one of the channels
   */
  channels?: Array<string>;
  /**
   * Only trigger if the message was sent by one of these user names
   */
  users?: Array<string>;
  /**
   * Only trigger if the message contains one of these substrings
   */
  messageContains?: Array<string>;
}

export type EmptyTriggerFilters = Record<string, unknown>;

export interface TemplateListParams {
  cursor?:
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
   * @default 50
   */
  limit?: string;
}

export interface TemplateListResponse {
  items: Array<TemplateListResponse.Item>;
  nextCursor:
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
    | 'triageNewJiraBug'
    | null;
}

export namespace TemplateListResponse {
  export interface Item {
    name:
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
    title: string;
    description: string;
    label: 'Code Review' | 'Productivity' | 'Documentation' | 'Reporting' | 'Monitoring' | 'Management';
    /**
     * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
     */
    instructions: MessagesAPI.TipTapDocument;
    connectedApps: Array<string>;
    agent: string;
    artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
    triggers?: Array<Item.Trigger>;
    schedules?: Array<string>;
    requiredParams?: Array<'repository'>;
  }

  export namespace Item {
    export interface Trigger {
      name: string;
      displayName: string;
      integrationType: string;
      /**
       * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
       */
      filters?: TriggerFilters;
    }
  }
}

export interface TemplateRetrieveResponse {
  name:
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
  title: string;
  description: string;
  label: 'Code Review' | 'Productivity' | 'Documentation' | 'Reporting' | 'Monitoring' | 'Management';
  /**
   * Instructions for the agent as a rich-text document. Mentions can reference integrations used by the agent.
   */
  instructions: MessagesAPI.TipTapDocument;
  connectedApps: Array<string>;
  agent: string;
  artifactType?: 'PullRequest' | 'ToolCall' | 'Plan' | 'Response' | 'File' | 'Service' | 'Source' | null;
  triggers?: Array<TemplateRetrieveResponse.Trigger>;
  schedules?: Array<string>;
  requiredParams?: Array<'repository'>;
}

export namespace TemplateRetrieveResponse {
  export interface Trigger {
    name: string;
    displayName: string;
    integrationType: string;
    /**
     * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
     */
    filters?: TriggerFilters;
  }
}
export declare namespace Templates {
  export {
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
}
