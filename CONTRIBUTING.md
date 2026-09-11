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
- Last imported generation: `scalar-sdk.manifest.json` (generator `0.32.9`).
- Generated files: `src/`, `api.md`, `scalar-sdk.manifest.json`, `tsconfig.json`, `tsconfig.cjs.json`, and `scripts/finalize-build.mjs`.
- Maintained locally: package metadata/lockfile, documentation, tests, CI and helper scripts. `src/version.ts` is synchronized with the local package version when importing a build.

Do not hand-patch generated resource types to work around the schema. Fix the contract in the monorepo only if the contract is wrong; otherwise fix model mapping or generation in Scalar and regenerate. The existing `TipTapNode` recursive union limitation is still a release gate; the passing build does not prove those children are strongly typed.

For this specific issue, `openapi/openapi.json` describes six structured nodes under `TipTapNode.anyOf[0].oneOf`, plus the content-node reference. The manifest's `tip_tap_node` model also contains those seven typed variants. However, `src/resources/messages.ts` emits `TipTapNode = unknown | TipTapContentNode`. This localizes the loss to TypeScript emission rather than a missing API field type. A Scalar configuration workaround or generator fix still needs to be tested; no monorepo change is established as necessary.

## Regenerate intentionally

1. Run `npm run schema:fetch` and review the OpenAPI diff. This downloads JSON, not the frontend's HTML page. It does not generate code or update Scalar. `TEMBO_OPENAPI_URL` can override the source explicitly.
2. Validate the snapshot using the pinned API CLI: `npx --yes --package=@scalar/cli@2.1.0 scalar document validate openapi/openapi.json`. A system executable named `scalar` may instead be Git's unrelated tool.
3. Log into Scalar and upload the reviewed snapshot as a new API version. The current sandbox SDK is `tembo/tembo-v1-sdk-test`, linked to registry API `tembo/tembo-eight-pr-verification`. Preserve the API's current version when uploading test versions. The imported build used API version `1.0.1-devverify.20260911`, SDK version `0.1.7`.
4. In the Scalar SDK dashboard, select that API version and apply the checked-in `scalar.config.json`. Do not enable repository destinations or npm publishing. The local config is not automatically synced by the CLI build command.
5. Build the selected draft version using the dashboard or `npx --yes --package=@scalar/cli@2.1.0 scalar sdk build --namespace tembo --slug tembo-v1-sdk-test --version <draft-version>`. Wait for completion; the command only starts the remote build.
6. Download and extract the TypeScript build into a temporary directory outside this repository's source tree. Review its diagnostics. Replace the generated files listed above, including deleting stale generated files. Keep repository-owned package metadata, lockfile, tests, docs, CI and scripts. Do not copy generated publishing scripts or workflows.
7. Set `src/version.ts` to the version in `package.json`; the remote test build's version is not the npm release version. Review generated package/compiler changes before applying them to the repository's files.
8. Run the local validation commands. Operation coverage must agree across the OpenAPI snapshot, Scalar config, manifest and callable SDK methods. Run the separate dev smoke test when a dev API key is available.

Schema fetching and builds are deliberately manual during migration. No automatic tracking of mutable development schemas and no publishing workflows are configured. The remote sandbox SDK is not a production repository connection.

## Before publishing

The authenticated `models.list` dev smoke test passed on September 11, 2026. Broaden live verification to the operations needed by SDK consumers before release. Resolve rich-content recursive typing, choose production defaults and a migration version, and review package contents with `npm pack --dry-run`. Then separately configure Scalar's repository integration and npm credentials/trusted publishing for `@tembo-io/sdk`. Remove the local publishing guards only in an explicitly approved release change. Keep Python independent.
