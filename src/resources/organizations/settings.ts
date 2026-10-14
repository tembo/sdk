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
    /**
     * @minimum 0
     * @maximum 10080
     */
    defaultKeepAliveMinutes: number;
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
  /**
   * @minimum 0
   * @maximum 10080
   */
  defaultKeepAliveMinutes?: number;
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
    /**
     * @minimum 0
     * @maximum 10080
     */
    defaultKeepAliveMinutes: number;
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

export type SettingValidateCredentialsParams =
  | SettingValidateCredentialsParams.Variant0
  | SettingValidateCredentialsParams.Variant1
  | SettingValidateCredentialsParams.Variant2
  | SettingValidateCredentialsParams.Variant3
  | SettingValidateCredentialsParams.Variant4;

export declare namespace SettingValidateCredentialsParams {
  export interface Variant0 {
    provider: 'anthropic';
    /**
     * The Anthropic API key.
     */
    apiKey: string;
  }

  export interface Variant1 {
    provider: 'openai';
    /**
     * The OpenAI API key.
     */
    apiKey: string;
  }

  export interface Variant2 {
    provider: 'openrouter';
    /**
     * The OpenRouter API key.
     */
    apiKey: string;
  }

  export interface Variant3 {
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

  export interface Variant4 {
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
