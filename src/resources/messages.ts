// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AgentsAPI from './agents/agents';

export class Messages extends APIResource {
  /**
   * List organization messages with optional session and thread filters.
   *
   * @param {MessageListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MessageListResponse>} List messages
   *
   * @example
   * ```ts
   * const message = await client.messages.list({
   *   limit: '50',
   * });
   * ```
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/v1/messages', { query, ...options });
  }

  /**
   * Create a user message for a session and submit it to the session agent.
   *
   * @param {MessageCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MessageCreateResponse>} Create a message
   *
   * @example
   * ```ts
   * const message = await client.messages.create({
   *   content: 'x',
   *   sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<MessageCreateResponse> {
    return this._client.post('/v1/messages', { body, ...options });
  }

  /**
   * Retrieve an organization message by ID.
   *
   * @param {string} messageID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MessageRetrieveResponse>} Retrieve a message
   *
   * @example
   * ```ts
   * const message = await client.messages.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/messages/${messageID}`, options);
  }

  /**
   * Update message content before its queued processing has started.
   *
   * @param {string} messageID
   * @param {MessageUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MessageUpdateResponse>} Update a message
   *
   * @example
   * ```ts
   * const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
   * ```
   */
  update(
    messageID: string,
    body: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessageUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/messages/${messageID}`, { body, ...options });
  }

  /**
   * Delete a message and cancel its queued jobs, runtime turns, and active sandbox sessions.
   *
   * @param {string} messageID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MessageDeleteResponse>} Delete a message
   *
   * @example
   * ```ts
   * const message = await client.messages.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(messageID: string, options?: RequestOptions): APIPromise<MessageDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/messages/${messageID}`, options);
  }
}

/**
 * Rich-text document containing text, formatting, images, and mentions. A document typically has a "doc" root with nested content nodes.
 */
export type TipTapDocument =
  | TipTapImageNode
  | TipTapMentionNode
  | TipTapHeadingNode
  | TipTapOrderedListNode
  | TipTapTaskItemNode
  | TipTapCodeBlockNode
  | TipTapContentNode
  | Record<string, unknown>;

export type TipTapNode =
  | TipTapImageNode
  | TipTapMentionNode
  | TipTapHeadingNode
  | TipTapOrderedListNode
  | TipTapTaskItemNode
  | TipTapCodeBlockNode
  | TipTapContentNode;

export interface TipTapImageNode {
  type: 'image';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapImageAttributes;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export interface TipTapMentionNode {
  type: 'mention';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapMentionAttributes;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export interface TipTapHeadingNode {
  type: 'heading';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapHeadingNode.Attrs;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export namespace TipTapHeadingNode {
  export interface Attrs {
    /**
     * @minimum 1
     * @maximum 6
     */
    level?: number;
    [k: string]: unknown;
  }
}

export interface TipTapOrderedListNode {
  type: 'orderedList';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapOrderedListNode.Attrs;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export namespace TipTapOrderedListNode {
  export interface Attrs {
    start?: number;
    type?: string | null;
    [k: string]: unknown;
  }
}

export interface TipTapTaskItemNode {
  type: 'taskItem';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapTaskItemNode.Attrs;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export namespace TipTapTaskItemNode {
  export interface Attrs {
    checked?: boolean;
    [k: string]: unknown;
  }
}

export interface TipTapCodeBlockNode {
  type: 'codeBlock';
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  attrs?: TipTapCodeBlockNode.Attrs;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export namespace TipTapCodeBlockNode {
  export interface Attrs {
    language?: string | null;
    [k: string]: unknown;
  }
}

export interface TipTapContentNode {
  /**
   * @maxLength 1000000
   */
  text?: string;
  /**
   * @maxItems 1000
   */
  marks?: Array<TipTapLinkMark | TipTapMark>;
  /**
   * @minLength 1
   * @maxLength 100
   */
  type?: string;
  attrs?: TipTapExtensionAttributes;
  /**
   * @maxItems 10000
   */
  content?: Array<TipTapNode>;
  [k: string]: unknown;
}

export interface TipTapLinkMark {
  type: 'link';
  attrs?: TipTapLinkMark.Attrs;
  [k: string]: unknown;
}

export namespace TipTapLinkMark {
  export interface Attrs {
    href?: string | null;
    target?: string | null;
    rel?: string | null;
    class?: string | null;
    title?: string | null;
    [k: string]: unknown;
  }
}

export interface TipTapMark {
  /**
   * @minLength 1
   * @maxLength 100
   */
  type: string;
  attrs?: TipTapExtensionAttributes;
  [k: string]: unknown;
}

export interface TipTapImageAttributes {
  src?: string | null;
  alt?: string | null;
  title?: string | null;
  width?: string | null;
  'data-uploading'?: string | null;
  'data-placeholder-id'?: string | null;
  'upload-progress'?: string | null;
  [k: string]: unknown;
}

export interface TipTapMentionAttributes {
  id?: string | null;
  label?: string | null;
  type?: string | null;
  mentionSuggestionChar?: string | null;
  metadata?: TipTapMentionAttributes.Metadata | null;
  [k: string]: unknown;
}

export namespace TipTapMentionAttributes {
  export interface Metadata {
    integrationType?: string;
    codeRepositoryId?: string;
    isHeader?: boolean;
    argumentHint?: string;
    commandName?: string;
    source?: string;
    [k: string]: unknown;
  }
}

export type TipTapExtensionAttributes = Record<string, unknown>;

export interface MessageListParams {
  /**
   * @format uuid
   */
  cursor?: string;
  /**
   * @default 50
   */
  limit?: string;
  /**
   * @format uuid
   */
  sessionId?: string;
  /**
   * @format uuid
   */
  threadId?: string;
}

export interface MessageListResponse {
  items: Array<MessageListResponse.Item>;
  /**
   * @format uuid
   */
  nextCursor: string | null;
}

export namespace MessageListResponse {
  export interface Item {
    /**
     * @format uuid
     */
    artifactId: string | null;
    content: string;
    /**
     * @format date-time
     */
    createdAt: string;
    createdBy: string | null;
    externalAvatarUrl: string | null;
    externalUrl: string | null;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uuid
     */
    parentMessageId: string | null;
    /**
     * @format uuid
     */
    pullRequestId: string | null;
    role: 'user' | 'assistant' | 'system';
    /**
     * @format uuid
     */
    sessionId: string | null;
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * Rich-text representation of the message, including formatting and mentions. The content field contains its text representation.
     */
    richContent: TipTapDocument | null;
    slashCommand: Item.SlashCommand | null;
    /**
     * @maxLength 100
     */
    source: string | null;
  }

  export namespace Item {
    export interface SlashCommand {
      /**
       * @minLength 1
       * @maxLength 200
       */
      command: string;
      /**
       * @maxLength 100000
       */
      arguments?: string;
    }
  }
}

export interface MessageCreateParams {
  /**
   * @minLength 1
   * @maxLength 1000000
   */
  content: string;
  /**
   * @format uuid
   */
  sessionId: string;
  /**
   * @format uuid
   */
  artifactId?: string;
  /**
   * @maxItems 100
   */
  mcpServers?: Array<string>;
  /**
   * @format uuid
   */
  pullRequestId?: string;
  /**
   * Execution settings for the selected agent runtime, including provider-specific options.
   */
  agentOptions?: AgentsAPI.AgentOptionsInput;
  deliveryMode?: 'queue' | 'steer';
  /**
   * Optional rich-text representation of the message. Provide the required text content separately.
   */
  richContent?: TipTapDocument;
  slashCommand?: MessageCreateParams.SlashCommand;
}

export namespace MessageCreateParams {
  export interface SlashCommand {
    /**
     * @minLength 1
     * @maxLength 200
     */
    command: string;
    /**
     * @maxLength 100000
     */
    arguments?: string;
  }
}

export interface MessageCreateResponse {
  hotPath: MessageCreateResponse.HotPath | null;
  job: MessageCreateResponse.Job | null;
  message: MessageCreateResponse.Message;
  session: MessageCreateResponse.Session;
}

export namespace MessageCreateResponse {
  export interface HotPath {
    activeProviderTurnId?: string | null;
    mode?: 'started' | 'steered' | 'queued';
    providerSessionId?: string | null;
    queuedTurnId?: string | null;
    transport?: string;
  }

  export interface Job {
    /**
     * @format uuid
     */
    id: string;
    task: string;
  }

  export interface Message {
    /**
     * @format uuid
     */
    artifactId: string | null;
    content: string;
    /**
     * @format date-time
     */
    createdAt: string;
    createdBy: string | null;
    externalAvatarUrl: string | null;
    externalUrl: string | null;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format uuid
     */
    parentMessageId: string | null;
    /**
     * @format uuid
     */
    pullRequestId: string | null;
    role: 'user' | 'assistant' | 'system';
    /**
     * @format uuid
     */
    sessionId: string | null;
    type: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    /**
     * Rich-text representation of the message, including formatting and mentions. The content field contains its text representation.
     */
    richContent: TipTapDocument | null;
    slashCommand: Message.SlashCommand | null;
    /**
     * @maxLength 100
     */
    source: string | null;
    isQueued: boolean;
  }

  export namespace Message {
    export interface SlashCommand {
      /**
       * @minLength 1
       * @maxLength 200
       */
      command: string;
      /**
       * @maxLength 100000
       */
      arguments?: string;
    }
  }

  export interface Session {
    /**
     * @format uuid
     */
    id: string;
    title: string;
  }
}

export interface MessageRetrieveResponse {
  /**
   * @format uuid
   */
  artifactId: string | null;
  content: string;
  /**
   * @format date-time
   */
  createdAt: string;
  createdBy: string | null;
  externalAvatarUrl: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format uuid
   */
  parentMessageId: string | null;
  /**
   * @format uuid
   */
  pullRequestId: string | null;
  role: 'user' | 'assistant' | 'system';
  /**
   * @format uuid
   */
  sessionId: string | null;
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * Rich-text representation of the message, including formatting and mentions. The content field contains its text representation.
   */
  richContent: TipTapDocument | null;
  slashCommand: MessageRetrieveResponse.SlashCommand | null;
  /**
   * @maxLength 100
   */
  source: string | null;
}

export namespace MessageRetrieveResponse {
  export interface SlashCommand {
    /**
     * @minLength 1
     * @maxLength 200
     */
    command: string;
    /**
     * @maxLength 100000
     */
    arguments?: string;
  }
}

export interface MessageUpdateParams {
  /**
   * @minLength 1
   * @maxLength 1000000
   */
  content?: string;
  richContent?: TipTapDocument | null;
}

export interface MessageUpdateResponse {
  /**
   * @format uuid
   */
  artifactId: string | null;
  content: string;
  /**
   * @format date-time
   */
  createdAt: string;
  createdBy: string | null;
  externalAvatarUrl: string | null;
  externalUrl: string | null;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format uuid
   */
  parentMessageId: string | null;
  /**
   * @format uuid
   */
  pullRequestId: string | null;
  role: 'user' | 'assistant' | 'system';
  /**
   * @format uuid
   */
  sessionId: string | null;
  type: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  /**
   * Rich-text representation of the message, including formatting and mentions. The content field contains its text representation.
   */
  richContent: TipTapDocument | null;
  slashCommand: MessageUpdateResponse.SlashCommand | null;
  /**
   * @maxLength 100
   */
  source: string | null;
}

export namespace MessageUpdateResponse {
  export interface SlashCommand {
    /**
     * @minLength 1
     * @maxLength 200
     */
    command: string;
    /**
     * @maxLength 100000
     */
    arguments?: string;
  }
}

export interface MessageDeleteResponse {
  /**
   * @minimum 0
   */
  cancelledJobsCount: number;
  /**
   * @minimum 0
   */
  cancelledSessionsCount: number;
  deleted: true;
  deletedJobsCount: 0;
  /**
   * @format uuid
   */
  id: string;
}
export declare namespace Messages {
  export {
    type TipTapDocument as TipTapDocument,
    type TipTapNode as TipTapNode,
    type TipTapImageNode as TipTapImageNode,
    type TipTapMentionNode as TipTapMentionNode,
    type TipTapHeadingNode as TipTapHeadingNode,
    type TipTapOrderedListNode as TipTapOrderedListNode,
    type TipTapTaskItemNode as TipTapTaskItemNode,
    type TipTapCodeBlockNode as TipTapCodeBlockNode,
    type TipTapContentNode as TipTapContentNode,
    type TipTapLinkMark as TipTapLinkMark,
    type TipTapMark as TipTapMark,
    type TipTapImageAttributes as TipTapImageAttributes,
    type TipTapMentionAttributes as TipTapMentionAttributes,
    type TipTapExtensionAttributes as TipTapExtensionAttributes,
    type MessageListResponse as MessageListResponse,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageListParams as MessageListParams,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
  };
}
