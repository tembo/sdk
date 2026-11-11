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
import * as RolesAPI from './roles';
import {
  Roles,
  type RoleListResponse,
  type RoleCreateResponse,
  type RoleRetrieveResponse,
  type RoleUpdateResponse,
  type RoleDeleteResponse,
  type RoleCreateParams,
  type RoleRetrieveParams,
  type RoleUpdateParams,
  type RoleDeleteParams,
} from './roles';
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
  type SettingValidateCredentialsResponse,
  type SettingUpdateParams,
  type SettingValidateCredentialsParams,
} from './settings';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions, type SubscriptionRetrieveResponse } from './subscriptions';

export class Organizations extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

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
   * Return self membership and workspace eligibility; include the full profile with organization read permission.
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
   * Delete the organization from the identity provider and Tembo.
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
   * Organization display name.
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Unique organization URL slug using lowercase letters, numbers, and single hyphens.
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

export type OrganizationRetrieveResponse =
  | OrganizationRetrieveResponse.OrganizationRetrieveResponseItem
  | OrganizationRetrieveResponse.OrganizationRetrieveResponseItem2;

export namespace OrganizationRetrieveResponse {
  export interface OrganizationRetrieveResponseItem {
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
    currentMembership: OrganizationRetrieveResponseItem.CurrentMembership | null;
    access: OrganizationRetrieveResponseItem.Access;
  }

