// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as MembersAPI from './members';
import {
  Members,
  type MemberListResponse,
  type MemberCreateResponse,
  type MemberRetrieveResponse,
  type MemberUpdateResponse,
  type MemberDeleteResponse,
  type MemberListParams,
  type MemberCreateParams,
  type MemberRetrieveParams,
  type MemberUpdateParams,
  type MemberDeleteParams,
} from './members';
import * as SecretsAPI from './secrets';
import {
  Secrets,
  type SecretListResponse,
  type SecretCreateResponse,
  type SecretRetrieveResponse,
  type SecretUpdateResponse,
  type SecretDeleteResponse,
  type SecretListParams,
  type SecretCreateParams,
  type SecretRetrieveParams,
  type SecretUpdateParams,
  type SecretDeleteParams,
} from './secrets';
import * as SettingsAPI from './settings';
import {
  Settings,
  type SettingRetrieveResponse,
  type SettingUpdateResponse,
  type SettingUpdateParams,
} from './settings';

export class Organizations extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Create an organization and make the authenticated user its administrator.
   *
   * @param {OrganizationCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationCreateResponse>} Create an organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post('/v1/organizations', { body, ...options });
  }

  /**
   * Retrieve an organization profile.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationRetrieveResponse>} Retrieve an organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.retrieve('organizationId');
   * ```
   */
  retrieve(organizationID: string, options?: RequestOptions): APIPromise<OrganizationRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}`, options);
  }

  /**
   * Update organization profile fields or onboarding state.
   *
   * @param {string} organizationID
   * @param {OrganizationUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationUpdateResponse>} Update an organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.update('organizationId', {});
   * ```
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/organizations/${organizationID}`, { body, ...options });
  }

  /**
   * Permanently delete an organization and its related data.
   *
   * @param {string} organizationID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationDeleteResponse>} Delete an organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.delete('organizationId');
   * ```
   */
  delete(organizationID: string, options?: RequestOptions): APIPromise<OrganizationDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/organizations/${organizationID}`, options);
  }
}
export interface OrganizationCreateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]+(?:-[a-z0-9]+)*$
   */
  slug?: string;
}

export interface OrganizationCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  id: string;
  name: string;
  slug: string | null;
  /**
   * @format date-time
   */
  updatedAt: string | null;
  /**
   * @format uri
   */
  logoUrl: string | null;
  /**
   * @minimum 0
   */
  memberCount: number;
}

export interface OrganizationRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  id: string;
  name: string;
  slug: string | null;
  /**
   * @format date-time
   */
  updatedAt: string | null;
  /**
   * @format uri
   */
  logoUrl: string | null;
  /**
   * @minimum 0
   */
  memberCount: number;
}

export interface OrganizationUpdateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]+(?:-[a-z0-9]+)*$
   */
  slug?: string;
  onboarding?: OrganizationUpdateParams.Onboarding;
  onboardingCompleted?: boolean;
}

export namespace OrganizationUpdateParams {
  export interface Onboarding {
    /**
     * @minLength 1
     * @maxLength 100
     */
    companySize?: string;
    /**
     * @maxItems 100
     */
    dismissedDashboardGetStartedCards?: Array<string>;
    /**
     * @minLength 1
     * @maxLength 100
     */
    industry?: string;
    /**
     * @maxItems 100
     */
    stack?: Array<string>;
  }
}

export interface OrganizationUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  id: string;
  name: string;
  slug: string | null;
  /**
   * @format date-time
   */
  updatedAt: string | null;
  /**
   * @format uri
   */
  logoUrl: string | null;
  /**
   * @minimum 0
   */
  memberCount: number;
}

export interface OrganizationDeleteResponse {
  deleted: true;
  id: string;
}
Organizations.Members = Members;
Organizations.Secrets = Secrets;
Organizations.Settings = Settings;

export declare namespace Organizations {
  export {
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationUpdateResponse as OrganizationUpdateResponse,
    type OrganizationDeleteResponse as OrganizationDeleteResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };

  export {
    Members as Members,
    type MemberListResponse as MemberListResponse,
    type MemberCreateResponse as MemberCreateResponse,
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberUpdateResponse as MemberUpdateResponse,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberListParams as MemberListParams,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberDeleteParams as MemberDeleteParams,
  };

  export {
    Secrets as Secrets,
    type SecretListResponse as SecretListResponse,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretRetrieveResponse as SecretRetrieveResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretListParams as SecretListParams,
    type SecretCreateParams as SecretCreateParams,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretDeleteParams as SecretDeleteParams,
  };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
