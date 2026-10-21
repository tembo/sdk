// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Commands extends APIResource {
  /**
   * List slash commands available to the session runtime.
   *
   * @param {string} sessionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CommandListResponse>} List session commands
   *
   * @example
   * ```ts
   * const command = await client.sessions.commands.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  list(sessionID: string, options?: RequestOptions): APIPromise<CommandListResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/commands`, options);
  }
}

export interface CommandListResponse {
  items: Array<CommandListResponse.Item>;
  nextCursor: null;
  cached: boolean;
}

export namespace CommandListResponse {
  export interface Item {
    name: string;
    command: string;
    source: 'builtin' | 'project' | 'mcp' | 'skill' | 'unknown';
    description?: string;
    argumentHint?: string;
  }
}
export declare namespace Commands {
  export { type CommandListResponse as CommandListResponse };
}
