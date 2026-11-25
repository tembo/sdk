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
   *   limit: 50,
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
  | AtlassianIssueAddedToBoardFilters
  | AtlassianIssueAssignedToUserFilters
  | TriggerFilters.AtlassianIssueCommentCreatedFilters
  | AtlassianIssueCreatedFilters
  | AtlassianIssueLabelAddedFilters
  | AtlassianIssueStatusChangedFilters
  | AtlassianIssueUpdatedFilters
  | BitbucketPullRequestOpenedFilters
  | GithubCreateFilters
  | TriggerFilters.GithubDependabotAlertAssignedFilters
  | GithubIssueClosedFilters
  | GithubIssueCommentCreatedFilters
  | GithubIssueOpenedFilters
  | TriggerFilters.GithubPullRequestClosedFilters
  | TriggerFilters.GithubPullRequestMergedFilters
  | TriggerFilters.GithubPullRequestOpenedFilters
  | TriggerFilters.GithubPullRequestReadyForReviewFilters
  | TriggerFilters.GithubPullRequestLabeledFilters
  | TriggerFilters.GithubPullRequestReviewRequestedFilters
  | TriggerFilters.GithubPullRequestReviewSubmittedFilters
  | TriggerFilters.GithubReleasePublishedFilters
  | TriggerFilters.GithubPullRequestSynchronizeFilters
  | GithubTemboPullRequestOpenedFilters
  | GithubWorkflowRunFailedFilters
  | TriggerFilters.GithubWorkflowRunCompletedFilters
  | GitlabBotMergeRequestCommentFilters
  | GitlabIssueClosedFilters
  | GitlabIssueOpenedFilters
  | TriggerFilters.GitlabIssueLabelAddedFilters
  | TriggerFilters.GitlabIssueUpdatedFilters
  | GitlabMergeRequestClosedFilters
  | GitlabMergeRequestMergedFilters
  | GitlabMergeRequestOpenedFilters
  | GitlabMergeRequestUpdatedFilters
  | GitlabMergeRequestReadyForReviewFilters
  | GitlabPipelineFailedFilters
  | GitlabRefCreatedFilters
  | LinearIssueCreateFilters
  | LinearIssueLabelAddedFilters
  | LinearIssueStatusChangedFilters
  | LinearIssueUpdatedFilters
  | TriggerFilters.SazabiIssueFilters
  | SentryIssueCreatedFilters
  | SlackMessageReactionAddedFilters
  | SlackMessageSentInChannelFilters
  | TriggerFilters.TriggerFiltersItem
  | TriggerFilters.TriggerFiltersItem2
  | TriggerFilters.TriggerFiltersItem3
  | TriggerFilters.TriggerFiltersItem4
  | TriggerFilters.TriggerFiltersItem5
  | EmptyTriggerFilters;

export namespace TriggerFilters {
  export interface AtlassianIssueCommentCreatedFilters {
    /**
     * Only trigger if the issue is in one of the specified projects
     */
    projects?: Array<string>;
    /**
     * Only trigger if the comment was added by one of the specified users
     */
    commentedBy?: Array<string>;
    /**
     * Only trigger if the comment contains one of these substrings
     */
    messageContains?: Array<string>;
    /**
     * Only trigger if the issue has at least one of the specified labels
     */
    labels?: Array<string>;
    [k: string]: unknown;
  }

  export interface GithubDependabotAlertAssignedFilters {
    /**
     * Only trigger if the alert is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger when the alert is assigned to one of the specified users
     */
    assignees?: Array<string>;
    [k: string]: unknown;
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
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
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
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
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
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
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
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
  }

  export interface GithubPullRequestLabeledFilters {
    /**
     * Only trigger if the pull request is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger when one of these labels is added
     */
    labels?: Array<string>;
    /**
     * Only trigger if the label was added by one of the specified users
     */
    labeledBy?: Array<string>;
    /**
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
  }

  export interface GithubPullRequestReviewRequestedFilters {
    /**
     * Only trigger if the pull request is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger when one of these users or team slugs is requested as a reviewer
     */
    reviewers?: Array<string>;
    /**
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
  }

  export interface GithubPullRequestReviewSubmittedFilters {
    /**
     * Only trigger if the pull request is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger for reviews with one of these states
     */
    reviewStates?: Array<'approved' | 'changes_requested' | 'commented'>;
    /**
     * Only trigger if the review was submitted by one of the specified users
     */
    reviewedBy?: Array<string>;
    /**
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    /**
     * Trigger also for reviews submitted by Tembo (disabled by default). Replies Tembo posts to review threads never trigger.
     */
    temboReviews?: boolean;
    [k: string]: unknown;
  }

