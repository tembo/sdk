// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import * as EnvironmentVariablesAPI from './environment-variables';
import {
  EnvironmentVariables,
  type EnvironmentVariableListResponse,
  type EnvironmentVariableCreateResponse,
  type EnvironmentVariableDeleteResponse,
  type EnvironmentVariableCreateParams,
  type EnvironmentVariableDeleteParams,
} from './environment-variables';
import * as SnapshotsAPI from './snapshots';
import {
  Snapshots,
  type SnapshotListResponse,
  type SnapshotRetrieveResponse,
  type SnapshotUpdateResponse,
  type SnapshotDeleteResponse,
  type SnapshotListParams,
  type SnapshotRetrieveParams,
  type SnapshotUpdateParams,
  type SnapshotDeleteParams,
} from './snapshots';
import * as BuildsAPI from './builds';
import {
  Builds,
  type BuildListResponse,
  type BuildCreateResponse,
  type BuildRetrieveResponse,
  type BuildCancelResponse,
  type BuildListParams,
  type BuildCreateParams,
  type BuildRetrieveParams,
  type BuildCancelParams,
} from './builds';
import * as SchedulesAPI from './schedules';
import {
  Schedules,
  type ScheduleListResponse,
  type ScheduleCreateResponse,
  type ScheduleRetrieveResponse,
  type ScheduleUpdateResponse,
  type ScheduleDeleteResponse,
  type ScheduleListParams,
  type ScheduleCreateParams,
  type ScheduleRetrieveParams,
  type ScheduleUpdateParams,
  type ScheduleDeleteParams,
} from './schedules';

export class Projects extends APIResource {
  environmentVariables: EnvironmentVariablesAPI.EnvironmentVariables =
    new EnvironmentVariablesAPI.EnvironmentVariables(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  builds: BuildsAPI.Builds = new BuildsAPI.Builds(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);

  /**
   * Choose the default project and sandbox size for the organization.
   *
   * @param {ProjectUpdateDefaultsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectUpdateDefaultsResponse>} Update project defaults
   *
   * @example
   * ```ts
   * const project = await client.projects.updateDefaults({
   *   projectId: 'x',
   *   sandboxSize: 'nano',
   * });
   * ```
   */
  updateDefaults(
    body: ProjectUpdateDefaultsParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateDefaultsResponse> {
    return this._client.put('/v1/projects/defaults', { body, ...options });
  }

  /**
   * List projects in the authenticated organization.
   *
   * @param {ProjectListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectListResponse>} List projects
   *
   * @example
   * ```ts
   * const project = await client.projects.list({
   *   limit: 50,
   * });
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', { query, ...options });
  }

  /**
   * Create a reusable project environment.
   *
   * @param {ProjectCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectCreateResponse>} Create a project
   *
   * @example
   * ```ts
   * const project = await client.projects.create({
   *   name: 'x',
   *   sizes: ['nano'],
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Retrieve project configuration. Use the project subresources to list snapshots, builds, schedules, and environment variables.
   *
   * @param {string} projectID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectRetrieveResponse>} Retrieve a project
   *
   * @example
   * ```ts
   * const project = await client.projects.retrieve('projectId');
   * ```
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}`, options);
  }

  /**
   * Update project configuration fields.
   *
   * @param {string} projectID
   * @param {ProjectUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectUpdateResponse>} Update a project
   *
   * @example
   * ```ts
   * const project = await client.projects.update('projectId', {});
   * ```
   */
  update(
    projectID: string,
    body: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/projects/${projectID}`, { body, ...options });
  }

  /**
   * Archive a project and disable its schedule.
   *
   * @param {string} projectID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectDeleteResponse>} Delete a project
   *
   * @example
   * ```ts
   * const project = await client.projects.delete('projectId');
   * ```
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<ProjectDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/projects/${projectID}`, options);
  }
}

export interface ProjectUpdateDefaultsParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
}

export interface ProjectUpdateDefaultsResponse {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string | null;
  sandboxSize: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
}

export interface ProjectListParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string | number;
  defaultOnly?: 'true';
  /**
   * @minLength 1
   * @maxLength 120
   */
  search?: string;
}

export interface ProjectListResponse {
  hasBuiltSnapshot: boolean;
  items: Array<ProjectListResponse.Item>;
  /**
   * @minLength 1
   * @maxLength 255
   */
  nextCursor: string | null;
}

export namespace ProjectListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    createdAt: string;
    description: string | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    includeDeps: boolean;
    includeSkills: boolean;
    name: string;
    setupScript: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    activeSnapshots: Array<Item.ActiveSnapshot>;
    /**
     * @maxLength 20000
     */
    agentInstructions: string | null;
    codeRepositoryIds: Array<string> | null;
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    defaultForSizes: Array<'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    sizes: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
    warmPoolEnabled: boolean;
  }

  export namespace Item {
    export interface ActiveSnapshot {
      /**
       * @minLength 1
       * @maxLength 255
       */
      id: string;
      size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
      /**
       * @format date-time
       */
      builtAt: string;
    }
  }
}

export interface ProjectCreateParams {
  /**
   * @minLength 1
   * @maxLength 120
   */
  name: string;
  /**
   * @minItems 1
   */
  sizes: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  /**
   * @maxLength 300
   */
  description?: string | null;
  includeDeps?: boolean;
  includeSkills?: boolean;
  /**
   * @maxLength 20000
   */
  setupScript?: string | null;
  codeRepositoryIds?: Array<string> | null;
  /**
   * @maxLength 20000
   */
  agentInstructions?: string | null;
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  icon?:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  runNow?: boolean;
  schedule?: ProjectCreateParams.Schedule;
}

