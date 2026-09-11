# Tembo TypeScript SDK

Work-in-progress Scalar replacement for `@tembo-io/sdk`. This branch is **not published** and is not a drop-in replacement for the existing Stainless SDK. Python is unchanged.

The generated client includes all 116 v1 operations in the checked-in development OpenAPI snapshot. Compatibility routes outside `/v1/` are excluded. See [api.md](api.md) for the generated method reference.

## Try it locally

Use Node.js 24 or newer:

```sh
npm ci
npm test
```

```js
import Tembo from './dist/esm/index.js';

const client = new Tembo({
  apiKey: process.env.TEMBO_API_KEY,
  baseURL: 'https://internal.tembo-development.com/public-api',
});

const models = await client.models.list({ limit: '1' });
console.log(models);
```

This candidate defaults to **development**, not production. `TEMBO_API_KEY` and `TEMBO_BASE_URL` are supported; constructor options override environment variables. Supply a dev API key, not a browser session cookie. `.env` files are not loaded automatically.

```sh
export TEMBO_API_KEY='your-dev-api-key'
npm run test:dev
```

The dev smoke test pins the dev backend and only reads models. It never creates, updates, or deletes resources. Normal tests use mocked HTTP and require no credentials.

## What changed

- Scalar-generated v1 resources replace the previous Stainless client.
- Both ESM and CommonJS output are built from TypeScript.
- Resource names use the merged API contracts, including `instructions`, `richContent`, `durationMs`, and plural relationship fields.
- OpenAPI, Scalar config, and generator manifest are checked in for review.
- A generation-only normalization names and flattens disjoint recursive rich-text variants so Scalar emits typed children. The original API schema, wire format, and database are unchanged.
- Old generation/release scripts and publishing workflows are removed. Publishing is blocked by `private: true` and a failing `prepublishOnly` script.

## Remaining release gates

The authenticated, read-only `models.list` smoke test passed against development on September 11, 2026. This confirms that the generated client can authenticate and read from dev, not that every operation has been exercised live. No credentials are stored in this repository.

Recursive `TipTapNode` generation is fixed in this branch, with compile-time checks rejecting primitive nodes and invalid nested children. Custom-document and extensible-attribute dictionaries remain intentionally open-ended to match the existing API contract.

- Confirm production schema parity and configure the production base URL before release.
- Review migration examples against real consumers; this changes resource names and the old SDK surface. Node 24 is the only supported/tested runtime for this candidate; browser support is not claimed.
- Choose the final version, connect the intended Scalar SDK to this repository, and explicitly configure publishing. `1.0.0-beta.0` is only an unpublished candidate version.

See [CONTRIBUTING.md](CONTRIBUTING.md) for regeneration and validation. Do not enable publishing until these gates have been reviewed.
