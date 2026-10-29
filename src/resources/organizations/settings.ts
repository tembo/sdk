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
   * Configure organization defaults for agent/model, VM size and keep-alive; inference credentials and subscription fallback; agent prompts and commit/PR instructions; bot feedback, signing, reports, and insights. Only supplied settings are changed.
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

  /**
   * Validate supplied inference provider credentials for an organization without saving them. The provider must be available on the organization’s plan.
   *
   * @param {string} organizationID
   * @param {SettingValidateCredentialsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SettingValidateCredentialsResponse>} Validate organization provider credentials
   *
   * @example
   * ```ts
   * const setting = await client.organizations.settings.validateCredentials('organizationId', {
   *   provider: 'anthropic',
   *   apiKey: '',
   * });
   * ```
   */
  validateCredentials(
    organizationID: string,
    body: SettingValidateCredentialsParams,
    options?: RequestOptions,
  ): APIPromise<SettingValidateCredentialsResponse> {
    return this._client.post(
      __scalarPath`/v1/organizations/${organizationID}/settings/validate-credentials`,
      { body, ...options },
    );
  }
}

export interface SettingRetrieveResponse {
  organizationId: string;
  settings: SettingRetrieveResponse.Settings;
}

export namespace SettingRetrieveResponse {
  export interface Settings {
    /**
     * Git clone history depth used for repositories.
     * @exclusiveMinimum 0
     */
    cloneDepth: number;
    /**
     * Organization instructions for agent commit messages.
     * @maxLength 64000
     */
    commitInstructions: string;
    /**
     * Custom system instructions supplied to organization agents.
     * @maxLength 64000
     */
    customSystemPrompt: string;
    /**
     * Default coding agent and model key for the organization.
     * @maxLength 64000
     */
    defaultAgent: string;
    /**
     * Default VM keep-alive duration in minutes. 0 preserves built-in per-source durations.
     * @minimum 0
     * @maximum 10080
     */
    defaultKeepAliveMinutes: number;
    /**
     * Default VM size for organization sessions.
     */
    defaultSandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    /**
     * Delete agent-created branches when their pull requests close.
     */
    deleteBranchWhenPrClosed: boolean;
    /**
     * Create agent pull requests as drafts by default.
     */
    draftPrs: boolean;
    /**
     * Enable handling of CodeRabbit bot feedback.
     */
    enableCoderabbitBot: boolean;
    /**
     * Enable handling of Cursor bot feedback.
     */
    enableCursorBot: boolean;
    /**
     * Enable handling of Gemini Code Assist bot feedback.
     */
    enableGeminiCodeAssistBot: boolean;
    /**
     * Enable handling of GitHub Actions bot feedback.
     */
    enableGithubActionsBot: boolean;
    /**
     * Enable handling of Graphite bot feedback.
     */
    enableGraphiteBot: boolean;
    /**
     * Enable handling of Greptile bot feedback.
     */
    enableGreptileBot: boolean;
    /**
     * Enable experimental MCP features for the organization.
     */
    experimentalMcp: boolean;
    /**
     * Use the API key or Tembo inference when every connected subscription is out of usage.
     */
    fallbackToApiOnSubscriptionLimit: boolean;
    /**
     * Enable mentioning the author in supported integration responses.
     */
    featureMentionAuthor: boolean;
    /**
     * Maximum number of bot review iterations.
     * @minimum 0
     */
    maxBotReviews: number;
    /**
     * Maximum number of generated solutions.
     * @minimum 0
     */
    maxSolutions: number;
    /**
     * @minimum 0
     */
    onDemandMaxCreditUsage: number;
    /**
     * Reset frequency for PostgreSQL pg_stat_statements collection.
     * @maxLength 64000
     */
    pgStatStatementsResetFrequency: string;
    /**
     * Custom system instructions for the project-management agent.
     * @maxLength 64000
     */
    pmSystemPrompt: string;
    /**
     * Organization instructions for agent pull request titles.
     * @maxLength 64000
     */
    prTitleInstructions: string;
    /**
     * Enable or disable pull request contribution insight collection.
     */
    pullRequestInsightsEnabled: boolean;
    /**
     * Sign agent-created commits when signing credentials are configured.
     */
    shouldSignCommits: boolean;
    /**
     * Use Tembo review links in Slack review notifications.
     */
    slackReviewOnTembo: boolean;
    /**
     * Threshold in milliseconds for identifying slow database queries.
     * @minimum 0
     */
    slowQueryThresholdMs: number;
    /**
     * SSH public keys authorized for organization workspace access.
     * @maxLength 64000
     */
    sshPublicKeys: string;
    /**
     * Enable or disable the organization weekly report.
     */
    weeklyReportEnabled: boolean;
  }
}

