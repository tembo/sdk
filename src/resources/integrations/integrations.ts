// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as ProvidersAPI from './providers';
import {
  Providers,
  type ProviderListResponse,
  type ProviderDiscoverSnykOrganizationsResponse,
  type ProviderListParams,
  type ProviderDiscoverSnykOrganizationsParams,
} from './providers';
import * as TriggersAPI from './triggers';
import {
  Triggers,
  type TriggerListResponse,
  type TriggerRetrieveResponse,
  type TriggerListFilterOptionsResponse,
  type TriggerListParams,
  type TriggerRetrieveParams,
  type TriggerListFilterOptionsParams,
} from './triggers';

export class Integrations extends APIResource {
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);

  /**
   * List integrations visible to the current organization or authenticated admin.
   *
   * @param {IntegrationListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationListResponse>} List integrations
   *
   * @example
   * ```ts
   * const integration = await client.integrations.list({
   *   limit: 50,
   *   includeTotal: false,
   * });
   * ```
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListResponse> {
    return this._client.get('/v1/integrations', { query, ...options });
  }

  /**
   * Connect AWS, BigQuery, GitLab, PostgreSQL, Snyk, OpenConnect VPN, or Tailscale using provider credentials. For browser-authorized providers, use listIntegrationProviders and authorizeIntegration instead.
   *
   * @param {IntegrationCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationCreateResponse>} Create an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.create({
   *   environment: 'x',
   *   roleArn: 'x',
   *   type: 'aws',
   * });
   * ```
   */
  create(body: IntegrationCreateParams, options?: RequestOptions): APIPromise<IntegrationCreateResponse> {
    return this._client.post('/v1/integrations', { body, ...options });
  }

  /**
   * Retrieve an integration and its configuration.
   *
   * @param {string} integrationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationRetrieveResponse>} Retrieve an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(integrationID: string, options?: RequestOptions): APIPromise<IntegrationRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/integrations/${integrationID}`, options);
  }

  /**
   * Update integration settings such as the default repository, Slack channel restrictions, automatic solving, or Sentry environments; replace AWS or PostgreSQL configuration; set or remove Atlassian service-account credentials.
   *
   * @param {string} integrationID
   * @param {IntegrationUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationUpdateResponse>} Update an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   settings: {},
   * });
   * ```
   */
  update(
    integrationID: string,
    body: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/integrations/${integrationID}`, { body, ...options });
  }

  /**
   * Uninstall an integration from its provider when supported, then delete it from Tembo.
   *
   * @param {string} integrationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationDeleteResponse>} Delete an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(integrationID: string, options?: RequestOptions): APIPromise<IntegrationDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/integrations/${integrationID}`, options);
  }

  /**
   * Return the provider authorization URL for an integration.
   *
   * @param {string} integrationID
   * @param {IntegrationAuthorizeParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationAuthorizeResponse>} Authorize an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  authorize(
    integrationID: string,
    params: IntegrationAuthorizeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationAuthorizeResponse> {
    const { returnUrl, capability } = params ?? {};
    return this._client.post(__scalarPath`/v1/integrations/${integrationID}/authorize`, {
      query: { returnUrl, capability },
      ...options,
    });
  }

  /**
   * Test the saved provider connection.
   *
   * @param {string} integrationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationTestResponse>} Test an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  test(integrationID: string, options?: RequestOptions): APIPromise<IntegrationTestResponse> {
    return this._client.post(__scalarPath`/v1/integrations/${integrationID}/test`, options);
  }

  /**
   * Queue or immediately perform an integration sync.
   *
   * @param {string} integrationID
   * @param {IntegrationSyncParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationSyncResponse>} Sync an integration
   *
   * @example
   * ```ts
   * const integration = await client.integrations.sync('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   mode: 'queued',
   * });
   * ```
   */
  sync(
    integrationID: string,
    body: IntegrationSyncParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationSyncResponse> {
    return this._client.post(__scalarPath`/v1/integrations/${integrationID}/sync`, { body, ...options });
  }

  /**
   * Queue integration and pull-request sync jobs for integrations with enabled repositories.
   *
   * @param {IntegrationSyncAllParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationSyncAllResponse>} Sync eligible integrations
   *
   * @example
   * ```ts
   * const integration = await client.integrations.syncAll({});
   * ```
   */
  syncAll(body: IntegrationSyncAllParams, options?: RequestOptions): APIPromise<IntegrationSyncAllResponse> {
    return this._client.post('/v1/integrations/sync', { body, ...options });
  }

  /**
   * Count active sync jobs for an integration or eligible integrations.
   *
   * @param {IntegrationRetrieveSyncStatusParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationRetrieveSyncStatusResponse>} Retrieve integration sync status
   *
   * @example
   * ```ts
   * const integration = await client.integrations.retrieveSyncStatus();
   * ```
   */
  retrieveSyncStatus(
    query: IntegrationRetrieveSyncStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationRetrieveSyncStatusResponse> {
    return this._client.get('/v1/integrations/sync/status', { query, ...options });
  }

  /**
   * Retrieve the GitHub installation rate-limit state.
   *
   * @param {string} integrationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationRetrieveRateLimitResponse>} Retrieve an integration rate limit
   *
   * @example
   * ```ts
   * const integration = await client.integrations.retrieveRateLimit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieveRateLimit(
    integrationID: string,
    options?: RequestOptions,
  ): APIPromise<IntegrationRetrieveRateLimitResponse> {
    return this._client.get(__scalarPath`/v1/integrations/${integrationID}/rate-limit`, options);
  }

  /**
   * List environments visible to a Sentry integration.
   *
   * @param {string} integrationID
   * @param {IntegrationListSentryEnvironmentsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationListSentryEnvironmentsResponse>} List Sentry environments
   *
   * @example
   * ```ts
   * const integration = await client.integrations.listSentryEnvironments('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  listSentryEnvironments(
    integrationID: string,
    query: IntegrationListSentryEnvironmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListSentryEnvironmentsResponse> {
    return this._client.get(__scalarPath`/v1/integrations/${integrationID}/sentry-environments`, {
      query,
      ...options,
    });
  }

  /**
   * List channels visible to a Slack integration.
   *
   * @param {string} integrationID
   * @param {IntegrationListSlackChannelsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationListSlackChannelsResponse>} List Slack channels
   *
   * @example
   * ```ts
   * const integration = await client.integrations.listSlackChannels('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 50,
   * });
   * ```
   */
  listSlackChannels(
    integrationID: string,
    query: IntegrationListSlackChannelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListSlackChannelsResponse> {
    return this._client.get(__scalarPath`/v1/integrations/${integrationID}/slack-channels`, {
      query,
      ...options,
    });
  }
}

export interface IntegrationListParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @format uuid
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
   * Filter by whether integrations are enabled.
   */
  enabled?: boolean;
  /**
   * Filter by whether integrations have enabled repositories.
   */
  hasEnabledRepositories?: boolean;
  /**
   * Filter by integration IDs, supplied as a comma-separated list.
   * @minItems 1
   * @maxItems 100
   */
  ids?: Array<string>;
  /**
   * Search integration provider types and external IDs.
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
  /**
   * Filter provider types, supplied as a comma-separated list.
   * @minItems 1
   * @maxItems 18
   */
  type?: Array<string>;
  /**
   * Only integrations created after this ISO 8601 timestamp.
   * @format date-time
   */
  createdAfter?: string;
  /**
   * Exclude integrations belonging to the named organization within the caller access scope.
   * @minLength 1
   * @maxLength 255
   */
  excludeOrganizationName?: string;
  /**
   * Include totalCount for matching integrations.
   * @default false
   */
  includeTotal?: boolean;
}

export interface IntegrationListResponse {
  items: Array<IntegrationListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
  /**
   * @minimum 0
   */
  totalCount?: number;
}

export namespace IntegrationListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    displayName: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    id: string;
    /**
     * @format date-time
     */
    lastSyncedAt: string | null;
    /**
     * @minimum 0
     */
    repositoryCount: number;
    /**
     * @minimum 0
     */
    sourceCount: number;
    /**
     * @minLength 1
     * @maxLength 100
     */
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export type IntegrationCreateParams =
  | IntegrationCreateParams.Variant0
  | IntegrationCreateParams.Variant1
  | IntegrationCreateParams.Variant2
  | IntegrationCreateParams.Variant3
  | IntegrationCreateParams.Variant4
  | IntegrationCreateParams.Variant5
  | IntegrationCreateParams.Variant6;

export declare namespace IntegrationCreateParams {
  export interface Variant0 {
    /**
     * Display label for the AWS environment.
     * @minLength 1
     * @maxLength 200
     */
    environment: string;
    /**
     * AWS IAM role ARN to assume for account access.
     * @minLength 1
     * @maxLength 2048
     */
    roleArn: string;
    /**
     * Create an AWS account integration.
     */
    type: 'aws';
  }

  export interface Variant1 {
    /**
     * Google Cloud project ID for BigQuery.
     * @pattern ^[a-z][a-z0-9-]{4,28}[a-z0-9]$
     */
    projectId: string;
    /**
     * Google Cloud service-account JSON credentials for BigQuery.
     * @minLength 1
     * @maxLength 1000000
     */
    serviceAccountJson: string;
    /**
     * Create a BigQuery integration.
     */
    type: 'bigquery';
  }

  export interface Variant2 {
    /**
     * GitLab access token used to connect the integration.
     * @minLength 1
     * @maxLength 65536
     */
    accessToken: string;
    /**
     * Create a GitLab integration.
     */
    type: 'gitlab';
  }

  export interface Variant3 {
    /**
     * VPN gateway hostname or URL for OpenConnect.
     * @minLength 1
     * @maxLength 2048
     */
    gateway: string;
    /**
     * Display name for the VPN connection.
     * @minLength 1
     * @maxLength 200
     */
    instanceName: string;
    /**
     * VPN login password.
     * @minLength 1
     * @maxLength 65536
     */
    password: string;
    /**
     * OpenConnect VPN protocol supported by the gateway.
     */
    protocol: 'fortinet' | 'anyconnect' | 'gp' | 'nc';
    /**
     * Create an OpenConnect VPN integration.
     */
    type: 'openconnect';
    /**
     * VPN login username.
     * @minLength 1
     * @maxLength 4096
     */
    username: string;
  }

  export interface Variant4 {
    /**
     * PostgreSQL connection URI, including credentials. Stored as secret configuration.
     * @minLength 1
     * @maxLength 16384
     */
    connectionString: string;
    /**
     * Display name for the PostgreSQL instance.
     * @minLength 1
     * @maxLength 200
     */
    instanceName: string;
    /**
     * Create a PostgreSQL integration.
     */
    type: 'postgres';
    /**
     * Optional CA certificate for the PostgreSQL TLS connection.
     * @maxLength 1000000
     */
    caCertificate?: string;
  }

  export interface Variant5 {
    /**
     * Snyk service-account client ID.
     * @minLength 1
     * @maxLength 16384
     */
    clientId: string;
    /**
     * Snyk service-account client secret.
     * @minLength 1
     * @maxLength 65536
     */
    clientSecret: string;
    /**
     * Snyk organization ID, not a Tembo organization ID. Discover choices with discoverSnykOrganizations.
     * @format uuid
     */
    organizationId: string;
    /**
     * Create a Snyk integration.
     */
    type: 'snyk';
    /**
     * Optional display name for the Snyk organization.
     * @minLength 1
     * @maxLength 500
     */
    organizationName?: string;
  }

  export interface Variant6 {
    /**
     * Display name for the Tailscale connection.
     * @minLength 1
     * @maxLength 200
     */
    instanceName: string;
    /**
     * Tailscale OAuth client ID authorized to create tagged devices.
     * @minLength 1
     * @maxLength 16384
     */
    oauthClientId: string;
    /**
     * Tailscale OAuth client secret.
     * @minLength 1
     * @maxLength 65536
     */
    oauthClientSecret: string;
    /**
     * Tags to assign to connected devices, such as tag:tembo. Must be authorized for the OAuth client.
     * @minItems 1
     * @maxItems 100
     */
    tags: Array<string>;
    /**
     * Create a Tailscale private-network integration.
     */
    type: 'tailscale';
    /**
     * Tailnet name. The default - uses the OAuth client tailnet.
     * @default -
     * @minLength 1
     * @maxLength 500
     */
    tailnet?: string;
  }
}

export interface IntegrationCreateResponse {
  integration: IntegrationCreateResponse.Integration;
  /**
   * @format uuid
   */
  sessionSourceId: string | null;
}

export namespace IntegrationCreateResponse {
  export interface Integration {
    /**
     * @format date-time
     */
    createdAt: string;
    displayName: string;
    /**
     * @format date-time
     */
    enabledAt: string | null;
    id: string;
    /**
     * @format date-time
     */
    lastSyncedAt: string | null;
    /**
     * @minimum 0
     */
    repositoryCount: number;
    /**
     * @minimum 0
     */
    sourceCount: number;
    /**
     * @minLength 1
     * @maxLength 100
     */
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface IntegrationRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  displayName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  id: string;
  /**
   * @format date-time
   */
  lastSyncedAt: string | null;
  /**
   * @minimum 0
   */
  repositoryCount: number;
  /**
   * @minimum 0
   */
  sourceCount: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export type IntegrationUpdateParams =
  | IntegrationUpdateParams.Settings
  | IntegrationUpdateParams.Aws
  | IntegrationUpdateParams.Postgres
  | IntegrationUpdateParams.AtlassianServiceAccount;

export declare namespace IntegrationUpdateParams {
  export interface Settings {
    /**
     * Update integration settings, preserving unspecified settings.
     */
    settings: Settings.Settings;
  }

  export namespace Settings {
    export interface Settings {
      /**
       * @format uuid
       */
      defaultRepositoryId?: string | null;
      /**
       * @maxItems 1000
       */
      disallowedSlackChannelIds?: Array<string>;
      instantSolve?: boolean;
      /**
       * @maxItems 1000
       */
      sentryEnvironments?: Array<string>;
    }
  }

  export interface Aws {
    /**
     * Replace AWS environment and assumed-role configuration.
     */
    aws: Aws.Aws;
  }

  export namespace Aws {
    export interface Aws {
      /**
       * Display label for the AWS environment.
       * @minLength 1
       * @maxLength 200
       */
      environment: string;
      /**
       * AWS IAM role ARN to assume for account access.
       * @minLength 1
       * @maxLength 2048
       */
      roleArn: string;
    }
  }

  export interface Postgres {
    /**
     * Replace PostgreSQL connection configuration.
     */
    postgres: Postgres.Postgres;
  }

  export namespace Postgres {
    export interface Postgres {
      /**
       * PostgreSQL connection URI, including credentials. Stored as secret configuration.
       * @minLength 1
       * @maxLength 16384
       */
      connectionString: string;
      /**
       * Display name for the PostgreSQL instance.
       * @minLength 1
       * @maxLength 200
       */
      instanceName: string;
      /**
       * Optional CA certificate for the PostgreSQL TLS connection.
       * @maxLength 1000000
       */
      caCertificate?: string;
    }
  }

  export interface AtlassianServiceAccount {
    /**
     * Set Atlassian service-account OAuth credentials for triggers, or null to remove them.
     */
    atlassianServiceAccount: AtlassianServiceAccount.AtlassianServiceAccount | null;
  }

  export namespace AtlassianServiceAccount {
    export interface AtlassianServiceAccount {
      /**
       * @minLength 1
       * @maxLength 4096
       */
      clientId: string;
      /**
       * @minLength 1
       * @maxLength 65536
       */
      clientSecret: string;
    }
  }
}

export interface IntegrationUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  displayName: string;
  /**
   * @format date-time
   */
  enabledAt: string | null;
  id: string;
  /**
   * @format date-time
   */
  lastSyncedAt: string | null;
  /**
   * @minimum 0
   */
  repositoryCount: number;
  /**
   * @minimum 0
   */
  sourceCount: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface IntegrationDeleteResponse {
  /**
   * @format uuid
   */
  id: string;
  deleted: true;
}

export interface IntegrationAuthorizeParams {
  /**
   * URL to return to after provider authorization. Must use HTTPS or localhost HTTP.
   * @format uri
   * @maxLength 8192
   */
  returnUrl?: string;
  /**
   * Request authorization for Confluence automation triggers instead of the default integration capability.
   */
  capability?: 'confluenceTriggers';
}

export interface IntegrationAuthorizeResponse {
  /**
   * @format uri
   */
  authorizationUrl: string;
}

export interface IntegrationTestResponse {
  healthy: boolean;
  message: string;
}

export interface IntegrationSyncParams {
  /**
   * queued schedules a background integration sync; immediate performs the sync in this request.
   * @default queued
   */
  mode?: 'immediate' | 'queued';
}

export interface IntegrationSyncResponse {
  /**
   * @format uuid
   */
  integrationId: string;
  jobId: string | null;
  mode: 'immediate' | 'queued';
}

export type IntegrationSyncAllParams = Record<string, unknown>;

export interface IntegrationSyncAllResponse {
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  eligibleIntegrationCount: number;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  integrationSyncJobCount: number;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  pullRequestSyncJobCount: number;
}

export interface IntegrationRetrieveSyncStatusParams {
  /**
   * @format uuid
   */
  integrationId?: string;
}

export interface IntegrationRetrieveSyncStatusResponse {
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  activeJobCount: number;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  eligibleIntegrationCount: number;
}

export interface IntegrationRetrieveRateLimitResponse {
  core: IntegrationRetrieveRateLimitResponse.Core;
  graphql: IntegrationRetrieveRateLimitResponse.Graphql;
  search: IntegrationRetrieveRateLimitResponse.Search;
}

export namespace IntegrationRetrieveRateLimitResponse {
  export interface Core {
    limit: number;
    remaining: number;
    /**
     * @format date-time
     */
    resetAt: string;
    used: number;
  }

  export interface Graphql {
    limit: number;
    remaining: number;
    /**
     * @format date-time
     */
    resetAt: string;
    used: number;
  }

  export interface Search {
    limit: number;
    remaining: number;
    /**
     * @format date-time
     */
    resetAt: string;
    used: number;
  }
}

export interface IntegrationListSentryEnvironmentsParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @maxLength 10
   * @pattern ^\d+$
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

export interface IntegrationListSentryEnvironmentsResponse {
  /**
   * @maxItems 100
   */
  items: Array<string>;
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  nextCursor: string | null;
}

export interface IntegrationListSlackChannelsParams {
  /**
   * Continuation cursor from the previous response nextCursor. Omit for the first page; null nextCursor means there are no more pages.
   * @maxLength 10
   * @pattern ^\d+$
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
   * Search Slack channel names.
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
}

export interface IntegrationListSlackChannelsResponse {
  /**
   * @maxItems 100
   */
  items: Array<IntegrationListSlackChannelsResponse.Item>;
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  nextCursor: string | null;
}

export namespace IntegrationListSlackChannelsResponse {
  export interface Item {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string;
  }
}
Integrations.Providers = Providers;
Integrations.Triggers = Triggers;

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationAuthorizeResponse as IntegrationAuthorizeResponse,
    type IntegrationTestResponse as IntegrationTestResponse,
    type IntegrationSyncResponse as IntegrationSyncResponse,
    type IntegrationSyncAllResponse as IntegrationSyncAllResponse,
    type IntegrationRetrieveSyncStatusResponse as IntegrationRetrieveSyncStatusResponse,
    type IntegrationRetrieveRateLimitResponse as IntegrationRetrieveRateLimitResponse,
    type IntegrationListSentryEnvironmentsResponse as IntegrationListSentryEnvironmentsResponse,
    type IntegrationListSlackChannelsResponse as IntegrationListSlackChannelsResponse,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationAuthorizeParams as IntegrationAuthorizeParams,
    type IntegrationSyncParams as IntegrationSyncParams,
    type IntegrationSyncAllParams as IntegrationSyncAllParams,
    type IntegrationRetrieveSyncStatusParams as IntegrationRetrieveSyncStatusParams,
    type IntegrationListSentryEnvironmentsParams as IntegrationListSentryEnvironmentsParams,
    type IntegrationListSlackChannelsParams as IntegrationListSlackChannelsParams,
  };

  export {
    Providers as Providers,
    type ProviderListResponse as ProviderListResponse,
    type ProviderDiscoverSnykOrganizationsResponse as ProviderDiscoverSnykOrganizationsResponse,
    type ProviderListParams as ProviderListParams,
    type ProviderDiscoverSnykOrganizationsParams as ProviderDiscoverSnykOrganizationsParams,
  };

  export {
    Triggers as Triggers,
    type TriggerListResponse as TriggerListResponse,
    type TriggerRetrieveResponse as TriggerRetrieveResponse,
    type TriggerListFilterOptionsResponse as TriggerListFilterOptionsResponse,
    type TriggerListParams as TriggerListParams,
    type TriggerRetrieveParams as TriggerRetrieveParams,
    type TriggerListFilterOptionsParams as TriggerListFilterOptionsParams,
  };
}