  export namespace OrganizationRetrieveResponseItem {
    export interface CurrentMembership {
      userId: string;
      permissions: Array<
        | 'organization:read'
        | 'organization:write'
        | 'organization:member:read'
        | 'organization:member:write'
        | 'organization:invitation:read'
        | 'organization:invitation:write'
        | 'organization:role:read'
        | 'organization:role:write'
        | 'organization:secret:read'
        | 'organization:secret:write'
        | 'organization:setting:read'
        | 'organization:setting:write'
        | 'organization:configuration:read'
        | 'organization:configuration:write'
        | 'organization:subscription:read'
        | 'organization:subscription:write'
        | 'organization:onboarding:read'
        | 'organization:onboarding:write'
        | 'organization:logo:read'
        | 'organization:logo:write'
        | 'organization:slack_connect:read'
        | 'organization:slack_connect:write'
        | 'billing:read'
        | 'billing:write'
        | 'billing:trial:read'
        | 'billing:trial:write'
        | 'billing:usage:read'
        | 'billing:usage:write'
        | 'billing:payment:read'
        | 'billing:payment:write'
        | 'billing:payment_method:read'
        | 'billing:payment_method:write'
        | 'billing:checkout:read'
        | 'billing:checkout:write'
        | 'billing:subscription_checkout:read'
        | 'billing:subscription_checkout:write'
        | 'billing:portal:read'
        | 'billing:portal:write'
        | 'billing:on_demand:read'
        | 'billing:on_demand:write'
        | 'billing:credit:read'
        | 'billing:credit:write'
        | 'billing:custom_price:read'
        | 'billing:custom_price:write'
        | 'billing:custom_plan:read'
        | 'billing:custom_plan:write'
        | 'billing:overage_report:read'
        | 'billing:overage_report:write'
        | 'api_key:read'
        | 'api_key:write'
        | 'user:read'
        | 'user:write'
        | 'user:setting:read'
        | 'user:setting:write'
        | 'user:environment_variable:read'
        | 'user:environment_variable:write'
        | 'user:subscription:read'
        | 'user:subscription:write'
        | 'user:connected_account:read'
        | 'user:connected_account:write'
        | 'user:organization:read'
        | 'user:organization:write'
        | 'user:profile_picture:read'
        | 'user:profile_picture:write'
        | 'user:deletion:read'
        | 'user:deletion:write'
        | 'agent:read'
        | 'agent:write'
        | 'agent:schedule:read'
        | 'agent:schedule:write'
        | 'agent:trigger:read'
        | 'agent:trigger:write'
        | 'agent:run:read'
        | 'agent:run:write'
        | 'agent:instruction_revision:read'
        | 'agent:instruction_revision:write'
        | 'agent:template:read'
        | 'agent:template:write'
        | 'session:read'
        | 'session:write'
        | 'session:message:read'
        | 'session:message:write'
        | 'session:artifact:read'
        | 'session:artifact:write'
        | 'session:source:read'
        | 'session:source:write'
        | 'session:command:read'
        | 'session:command:write'
        | 'session:input:read'
        | 'session:input:write'
        | 'session:queue:read'
        | 'session:queue:write'
        | 'session:event:read'
        | 'session:event:write'
        | 'session:file:read'
        | 'session:file:write'
        | 'session:diff:read'
        | 'session:diff:write'
        | 'session:workspace:read'
        | 'session:workspace:write'
        | 'session:workspace_file:read'
        | 'session:workspace_file:write'
        | 'session:workspace_diff:read'
        | 'session:workspace_diff:write'
        | 'session:workspace_preview:read'
        | 'session:workspace_preview:write'
        | 'pull_request:read'
        | 'pull_request:write'
        | 'pull_request:merge:read'
        | 'pull_request:merge:write'
        | 'pull_request:attachment:read'
        | 'pull_request:attachment:write'
        | 'pull_request:session:read'
        | 'pull_request:session:write'
        | 'pull_request:message:read'
        | 'pull_request:message:write'
        | 'pull_request:comment:read'
        | 'pull_request:comment:write'
        | 'pull_request:review:read'
        | 'pull_request:review:write'
        | 'pull_request:reaction:read'
        | 'pull_request:reaction:write'
        | 'pull_request:commit:read'
        | 'pull_request:commit:write'
        | 'pull_request:check:read'
        | 'pull_request:check:write'
        | 'pull_request:file:read'
        | 'pull_request:file:write'
        | 'pull_request:reviewer:read'
        | 'pull_request:reviewer:write'
        | 'pull_request:label:read'
        | 'pull_request:label:write'
        | 'pull_request:thread:read'
        | 'pull_request:thread:write'
        | 'pull_request:tour:read'
        | 'pull_request:tour:write'
        | 'pull_request:branch_status:read'
        | 'pull_request:branch_status:write'
        | 'pull_request:stack:read'
        | 'pull_request:stack:write'
        | 'repository:read'
        | 'repository:write'
        | 'repository:branch:read'
        | 'repository:branch:write'
        | 'repository:file:read'
        | 'repository:file:write'
        | 'repository:pull_request:read'
        | 'repository:pull_request:write'
        | 'repository:user:read'
        | 'repository:user:write'
        | 'repository:label:read'
        | 'repository:label:write'
        | 'integration:read'
        | 'integration:write'
        | 'integration:trigger:read'
        | 'integration:trigger:write'
        | 'integration:provider:read'
        | 'integration:provider:write'
        | 'integration:configuration:read'
        | 'integration:configuration:write'
        | 'integration:snyk_organization:read'
        | 'integration:snyk_organization:write'
        | 'integration:sentry_environment:read'
        | 'integration:sentry_environment:write'
        | 'integration:slack_channel:read'
        | 'integration:slack_channel:write'
        | 'integration:rate_limit:read'
        | 'integration:rate_limit:write'
        | 'mcp_connection:read'
        | 'mcp_connection:write'
        | 'mcp_connection:shared:read'
        | 'mcp_connection:shared:write'
        | 'model:read'
        | 'model:write'
        | 'project:read'
        | 'project:write'
        | 'project:environment_variable:read'
        | 'project:environment_variable:write'
        | 'project:snapshot:read'
        | 'project:snapshot:write'
        | 'project:build:read'
        | 'project:build:write'
        | 'project:build_detail:read'
        | 'project:build_detail:write'
        | 'project:schedule:read'
        | 'project:schedule:write'
        | 'project:default:read'
        | 'project:default:write'
        | 'project:system_snapshot:read'
        | 'project:system_snapshot:write'
        | 'project:organization_snapshot:read'
        | 'project:organization_snapshot:write'
        | 'sandbox:read'
        | 'sandbox:write'
        | 'sandbox:metric:read'
        | 'sandbox:metric:write'
        | 'sandbox:event:read'
        | 'sandbox:event:write'
        | 'sandbox:size:read'
        | 'sandbox:size:write'
        | 'sandbox:virtual_machine:read'
        | 'sandbox:virtual_machine:write'
        | 'device:read'
        | 'device:write'
        | 'skill:read'
        | 'skill:write'
        | 'skill:marketplace:read'
        | 'skill:marketplace:write'
        | 'insight:read'
        | 'insight:write'
        | 'insight:member:read'
        | 'insight:member:write'
        | 'insight:repository:read'
        | 'insight:repository:write'
        | 'insight:usage:read'
        | 'insight:usage:write'
        | 'file:read'
        | 'file:write'
        | 'pin:read'
        | 'pin:write'
        | 'folder:read'
        | 'folder:write'
        | 'queue:job:read'
        | 'queue:job:write'
        | 'queue:host_manager_job:read'
        | 'queue:host_manager_job:write'
        | 'queue:worker:read'
        | 'queue:worker:write'
        | 'queue:scheduled_job:read'
        | 'queue:scheduled_job:write'
        | 'queue:triggered_job:read'
        | 'queue:triggered_job:write'
        | 'runtime:read'
        | 'runtime:write'
        | 'session:source_credential:read'
        | 'session:source_credential:write'
        | 'device:all:write'
        | 'insight:user:read'
      >;
    }

