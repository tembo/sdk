// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Retrieve effective organization settings, including defaults for settings that have not been configured.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SettingRetrieveResponse>} Retrieve organization settings
   *
   * @example
   * ```ts
   * const setting = await client.organizations.settings.retrieve('organizationId');
   * ```
   */
  retrieve(organizationID: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}/settings`, options);
  }

  /**
   * Update one or more organization settings.
   *
   * @param {string} organizationID
   * @param {SettingUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SettingUpdateResponse>} Update organization settings
   *
   * @example
   * ```ts
   * const setting = await client.organizations.settings.update('organizationId', {});
   * ```
   */
  update(
    organizationID: string,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/organizations/${organizationID}/settings`, {
      body,
      ...options,
    });
  }
}
export interface SettingRetrieveResponse {
  organizationId: string;
  settings: SettingRetrieveResponse.Settings;
}

export namespace SettingRetrieveResponse {
  export interface Settings {
    /**
     * @exclusiveMinimum 0
     */
    cloneDepth: number;
    /**
     * @maxLength 64000
     */
    commitInstructions: string;
    /**
     * @maxLength 64000
     */
    customSystemPrompt: string;
    /**
     * @maxLength 64000
     */
    defaultAgent: string;
    defaultSandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    deleteBranchWhenPrClosed: boolean;
    draftPrs: boolean;
    enableCoderabbitBot: boolean;
    enableCursorBot: boolean;
    enableGeminiCodeAssistBot: boolean;
    enableGithubActionsBot: boolean;
    enableGraphiteBot: boolean;
    enableGreptileBot: boolean;
    experimentalMcp: boolean;
    featureMentionAuthor: boolean;
    /**
     * @minimum 0
     */
    freePrPeriod: number;
    /**
     * @minimum 0
     */
    maxBotReviews: number;
    /**
     * @minimum 0
     */
    maxSolutions: number;
    /**
     * @minimum 0
     */
    onDemandMaxCreditUsage: number;
    /**
     * @maxLength 64000
     */
    pgStatStatementsResetFrequency: string;
    /**
     * @maxLength 64000
     */
    pmSystemPrompt: string;
    /**
     * @maxLength 64000
     */
    prTitleInstructions: string;
    pullRequestInsightsEnabled: boolean;
    /**
     * @maxLength 64000
     */
    repositoryDetectionHint: string;
    shouldSignCommits: boolean;
    slackReviewOnTembo: boolean;
    /**
     * @minimum 0
     */
    slowQueryThresholdMs: number;
    /**
     * @maxLength 64000
     */
    sshPublicKeys: string;
    weeklyReportEnabled: boolean;
  }
}

export interface SettingUpdateParams {
  /**
   * @maxLength 64000
   */
  ampApiKey?: string;
  /**
   * @maxLength 64000
   */
  anthropicApiKey?: string;
  /**
   * @maxLength 64000
   */
  awsBedrockAccessKeyId?: string;
  /**
   * @maxLength 64000
   */
  awsBedrockRegion?: string;
  /**
   * @maxLength 64000
   */
  awsBedrockSecretAccessKey?: string;
  /**
   * @exclusiveMinimum 0
   */
  cloneDepth?: number;
  /**
   * @maxLength 64000
   */
  commitInstructions?: string;
  /**
   * @maxLength 64000
   */
  cursorApiKey?: string;
  /**
   * @maxLength 64000
   */
  customSystemPrompt?: string;
  /**
   * @maxLength 64000
   */
  defaultAgent?: string;
  defaultSandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
  deleteBranchWhenPrClosed?: boolean;
  draftPrs?: boolean;
  enableCoderabbitBot?: boolean;
  enableCursorBot?: boolean;
  enableGeminiCodeAssistBot?: boolean;
  enableGithubActionsBot?: boolean;
  enableGraphiteBot?: boolean;
  enableGreptileBot?: boolean;
  experimentalMcp?: boolean;
  featureMentionAuthor?: boolean;
  /**
   * @minimum 0
   */
  freePrPeriod?: number;
  /**
   * @maxLength 64000
   */
  gcpVertexAiLocation?: string;
  /**
   * @maxLength 64000
   */
  gcpVertexAiProject?: string;
  /**
   * @maxLength 64000
   */
  gcpVertexAiServiceAccountJson?: string;
  /**
   * @maxLength 64000
   */
  kernelApiKey?: string;
  /**
   * @minimum 0
   */
  maxBotReviews?: number;
  /**
   * @minimum 0
   */
  maxSolutions?: number;
  /**
   * @maxLength 64000
   */
  openaiApiKey?: string;
  /**
   * @maxLength 64000
   */
  openrouterApiKey?: string;
  /**
   * @maxLength 64000
   */
  pgStatStatementsResetFrequency?: string;
  /**
   * @maxLength 64000
   */
  pmSystemPrompt?: string;
  /**
   * @maxLength 64000
   */
  prTitleInstructions?: string;
  pullRequestInsightsEnabled?: boolean;
  /**
   * @maxLength 64000
   */
  repositoryDetectionHint?: string;
  shouldSignCommits?: boolean;
  slackReviewOnTembo?: boolean;
  /**
   * @minimum 0
   */
  slowQueryThresholdMs?: number;
  /**
   * @maxLength 64000
   */
  sshPublicKeys?: string;
  weeklyReportEnabled?: boolean;
}

export interface SettingUpdateResponse {
  organizationId: string;
  settings: SettingUpdateResponse.Settings;
}

export namespace SettingUpdateResponse {
  export interface Settings {
    /**
     * @exclusiveMinimum 0
     */
    cloneDepth: number;
    /**
     * @maxLength 64000
     */
    commitInstructions: string;
    /**
     * @maxLength 64000
     */
    customSystemPrompt: string;
    /**
     * @maxLength 64000
     */
    defaultAgent: string;
    defaultSandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    deleteBranchWhenPrClosed: boolean;
    draftPrs: boolean;
    enableCoderabbitBot: boolean;
    enableCursorBot: boolean;
    enableGeminiCodeAssistBot: boolean;
    enableGithubActionsBot: boolean;
    enableGraphiteBot: boolean;
    enableGreptileBot: boolean;
    experimentalMcp: boolean;
    featureMentionAuthor: boolean;
    /**
     * @minimum 0
     */
    freePrPeriod: number;
    /**
     * @minimum 0
     */
    maxBotReviews: number;
    /**
     * @minimum 0
     */
    maxSolutions: number;
    /**
     * @minimum 0
     */
    onDemandMaxCreditUsage: number;
    /**
     * @maxLength 64000
     */
    pgStatStatementsResetFrequency: string;
    /**
     * @maxLength 64000
     */
    pmSystemPrompt: string;
    /**
     * @maxLength 64000
     */
    prTitleInstructions: string;
    pullRequestInsightsEnabled: boolean;
    /**
     * @maxLength 64000
     */
    repositoryDetectionHint: string;
    shouldSignCommits: boolean;
    slackReviewOnTembo: boolean;
    /**
     * @minimum 0
     */
    slowQueryThresholdMs: number;
    /**
     * @maxLength 64000
     */
    sshPublicKeys: string;
    weeklyReportEnabled: boolean;
  }
}
export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