  export interface GithubReleasePublishedFilters {
    /**
     * Only trigger if the release is in one of the repositories
     */
    repositories?: Array<string>;
    [k: string]: unknown;
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
     * Enable agent for Tembo-created pull requests (enabled by default)
     * @default true
     */
    temboPrs?: boolean;
    [k: string]: unknown;
  }

  export interface GithubWorkflowRunCompletedFilters {
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
    /**
     * Only trigger for these completed workflow results, such as success
     */
    conclusions?: Array<
      'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'skipped'
    >;
    /**
     * Only trigger for these originating GitHub events; use schedule for cron runs, not push or pull_request
     */
    events?: Array<string>;
    [k: string]: unknown;
  }

  export interface GitlabIssueLabelAddedFilters {
    /**
     * Only trigger if the issue is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger if one of the added labels matches these labels
     */
    labels?: Array<string>;
    /**
     * Only trigger if the label was added by one of the specified users
     */
    addedBy?: Array<string>;
    [k: string]: unknown;
  }

  export interface GitlabIssueUpdatedFilters {
    /**
     * Only trigger if the issue is in one of the repositories
     */
    repositories?: Array<string>;
    /**
     * Only trigger if the issue has at least one of the specified labels
     */
    labels?: Array<string>;
    /**
     * Only trigger if the issue was updated by one of the specified users
     */
    updatedBy?: Array<string>;
    [k: string]: unknown;
  }

  export interface SazabiIssueFilters {
    /**
     * Only trigger if the issue has one of the specified severities
     */
    severities?: Array<'critical' | 'high' | 'medium' | 'low'>;
    /**
     * Only trigger if the issue is in one of these Sazabi projects (name or ID)
     */
    projects?: Array<string>;
    /**
     * Only trigger if the issue affects one of these components (name or ID)
     */
    components?: Array<string>;
    [k: string]: unknown;
  }

  export interface TriggerFiltersItem {
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

  export interface TriggerFiltersItem2 {
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

  export interface TriggerFiltersItem3 {
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

  export interface TriggerFiltersItem4 {
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

