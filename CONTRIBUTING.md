# Working on the Scalar SDK

## Local validation

```sh
npm ci
npm run typecheck
npm test
npm pack --dry-run
```

CI runs these checks with Node 24 without API credentials or network calls to Tembo. The package has no runtime dependencies. `npm run test:dev` is a separate, opt-in, authenticated read-only test.

## Sources of truth

- API contract: `openapi/openapi.json`, fetched from `https://internal.tembo-development.com/public-api/openapi/public`.
- SDK resource/method mapping, models, authentication and development URL: `scalar.config.json`.
- Generation-only preparation: `scripts/normalize-openapi.mjs`. `npm run schema:prepare` produces ignored `openapi/scalar.openapi.json`; upload that derived file to Scalar, not the raw snapshot.
- Last imported generation: `scalar-sdk.manifest.json` (generator `0.32.9`).
- Generated files: `src/`, `api.md`, `scalar-sdk.manifest.json`, `tsconfig.json`, `tsconfig.cjs.json`, and `scripts/finalize-build.mjs`.
- Maintained locally: package metadata/lockfile, documentation, tests, CI and helper scripts. `src/version.ts` is synchronized with the local package version when importing a build.

Do not hand-patch generated resource types to work around the schema. Fix the contract in the monorepo only if the contract is wrong; otherwise fix generation and regenerate. Recursive rich-content typing is checked in `tests/consumer.mts` against the generated declarations.

Scalar generator 0.32.9 emitted `TipTapNode = unknown | TipTapContentNode` from the original nested `anyOf`/`oneOf` structure, despite retaining the variants in its manifest. Model mappings to the inline schema pointers alone did not fix it. Preparation now hoists the six structured variants to named components and flattens the union, with model mappings pointing at those components. All six branches require distinct constant `type` values, so they are mutually exclusive: flattening this specific `oneOf` into the surrounding `anyOf` preserves the accepted values. All field constraints, recursive references, the fallback branch, and other schemas are preserved. The normalizer refuses unexpected schema changes instead of guessing. Tests reconstruct the original schema exactly and verify invalid discriminators are rejected by preparation.

## Regenerate intentionally

1. Run `npm run schema:fetch` and review the OpenAPI diff. This downloads JSON, not the frontend's HTML page. It does not generate code or update Scalar. `TEMBO_OPENAPI_URL` can override the source explicitly.
2. Run `npm run schema:prepare`. Validate the prepared schema using the pinned API CLI: `npx --yes --package=@scalar/cli@2.1.0 scalar document validate openapi/scalar.openapi.json`. A system executable named `scalar` may instead be Git's unrelated tool.
3. Log into Scalar and upload the prepared schema as a new API version. The current sandbox SDK is `tembo/tembo-v1-sdk-test`, linked to registry API `tembo/tembo-eight-pr-verification`. Preserve the API's current version when uploading test versions. The imported build used API version `1.0.2-devverify.20260911`, SDK version `0.2.0`, generator `0.32.9`.
4. In the Scalar SDK dashboard, select that API version and apply the checked-in `scalar.config.json`. Do not enable repository destinations or npm publishing. The local config is not automatically synced by the CLI build command.
5. Build the selected draft version using the dashboard or `npx --yes --package=@scalar/cli@2.1.0 scalar sdk build --namespace tembo --slug tembo-v1-sdk-test --version <draft-version>`. Wait for completion; the command only starts the remote build.
6. Download and extract the TypeScript build into a temporary directory outside this repository's source tree. Review its diagnostics. Replace the generated files listed above, including deleting stale generated files. Keep repository-owned package metadata, lockfile, tests, docs, CI and scripts. Do not copy generated publishing scripts or workflows.
7. Set `src/version.ts` to the version in `package.json`; the remote test build's version is not the npm release version. Review generated package/compiler changes before applying them to the repository's files.
8. Run the local validation commands. Operation coverage must agree across the OpenAPI snapshot, Scalar config, manifest and callable SDK methods. Run the separate dev smoke test when a dev API key is available.

Schema fetching and builds are deliberately manual during migration. No automatic tracking of mutable development schemas and no publishing workflows are configured. The remote sandbox SDK is not a production repository connection.

## Before publishing

The authenticated `models.list` dev smoke test passed on September 11, 2026. Broaden live verification to the operations needed by SDK consumers before release. Choose production defaults and a migration version, and review package contents with `npm pack --dry-run`. Then separately configure Scalar's repository integration and npm credentials/trusted publishing for `@tembo-io/sdk`. Remove the local publishing guards only in an explicitly approved release change. Keep Python independent.