export interface SettingUpdateParams {
  /**
   * API key for Amp agent access.
   * @maxLength 64000
   */
  ampApiKey?: string;
  /**
   * Anthropic API key for organization-provided inference.
   * @maxLength 64000
   */
  anthropicApiKey?: string;
  /**
   * AWS access key ID for Bedrock inference.
   * @maxLength 64000
   */
  awsBedrockAccessKeyId?: string;
  /**
   * AWS region for Bedrock inference.
   * @maxLength 64000
   */
  awsBedrockRegion?: string;
  /**
   * AWS secret access key for Bedrock inference.
   * @maxLength 64000
   */
  awsBedrockSecretAccessKey?: string;
  /**
   * Git clone history depth used for repositories.
   * @exclusiveMinimum 0
   */
  cloneDepth?: number;
  /**
   * Organization instructions for agent commit messages.
   * @maxLength 64000
   */
  commitInstructions?: string;
  /**
   * API key for Cursor agent access.
   * @maxLength 64000
   */
  cursorApiKey?: string;
  /**
   * Custom system instructions supplied to organization agents.
   * @maxLength 64000
   */
  customSystemPrompt?: string;
  /**
   * Default coding agent and model key for the organization.
   * @maxLength 64000
   */
  defaultAgent?: string;
  /**
   * Default VM keep-alive duration in minutes. 0 preserves built-in per-source durations.
   * @minimum 0
   * @maximum 10080
   */
  defaultKeepAliveMinutes?: number;
  /**
   * Default VM size for organization sessions.
   */
  defaultSandboxSize?: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
  /**
   * Delete agent-created branches when their pull requests close.
   */
  deleteBranchWhenPrClosed?: boolean;
  /**
   * Create agent pull requests as drafts by default.
   */
  draftPrs?: boolean;
  /**
   * Enable handling of CodeRabbit bot feedback.
   */
  enableCoderabbitBot?: boolean;
  /**
   * Enable handling of Cursor bot feedback.
   */
  enableCursorBot?: boolean;
  /**
   * Enable handling of Gemini Code Assist bot feedback.
   */
  enableGeminiCodeAssistBot?: boolean;
  /**
   * Enable handling of GitHub Actions bot feedback.
   */
  enableGithubActionsBot?: boolean;
  /**
   * Enable handling of Graphite bot feedback.
   */
  enableGraphiteBot?: boolean;
  /**
   * Enable handling of Greptile bot feedback.
   */
  enableGreptileBot?: boolean;
  /**
   * Enable experimental MCP features for the organization.
   */
  experimentalMcp?: boolean;
  /**
   * Enable mentioning the author in supported integration responses.
   */
  featureMentionAuthor?: boolean;
  /**
   * Google Cloud location for Vertex AI inference.
   * @maxLength 64000
   */
  gcpVertexAiLocation?: string;
  /**
   * Google Cloud project for Vertex AI inference.
   * @maxLength 64000
   */
  gcpVertexAiProject?: string;
  /**
   * Service-account JSON credentials for Vertex AI inference.
   * @maxLength 64000
   */
  gcpVertexAiServiceAccountJson?: string;
  /**
   * API key for Kernel browser access.
   * @maxLength 64000
   */
  kernelApiKey?: string;
  /**
   * Maximum number of bot review iterations.
   * @minimum 0
   */
  maxBotReviews?: number;
  /**
   * Maximum number of generated solutions.
   * @minimum 0
   */
  maxSolutions?: number;
  /**
   * OpenAI API key for organization-provided inference.
   * @maxLength 64000
   */
  openaiApiKey?: string;
  /**
   * xAI API key for organization-provided inference.
   * @maxLength 64000
   */
  xaiApiKey?: string;
  /**
   * OpenRouter API key for organization-provided inference.
   * @maxLength 64000
   */
  openrouterApiKey?: string;
  /**
   * Reset frequency for PostgreSQL pg_stat_statements collection.
   * @maxLength 64000
   */
  pgStatStatementsResetFrequency?: string;
  /**
   * Custom system instructions for the project-management agent.
   * @maxLength 64000
   */
  pmSystemPrompt?: string;
  /**
   * Organization instructions for agent pull request titles.
   * @maxLength 64000
   */
  prTitleInstructions?: string;
  /**
   * Enable or disable pull request contribution insight collection.
   */
  pullRequestInsightsEnabled?: boolean;
  /**
   * Sign agent-created commits when signing credentials are configured.
   */
  shouldSignCommits?: boolean;
  /**
   * Use Tembo review links in Slack review notifications.
   */
  slackReviewOnTembo?: boolean;
  /**
   * Threshold in milliseconds for identifying slow database queries.
   * @minimum 0
   */
  slowQueryThresholdMs?: number;
  /**
   * SSH public keys authorized for organization workspace access.
   * @maxLength 64000
   */
  sshPublicKeys?: string;
  /**
   * Enable or disable the organization weekly report.
   */
  weeklyReportEnabled?: boolean;
}