export namespace ProjectCreateParams {
  export interface Schedule {
    /**
     * @minLength 1
     * @maxLength 120
     */
    cron: string;
    /**
     * @minLength 1
     * @maxLength 100
     */
    timezone?: string;
  }
}

export interface ProjectCreateResponse {
  jobIds: Array<string>;
  project: ProjectCreateResponse.Project;
}

export namespace ProjectCreateResponse {
  export interface Project {
    /**
     * @format date-time
     */
    createdAt: string;
    description: string | null;
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    includeDeps: boolean;
    includeSkills: boolean;
    name: string;
    setupScript: string | null;
    /**
     * @format date-time
     */
    updatedAt: string;
    activeSnapshots: Array<Project.ActiveSnapshot>;
    /**
     * @maxLength 20000
     */
    agentInstructions: string | null;
    codeRepositoryIds: Array<string> | null;
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    defaultForSizes: Array<'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
    icon:
      | 'folder'
      | 'code'
      | 'terminal'
      | 'book'
      | 'brain'
      | 'bug'
      | 'building'
      | 'cloud'
      | 'globe'
      | 'idea'
      | 'tools'
      | 'magic'
      | 'processor'
      | 'sandbox'
      | 'server'
      | 'tasks'
      | 'tactics'
      | 'images'
      | 'database'
      | 'api'
      | 'mobile'
      | 'package';
    sizes: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
    warmPoolEnabled: boolean;
  }

  export namespace Project {
    export interface ActiveSnapshot {
      /**
       * @minLength 1
       * @maxLength 255
       */
      id: string;
      size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
      /**
       * @format date-time
       */
      builtAt: string;
    }
  }
}

export interface ProjectRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  includeDeps: boolean;
  includeSkills: boolean;
  name: string;
  setupScript: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  activeSnapshots: Array<ProjectRetrieveResponse.ActiveSnapshot>;
  /**
   * @maxLength 20000
   */
  agentInstructions: string | null;
  codeRepositoryIds: Array<string> | null;
  color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  defaultForSizes: Array<'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  icon:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  sizes: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  warmPoolEnabled: boolean;
}

export namespace ProjectRetrieveResponse {
  export interface ActiveSnapshot {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    /**
     * @format date-time
     */
    builtAt: string;
  }
}

export interface ProjectUpdateParams {
  /**
   * @maxLength 300
   */
  description?: string | null;
  includeDeps?: boolean;
  includeSkills?: boolean;
  /**
   * @minLength 1
   * @maxLength 120
   */
  name?: string;
  /**
   * @maxLength 20000
   */
  setupScript?: string | null;
  codeRepositoryIds?: Array<string> | null;
  /**
   * @maxLength 20000
   */
  agentInstructions?: string | null;
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  icon?:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  defaultForSizes?: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  environmentVariables?: Record<string, string>;
  schedule?: ProjectUpdateParams.Schedule;
  /**
   * @minItems 1
   */
  sizes?: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  warmPoolEnabled?: boolean;
}

export namespace ProjectUpdateParams {
  export interface Schedule {
    /**
     * @minLength 1
     * @maxLength 120
     */
    cron?: string;
    enabled?: boolean;
    /**
     * @minLength 1
     * @maxLength 100
     */
    timezone?: string | null;
  }
}

export interface ProjectUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
  includeDeps: boolean;
  includeSkills: boolean;
  name: string;
  setupScript: string | null;
  /**
   * @format date-time
   */
  updatedAt: string;
  activeSnapshots: Array<ProjectUpdateResponse.ActiveSnapshot>;
  /**
   * @maxLength 20000
   */
  agentInstructions: string | null;
  codeRepositoryIds: Array<string> | null;
  color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  defaultForSizes: Array<'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  icon:
    | 'folder'
    | 'code'
    | 'terminal'
    | 'book'
    | 'brain'
    | 'bug'
    | 'building'
    | 'cloud'
    | 'globe'
    | 'idea'
    | 'tools'
    | 'magic'
    | 'processor'
    | 'sandbox'
    | 'server'
    | 'tasks'
    | 'tactics'
    | 'images'
    | 'database'
    | 'api'
    | 'mobile'
    | 'package';
  sizes: Array<'nano' | 'micro' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra'>;
  warmPoolEnabled: boolean;
}

export namespace ProjectUpdateResponse {
  export interface ActiveSnapshot {
    /**
     * @minLength 1
     * @maxLength 255
     */
    id: string;
    size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'ultra';
    /**
     * @format date-time
     */
    builtAt: string;
  }
}

export interface ProjectDeleteResponse {
  deleted: true;
  /**
   * @minLength 1
   * @maxLength 255
   */
  id: string;
}
Projects.EnvironmentVariables = EnvironmentVariables;
Projects.Snapshots = Snapshots;
Projects.Builds = Builds;
Projects.Schedules = Schedules;

export declare namespace Projects {
  export {
    type ProjectUpdateDefaultsResponse as ProjectUpdateDefaultsResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectUpdateDefaultsParams as ProjectUpdateDefaultsParams,
    type ProjectListParams as ProjectListParams,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    EnvironmentVariables as EnvironmentVariables,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableDeleteResponse as EnvironmentVariableDeleteResponse,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };

  export {
    Snapshots as Snapshots,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotDeleteResponse as SnapshotDeleteResponse,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotUpdateParams as SnapshotUpdateParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };

  export {
    Builds as Builds,
    type BuildListResponse as BuildListResponse,
    type BuildCreateResponse as BuildCreateResponse,
    type BuildRetrieveResponse as BuildRetrieveResponse,
    type BuildCancelResponse as BuildCancelResponse,
    type BuildListParams as BuildListParams,
    type BuildCreateParams as BuildCreateParams,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildCancelParams as BuildCancelParams,
  };

  export {
    Schedules as Schedules,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
