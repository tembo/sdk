// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

// The smoke tests import this package by name; resolve it to the source so they need no build.
const source = fileURLToPath(new URL('./src/', import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      { find: new RegExp('^@tembo\\-io\\/sdk$'), replacement: `${source}index.ts` },
      { find: new RegExp('^@tembo\\-io\\/sdk/(.*)$'), replacement: `${source}$1` },
    ],
  },
  // A document with no smoke-testable operation emits no test file, which is not a failure.
  test: { include: ['tests/api-resources/**/*.test.ts'], passWithNoTests: true },
});
