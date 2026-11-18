// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Shared by every smoke test under `tests/api-resources/`. Each test calls one SDK method the way
// the SDK exposes it, against the server named by TEST_API_BASE_URL:
//
//   TEST_API_BASE_URL=http://localhost:4010 npm test
//
// Environment variables:
//   - TEST_API_BASE_URL: the server to call. Unset, every smoke test skips, so a plain `npm test`
//     never calls the real API. Credentials come from the variables the client itself reads.
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only cases whose operation name or path
//     contains one of them run. Empty means no filter.
//   - SCALAR_SMOKE_REPORT_DIR: a directory; each test process appends one JSON line per case it
//     ran to its own file there. The generator uses this to collect per-case results.
//
// Regeneration does not yet delete a test file whose resource was renamed or removed. Delete a
// stale file under `tests/api-resources/` by hand, or `npm test` keeps running it.
import { randomUUID } from 'node:crypto';
import { appendFileSync } from 'node:fs';
import { join } from 'node:path';

import { test } from 'vitest';

import Tembo from '@tembo-io/sdk';

/**
 * Fingerprint of the case list the generator's smoke runner checks this suite against (written
 * only for generator tooling). The runner refuses a list whose digest differs, so a list left by
 * an earlier generation is never trusted.
 */
export const SMOKE_CASE_LIST_DIGEST = 'a83bac171da37b90';

const baseURL = process.env['TEST_API_BASE_URL'] || undefined;

/**
 * The client every smoke test calls through.
 *
 * It is built only for a smoke run: the constructor throws when a credential the client requires
 * is missing, and a plain `npm test` without credentials must still load every test file, where
 * each case then skips before touching it. Retries and the per-attempt timeout are stated rather
 * than inherited, because the client defaults are config-derived and can be zero retries; three
 * 10s attempts plus backoff fit inside the 35s case bound below.
 */
export const client: Tembo = baseURL
  ? new Tembo({ baseURL, maxRetries: 2, timeout: 10_000 })
  : (undefined as unknown as Tembo);

const needles = (process.env['SCALAR_SMOKE_FILTER'] ?? '')
  .split(',')
  .map((needle) => needle.trim())
  .filter(Boolean);

const reportDir = process.env['SCALAR_SMOKE_REPORT_DIR'] || undefined;
// One file per loaded copy of this module: vitest loads it once per test file, and test files run
// in parallel processes, so no two writers ever share a file and no append relies on atomicity.
const reportFile = reportDir ? join(reportDir, `${process.pid}-${randomUUID()}.jsonl`) : undefined;

/** How long one case may take, all retries included, before it is recorded as failed. */
const CASE_BOUND_MS = 35_000;

/** vitest's own per-test timeout, above the case bound so the case always records first. */
const TEST_TIMEOUT_MS = 40_000;

/** The fields `SCALAR_SMOKE_FILTER` matches against. */
export type SmokeTarget = { readonly operation: string; readonly path: string };

/** Whether the filter selects a case: no needles, or one contained in its operation or path. */
const isSelected = (target: SmokeTarget): boolean =>
  needles.length === 0 ||
  needles.some((needle) => target.operation.includes(needle) || target.path.includes(needle));

/** Appends one result line. Synchronous, so concurrent tests in one file never interleave a line. */
const record = (line: { id: string; status: string; durationMs: number; error?: string }): void => {
  if (reportFile) appendFileSync(reportFile, `${JSON.stringify(line)}\n`);
};

/** Runs a case body, rejecting once it has run longer than the case bound. */
const bounded = async (body: () => Promise<unknown>): Promise<void> => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([
      body(),
      new Promise<never>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error(`The case did not finish within ${CASE_BOUND_MS} ms.`)),
          CASE_BOUND_MS,
        );
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
};

/**
 * Registers one smoke test.
 *
 * `id` is the stable case id the result is recorded under, `target` the fields the filter matches,
 * `name` the test name, and `body` the SDK call. A failure is recorded and then rethrown, so vitest
 * sees it too.
 */
export const smokeCase = (
  id: string,
  target: SmokeTarget,
  name: string,
  body: () => Promise<unknown>,
): void => {
  test(name, { timeout: TEST_TIMEOUT_MS }, async (context) => {
    if (!baseURL || !isSelected(target)) {
      context.skip();
      return;
    }
    const startedAt = performance.now();
    try {
      await bounded(body);
    } catch (error) {
      // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
      const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
      record({ id, status: 'failed', durationMs: Math.round(performance.now() - startedAt), error: message });
      throw error;
    }
    record({ id, status: 'passed', durationMs: Math.round(performance.now() - startedAt) });
  });
};
