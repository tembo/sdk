# Contributing to the Tembo SDK

This repository follows [Scalar's managed GitHub workflow](https://scalar.com/products/sdk-generator/publishing/github). The TypeScript target is connected to `tembo/sdk`. npm trusted publishing is enabled with `targets.typescript.publish.npm: true`.

## Branches and ownership

- `scalar-generated`: pristine output managed by Scalar. Do not edit this branch.
- `scalar-next`: generated output plus customizations. Commit custom changes here so they appear alongside the generated changes in the single release PR.
- `main`: released states promoted through Scalar's release pull request. Do not merge that release PR until the intended customizations and release settings have been reviewed.

Scalar manages the client, API reference, README, package/build defaults, release configuration, generated workflows and version metadata. See `VERSIONING.md` for version selection. Do not manually set package versions or copy downloaded builds over repository files; Scalar preserves customizations through its three-way merge.

Our additions are the schema preparation below, offline/consumer tests, the optional read-only dev test, a lockfile, and the separate contract-test workflow. `biome.json` excludes the raw schema input and ignored local experiments from code formatting. Keep custom changes small and outside generated resources where possible.

## Validate locally

Use Node 24 for the build tools and Scalar CLI, matching generated CI. This does not add a Node 24-only restriction to SDK consumers; the generated README describes runtime support.

```sh
npm ci
npm run typecheck
npm test
npm pack --dry-run
```

The generated `sdk-ci.yml` builds and checks formatting. Our `contract-tests.yml` checks consumer declarations, v1 coverage, serialization, normalization, and trusted-publishing safeguards without API credentials. The generated `tests/smoke-test.ts` is preserved, but is not run against dev because its operation set includes writes. Do not run that script against an environment with real data.

For an authenticated, read-only dev check, export a dev `TEMBO_API_KEY` and run `npm run test:dev`. It pins `https://internal.tembo-development.com/public-api` and only calls `models.list`. Browser login is not an API key; `.env` files are not loaded automatically. Never commit credentials.

## Update the schema and regenerate

1. Run `npm run schema:fetch`. Review `openapi/openapi.json`, the source snapshot from `https://api.tembo.io/public-api/openapi/public`. `TEMBO_OPENAPI_URL` can override the source explicitly.
2. Run `npm run schema:prepare`. This creates ignored `openapi/scalar.openapi.json` for Scalar. Validate it with `npx --yes --package=@scalar/cli@2.1.0 scalar document validate openapi/scalar.openapi.json`.
3. Upload the prepared document to the linked registry API `tembo/tembo-eight-pr-verification` as a new version. For test versions, use `--no-current` to avoid changing its current API version. Apply the reviewed `scalar.config.json` and API version to SDK `tembo/tembo-sdk` (Tembo SDK) in Scalar. The local config is not automatically uploaded when committed.
4. Build that draft version in Scalar, or run `npx --yes --package=@scalar/cli@2.1.0 scalar sdk build --namespace tembo --slug tembo-sdk --version <draft-version>`. The CLI starts the build; wait for its completion and repository sync.
5. Scalar updates `scalar-generated`, integrates into `scalar-next`, and refreshes the release PR against `main`. Add schema snapshot/config/test changes to `scalar-next` and review the combined code, diagnostics and checks in that one release PR. A separate custom-code PR is optional, not a required step.

The production schema is uploaded as a reviewed snapshot, not automatically synchronized with every deployment. The SDK defaults to `https://api.tembo.io`; the optional dev smoke test overrides that default explicitly. Generation versions are independent of npm release versions. Merging a release PR triggers npm publishing.

## Why schema preparation exists

Scalar 0.32.9 lost recursive `TipTapNode` union members in emitted TypeScript despite retaining them in its intermediate manifest. Inline model mappings alone did not fix it. `scripts/normalize-openapi.mjs` hoists the six structured variants into named components and flattens their nested union for generation only.

Each branch requires a different constant `type`, so these branches are disjoint and flattening this specific nested `oneOf` into `anyOf` preserves accepted values. Fields, constraints, references and the fallback branch are preserved; the normalizer refuses changed assumptions. Tests reconstruct the original schema and assert that generated nodes and their children are not `unknown`. No API implementation, wire format or database changes are involved. Attribute/custom-document dictionaries remain intentionally extensible.

This is a documented custom workaround, not a general Scalar requirement. Remove it only after an unnormalized build passes the same regression checks. Generated resource types are not hand-patched.

## Release safety

Scalar's npm switch is enabled. The generated release workflow publishes after creating a release. npm trusts owner `tembo`, repository `sdk`, workflow `release-please.yml`, with no environment restriction. Authentication uses OIDC, not an npm token. The previous standalone `Publish NPM` workflow remains disabled. The generated manual `sdk-release.yml` fallback needs its own trusted publisher before use.

Before merging a release PR, review production defaults/schema parity, consumer tests and the intended version. Merging authorizes publication; do not merge merely to test generation. A package dry run does not verify OIDC authentication: the first successful release provides that end-to-end verification. Do not enable an old publishing workflow or add a parallel publishing pipeline.
