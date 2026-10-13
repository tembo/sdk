import { APIResource } from './resource';
import { APIError, APIUserAbortError } from './error';
import type { RequestOptions } from './internal/request-options';
import { createLiveSocket } from './internal/live-socket';
import type { WebSocketLike } from './internal/ws-adapter';
import type { APIPromise } from './api-promise';

export interface SessionOutputEvent {
  event: string;
  message: string;
  provider?: string;
  messageId?: string;
  createdAt?: string;
}

export interface SessionEventDelta {
  type: 'delta';
  data: SessionOutputEvent;
}

export type LiveServerMessage =
  | { type: 'ready'; id?: string }
  | { type: 'event'; id: string; data: SessionEventDelta }
  | { type: 'error'; id: string; status: number; message: string };

export type LiveClientMessage =
  | { op: 'subscribe'; id: string; resource: 'sessions.events'; input: { scope: { sessionId: string } } }
  | { op: 'unsubscribe'; id: string };

export interface LiveSubscribeParams {
  resource: 'sessions.events';
  input: { scope: { sessionId: string } };
}

export interface LiveSubscribeOptions {
  signal?: AbortSignal;
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  timeout?: number;
}

export class LiveSubscriptionError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'LiveSubscriptionError';
  }
}

function parseFrame(text: string): LiveServerMessage {
  const frame: unknown = JSON.parse(text);
  if (!frame || typeof frame !== 'object' || !('type' in frame)) throw new Error('Invalid live frame');
  if (frame.type === 'ready' && (!('id' in frame) || typeof frame.id === 'string'))
    return frame as LiveServerMessage;
  if (!('id' in frame) || typeof frame.id !== 'string') throw new Error('Invalid live subscription frame');
  if (
    frame.type === 'error' &&
    'status' in frame &&
    Number.isInteger(frame.status) &&
    typeof frame.status === 'number' &&
    frame.status >= 100 &&
    frame.status <= 599 &&
    'message' in frame &&
    typeof frame.message === 'string'
  )
    return frame as LiveServerMessage;
  if (
    frame.type === 'event' &&
    'data' in frame &&
    frame.data &&
    typeof frame.data === 'object' &&
    'type' in frame.data &&
    frame.data.type === 'delta' &&
    'data' in frame.data
  ) {
    const output = frame.data.data;
    if (
      output &&
      typeof output === 'object' &&
      'event' in output &&
      typeof output.event === 'string' &&
      'message' in output &&
      typeof output.message === 'string' &&
      ['provider', 'messageId', 'createdAt'].every(
        (key) => !(key in output) || typeof (output as Record<string, unknown>)[key] === 'string',
      )
    )
      return frame as LiveServerMessage;
  }
  throw new Error('Invalid live frame');
}

export class LiveConnection implements AsyncIterable<LiveServerMessage> {
  private readonly socket: WebSocketLike;
  private readonly queue: { frame: LiveServerMessage; bytes: number }[] = [];
  private bytes = 0;
  private ended = false;
  private error: Error | undefined;
  private wake: (() => void) | undefined;
  private iterating = false;
  private readonly timer: ReturnType<typeof setTimeout>;

  constructor(url: URL, timeout = 15000) {
    this.socket = createLiveSocket(url);
    this.timer = setTimeout(() => this.fail(new Error('Live connection timed out')), timeout);
    this.socket.on('message', (data) => {
      if (this.ended) return;
      try {
        const text =
          typeof data === 'string'
            ? data
            : new TextDecoder().decode(
                ArrayBuffer.isView(data)
                  ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
                  : new Uint8Array(data),
              );
        const frame = parseFrame(text);
        if (frame.type === 'ready' && frame.id === undefined) clearTimeout(this.timer);
        const bytes = new TextEncoder().encode(text).byteLength;
        if (this.bytes + bytes > 1024 * 1024)
          return this.fail(new Error('Live receive buffer exceeded 1 MiB'));
        this.queue.push({ frame, bytes });
        this.bytes += bytes;
        this.wake?.();
      } catch {
        this.fail(new LiveSubscriptionError(400, 'Invalid live server frame'));
      }
    });
    this.socket.on('error', () => this.fail(new Error('Live connection failed')));
    this.socket.on('close', () => this.close());
  }

  send(message: LiveClientMessage): void {
    if (this.ended || this.socket.readyState !== 1) throw new Error('Live connection is not open');
    this.socket.send(JSON.stringify(message));
  }

