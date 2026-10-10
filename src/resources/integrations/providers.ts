// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

export class Providers extends APIResource {
  /**
   * List providers available to the current organization.
   *
   * @param {ProviderListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProviderListResponse>} List integration providers
   *
   * @example
   * ```ts
   * const provider = await client.integrations.providers.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: ProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderListResponse> {
    return this._client.get('/v1/integrations/providers', { query, ...options });
  }

  /**
   * Validate Snyk service-account credentials and list accessible organizations.
   *
   * @param {ProviderDiscoverSnykOrganizationsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProviderDiscoverSnykOrganizationsResponse>} Discover Snyk organizations
   *
   * @example
   * ```ts
   * const provider = await client.integrations.providers.discoverSnykOrganizations({
   *   clientId: 'x',
   *   clientSecret: 'x',
   *   limit: 50,
   * });
   * ```
   */
  discoverSnykOrganizations(
    body: ProviderDiscoverSnykOrganizationsParams,
    options?: RequestOptions,
  ): APIPromise<ProviderDiscoverSnykOrganizationsResponse> {
    return this._client.post('/v1/integrations/providers/snyk/organizations', { body, ...options });
  }
}

export interface ProviderListParams {
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  cursor?: string;
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * @format uri
   * @maxLength 8192
   */
  returnUrl?: string;
}

export interface ProviderListResponse {
  installedCounts: ProviderListResponse.InstalledCounts;
  /**
   * @maxItems 100
   */
  items: Array<ProviderListResponse.Item>;
  /**
   * @maxLength 10
   * @pattern ^\d+$
   */
  nextCursor: string | null;
}

export namespace ProviderListResponse {
  export interface InstalledCounts {
    /**
     * @minimum 0
     */
    github?: number;
    /**
     * @minimum 0
     */
    gitlab?: number;
    /**
     * @minimum 0
     */
    bitbucket?: number;
    /**
     * @minimum 0
     */
    atlassian?: number;
    /**
     * @minimum 0
     */
    linear?: number;
    /**
     * @minimum 0
     */
    slack?: number;
    /**
     * @minimum 0
     */
    sentry?: number;
    /**
     * @minimum 0
     */
    aws?: number;
    /**
     * @minimum 0
     */
    agent?: number;
    /**
     * @minimum 0
     */
    notion?: number;
    /**
     * @minimum 0
     */
    postgres?: number;
    /**
     * @minimum 0
     */
    bigquery?: number;
    /**
     * @minimum 0
     */
    azure?: number;
    /**
     * @minimum 0
     */
    'ms-teams'?: number;
    /**
     * @minimum 0
     */
    snyk?: number;
    /**
     * @minimum 0
     */
    hubspot?: number;
    /**
     * @minimum 0
     */
    openconnect?: number;
    /**
     * @minimum 0
     */
    tailscale?: number;
  }

  export interface Item {
    /**
     * @maxLength 8192
     */
    authorizeUrl: string;
    /**
     * @maxLength 200
     */
    category: string;
    comingSoon: boolean;
    /**
     * @maxLength 4096
     */
    description: string;
    /**
     * @maxLength 500
     */
    displayName: string;
    installed: boolean;
    integrationType:
      | 'github'
      | 'gitlab'
      | 'bitbucket'
      | 'atlassian'
      | 'linear'
      | 'slack'
      | 'sentry'
      | 'aws'
      | 'agent'
      | 'notion'
      | 'postgres'
      | 'bigquery'
      | 'azure'
      | 'ms-teams'
      | 'snyk'
      | 'hubspot'
      | 'openconnect'
      | 'tailscale';
    isOAuth: boolean;
    /**
     * @maxLength 500
     */
    name: string;
    /**
     * @maxLength 2048
     */
    oidcIssuerHost?: string;
    /**
     * @maxLength 8192
     */
    redirectUrl?: string;
    /**
     * @maxLength 8192
     */
    templateUrl?: string;
  }
}

export interface ProviderDiscoverSnykOrganizationsParams {
  /**
   * @minLength 1
   * @maxLength 16384
   */
  clientId: string;
  /**
   * @minLength 1
   * @maxLength 65536
   */
  clientSecret: string;
  /**
   * @minLength 1
   * @maxLength 2048
   */
  cursor?: string;
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
}

export interface ProviderDiscoverSnykOrganizationsResponse {
  /**
   * @maxItems 100
   */
  items: Array<ProviderDiscoverSnykOrganizationsResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 2048
   */
  nextCursor: string | null;
}

export namespace ProviderDiscoverSnykOrganizationsResponse {
  export interface Item {
    /**
     * @format uuid
     */
    id: string;
    name: string | null;
    slug: string | null;
  }
}
export declare namespace Providers {
  export {
    type ProviderListResponse as ProviderListResponse,
    type ProviderDiscoverSnykOrganizationsResponse as ProviderDiscoverSnykOrganizationsResponse,
    type ProviderListParams as ProviderListParams,
    type ProviderDiscoverSnykOrganizationsParams as ProviderDiscoverSnykOrganizationsParams,
  };
}
