// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { path as __scalarPath } from '../../../internal/utils/path';
import * as LiveAPI from './live';
import { Tembo } from '../../../client';
import { EventEmitter, type EventParameters } from '../../../core/EventEmitter';
import { TemboError } from '../../../error';
import type { RawWebSocketData, ReconnectingEvent, UnsentMessage } from '../../../internal/ws';
import type { LiveWSParameters } from './ws-base';

type EventTypeOf<T> = T extends { type?: infer EventType } ? EventType : never;
type LiveWSErrorEvent = Extract<unknown, { type?: 'error' }>;

export type LiveStreamMessage =
  | { type: 'connecting' | 'open' | 'closing' }
  | { type: 'close'; code: number; reason: string; unsent: UnsentMessage<unknown>[] }
  | { type: 'reconnecting'; reconnect: ReconnectingEvent<LiveWSParameters> }
  | { type: 'reconnected' }
  | { type: 'message'; message: unknown }
  | { type: 'raw'; data: RawWebSocketData }
  | { type: 'error'; error: WebSocketError };

export class WebSocketError extends TemboError {
  error?: LiveWSErrorEvent | undefined;

  constructor(message: string, event: LiveWSErrorEvent | null) {
    super(message);
    this.error = event ?? undefined;
  }
}

WebSocketError.prototype.name = 'WebSocketError';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type WebSocketEvents = Simplify<
  {
    event: (event: unknown) => void;
    raw: (data: RawWebSocketData) => void;
    error: (error: WebSocketError) => void;
    close: (code: number, reason: string, unsent: UnsentMessage<unknown>[]) => void;
    reconnecting: (event: ReconnectingEvent<LiveWSParameters>) => void;
    reconnected: () => void;
  } & {
    [EventType in Exclude<NonNullable<EventTypeOf<unknown>>, 'error'> & string]: (
      event: Extract<unknown, { type?: EventType }>,
    ) => unknown;
  }
>;

export abstract class LiveEmitter extends EventEmitter<WebSocketEvents> {
  /** Send an event to the API. */
  abstract send(event: unknown): void;

  /** Send raw data over the WebSocket without JSON serialization. */
  abstract sendRaw(data: RawWebSocketData): void;

  /** Close the WebSocket connection. */
  abstract close(props?: { code: number; reason: string }): void;

  protected _onError(event: null, message: string, cause: unknown): void;
  protected _onError(event: LiveWSErrorEvent, message?: string | undefined): void;
  protected _onError(event: LiveWSErrorEvent | null, message?: string | undefined, cause?: unknown): void {
    message = message ?? safeJSONStringify(event) ?? 'unknown error';

    if (!this._hasListener('error')) {
      const error = new WebSocketError(
        message +
          "\n\nTo resolve these unhandled rejection errors you should bind an `error` callback, e.g. `ws.on('error', (error) => ...)` ",
        event,
      );
      (error as Error & { cause?: unknown }).cause = cause;
      Promise.reject(error);
      return;
    }

    const error = new WebSocketError(message, event);
    (error as Error & { cause?: unknown }).cause = cause;
    this._emit('error', error);
  }

  public _emit<Event extends keyof WebSocketEvents>(
    event: Event,
    ...args: EventParameters<WebSocketEvents, Event>
  ): void {
    super._emit(event, ...args);
  }
}

export function buildURL(client: Tembo, parameters: Record<string, unknown>): URL {
  const { ...query } = parameters;
  const endpoint = __scalarPath`/v1/messages/live`;
  const url = new URL(client.buildURL(endpoint, query, undefined));
  url.protocol = url.protocol === 'http:' || url.protocol === 'ws:' ? 'ws:' : 'wss:';
  return url;
}

export function parameterHeaders(parameters: Record<string, unknown>): Record<string, string> {
  const headers: Record<string, string> = {};
  return headers;
}

function safeJSONStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}