    export interface Access {
      state: 'blocked' | 'trial' | 'paid';
      canExecute: boolean;
    }
  }

  export interface OrganizationRetrieveResponseItem2 {
    id: string;
    currentMembership: OrganizationRetrieveResponseItem2.CurrentMembership | null;
    access: OrganizationRetrieveResponseItem2.Access;
  }

  export namespace OrganizationRetrieveResponseItem2 {
    export interface CurrentMembership {
      userId: string;
      permissions: Array<
        | 'organization:read'
        | 'organization:write'
        | 'organization:member:read'
        | 'organization:member:write'
        | 'organization:invitation:read'
        | 'organization:invitation:write'
        | 'organization:role:read'
        | 'organization:role:write'
        | 'organization:secret:read'
        | 'organization:secret:write'
        | 'organization:setting:read'
        | 'organization:setting:write'
        | 'organization:configuration:read'
        | 'organization:configuration:write'
        | 'organization:subscription:read'
        | 'organization:subscription:write'
        | 'organization:onboarding:read'
        | 'organization:onboarding:write'
        | 'organization:logo:read'
        | 'organization:logo:write'
        | 'organization:slack_connect:read'
        | 'organization:slack_connect:write'
        | 'billing:read'
        | 'billing:write'
        | 'billing:trial:read'
        | 'billing:trial:write'
        | 'billing:usage:read'
        | 'billing:usage:write'
        | 'billing:payment:read'
        | 'billing:payment:write'
        | 'billing:payment_method:read'
        | 'billing:payment_method:write'
        | 'billing:checkout:read'
        | 'billing:checkout:write'
        | 'billing:subscription_checkout:read'
        | 'billing:subscription_checkout:write'
        | 'billing:portal:read'
        | 'billing:portal:write'
        | 'billing:on_demand:read'
        | 'billing:on_demand:write'
        | 'billing:credit:read'
        | 'billing:credit:write'
        | 'billing:custom_price:read'
        | 'billing:custom_price:write'
        | 'billing:custom_plan:read'
        | 'billing:custom_plan:write'
        | 'billing:overage_report:read'
        | 'billing:overage_report:write'
        | 'api_key:read'
        | 'api_key:write'
        | 'user:read'
        | 'user:write'
        | 'user:setting:read'
        | 'user:setting:write'
        | 'user:environment_variable:read'
        | 'user:environment_variable:write'
        | 'user:subscription:read'
        | 'user:subscription:write'
        | 'user:connected_account:read'
        | 'user:connected_account:write'
        | 'user:organization:read'
        | 'user:organization:write'
        | 'user:profile_picture:read'
        | 'user:profile_picture:write'
        | 'user:deletion:read'
        | 'user:deletion:write'
        | 'agent:read'
        | 'agent:write'
        | 'agent:schedule:read'
        | 'agent:schedule:write'
        | 'agent:trigger:read'
        | 'agent:trigger:write'
        | 'agent:run:read'
        | 'agent:run:write'
        | 'agent:instruction_revision:read'
        | 'agent:instruction_revision:write'
        | 'agent:template:read'
        | 'agent:template:write'
        | 'session:read'
        | 'session:write'
        | 'session:message:read'
        | 'session:message:write'
        | 'session:artifact:read'
        | 'session:artifact:write'
        | 'session:source:read'
        | 'session:source:write'
        | 'session:command:read'
        | 'session:command:write'
        | 'session:input:read'
        | 'session:input:write'
        | 'session:queue:read'
        | 'session:queue:write'
        | 'session:event:read'
        | 'session:event:write'
        | 'session:file:read'
        | 'session:file:write'
        | 'session:diff:read'
        | 'session:diff:write'
        | 'session:workspace:read'
        | 'session:workspace:write'
        | 'session:workspace_file:read'
        | 'session:workspace_file:write'
        | 'session:workspace_diff:read'
        | 'session:workspace_diff:write'
        | 'session:workspace_preview:read'
        | 'session:workspace_preview:write'
        | 'pull_request:read'
        | 'pull_request:write'
        | 'pull_request:merge:read'
        | 'pull_request:merge:write'
        | 'pull_request:attachment:read'
        | 'pull_request:attachment:write'
        | 'pull_request:session:read'
        | 'pull_request:session:write'
        | 'pull_request:message:read'
        | 'pull_request:message:write'
        | 'pull_request:comment:read'
        | 'pull_request:comment:write'
        | 'pull_request:review:read'
        | 'pull_request:review:write'
        | 'pull_request:reaction:read'
        | 'pull_request:reaction:write'
        | 'pull_request:commit:read'
        | 'pull_request:commit:write'
        | 'pull_request:check:read'
        | 'pull_request:check:write'
        | 'pull_request:file:read'
        | 'pull_request:file:write'
        | 'pull_request:reviewer:read'
        | 'pull_request:reviewer:write'
        | 'pull_request:label:read'
        | 'pull_request:label:write'
        | 'pull_request:thread:read'
        | 'pull_request:thread:write'
        | 'pull_request:tour:read'
        | 'pull_request:tour:write'
        | 'pull_request:branch_status:read'
        | 'pull_request:branch_status:write'
        | 'pull_request:stack:read'
        | 'pull_request:stack:write'
        | 'repository:read'
        | 'repository:write'
        | 'repository:branch:read'
        | 'repository:branch:write'
        | 'repository:file:read'
        | 'repository:file:write'
        | 'repository:pull_request:read'
        | 'repository:pull_request:write'
        | 'repository:user:read'
        | 'repository:user:write'
        | 'repository:label:read'
        | 'repository:label:write'
        | 'integration:read'
        | 'integration:write'
        | 'integration:trigger:read'
        | 'integration:trigger:write'
        | 'integration:provider:read'
        | 'integration:provider:write'
        | 'integration:configuration:read'
        | 'integration:configuration:write'
        | 'integration:snyk_organization:read'
        | 'integration:snyk_organization:write'
        | 'integration:sentry_environment:read'
        | 'integration:sentry_environment:write'
        | 'integration:slack_channel:read'
        | 'integration:slack_channel:write'
        | 'integration:rate_limit:read'
        | 'integration:rate_limit:write'
        | 'mcp_connection:read'
        | 'mcp_connection:write'
        | 'mcp_connection:shared:read'
        | 'mcp_connection:shared:write'
        | 'model:read'
        | 'model:write'
        | 'project:read'
        | 'project:write'
        | 'project:environment_variable:read'
        | 'project:environment_variable:write'
        | 'project:snapshot:read'
        | 'project:snapshot:write'
        | 'project:build:read'
        | 'project:build:write'
        | 'project:build_detail:read'
        | 'project:build_detail:write'
        | 'project:schedule:read'
        | 'project:schedule:write'
        | 'project:default:read'
        | 'project:default:write'
        | 'project:system_snapshot:read'
        | 'project:system_snapshot:write'
        | 'project:organization_snapshot:read'
        | 'project:organization_snapshot:write'
        | 'sandbox:read'
        | 'sandbox:write'
        | 'sandbox:metric:read'
        | 'sandbox:metric:write'
        | 'sandbox:event:read'
        | 'sandbox:event:write'
        | 'sandbox:size:read'
        | 'sandbox:size:write'
        | 'sandbox:virtual_machine:read'
        | 'sandbox:virtual_machine:write'
        | 'device:read'
        | 'device:write'
        | 'skill:read'
        | 'skill:write'
        | 'skill:marketplace:read'
        | 'skill:marketplace:write'
        | 'insight:read'
        | 'insight:write'
        | 'insight:member:read'
        | 'insight:member:write'
        | 'insight:repository:read'
        | 'insight:repository:write'
        | 'insight:usage:read'
        | 'insight:usage:write'
        | 'file:read'
        | 'file:write'
        | 'pin:read'
        | 'pin:write'
        | 'folder:read'
        | 'folder:write'
        | 'queue:job:read'
        | 'queue:job:write'
        | 'queue:host_manager_job:read'
        | 'queue:host_manager_job:write'
        | 'queue:worker:read'
        | 'queue:worker:write'
        | 'queue:scheduled_job:read'
        | 'queue:scheduled_job:write'
        | 'queue:triggered_job:read'
        | 'queue:triggered_job:write'
        | 'runtime:read'
        | 'runtime:write'
        | 'session:source_credential:read'
        | 'session:source_credential:write'
        | 'device:all:write'
        | 'insight:user:read'
      >;
    }

    export interface Access {
      state: 'blocked' | 'trial' | 'paid';
      canExecute: boolean;
    }
  }
}

export interface OrganizationUpdateParams {
  /**
   * Organization display name.
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * Unique organization URL slug using lowercase letters, numbers, and single hyphens.
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]+(?:-[a-z0-9]+)*$
   */
  slug?: string;
  /**
   * Mark organization onboarding as completed or incomplete.
   */
  onboardingCompleted?: boolean;
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
Organizations.Roles = Roles;
Organizations.Secrets = Secrets;
Organizations.Settings = Settings;
Organizations.Subscriptions = Subscriptions;

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
    Roles as Roles,
    type RoleListResponse as RoleListResponse,
    type RoleCreateResponse as RoleCreateResponse,
    type RoleRetrieveResponse as RoleRetrieveResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleDeleteParams as RoleDeleteParams,
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
    type SettingValidateCredentialsResponse as SettingValidateCredentialsResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingValidateCredentialsParams as SettingValidateCredentialsParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
  };
}
