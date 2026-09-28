import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const spec = JSON.parse(await readFile(new URL('openapi/openapi.json', root), 'utf8'));
const inferencePath = JSON.parse(await readFile(new URL('openapi/inference.json', root), 'utf8'));
spec.paths['/v1/inference'] = inferencePath;
const schema = spec.paths['/v1/inference'].get.responses['200'].content['application/json'].schema;
function type(s) {
  if (s.enum) return s.enum.map(JSON.stringify).join(' | ');
  if (s.anyOf) return s.anyOf.map(type).join(' | ');
  if (Array.isArray(s.type)) return s.type.map((t) => type({ ...s, type: t })).join(' | ');
  if (s.type === 'array') return `Array<${type(s.items)}>`;
  if (s.type === 'object')
    return `{${Object.entries(s.properties)
      .map(([k, v]) => `${k}${s.required?.includes(k) ? '' : '?'}: ${type(v)}`)
      .join(';')}}`;
  if (['string', 'boolean', 'number', 'integer', 'null'].includes(s.type))
    return s.type === 'integer' ? 'number' : s.type;
  throw new Error(JSON.stringify(s));
}
const path = new URL('src/resources/models.ts', root);
let source = await readFile(path, 'utf8');
source = source.replace(/\n\/\/ BEGIN INFERENCE TYPE[\s\S]*?\/\/ END INFERENCE TYPE\n/g, '\n');
source = source.replace(/  \/\/ BEGIN INFERENCE METHOD[\s\S]*?  \/\/ END INFERENCE METHOD\n/g, '');
source = source.replace(
  'export class Models extends APIResource {',
  `export class Models extends APIResource {\n  // BEGIN INFERENCE METHOD\n  /** Read CLI/model choices and the selected inference source and usage. */\n  inference(query: {agent?: string; usage?: 'true' | 'false'} = {}, options?: RequestOptions): APIPromise<InferenceConfiguration> {\n    return this._client.get('/v1/inference', {query, ...options});\n  }\n  // END INFERENCE METHOD`,
);
source += `\n// BEGIN INFERENCE TYPE\nexport type InferenceConfiguration = ${type(schema)};\n// END INFERENCE TYPE\n`;
await writeFile(path, source);
await writeFile(new URL('openapi/openapi.json', root), JSON.stringify(spec, null, 2) + '\n');

const configPath = new URL('scalar.config.json', root);
const config = JSON.parse(await readFile(configPath, 'utf8'));
config.resources.models.methods.inference = 'get /v1/inference';
await writeFile(configPath, JSON.stringify(config, null, 2) + '\n');

const manifestPath = new URL('scalar-sdk.manifest.json', root);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
manifest.operations = manifest.operations.filter((operation) => operation.path !== '/v1/inference');
manifest.operations.push({
  method: 'GET',
  path: '/v1/inference',
  operationId: inferencePath.get.operationId,
  publicResource: 'models',
  publicOperation: 'inference',
});
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
execFileSync(
  process.execPath,
  [
    fileURLToPath(new URL('node_modules/@biomejs/biome/bin/biome', root)),
    'format',
    '--write',
    'src/resources/models.ts',
    'scalar.config.json',
  ],
  { cwd: fileURLToPath(root), stdio: 'inherit' },
);
