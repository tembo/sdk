---
name: tembo-public-api-typescript-sdk
description: "TypeScript SDK for Tembo Public API. Use when writing TypeScript code that calls Tembo Public API with the @tembo-io/sdk package: installing it, constructing and authenticating the client, and calling API operations."
---

# Tembo Public API TypeScript SDK

Generated TypeScript client for Tembo Public API, published as `@tembo-io/sdk`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @tembo-io/sdk
```

## Client setup and authentication

```ts
import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  apiKey: process.env['TEMBO_API_KEY'], // defaults to the TEMBO_API_KEY env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `apiKey` (env: `TEMBO_API_KEY`) — Credential for the apiKey scheme.

## Calling operations

```ts
import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  apiKey: process.env['TEMBO_API_KEY'], // defaults to the TEMBO_API_KEY env var
});

const apiKey = await client.apiKeys.list({
  limit: '50',
});

console.log(apiKey);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@tembo-io/sdk';

try {
  const apiKey = await client.apiKeys.list({
    limit: '50',
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
