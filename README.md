# Tembo Public API

This library provides convenient access to the Tembo Public API from TypeScript or JavaScript.

The full API of this library can be found in [api.md](./api.md).

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [WebSockets](#websockets)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @tembo-io/sdk
```

<br />

## Usage

```ts
import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  apiKey: process.env['TEMBO_API_KEY'], // defaults to the TEMBO_API_KEY env var
});

const apiKey = await client.apiKeys.list({
  limit: 50,
});

console.log(apiKey);
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## WebSockets

Follow actual session output with `client.sessions.events.live.subscribe()`. It authorizes through `/v1/live`, subscribes to the public `sessions.events` resource, and yields `{ type: 'ready' }` only after that subscription is authorized. Output frames are `{ type: 'delta', data: { event, message, provider?, messageId?, createdAt? } }`; `message` contains the provider event payload as a string. Tickets expire after 30 seconds, so every reconnect obtains a fresh ticket and resubscribes.

```ts
const controller = new AbortController();

for await (const frame of client.sessions.events.live.subscribe({ sessionId }, { signal: controller.signal })) {
  console.log(frame);
}
```

The subscription closes on abort or loop exit, retries temporary failures with bounded backoff, and throws on scoped authorization errors or exhausted retries. Reconcile missed output with `client.sessions.listEvents()` after reconnect; this is a live stream, not replay. You can also call `client.live.subscribe({ resource: 'sessions.events', input: { scope: { sessionId } } })`.

For manual multiplexing, call `client.live.authorize()` and `client.live.connect({ ticket })`. Iterate the connection, wait for connection-level ready, and send `{ op: 'subscribe', id, resource: 'sessions.events', input: { scope: { sessionId } } }`. Subscription frames carry that ID. Send `{ op: 'unsubscribe', id }` to release one subscription, or close the connection. One iterator can consume a connection.

The earlier `client.messages.live` and `client.sessions.live` are removed: their endpoints are internal-only now. The generation mappings use the public `live` resource, and the build reattaches the hand-maintained client exports if Scalar regenerates the entry point.

### Dev live smoke test

Set `TEMBO_API_KEY` and `TEMBO_TEST_SESSION_ID`, then run `npm run build && node --test tests/dev-live.test.mjs` to authorize without invoking an agent. `TEMBO_API_URL` defaults to `https://internal.tembo-development.com/public-api` for this test only. Add `RUN_AGENT=1` to send a minimal prompt, verify real streamed tokens and recorded output, and stop the test session. Without a session ID, agent mode creates a private, repository-free test session. Without those variables the test is skipped, including in `npm test`. Agent mode reads OpenAI Responses output and fails fast for other agents. It incurs usage charges; use a dedicated test session.

Add `FORCE_RECONNECT=1` in agent mode to close the first connection after a completed turn, verify a new authorization and subscription, and stream a second real turn.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKey` | `string \| AuthTokenProvider` | - | Credential for the apiKey scheme. Defaults to TEMBO_API_KEY. |

Declared schemes:

- `apiKey` bearer token

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@tembo-io/sdk';

try {
  const apiKey = await client.apiKeys.list({
    limit: 50,
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `403`, `404`, `409`, `413`, `500`, `502`, `503`, `504`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

```ts
import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  timeout: 60000,
  maxRetries: 2,
  logLevel: 'debug',
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKey` | `string \| AuthTokenProvider` | `process.env["TEMBO_API_KEY"]` | Credential for the apiKey scheme. |
| `baseURL` | `string \| null` | `process.env["TEMBO_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["TEMBO_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. Applies to this request and its retries. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Helpers

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()`.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.