  export interface TriggerFiltersItem5 {
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface AtlassianIssueLabelAddedFilters {
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
  /**
   * Only trigger if the issue belongs to one of these Jira teams. Enter exact team names or team IDs (from the team profile URL).
   */
  teams?: Array<string>;
  /**
   * Only trigger if one of the specified labels was added
   */
  labels?: Array<string>;
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface GithubCreateFilters {
  repositories?: Array<string>;
  /**
   * Only trigger for the specified Git reference type: branch or tag.
   */
  refType?: Array<'branch' | 'tag'>;
  branchNames?: Array<string>;
  tagNames?: Array<string>;
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
   * Enable agent for Tembo-created pull requests (enabled by default)
   * @default true
   */
  temboPrs?: boolean;
  [k: string]: unknown;
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
   * Enable agent for Tembo-created pull requests (enabled by default)
   * @default true
   */
  temboPrs?: boolean;
  [k: string]: unknown;
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
   * Enable agent for Tembo-created pull requests (enabled by default)
   * @default true
   */
  temboPrs?: boolean;
  [k: string]: unknown;
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
   * Enable agent for Tembo-created pull requests (enabled by default)
   * @default true
   */
  temboPrs?: boolean;
  [k: string]: unknown;
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
   * Enable agent for Tembo-created pull requests (enabled by default)
   * @default true
   */
  temboPrs?: boolean;
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface GitlabMergeRequestReadyForReviewFilters {
  /**
   * Only trigger if the merge request is in one of the repositories
   */
  repositories?: Array<string>;
  /**
   * Enable agent for Tembo-created merge requests (disabled by default)
   */
  temboMrs?: boolean;
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface GitlabRefCreatedFilters {
  repositories?: Array<string>;
  /**
   * Only trigger for the specified Git reference type: branch or tag.
   */
  refType?: Array<'branch' | 'tag'>;
  branchNames?: Array<string>;
  tagNames?: Array<string>;
  [k: string]: unknown;
}

export interface LinearIssueCreateFilters {
  /**
   * Only trigger if the issue belongs to one of the specified teams
   */
  teams?: Array<string>;
  /**
   * Only trigger if the issue is in one of the specified projects
   */
  projects?: Array<string>;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  [k: string]: unknown;
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
  /**
   * Skip messages containing any of these case-sensitive substrings (for example, On-call handover:)
   */
  messageNotContains?: Array<string>;
  [k: string]: unknown;
}

export type EmptyTriggerFilters = Record<string, unknown>;

export interface TemplateListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   */
  cursor?:
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
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface TemplateListResponse {
  items: Array<TemplateListResponse.Item>;
  nextCursor:
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
      filters?:
        | AtlassianIssueAddedToBoardFilters
        | AtlassianIssueAssignedToUserFilters
        | Trigger.AtlassianIssueCommentCreatedFilters
        | AtlassianIssueCreatedFilters
        | AtlassianIssueLabelAddedFilters
        | AtlassianIssueStatusChangedFilters
        | AtlassianIssueUpdatedFilters
        | BitbucketPullRequestOpenedFilters
        | GithubCreateFilters
        | Trigger.GithubDependabotAlertAssignedFilters
        | GithubIssueClosedFilters
        | GithubIssueCommentCreatedFilters
        | GithubIssueOpenedFilters
        | Trigger.GithubPullRequestClosedFiltersOutput
        | Trigger.GithubPullRequestMergedFiltersOutput
        | Trigger.GithubPullRequestOpenedFiltersOutput
        | Trigger.GithubPullRequestReadyForReviewFiltersOutput
        | Trigger.GithubPullRequestLabeledFiltersOutput
        | Trigger.GithubPullRequestReviewRequestedFiltersOutput
        | Trigger.GithubPullRequestReviewSubmittedFiltersOutput
        | Trigger.GithubReleasePublishedFilters
        | Trigger.GithubPullRequestSynchronizeFiltersOutput
        | GithubTemboPullRequestOpenedFilters
        | GithubWorkflowRunFailedFilters
        | Trigger.GithubWorkflowRunCompletedFilters
        | GitlabBotMergeRequestCommentFilters
        | GitlabIssueClosedFilters
        | GitlabIssueOpenedFilters
        | Trigger.GitlabIssueLabelAddedFilters
        | Trigger.GitlabIssueUpdatedFilters
        | GitlabMergeRequestClosedFilters
        | GitlabMergeRequestMergedFilters
        | GitlabMergeRequestOpenedFilters
        | GitlabMergeRequestUpdatedFilters
        | GitlabMergeRequestReadyForReviewFilters
        | GitlabPipelineFailedFilters
        | GitlabRefCreatedFilters
        | LinearIssueCreateFilters
        | LinearIssueLabelAddedFilters
        | LinearIssueStatusChangedFilters
        | LinearIssueUpdatedFilters
        | Trigger.SazabiIssueFilters
        | SentryIssueCreatedFilters
        | SlackMessageReactionAddedFilters
        | SlackMessageSentInChannelFilters
        | Trigger.Filters
        | Trigger.Filters2
        | Trigger.Filters3
        | Trigger.Filters4
        | Trigger.Filters5
        | EmptyTriggerFilters;
    }

    export namespace Trigger {
      export interface AtlassianIssueCommentCreatedFilters {
        /**
         * Only trigger if the issue is in one of the specified projects
         */
        projects?: Array<string>;
        /**
         * Only trigger if the comment was added by one of the specified users
         */
        commentedBy?: Array<string>;
        /**
         * Only trigger if the comment contains one of these substrings
         */
        messageContains?: Array<string>;
        /**
         * Only trigger if the issue has at least one of the specified labels
         */
        labels?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubDependabotAlertAssignedFilters {
        /**
         * Only trigger if the alert is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger when the alert is assigned to one of the specified users
         */
        assignees?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestClosedFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger if the pull request was opened by one of the specified users
         */
        openedBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestMergedFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger if the pull request was merged by one of the specified users
         */
        mergedBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestOpenedFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
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
        [k: string]: unknown;
      }

      export interface GithubPullRequestReadyForReviewFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger if the pull request was opened by one of the specified users
         */
        openedBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestLabeledFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger when one of these labels is added
         */
        labels?: Array<string>;
        /**
         * Only trigger if the label was added by one of the specified users
         */
        labeledBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestReviewRequestedFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger when one of these users or team slugs is requested as a reviewer
         */
        reviewers?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestReviewSubmittedFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
        /**
         * Only trigger if the pull request is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger for reviews with one of these states
         */
        reviewStates?: Array<'approved' | 'changes_requested' | 'commented'>;
        /**
         * Only trigger if the review was submitted by one of the specified users
         */
        reviewedBy?: Array<string>;
        /**
         * Trigger also for reviews submitted by Tembo (disabled by default). Replies Tembo posts to review threads never trigger.
         */
        temboReviews?: boolean;
        [k: string]: unknown;
      }

      export interface GithubReleasePublishedFilters {
        /**
         * Only trigger if the release is in one of the repositories
         */
        repositories?: Array<string>;
        [k: string]: unknown;
      }

      export interface GithubPullRequestSynchronizeFiltersOutput {
        /**
         * Enable agent for Tembo-created pull requests (enabled by default)
         */
        temboPrs: boolean;
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
        [k: string]: unknown;
      }

      export interface GithubWorkflowRunCompletedFilters {
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
        /**
         * Only trigger for these completed workflow results, such as success
         */
        conclusions?: Array<
          | 'success'
          | 'failure'
          | 'neutral'
          | 'cancelled'
          | 'timed_out'
          | 'action_required'
          | 'stale'
          | 'skipped'
        >;
        /**
         * Only trigger for these originating GitHub events; use schedule for cron runs, not push or pull_request
         */
        events?: Array<string>;
        [k: string]: unknown;
      }

      export interface GitlabIssueLabelAddedFilters {
        /**
         * Only trigger if the issue is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger if one of the added labels matches these labels
         */
        labels?: Array<string>;
        /**
         * Only trigger if the label was added by one of the specified users
         */
        addedBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface GitlabIssueUpdatedFilters {
        /**
         * Only trigger if the issue is in one of the repositories
         */
        repositories?: Array<string>;
        /**
         * Only trigger if the issue has at least one of the specified labels
         */
        labels?: Array<string>;
        /**
         * Only trigger if the issue was updated by one of the specified users
         */
        updatedBy?: Array<string>;
        [k: string]: unknown;
      }

      export interface SazabiIssueFilters {
        /**
         * Only trigger if the issue has one of the specified severities
         */
        severities?: Array<'critical' | 'high' | 'medium' | 'low'>;
        /**
         * Only trigger if the issue is in one of these Sazabi projects (name or ID)
         */
        projects?: Array<string>;
        /**
         * Only trigger if the issue affects one of these components (name or ID)
         */
        components?: Array<string>;
        [k: string]: unknown;
      }

      export interface Filters {
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

      export interface Filters2 {
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

      export interface Filters3 {
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

      export interface Filters4 {
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

      export interface Filters5 {
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
  }
}

export interface TemplateRetrieveResponse {
  name:
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
    filters?:
      | AtlassianIssueAddedToBoardFilters
      | AtlassianIssueAssignedToUserFilters
      | Trigger.AtlassianIssueCommentCreatedFilters
      | AtlassianIssueCreatedFilters
      | AtlassianIssueLabelAddedFilters
      | AtlassianIssueStatusChangedFilters
      | AtlassianIssueUpdatedFilters
      | BitbucketPullRequestOpenedFilters
      | GithubCreateFilters
      | Trigger.GithubDependabotAlertAssignedFilters
      | GithubIssueClosedFilters
      | GithubIssueCommentCreatedFilters
      | GithubIssueOpenedFilters
      | Trigger.GithubPullRequestClosedFiltersOutput
      | Trigger.GithubPullRequestMergedFiltersOutput
      | Trigger.GithubPullRequestOpenedFiltersOutput
      | Trigger.GithubPullRequestReadyForReviewFiltersOutput
      | Trigger.GithubPullRequestLabeledFiltersOutput
      | Trigger.GithubPullRequestReviewRequestedFiltersOutput
      | Trigger.GithubPullRequestReviewSubmittedFiltersOutput
      | Trigger.GithubReleasePublishedFilters
      | Trigger.GithubPullRequestSynchronizeFiltersOutput
      | GithubTemboPullRequestOpenedFilters
      | GithubWorkflowRunFailedFilters
      | Trigger.GithubWorkflowRunCompletedFilters
      | GitlabBotMergeRequestCommentFilters
      | GitlabIssueClosedFilters
      | GitlabIssueOpenedFilters
      | Trigger.GitlabIssueLabelAddedFilters
      | Trigger.GitlabIssueUpdatedFilters
      | GitlabMergeRequestClosedFilters
      | GitlabMergeRequestMergedFilters
      | GitlabMergeRequestOpenedFilters
      | GitlabMergeRequestUpdatedFilters
      | GitlabMergeRequestReadyForReviewFilters
      | GitlabPipelineFailedFilters
      | GitlabRefCreatedFilters
      | LinearIssueCreateFilters
      | LinearIssueLabelAddedFilters
      | LinearIssueStatusChangedFilters
      | LinearIssueUpdatedFilters
      | Trigger.SazabiIssueFilters
      | SentryIssueCreatedFilters
      | SlackMessageReactionAddedFilters
      | SlackMessageSentInChannelFilters
      | Trigger.Filters
      | Trigger.Filters2
      | Trigger.Filters3
      | Trigger.Filters4
      | Trigger.Filters5
      | EmptyTriggerFilters;
  }

  export namespace Trigger {
    export interface AtlassianIssueCommentCreatedFilters {
      /**
       * Only trigger if the issue is in one of the specified projects
       */
      projects?: Array<string>;
      /**
       * Only trigger if the comment was added by one of the specified users
       */
      commentedBy?: Array<string>;
      /**
       * Only trigger if the comment contains one of these substrings
       */
      messageContains?: Array<string>;
      /**
       * Only trigger if the issue has at least one of the specified labels
       */
      labels?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubDependabotAlertAssignedFilters {
      /**
       * Only trigger if the alert is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger when the alert is assigned to one of the specified users
       */
      assignees?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestClosedFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger if the pull request was opened by one of the specified users
       */
      openedBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestMergedFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger if the pull request was merged by one of the specified users
       */
      mergedBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestOpenedFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
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
      [k: string]: unknown;
    }

    export interface GithubPullRequestReadyForReviewFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger if the pull request was opened by one of the specified users
       */
      openedBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestLabeledFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger when one of these labels is added
       */
      labels?: Array<string>;
      /**
       * Only trigger if the label was added by one of the specified users
       */
      labeledBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestReviewRequestedFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger when one of these users or team slugs is requested as a reviewer
       */
      reviewers?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestReviewSubmittedFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
      /**
       * Only trigger if the pull request is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger for reviews with one of these states
       */
      reviewStates?: Array<'approved' | 'changes_requested' | 'commented'>;
      /**
       * Only trigger if the review was submitted by one of the specified users
       */
      reviewedBy?: Array<string>;
      /**
       * Trigger also for reviews submitted by Tembo (disabled by default). Replies Tembo posts to review threads never trigger.
       */
      temboReviews?: boolean;
      [k: string]: unknown;
    }

    export interface GithubReleasePublishedFilters {
      /**
       * Only trigger if the release is in one of the repositories
       */
      repositories?: Array<string>;
      [k: string]: unknown;
    }

    export interface GithubPullRequestSynchronizeFiltersOutput {
      /**
       * Enable agent for Tembo-created pull requests (enabled by default)
       */
      temboPrs: boolean;
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
      [k: string]: unknown;
    }

    export interface GithubWorkflowRunCompletedFilters {
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
      /**
       * Only trigger for these completed workflow results, such as success
       */
      conclusions?: Array<
        | 'success'
        | 'failure'
        | 'neutral'
        | 'cancelled'
        | 'timed_out'
        | 'action_required'
        | 'stale'
        | 'skipped'
      >;
      /**
       * Only trigger for these originating GitHub events; use schedule for cron runs, not push or pull_request
       */
      events?: Array<string>;
      [k: string]: unknown;
    }

    export interface GitlabIssueLabelAddedFilters {
      /**
       * Only trigger if the issue is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger if one of the added labels matches these labels
       */
      labels?: Array<string>;
      /**
       * Only trigger if the label was added by one of the specified users
       */
      addedBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface GitlabIssueUpdatedFilters {
      /**
       * Only trigger if the issue is in one of the repositories
       */
      repositories?: Array<string>;
      /**
       * Only trigger if the issue has at least one of the specified labels
       */
      labels?: Array<string>;
      /**
       * Only trigger if the issue was updated by one of the specified users
       */
      updatedBy?: Array<string>;
      [k: string]: unknown;
    }

    export interface SazabiIssueFilters {
      /**
       * Only trigger if the issue has one of the specified severities
       */
      severities?: Array<'critical' | 'high' | 'medium' | 'low'>;
      /**
       * Only trigger if the issue is in one of these Sazabi projects (name or ID)
       */
      projects?: Array<string>;
      /**
       * Only trigger if the issue affects one of these components (name or ID)
       */
      components?: Array<string>;
      [k: string]: unknown;
    }

    export interface Filters {
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

    export interface Filters2 {
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

    export interface Filters3 {
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

    export interface Filters4 {
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

    export interface Filters5 {
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
    type GitlabMergeRequestReadyForReviewFilters as GitlabMergeRequestReadyForReviewFilters,
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
