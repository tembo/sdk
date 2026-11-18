// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Folders extends APIResource {
  /**
   * List the sidebar folders you use to organize sessions. Use listSessions with folderId to list the sessions in a folder.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderListResponse>} List folders
   *
   * @example
   * ```ts
   * const folder = await client.folders.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FolderListResponse> {
    return this._client.get('/v1/folders', options);
  }

  /**
   * Create a sidebar folder for organizing sessions. New folders go first in your folder list; use createPin to pin one.
   *
   * @param {FolderCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderCreateResponse>} Create a folder
   *
   * @example
   * ```ts
   * const folder = await client.folders.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    return this._client.post('/v1/folders', { body, ...options });
  }

  /**
   * Rename one of your sidebar folders, change its icon color, move it in your folder list, or add, reorder, or remove its sessions. Use updatePin to move a pinned folder among your pins.
   *
   * @param {string} folderID
   * @param {FolderUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderUpdateResponse>} Update a folder
   *
   * @example
   * ```ts
   * const folder = await client.folders.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
   * ```
   */
  update(
    folderID: string,
    body: FolderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FolderUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/folders/${folderID}`, { body, ...options });
  }

  /**
   * Delete one of your sidebar folders. Its sessions are kept and return to your recent sessions.
   *
   * @param {string} folderID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteResponse>} Delete a folder
   *
   * @example
   * ```ts
   * const folder = await client.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(folderID: string, options?: RequestOptions): APIPromise<FolderDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/folders/${folderID}`, options);
  }
}

export interface FolderListResponse {
  /**
   * Your folders in sidebar order.
   */
  items: Array<FolderListResponse.Item>;
}

export namespace FolderListResponse {
  export interface Item {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    name: string;
    /**
     * Folder icon color, from the same palette as project icons.
     */
    color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    createdAt: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updatedAt: string;
  }
}

export interface FolderCreateParams {
  /**
   * Folder name shown in the sidebar.
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Folder icon color. Defaults to neutral.
   */
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
}

export interface FolderCreateResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  name: string;
  /**
   * Folder icon color, from the same palette as project icons.
   */
  color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
}

export interface FolderUpdateParams {
  /**
   * Folder name shown in the sidebar.
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * Folder icon color, from the same palette as project icons.
   */
  color?: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  /**
   * Where to put this folder in your sidebar folder list. Pinned folders are ordered with updatePin instead.
   */
  placement?: FolderUpdateParams.Placement;
  /**
   * Session to put in this folder, taking it out of any other folder of yours, or to reorder within it.
   */
  addSession?: FolderUpdateParams.AddSession;
  /**
   * Session to take out of this folder.
   */
  removeSession?: FolderUpdateParams.RemoveSession;
}

export namespace FolderUpdateParams {
  export interface Placement {
    /**
     * Another of your folders to place this folder next to.
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    target: string;
    /**
     * Whether to place this folder before or after the target.
     */
    position: 'before' | 'after';
  }

  export interface AddSession {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
    /**
     * Where to put the session in the folder. Omit to put a newly added session first and leave one already here where it is.
     */
    placement?: AddSession.Placement;
  }

  export namespace AddSession {
    export interface Placement {
      /**
       * Session in this folder to place the added session next to.
       * @format uuid
       * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
       */
      target: string;
      /**
       * Whether to place the session before or after the target.
       */
      position: 'before' | 'after';
    }
  }

  export interface RemoveSession {
    /**
     * @format uuid
     * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
     */
    id: string;
  }
}

export interface FolderUpdateResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  name: string;
  /**
   * Folder icon color, from the same palette as project icons.
   */
  color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  createdAt: string;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
   */
  updatedAt: string;
}

export interface FolderDeleteResponse {
  /**
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
   */
  id: string;
  deleted: true;
}
export declare namespace Folders {
  export {
    type FolderListResponse as FolderListResponse,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderUpdateResponse as FolderUpdateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderUpdateParams as FolderUpdateParams,
  };
}
