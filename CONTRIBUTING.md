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
3. Production updates do not need hand-maintained endpoint mappings. The OpenAPI workflow calls Scalar's raw-spec config resolver, reconciles its output with existing SDK bindings, and synchronizes the result before publishing the prepared document. For a manual build, run `npm run scalar:sync` with `SCALAR_API_KEY` before uploading to linked registry API `tembo/tembo-eight-pr-verification`. This command updates both local and hosted mappings; it is not a read-only preview. For test versions, use `--no-current` to avoid changing the registry's current API version. Only `resources` are synchronized; hosted publishing, repository, environment and client settings are preserved.
4. Build that draft version in Scalar, or run `npx --yes --package=@scalar/cli@2.1.0 scalar sdk build --namespace tembo --slug tembo-sdk --version <draft-version>`. The CLI starts the build; wait for its completion and repository sync.
5. Scalar updates `scalar-generated`, integrates into `scalar-next`, and refreshes the release PR against `main`. Add schema snapshot/config/test changes to `scalar-next` and review the combined code, diagnostics and checks in that one release PR. A separate custom-code PR is optional, not a required step.

The SDK defaults to `https://api.tembo.io`; the optional dev smoke test overrides that default explicitly. Generation versions are independent of npm release versions. Merging a release PR triggers npm publishing.

## Automated updates

Successful production API deployments already send this repository a `production-api-deployed` notification. The SDK workflow fetches `https://api.tembo.io/public-api/openapi/public` and handles schema validation, automatic resource inference and synchronization entirely in this repository. No new monorepo changes, deployment gates or dispatch payload fields are required. It requires unique operation IDs and resource tags for `/v1/` operations and validates schema preparation assumptions; invalid metadata or incompatible schemas stop SDK publication, not API deployment.

After rollout, the SDK workflow validates the live production schema and asks Scalar's own configuration generator to infer mappings from the prepared `/v1/` spec. Existing resource locations, method names, model aliases and HTTP/body bindings are retained for operations that still exist. Newly added operations use Scalar's inferred names; deleted operations and dangling model references are removed. We do not maintain our own endpoint naming heuristic. The workflow validates exact operation coverage, applies only the resource changes to the editable hosted configuration, and verifies them before registry publication can start generation. The latest draft/active SDK configuration takes precedence over stale project initialization settings.

The uploaded schema and reconciled `scalar.config.json` are saved together on `scalar-next`, using a three-way config merge to preserve concurrent customizations. `scalar.config.json` is a compatibility baseline/customization file, not a checklist to update for each new endpoint. Mapping-only customization changes also trigger synchronization. Bot snapshot pushes do not force new registry versions, avoiding rebuild loops. If neither the public contract nor mappings changed, generation is skipped; partially completed mapping updates are detected from the repository baseline and retried. No dashboard copy/paste or manual rebuild is needed for normal endpoint changes.

Naming collisions that would overwrite an existing SDK method, incomplete Scalar inference, incompatible schema changes or concurrent config conflicts still stop SDK publication for review. Use unique stable operation IDs/tags, or an intentional `x-scalar-method` override, to resolve naming ambiguity. Scalar follows registry versions `2.0.x` to generate release PRs; successful npm publication triggers a docs update PR. Release PR and docs PR review/merge remain required; neither PR is auto-merged.

Verify from `main` with a manual OpenAPI run using `force: true` and `dry_run: true`, then `dry_run: false` to seed generation. Dry runs validate candidate metadata/preparation but never authenticate to Scalar, infer a new config or mutate hosted settings. Manual workflow runs also recover missed events; no enable flags are needed. Run `npm run schema:check -- --candidate <candidate-schema.json>` for an offline candidate check, or `npm run schema:check -- <schema.json> scalar.config.json` to validate complete reconciled coverage.

This follows Scalar's [OpenAPI/config workflow](https://scalar.com/products/sdk-generator/getting-started) and [managed GitHub release flow](https://scalar.com/products/sdk-generator/publishing/github). Explicit resources are an [allow-list](https://scalar.com/products/sdk-generator/diagnostics), so schema uploads alone do not fill missing mappings. The automatic inference uses the documented `POST /resolve-config` endpoint from [Scalar's generator service OpenAPI](https://api.scalar.com/sdk-generator/openapi.json), not browser automation or a separate code generator.

## Why schema preparation exists

Scalar 0.32.9 lost recursive `TipTapNode` union members in emitted TypeScript despite retaining them in its intermediate manifest. Inline model mappings alone did not fix it. `scripts/normalize-openapi.mjs` hoists the six structured variants into named components and flattens their nested union for generation only.

Each branch requires a different constant `type`, so these branches are disjoint and flattening this specific nested `oneOf` into `anyOf` preserves accepted values. Fields, constraints, references and the fallback branch are preserved; the normalizer refuses changed assumptions. Tests reconstruct the original schema and assert that generated nodes and their children are not `unknown`. No API implementation, wire format or database changes are involved. Attribute/custom-document dictionaries remain intentionally extensible.

This is a documented custom workaround, not a general Scalar requirement. Remove it only after an unnormalized build passes the same regression checks. Generated resource types are not hand-patched.

## Release safety

Scalar's npm switch is enabled. The generated release workflow publishes after creating a release. npm trusts owner `tembo`, repository `sdk`, workflow `release-please.yml`, with no environment restriction. Authentication uses OIDC, not an npm token. The previous standalone `Publish NPM` workflow remains disabled. The generated manual `sdk-release.yml` fallback needs its own trusted publisher before use.

Before merging a release PR, review production defaults/schema parity, consumer tests and the intended version. Merging authorizes publication; do not merge merely to test generation. A package dry run does not verify OIDC authentication: the first successful release provides that end-to-end verification. Do not enable an old publishing workflow or add a parallel publishing pipeline.
