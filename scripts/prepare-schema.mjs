import { readFile, writeFile } from 'node:fs/promises';
import { normalizeOpenapiForScalar } from './normalize-openapi.mjs';

const source = JSON.parse(await readFile(new URL('../openapi/openapi.json', import.meta.url), 'utf8'));
const schema = normalizeOpenapiForScalar(source);
await writeFile(
  new URL('../openapi/scalar.openapi.json', import.meta.url),
  `${JSON.stringify(schema, null, 2)}\n`,
);
console.log('Prepared openapi/scalar.openapi.json for Scalar; source schema is unchanged.');