export interface SettingUpdateResponse {
  organizationId: string;
  settings: SettingUpdateResponse.Settings;
}

export namespace SettingUpdateResponse {
  export interface Settings {
    /**
     * Git clone history depth used for repositories.
     * @exclusiveMinimum 0
     */
    cloneDepth: number;
    /**
     * Organization instructions for agent commit messages.
     * @maxLength 64000
     */
    commitInstructions: string;
    /**
     * Custom system instructions supplied to organization agents.
     * @maxLength 64000
     */
    customSystemPrompt: string;
    /**
     * Default coding agent and model key for the organization.
     * @maxLength 64000
     */
    defaultAgent: string;
    /**
     * Default VM keep-alive duration in minutes. 0 preserves built-in per-source durations.
     * @minimum 0
     * @maximum 10080
     */
    defaultKeepAliveMinutes: number;
    /**
     * Default VM size for organization sessions.
     */
    defaultSandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    /**
     * Delete agent-created branches when their pull requests close.
     */
    deleteBranchWhenPrClosed: boolean;
    /**
     * Create agent pull requests as drafts by default.
     */
    draftPrs: boolean;
    /**
     * Enable handling of CodeRabbit bot feedback.
     */
    enableCoderabbitBot: boolean;
    /**
     * Enable handling of Cursor bot feedback.
     */
    enableCursorBot: boolean;
    /**
     * Enable handling of Gemini Code Assist bot feedback.
     */
    enableGeminiCodeAssistBot: boolean;
    /**
     * Enable handling of GitHub Actions bot feedback.
     */
    enableGithubActionsBot: boolean;
    /**
     * Enable handling of Graphite bot feedback.
     */
    enableGraphiteBot: boolean;
    /**
     * Enable handling of Greptile bot feedback.
     */
    enableGreptileBot: boolean;
    /**
     * Enable experimental MCP features for the organization.
     */
    experimentalMcp: boolean;
    /**
     * Use the API key or Tembo inference when every connected subscription is out of usage.
     */
    fallbackToApiOnSubscriptionLimit: boolean;
    /**
     * Enable mentioning the author in supported integration responses.
     */
    featureMentionAuthor: boolean;
    /**
     * Maximum number of bot review iterations.
     * @minimum 0
     */
    maxBotReviews: number;
    /**
     * Maximum number of generated solutions.
     * @minimum 0
     */
    maxSolutions: number;
    /**
     * @minimum 0
     */
    onDemandMaxCreditUsage: number;
    /**
     * Reset frequency for PostgreSQL pg_stat_statements collection.
     * @maxLength 64000
     */
    pgStatStatementsResetFrequency: string;
    /**
     * Custom system instructions for the project-management agent.
     * @maxLength 64000
     */
    pmSystemPrompt: string;
    /**
     * Organization instructions for agent pull request titles.
     * @maxLength 64000
     */
    prTitleInstructions: string;
    /**
     * Enable or disable pull request contribution insight collection.
     */
    pullRequestInsightsEnabled: boolean;
    /**
     * Sign agent-created commits when signing credentials are configured.
     */
    shouldSignCommits: boolean;
    /**
     * Use Tembo review links in Slack review notifications.
     */
    slackReviewOnTembo: boolean;
    /**
     * Threshold in milliseconds for identifying slow database queries.
     * @minimum 0
     */
    slowQueryThresholdMs: number;
    /**
     * SSH public keys authorized for organization workspace access.
     * @maxLength 64000
     */
    sshPublicKeys: string;
    /**
     * Enable or disable the organization weekly report.
     */
    weeklyReportEnabled: boolean;
  }
}

