# Contributing to the Tembo SDK

This repository follows [Scalar's managed GitHub workflow](https://scalar.com/products/sdk-generator/publishing/github). The TypeScript target is connected to `tembo/sdk`; Python is independent. Package publishing is explicitly disabled with `targets.typescript.publish.npm: false`.

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

The generated `sdk-ci.yml` builds and checks formatting. Our `contract-tests.yml` checks consumer declarations, v1 coverage, serialization, normalization, and publishing-off safeguards without API credentials. The generated `tests/smoke-test.ts` is preserved, but is not run against dev because its operation set includes writes. Do not run that script against an environment with real data.

For an authenticated, read-only dev check, export a dev `TEMBO_API_KEY` and run `npm run test:dev`. It pins `https://internal.tembo-development.com/public-api` and only calls `models.list`. Browser login is not an API key; `.env` files are not loaded automatically. Never commit credentials.

## Update the schema and regenerate

1. Run `npm run schema:fetch`. Review `openapi/openapi.json`, the source snapshot from the public dev schema endpoint. `TEMBO_OPENAPI_URL` can override the source explicitly.
2. Run `npm run schema:prepare`. This creates ignored `openapi/scalar.openapi.json` for Scalar. Validate it with `npx --yes --package=@scalar/cli@2.1.0 scalar document validate openapi/scalar.openapi.json`.
3. Upload the prepared document to the linked registry API `tembo/tembo-eight-pr-verification` as a new version. For test versions, use `--no-current` to avoid changing its current API version. Apply the reviewed `scalar.config.json` and API version to SDK `tembo/tembo-v1-sdk-test` in Scalar. The local config is not automatically uploaded when committed.
4. Build that draft version in Scalar, or run `npx --yes --package=@scalar/cli@2.1.0 scalar sdk build --namespace tembo --slug tembo-v1-sdk-test --version <draft-version>`. The CLI starts the build; wait for its completion and repository sync.
5. Scalar updates `scalar-generated`, integrates into `scalar-next`, and refreshes the release PR against `main`. Add schema snapshot/config/test changes to `scalar-next` and review the combined code, diagnostics and checks in that one release PR. A separate custom-code PR is optional, not a required step.

The connected build uses the reviewed prepared API version `1.0.2-devverify.20260911`; SDK build `0.2.1` uses generator `0.32.9`. These are generation identifiers, not a requested npm release version. The remote SDK currently defaults to development and does not automatically track every deployment.

## Why schema preparation exists

Scalar 0.32.9 lost recursive `TipTapNode` union members in emitted TypeScript despite retaining them in its intermediate manifest. Inline model mappings alone did not fix it. `scripts/normalize-openapi.mjs` hoists the six structured variants into named components and flattens their nested union for generation only.

Each branch requires a different constant `type`, so these branches are disjoint and flattening this specific nested `oneOf` into `anyOf` preserves accepted values. Fields, constraints, references and the fallback branch are preserved; the normalizer refuses changed assumptions. Tests reconstruct the original schema and assert that generated nodes and their children are not `unknown`. No API implementation, wire format or database changes are involved. Attribute/custom-document dictionaries remain intentionally extensible.

This is a documented custom workaround, not a general Scalar requirement. Remove it only after an unnormalized build passes the same regression checks. Generated resource types are not hand-patched.

## Release safety

Scalar's npm switch is off. Its generated release workflow can create GitHub tags/releases when a release PR is merged, but currently contains no npm publish job. The previous standalone `Publish NPM` workflow on `main` has also been disabled; the Scalar replacement removes that obsolete file.

Before a public release, review production defaults/schema parity, migration guidance, broader authenticated consumer testing and the intended version. Then separately approve npm publishing and configure Scalar's supported publishing settings. Do not merge a release PR merely to test generation. Do not enable an old publishing workflow or add a parallel publishing pipeline.
