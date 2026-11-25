// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as TemplatesAPI from './templates';

export class Triggers extends APIResource {
  /**
   * List the integration events configured to start runs of an agent.
   *
   * @param {string} agentID
   * @param {TriggerListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerListResponse>} List agent triggers
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  list(
    agentID: string,
    query: TriggerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TriggerListResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/triggers`, { query, ...options });
  }

  /**
   * Configure an integration event to start agent runs. Available filters depend on the integration and event name.
   *
   * @param {string} agentID
   * @param {TriggerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerCreateResponse>} Create an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   * });
   * ```
   */
  create(
    agentID: string,
    body: TriggerCreateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/triggers`, { body, ...options });
  }

  /**
   * Retrieve an agent trigger and its integration event filters.
   *
   * @param {string} triggerID
   * @param {TriggerRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerRetrieveResponse>} Retrieve an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    triggerID: string,
    params: TriggerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TriggerRetrieveResponse> {
    const { agentId } = params;
    return this._client.get(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, options);
  }

  /**
   * Change an agent trigger event, integration, or filters. Use updateAgent with enabled to enable or pause the agent and its triggers.
   *
   * @param {string} triggerID
   * @param {TriggerUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerUpdateResponse>} Update an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   name: 'x',
   * });
   * ```
   */
  update(
    triggerID: string,
    params: TriggerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerUpdateResponse> {
    const { agentId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an integration event trigger for an agent.
   *
   * @param {string} triggerID
   * @param {TriggerDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerDeleteResponse>} Delete an agent trigger
   *
   * @example
   * ```ts
   * const trigger = await client.agents.triggers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(
    triggerID: string,
    params: TriggerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TriggerDeleteResponse> {
    const { agentId } = params;
    return this._client.delete(__scalarPath`/v1/agents/${agentId}/triggers/${triggerID}`, options);
  }
}

export interface TriggerListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  cursor?: string;
  /**
   * Maximum number of items to return in one page. Use nextCursor from the response to fetch more items.
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface TriggerListResponse {
  items: Array<TriggerListResponse.Item>;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  nextCursor: string | null;
}

export namespace TriggerListResponse {
  export interface Item {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    triggerName: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    enabledAt: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    agentId: string;
    /**
     * @minLength 1
     * @maxLength 200
     */
    triggerDisplayName: string;
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    integrationId: string | null;
    integrationType: string | null;
    /**
     * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
     */
    filters:
      | TemplatesAPI.AtlassianIssueAddedToBoardFilters
      | TemplatesAPI.AtlassianIssueAssignedToUserFilters
      | Item.AtlassianIssueCommentCreatedFilters
      | TemplatesAPI.AtlassianIssueCreatedFilters
      | TemplatesAPI.AtlassianIssueLabelAddedFilters
      | TemplatesAPI.AtlassianIssueStatusChangedFilters
      | TemplatesAPI.AtlassianIssueUpdatedFilters
      | TemplatesAPI.BitbucketPullRequestOpenedFilters
      | TemplatesAPI.GithubCreateFilters
      | Item.GithubDependabotAlertAssignedFilters
      | TemplatesAPI.GithubIssueClosedFilters
      | TemplatesAPI.GithubIssueCommentCreatedFilters
      | TemplatesAPI.GithubIssueOpenedFilters
      | Item.GithubPullRequestClosedFiltersOutput
      | Item.GithubPullRequestMergedFiltersOutput
      | Item.GithubPullRequestOpenedFiltersOutput
      | Item.GithubPullRequestReadyForReviewFiltersOutput
      | Item.GithubPullRequestLabeledFiltersOutput
      | Item.GithubPullRequestReviewRequestedFiltersOutput
      | Item.GithubPullRequestReviewSubmittedFiltersOutput
      | Item.GithubReleasePublishedFilters
      | Item.GithubPullRequestSynchronizeFiltersOutput
      | TemplatesAPI.GithubTemboPullRequestOpenedFilters
      | TemplatesAPI.GithubWorkflowRunFailedFilters
      | Item.GithubWorkflowRunCompletedFilters
      | TemplatesAPI.GitlabBotMergeRequestCommentFilters
      | TemplatesAPI.GitlabIssueClosedFilters
      | TemplatesAPI.GitlabIssueOpenedFilters
      | Item.GitlabIssueLabelAddedFilters
      | Item.GitlabIssueUpdatedFilters
      | TemplatesAPI.GitlabMergeRequestClosedFilters
      | TemplatesAPI.GitlabMergeRequestMergedFilters
      | TemplatesAPI.GitlabMergeRequestOpenedFilters
      | TemplatesAPI.GitlabMergeRequestUpdatedFilters
      | TemplatesAPI.GitlabMergeRequestReadyForReviewFilters
      | TemplatesAPI.GitlabPipelineFailedFilters
      | TemplatesAPI.GitlabRefCreatedFilters
      | TemplatesAPI.LinearIssueCreateFilters
      | TemplatesAPI.LinearIssueLabelAddedFilters
      | TemplatesAPI.LinearIssueStatusChangedFilters
      | TemplatesAPI.LinearIssueUpdatedFilters
      | Item.SazabiIssueFilters
      | TemplatesAPI.SentryIssueCreatedFilters
      | TemplatesAPI.SlackMessageReactionAddedFilters
      | TemplatesAPI.SlackMessageSentInChannelFilters
      | Item.Filters
      | Item.Filters2
      | Item.Filters3
      | Item.Filters4
      | Item.Filters5
      | TemplatesAPI.EmptyTriggerFilters;
  }

  export namespace Item {
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

export interface TriggerCreateParams {
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
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  integrationId?: string;
  /**
   * Event-specific trigger filters. Use retrieveIntegrationTrigger and listIntegrationTriggerFilterOptions to discover supported fields and values.
   */
  filters?: TemplatesAPI.TriggerFilters;
}

export interface TriggerCreateResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  enabledAt: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters:
    | TemplatesAPI.AtlassianIssueAddedToBoardFilters
    | TemplatesAPI.AtlassianIssueAssignedToUserFilters
    | TriggerCreateResponse.AtlassianIssueCommentCreatedFilters
    | TemplatesAPI.AtlassianIssueCreatedFilters
    | TemplatesAPI.AtlassianIssueLabelAddedFilters
    | TemplatesAPI.AtlassianIssueStatusChangedFilters
    | TemplatesAPI.AtlassianIssueUpdatedFilters
    | TemplatesAPI.BitbucketPullRequestOpenedFilters
    | TemplatesAPI.GithubCreateFilters
    | TriggerCreateResponse.GithubDependabotAlertAssignedFilters
    | TemplatesAPI.GithubIssueClosedFilters
    | TemplatesAPI.GithubIssueCommentCreatedFilters
    | TemplatesAPI.GithubIssueOpenedFilters
    | TriggerCreateResponse.GithubPullRequestClosedFiltersOutput
    | TriggerCreateResponse.GithubPullRequestMergedFiltersOutput
    | TriggerCreateResponse.GithubPullRequestOpenedFiltersOutput
    | TriggerCreateResponse.GithubPullRequestReadyForReviewFiltersOutput
    | TriggerCreateResponse.GithubPullRequestLabeledFiltersOutput
    | TriggerCreateResponse.GithubPullRequestReviewRequestedFiltersOutput
    | TriggerCreateResponse.GithubPullRequestReviewSubmittedFiltersOutput
    | TriggerCreateResponse.GithubReleasePublishedFilters
    | TriggerCreateResponse.GithubPullRequestSynchronizeFiltersOutput
    | TemplatesAPI.GithubTemboPullRequestOpenedFilters
    | TemplatesAPI.GithubWorkflowRunFailedFilters
    | TriggerCreateResponse.GithubWorkflowRunCompletedFilters
    | TemplatesAPI.GitlabBotMergeRequestCommentFilters
    | TemplatesAPI.GitlabIssueClosedFilters
    | TemplatesAPI.GitlabIssueOpenedFilters
    | TriggerCreateResponse.GitlabIssueLabelAddedFilters
    | TriggerCreateResponse.GitlabIssueUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestClosedFilters
    | TemplatesAPI.GitlabMergeRequestMergedFilters
    | TemplatesAPI.GitlabMergeRequestOpenedFilters
    | TemplatesAPI.GitlabMergeRequestUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestReadyForReviewFilters
    | TemplatesAPI.GitlabPipelineFailedFilters
    | TemplatesAPI.GitlabRefCreatedFilters
    | TemplatesAPI.LinearIssueCreateFilters
    | TemplatesAPI.LinearIssueLabelAddedFilters
    | TemplatesAPI.LinearIssueStatusChangedFilters
    | TemplatesAPI.LinearIssueUpdatedFilters
    | TriggerCreateResponse.SazabiIssueFilters
    | TemplatesAPI.SentryIssueCreatedFilters
    | TemplatesAPI.SlackMessageReactionAddedFilters
    | TemplatesAPI.SlackMessageSentInChannelFilters
    | TriggerCreateResponse.Filters
    | TriggerCreateResponse.Filters2
    | TriggerCreateResponse.Filters3
    | TriggerCreateResponse.Filters4
    | TriggerCreateResponse.Filters5
    | TemplatesAPI.EmptyTriggerFilters;
}

export namespace TriggerCreateResponse {
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

export interface TriggerRetrieveParams {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
}

export interface TriggerRetrieveResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  enabledAt: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters:
    | TemplatesAPI.AtlassianIssueAddedToBoardFilters
    | TemplatesAPI.AtlassianIssueAssignedToUserFilters
    | TriggerRetrieveResponse.AtlassianIssueCommentCreatedFilters
    | TemplatesAPI.AtlassianIssueCreatedFilters
    | TemplatesAPI.AtlassianIssueLabelAddedFilters
    | TemplatesAPI.AtlassianIssueStatusChangedFilters
    | TemplatesAPI.AtlassianIssueUpdatedFilters
    | TemplatesAPI.BitbucketPullRequestOpenedFilters
    | TemplatesAPI.GithubCreateFilters
    | TriggerRetrieveResponse.GithubDependabotAlertAssignedFilters
    | TemplatesAPI.GithubIssueClosedFilters
    | TemplatesAPI.GithubIssueCommentCreatedFilters
    | TemplatesAPI.GithubIssueOpenedFilters
    | TriggerRetrieveResponse.GithubPullRequestClosedFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestMergedFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestOpenedFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestReadyForReviewFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestLabeledFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestReviewRequestedFiltersOutput
    | TriggerRetrieveResponse.GithubPullRequestReviewSubmittedFiltersOutput
    | TriggerRetrieveResponse.GithubReleasePublishedFilters
    | TriggerRetrieveResponse.GithubPullRequestSynchronizeFiltersOutput
    | TemplatesAPI.GithubTemboPullRequestOpenedFilters
    | TemplatesAPI.GithubWorkflowRunFailedFilters
    | TriggerRetrieveResponse.GithubWorkflowRunCompletedFilters
    | TemplatesAPI.GitlabBotMergeRequestCommentFilters
    | TemplatesAPI.GitlabIssueClosedFilters
    | TemplatesAPI.GitlabIssueOpenedFilters
    | TriggerRetrieveResponse.GitlabIssueLabelAddedFilters
    | TriggerRetrieveResponse.GitlabIssueUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestClosedFilters
    | TemplatesAPI.GitlabMergeRequestMergedFilters
    | TemplatesAPI.GitlabMergeRequestOpenedFilters
    | TemplatesAPI.GitlabMergeRequestUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestReadyForReviewFilters
    | TemplatesAPI.GitlabPipelineFailedFilters
    | TemplatesAPI.GitlabRefCreatedFilters
    | TemplatesAPI.LinearIssueCreateFilters
    | TemplatesAPI.LinearIssueLabelAddedFilters
    | TemplatesAPI.LinearIssueStatusChangedFilters
    | TemplatesAPI.LinearIssueUpdatedFilters
    | TriggerRetrieveResponse.SazabiIssueFilters
    | TemplatesAPI.SentryIssueCreatedFilters
    | TemplatesAPI.SlackMessageReactionAddedFilters
    | TemplatesAPI.SlackMessageSentInChannelFilters
    | TriggerRetrieveResponse.Filters
    | TriggerRetrieveResponse.Filters2
    | TriggerRetrieveResponse.Filters3
    | TriggerRetrieveResponse.Filters4
    | TriggerRetrieveResponse.Filters5
    | TemplatesAPI.EmptyTriggerFilters;
}

export namespace TriggerRetrieveResponse {
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

export interface TriggerUpdateParams {
  /**
   * Path param
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
  /**
   * Body param: Integration event name. Use listIntegrationTriggers to discover supported triggers.
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * Body param: Connected integration that supplies trigger events.
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  integrationId?: string;
  /**
   * Body param: Event-specific trigger filters. Use retrieveIntegrationTrigger and listIntegrationTriggerFilterOptions to discover supported fields and values.
   */
  filters?: TemplatesAPI.TriggerFilters;
}

export interface TriggerUpdateResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  triggerName: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  enabledAt: string | null;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  triggerDisplayName: string;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  integrationId: string | null;
  integrationType: string | null;
  /**
   * Conditions that determine whether the selected integration event starts the agent. Available fields depend on the integration and event type.
   */
  filters:
    | TemplatesAPI.AtlassianIssueAddedToBoardFilters
    | TemplatesAPI.AtlassianIssueAssignedToUserFilters
    | TriggerUpdateResponse.AtlassianIssueCommentCreatedFilters
    | TemplatesAPI.AtlassianIssueCreatedFilters
    | TemplatesAPI.AtlassianIssueLabelAddedFilters
    | TemplatesAPI.AtlassianIssueStatusChangedFilters
    | TemplatesAPI.AtlassianIssueUpdatedFilters
    | TemplatesAPI.BitbucketPullRequestOpenedFilters
    | TemplatesAPI.GithubCreateFilters
    | TriggerUpdateResponse.GithubDependabotAlertAssignedFilters
    | TemplatesAPI.GithubIssueClosedFilters
    | TemplatesAPI.GithubIssueCommentCreatedFilters
    | TemplatesAPI.GithubIssueOpenedFilters
    | TriggerUpdateResponse.GithubPullRequestClosedFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestMergedFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestOpenedFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestReadyForReviewFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestLabeledFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestReviewRequestedFiltersOutput
    | TriggerUpdateResponse.GithubPullRequestReviewSubmittedFiltersOutput
    | TriggerUpdateResponse.GithubReleasePublishedFilters
    | TriggerUpdateResponse.GithubPullRequestSynchronizeFiltersOutput
    | TemplatesAPI.GithubTemboPullRequestOpenedFilters
    | TemplatesAPI.GithubWorkflowRunFailedFilters
    | TriggerUpdateResponse.GithubWorkflowRunCompletedFilters
    | TemplatesAPI.GitlabBotMergeRequestCommentFilters
    | TemplatesAPI.GitlabIssueClosedFilters
    | TemplatesAPI.GitlabIssueOpenedFilters
    | TriggerUpdateResponse.GitlabIssueLabelAddedFilters
    | TriggerUpdateResponse.GitlabIssueUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestClosedFilters
    | TemplatesAPI.GitlabMergeRequestMergedFilters
    | TemplatesAPI.GitlabMergeRequestOpenedFilters
    | TemplatesAPI.GitlabMergeRequestUpdatedFilters
    | TemplatesAPI.GitlabMergeRequestReadyForReviewFilters
    | TemplatesAPI.GitlabPipelineFailedFilters
    | TemplatesAPI.GitlabRefCreatedFilters
    | TemplatesAPI.LinearIssueCreateFilters
    | TemplatesAPI.LinearIssueLabelAddedFilters
    | TemplatesAPI.LinearIssueStatusChangedFilters
    | TemplatesAPI.LinearIssueUpdatedFilters
    | TriggerUpdateResponse.SazabiIssueFilters
    | TemplatesAPI.SentryIssueCreatedFilters
    | TemplatesAPI.SlackMessageReactionAddedFilters
    | TemplatesAPI.SlackMessageSentInChannelFilters
    | TriggerUpdateResponse.Filters
    | TriggerUpdateResponse.Filters2
    | TriggerUpdateResponse.Filters3
    | TriggerUpdateResponse.Filters4
    | TriggerUpdateResponse.Filters5
    | TemplatesAPI.EmptyTriggerFilters;
}

export namespace TriggerUpdateResponse {
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

export interface TriggerDeleteParams {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  agentId: string;
}

export interface TriggerDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
}
export declare namespace Triggers {
  export {
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
}