  close(): void {
    if (this.ended) return;
    this.ended = true;
    clearTimeout(this.timer);
    this.wake?.();
    if (this.socket.readyState < 2) this.socket.close();
  }

  private fail(error: Error): void {
    if (this.ended) return;
    this.error = error;
    this.close();
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<LiveServerMessage> {
    if (this.iterating) throw new Error('A live connection supports one iterator');
    this.iterating = true;
    try {
      while (true) {
        if (this.error) throw this.error;
        const next = this.queue.shift();
        if (next) {
          this.bytes -= next.bytes;
          yield next.frame;
        } else if (this.ended) return;
        else
          await new Promise<void>((resolve) => {
            this.wake = resolve;
          });
      }
    } finally {
      this.wake = undefined;
      this.close();
    }
  }
}

function backoff(delay: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal?.aborted) return resolve();
    const done = () => {
      clearTimeout(timer);
      signal?.removeEventListener('abort', done);
      resolve();
    };
    const timer = setTimeout(done, delay);
    signal?.addEventListener('abort', done, { once: true });
  });
}

export class Live extends APIResource {
  authorize(options?: RequestOptions): APIPromise<{ ticket: string }> {
    return this._client.post('/v1/live', options);
  }

  connect(params: { ticket: string }, options?: { timeout?: number }): LiveConnection {
    const url = new URL(this._client.buildURL('/v1/live', { ticket: params.ticket }, undefined));
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return new LiveConnection(url, options?.timeout);
  }

  async *subscribe(
    params: LiveSubscribeParams,
    options: LiveSubscribeOptions = {},
  ): AsyncGenerator<{ type: 'ready' } | SessionEventDelta> {
    const { signal, maxRetries = 5, initialDelay = 500, maxDelay = 8000, timeout = 15000 } = options;
    for (const [name, value] of Object.entries({ maxRetries, initialDelay, maxDelay, timeout })) {
      if (!Number.isFinite(value) || value < 0 || (name === 'maxRetries' && !Number.isInteger(value)))
        throw new RangeError(`Invalid ${name}`);
    }
    let failures = 0;
    while (!signal?.aborted) {
      let connection: LiveConnection | undefined;
      let readyTimer: ReturnType<typeof setTimeout> | undefined;
      let timedOut = false;
      const close = () => connection?.close();
      try {
        const { ticket } = await this.authorize({ signal, maxRetries: 0 });
        if (signal?.aborted) return;
        connection = this.connect({ ticket }, { timeout });
        signal?.addEventListener('abort', close, { once: true });
        readyTimer = setTimeout(() => {
          timedOut = true;
          close();
        }, timeout);
        let subscribed = false;
        let ready = false;
        for await (const frame of connection) {
          if (signal?.aborted) return;
          if (frame.type === 'ready' && frame.id === undefined) {
            if (subscribed) throw new LiveSubscriptionError(400, 'Repeated connection readiness');
            subscribed = true;
            connection.send({ op: 'subscribe', id: 'events', ...params });
          } else if (frame.id === 'events') {
            if (frame.type === 'error') throw new LiveSubscriptionError(frame.status, frame.message);
            if (frame.type === 'ready') {
              ready = true;
              clearTimeout(readyTimer);
              failures = 0;
              yield { type: 'ready' };
            } else if (frame.type === 'event') {
              if (!ready) throw new LiveSubscriptionError(400, 'Live event before subscription readiness');
              yield frame.data;
            }
          }
        }
        if (signal?.aborted) return;
        throw new Error(timedOut ? 'Live subscription timed out' : 'Live connection closed');
      } catch (error) {
        if (signal?.aborted || error instanceof APIUserAbortError) return;
        const status =
          error instanceof APIError || error instanceof LiveSubscriptionError ? error.status : undefined;
        if (
          (status !== undefined && status >= 400 && status < 500 && status !== 429) ||
          ++failures > maxRetries
        )
          throw error;
      } finally {
        clearTimeout(readyTimer);
        signal?.removeEventListener('abort', close);
        connection?.close();
      }
      await backoff(Math.min(initialDelay * 2 ** (failures - 1), maxDelay), signal);
    }
  }
}

export class SessionEvents extends APIResource {
  live: {
    subscribe: (
      params: { sessionId: string },
      options?: LiveSubscribeOptions,
    ) => AsyncGenerator<{ type: 'ready' } | SessionEventDelta>;
  } = {
    subscribe: (params, options) =>
      new Live(this._client).subscribe({ resource: 'sessions.events', input: { scope: params } }, options),
  };
}
