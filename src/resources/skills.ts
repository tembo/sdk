// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Skills extends APIResource {
  /**
   * List organization skills or skills checked into a repository.
   *
   * @param {SkillListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SkillListResponse>} List skills
   *
   * @example
   * ```ts
   * const skill = await client.skills.list({
   *   limit: '50',
   *   source: 'organization',
   * });
   * ```
   */
  list(
    query: SkillListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillListResponse> {
    return this._client.get('/v1/skills', { query, ...options });
  }

  /**
   * Create an organization skill with its files.
   *
   * @param {SkillCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SkillCreateResponse>} Create a skill
   *
   * @example
   * ```ts
   * const skill = await client.skills.create({
   *   description: '',
   *   name: 'x',
   *   files: [
   *     {
   *       content: '',
   *       filename: 'x',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillCreateResponse> {
    return this._client.post('/v1/skills', { body, ...options });
  }

  /**
   * Retrieve an organization skill and all of its files.
   *
   * @param {string} skillID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SkillRetrieveResponse>} Retrieve a skill
   *
   * @example
   * ```ts
   * const skill = await client.skills.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(skillID: string, options?: RequestOptions): APIPromise<SkillRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/skills/${skillID}`, options);
  }

  /**
   * Update an organization skill. When files are provided, they replace the complete file set.
   *
   * @param {string} skillID
   * @param {SkillUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SkillUpdateResponse>} Update a skill
   *
   * @example
   * ```ts
   * const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
   * ```
   */
  update(
    skillID: string,
    body: SkillUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SkillUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/skills/${skillID}`, { body, ...options });
  }

  /**
   * Delete an organization skill and all of its files.
   *
   * @param {string} skillID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SkillDeleteResponse>} Delete a skill
   *
   * @example
   * ```ts
   * const skill = await client.skills.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(skillID: string, options?: RequestOptions): APIPromise<SkillDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/skills/${skillID}`, options);
  }
}
export interface SkillListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  names?: string | Array<string>;
  repositoryIds?: string | Array<string>;
  /**
   * @minLength 1
   */
  search?: string;
  /**
   * @default organization
   */
  source?: 'organization' | 'repository';
}

export interface SkillListResponse {
  items: Array<SkillListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace SkillListResponse {
  export interface Item {
    description: string;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    keywords: Array<string>;
    source: 'organization' | 'repository';
  }
}

export interface SkillCreateParams {
  description: string;
  /**
   * @minLength 1
   */
  name: string;
  /**
   * @minItems 1
   */
  files: Array<SkillCreateParams.File>;
}

export namespace SkillCreateParams {
  export interface File {
    content: string;
    /**
     * @minLength 1
     */
    filename: string;
  }
}

export interface SkillCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  files: Array<SkillCreateResponse.File>;
}

export namespace SkillCreateResponse {
  export interface File {
    content: string;
    filename: string;
    /**
     * @format uuid
     */
    id: string;
  }
}

export interface SkillRetrieveResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  files: Array<SkillRetrieveResponse.File>;
}

export namespace SkillRetrieveResponse {
  export interface File {
    content: string;
    filename: string;
    /**
     * @format uuid
     */
    id: string;
  }
}

export interface SkillUpdateParams {
  description?: string;
  /**
   * @minLength 1
   */
  name?: string;
  /**
   * @minItems 1
   */
  files?: Array<SkillUpdateParams.File>;
}

export namespace SkillUpdateParams {
  export interface File {
    content: string;
    /**
     * @minLength 1
     */
    filename: string;
  }
}

export interface SkillUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  files: Array<SkillUpdateResponse.File>;
}

export namespace SkillUpdateResponse {
  export interface File {
    content: string;
    filename: string;
    /**
     * @format uuid
     */
    id: string;
  }
}

export interface SkillDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Skills {
  export {
    type SkillListResponse as SkillListResponse,
    type SkillCreateResponse as SkillCreateResponse,
    type SkillRetrieveResponse as SkillRetrieveResponse,
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillListParams as SkillListParams,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
  };
}