export type SettingValidateCredentialsParams =
  | SettingValidateCredentialsParams.Variant0
  | SettingValidateCredentialsParams.Variant1
  | SettingValidateCredentialsParams.Variant2
  | SettingValidateCredentialsParams.Variant3
  | SettingValidateCredentialsParams.Variant4
  | SettingValidateCredentialsParams.Variant5;

export declare namespace SettingValidateCredentialsParams {
  export interface Variant0 {
    /**
     * Validate Anthropic API credentials without saving them.
     */
    provider: 'anthropic';
    /**
     * The Anthropic API key.
     */
    apiKey: string;
  }

  export interface Variant1 {
    /**
     * Validate OpenAI API credentials without saving them.
     */
    provider: 'openai';
    /**
     * The OpenAI API key.
     */
    apiKey: string;
  }

  export interface Variant2 {
    /**
     * Validate xAI API credentials without saving them.
     */
    provider: 'xai';
    /**
     * The xAI API key.
     */
    apiKey: string;
  }

  export interface Variant3 {
    /**
     * Validate OpenRouter API credentials without saving them.
     */
    provider: 'openrouter';
    /**
     * The OpenRouter API key.
     */
    apiKey: string;
  }

  export interface Variant4 {
    /**
     * Validate AWS Bedrock credentials without saving them.
     */
    provider: 'aws-bedrock';
    /**
     * The AWS access key ID.
     */
    accessKeyId: string;
    /**
     * The AWS secret access key.
     */
    secretAccessKey: string;
    /**
     * The AWS region.
     */
    region: string;
  }

  export interface Variant5 {
    /**
     * Validate Google Cloud Vertex AI credentials without saving them.
     */
    provider: 'gcp-vertex-ai';
    /**
     * The GCP service account JSON.
     */
    serviceAccountJson: string;
    /**
     * The GCP project ID.
     */
    project: string;
    /**
     * The Vertex AI location.
     */
    location: string;
  }
}

export interface SettingValidateCredentialsResponse {
  /**
   * Whether the supplied credentials passed provider validation.
   */
  valid: boolean;
}
export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingValidateCredentialsResponse as SettingValidateCredentialsResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingValidateCredentialsParams as SettingValidateCredentialsParams,
  };
}
