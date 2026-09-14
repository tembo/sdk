// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class McpConnections extends APIResource {
  /**
   * List MCP connections for the current organization with cursor pagination and optional search by name or URL. Command arguments, headers, and environment configuration are omitted.
   *
   * @param {McpConnectionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionListResponse>} List MCP connections
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: McpConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpConnectionListResponse> {
    return this._client.get('/v1/mcp-connections', { query, ...options });
  }

  /**
   * Create a new stdio or Streamable HTTP MCP connection. Remote connections support OAuth, client credentials, or static headers and begin authorization when required; stdio commands are stored but never executed by this API.
   *
   * @param {McpConnectionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionCreateResponse>} Create an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.create({
   *   name: 'x',
   *   args: [],
   *   command: 'x',
   *   type: 'stdio',
   *   visibility: 'shared',
   * });
   * ```
   */
  create(body: McpConnectionCreateParams, options?: RequestOptions): APIPromise<McpConnectionCreateResponse> {
    return this._client.post('/v1/mcp-connections', { body, ...options });
  }

  /**
   * Retrieve MCP connection configuration and authentication details. Stored header values, environment values, OAuth tokens, and client secrets are never returned.
   *
   * @param {string} mcpConnectionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionRetrieveResponse>} Retrieve an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(mcpConnectionID: string, options?: RequestOptions): APIPromise<McpConnectionRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/mcp-connections/${mcpConnectionID}`, options);
  }

  /**
   * Update MCP configuration. Header and environment objects merge write-only values by key, null values remove individual keys, and a null environment clears all variables. Hidden credentials are preserved unless explicitly changed or authentication is replaced; changing a remote server URL clears credentials for the old server. Call authorize explicitly after changing the server or authentication to reconnect.
   *
   * @param {string} mcpConnectionID
   * @param {McpConnectionUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionUpdateResponse>} Update an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   type: 'remote',
   * });
   * ```
   */
  update(
    mcpConnectionID: string,
    body: McpConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<McpConnectionUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/mcp-connections/${mcpConnectionID}`, { body, ...options });
  }

  /**
   * Delete an MCP connection from the current organization.
   *
   * @param {string} mcpConnectionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionDeleteResponse>} Delete an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(mcpConnectionID: string, options?: RequestOptions): APIPromise<McpConnectionDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/mcp-connections/${mcpConnectionID}`, options);
  }

  /**
   * Connect or authorize a remote Streamable HTTP MCP connection, returning an OAuth URL when user authorization is required. Stdio connections are rejected because this action cannot authorize them.
   *
   * @param {string} mcpConnectionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionAuthorizeResponse>} Authorize an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  authorize(mcpConnectionID: string, options?: RequestOptions): APIPromise<McpConnectionAuthorizeResponse> {
    return this._client.post(__scalarPath`/v1/mcp-connections/${mcpConnectionID}/authorize`, options);
  }

  /**
   * Test a remote MCP connection by connecting to its server. Stdio connections are rejected because the API does not execute arbitrary local commands.
   *
   * @param {string} mcpConnectionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpConnectionTestResponse>} Test an MCP connection
   *
   * @example
   * ```ts
   * const mcpConnection = await client.mcpConnections.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  test(mcpConnectionID: string, options?: RequestOptions): APIPromise<McpConnectionTestResponse> {
    return this._client.post(__scalarPath`/v1/mcp-connections/${mcpConnectionID}/test`, options);
  }
}

export interface McpConnectionListParams {
  connected?: 'true' | 'false';
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
}

export interface McpConnectionListResponse {
  items: Array<McpConnectionListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace McpConnectionListResponse {
  export interface Item {
    /**
     * @format date-time
     */
    connectedAt: string | null;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    serverUrl: string | null;
    type: 'remote' | 'stdio';
    visibility: 'shared' | 'personal';
  }
}

export type McpConnectionCreateParams =
  | McpConnectionCreateParams.Variant0
  | McpConnectionCreateParams.Variant1;

export declare namespace McpConnectionCreateParams {
  export interface Variant0 {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /**
     * @minLength 1
     * @maxLength 4096
     */
    command: string;
    type: 'stdio';
    /**
     * @default []
     * @maxItems 100
     */
    args?: Array<string>;
    env?: Record<string, string>;
    /**
     * @default shared
     */
    visibility?: 'shared' | 'personal';
  }

  export interface Variant1 {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /**
     * @format uri
     */
    serverUrl: string;
    /**
     * @default oauth
     */
    authType?: 'oauth' | 'client_credentials' | 'static_headers';
    /**
     * @minLength 1
     * @maxLength 4096
     */
    clientId?: string;
    /**
     * @minLength 1
     * @maxLength 65536
     */
    clientSecret?: string;
    headers?: Record<string, string>;
    /**
     * @default automatic
     */
    oauthRegistration?: 'automatic' | 'pre_registered';
    /**
     * @minLength 1
     * @maxLength 4096
     */
    scope?: string;
    /**
     * @default remote
     */
    type?: 'remote';
    /**
     * @default shared
     */
    visibility?: 'shared' | 'personal';
  }
}

