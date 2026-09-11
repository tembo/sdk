// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class EnvironmentVariables extends APIResource {
  /**
   * List environment-variable names without exposing values.
   *
   * @param {string} projectID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableListResponse>} List project environment variables
   *
   * @example
   * ```ts
   * const environmentVariable = await client.projects.environmentVariables.list('projectId');
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<EnvironmentVariableListResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/environment-variables`, options);
  }

  /**
   * Create one or more encrypted project environment variables.
   *
   * @param {string} projectID
   * @param {EnvironmentVariableCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableCreateResponse>} Create project environment variables
   *
   * @example
   * ```ts
   * const environmentVariable = await client.projects.environmentVariables.create('projectId', {
   *   secrets: [
   *     {
   *       key: '',
   *       value: 'x',
   *     },
   *   ],
   * });
   * ```
   */
  create(
    projectID: string,
    body: EnvironmentVariableCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableCreateResponse> {
    return this._client.post(__scalarPath`/v1/projects/${projectID}/environment-variables`, {
      body,
      ...options,
    });
  }

  /**
   * Delete one encrypted project environment variable.
   *
   * @param {string} key
   * @param {EnvironmentVariableDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableDeleteResponse>} Delete a project environment variable
   *
   * @example
   * ```ts
   * const environmentVariable = await client.projects.environmentVariables.delete('key', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(
    key: string,
    params: EnvironmentVariableDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableDeleteResponse> {
    const { projectId } = params;
    return this._client.delete(__scalarPath`/v1/projects/${projectId}/environment-variables/${key}`, options);
  }
}

export interface EnvironmentVariableListResponse {
  items: Array<EnvironmentVariableListResponse.Item>;
}

export namespace EnvironmentVariableListResponse {
  export interface Item {
    /**
     * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
     */
    key: string;
  }
}

export interface EnvironmentVariableCreateParams {
  /**
   * @minItems 1
   * @maxItems 100
   */
  secrets: Array<EnvironmentVariableCreateParams.Secret>;
}

export namespace EnvironmentVariableCreateParams {
  export interface Secret {
    /**
     * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
     */
    key: string;
    /**
     * @minLength 1
     * @maxLength 10000
     */
    value: string;
  }
}

export interface EnvironmentVariableCreateResponse {
  items: Array<EnvironmentVariableCreateResponse.Item>;
}

export namespace EnvironmentVariableCreateResponse {
  export interface Item {
    /**
     * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
     */
    key: string;
  }
}

export interface EnvironmentVariableDeleteParams {
  /**
   * @minLength 1
   * @maxLength 255
   */
  projectId: string;
}

export interface EnvironmentVariableDeleteResponse {
  deleted: true;
  /**
   * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
   */
  key: string;
}
export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableDeleteResponse as EnvironmentVariableDeleteResponse,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}
