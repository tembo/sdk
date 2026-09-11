import { writeFile } from 'node:fs/promises';

const url = process.env.TEMBO_OPENAPI_URL ?? 'https://internal.tembo-development.com/public-api/openapi/public';
const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`OpenAPI download failed: HTTP ${response.status}`);
const schema = await response.json();
if (!schema.openapi?.startsWith('3.') || !schema.paths || !Object.keys(schema.paths).some(path => path.startsWith('/v1/'))) {
  throw new Error('Expected an OpenAPI 3 document containing v1 routes; the schema was not replaced.');
}
await writeFile(new URL('../openapi/openapi.json', import.meta.url), `${JSON.stringify(schema, null, 2)}\n`);
console.log(`Saved OpenAPI schema from ${url}. Review the diff and regenerate before committing.`);