export interface McpConnectionCreateResponse {
  /**
   * @format uri
   */
  authorizationUrl: string | null;
  connection: McpConnectionCreateResponse.Connection;
}

export namespace McpConnectionCreateResponse {
  export interface Connection {
    /**
     * @format date-time
     */
    connectedAt: string | null;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    serverUrl: string | null;
    type: 'remote' | 'stdio';
    visibility: 'shared' | 'personal';
    /**
     * @maxItems 100
     */
    args: Array<string> | null;
    authType: 'oauth' | 'client_credentials' | 'static_headers' | null;
    command: string | null;
    /**
     * @format date-time
     */
    createdAt: string;
    envKeys: Array<string>;
    headerKeys: Array<string>;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface McpConnectionRetrieveResponse {
  /**
   * @format date-time
   */
  connectedAt: string | null;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  serverUrl: string | null;
  type: 'remote' | 'stdio';
  visibility: 'shared' | 'personal';
  /**
   * @maxItems 100
   */
  args: Array<string> | null;
  authType: 'oauth' | 'client_credentials' | 'static_headers' | null;
  command: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  envKeys: Array<string>;
  headerKeys: Array<string>;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export type McpConnectionUpdateParams =
  | McpConnectionUpdateParams.Variant0
  | McpConnectionUpdateParams.Variant1;

export declare namespace McpConnectionUpdateParams {
  export interface Variant0 {
    type: 'remote';
    /**
     * @minLength 1
     * @maxLength 200
     */
    name?: string;
    /**
     * @format uri
     */
    serverUrl?: string;
    authType?: 'oauth' | 'client_credentials' | 'static_headers';
    /**
     * @minLength 1
     * @maxLength 4096
     */
    clientId?: string;
    /**
     * @minLength 1
     * @maxLength 65536
     */
    clientSecret?: string;
    headers?: Record<string, string | null> | null;
    oauthRegistration?: 'automatic' | 'pre_registered';
    /**
     * @minLength 1
     * @maxLength 4096
     */
    scope?: string;
  }

  export interface Variant1 {
    type: 'stdio';
    /**
     * @minLength 1
     * @maxLength 4096
     */
    command?: string;
    /**
     * @minLength 1
     * @maxLength 200
     */
    name?: string;
    /**
     * @maxItems 100
     */
    args?: Array<string> | null;
    env?: Record<string, string | null> | null;
  }
}

export interface McpConnectionUpdateResponse {
  /**
   * @format date-time
   */
  connectedAt: string | null;
  /**
   * @format uuid
   */
  id: string;
  name: string;
  serverUrl: string | null;
  type: 'remote' | 'stdio';
  visibility: 'shared' | 'personal';
  /**
   * @maxItems 100
   */
  args: Array<string> | null;
  authType: 'oauth' | 'client_credentials' | 'static_headers' | null;
  command: string | null;
  /**
   * @format date-time
   */
  createdAt: string;
  envKeys: Array<string>;
  headerKeys: Array<string>;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface McpConnectionDeleteResponse {
  deleted: true;
  /**
   * @format uuid
   */
  id: string;
}

export interface McpConnectionAuthorizeResponse {
  /**
   * @format uri
   */
  authorizationUrl: string | null;
  connection: McpConnectionAuthorizeResponse.Connection;
}

export namespace McpConnectionAuthorizeResponse {
  export interface Connection {
    /**
     * @format date-time
     */
    connectedAt: string | null;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    serverUrl: string | null;
    type: 'remote' | 'stdio';
    visibility: 'shared' | 'personal';
    /**
     * @maxItems 100
     */
    args: Array<string> | null;
    authType: 'oauth' | 'client_credentials' | 'static_headers' | null;
    command: string | null;
    /**
     * @format date-time
     */
    createdAt: string;
    envKeys: Array<string>;
    headerKeys: Array<string>;
    /**
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface McpConnectionTestResponse {
  success: true;
}
export declare namespace McpConnections {
  export {
    type McpConnectionListResponse as McpConnectionListResponse,
    type McpConnectionCreateResponse as McpConnectionCreateResponse,
    type McpConnectionRetrieveResponse as McpConnectionRetrieveResponse,
    type McpConnectionUpdateResponse as McpConnectionUpdateResponse,
    type McpConnectionDeleteResponse as McpConnectionDeleteResponse,
    type McpConnectionAuthorizeResponse as McpConnectionAuthorizeResponse,
    type McpConnectionTestResponse as McpConnectionTestResponse,
    type McpConnectionListParams as McpConnectionListParams,
    type McpConnectionCreateParams as McpConnectionCreateParams,
    type McpConnectionUpdateParams as McpConnectionUpdateParams,
  };
}
