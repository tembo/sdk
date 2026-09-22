import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const spec = JSON.parse(await readFile(new URL('openapi/openapi.json', root), 'utf8'));
const schema = spec.paths['/v1/inference'].get.responses['200'].content['application/json'].schema;
function type(s) {
  if (s.enum) return s.enum.map(JSON.stringify).join(' | ');
  if (s.anyOf) return s.anyOf.map(type).join(' | ');
  if (Array.isArray(s.type)) return s.type.map(t => type({...s,type:t})).join(' | ');
  if (s.type === 'array') return `Array<${type(s.items)}>`;
  if (s.type === 'object') return `{${Object.entries(s.properties).map(([k,v])=>`${k}${s.required?.includes(k)?'':'?'}: ${type(v)}`).join(';')}}`;
  if (['string','boolean','number','integer','null'].includes(s.type)) return s.type === 'integer' ? 'number' : s.type;
  throw new Error(JSON.stringify(s));
}
const path = new URL('src/resources/models.ts', root);
let source = await readFile(path,'utf8');
source = source.replace(/\n\/\/ BEGIN INFERENCE TYPE[\s\S]*?\/\/ END INFERENCE TYPE\n/g,'\n');
source = source.replace(/  \/\/ BEGIN INFERENCE METHOD[\s\S]*?  \/\/ END INFERENCE METHOD\n/g,'');
source = source.replace('export class Models extends APIResource {', `export class Models extends APIResource {\n  // BEGIN INFERENCE METHOD\n  /** Read CLI/model choices and the selected inference source and usage. */\n  inference(query: {agent?: string; usage?: 'true' | 'false'} = {}, options?: RequestOptions): APIPromise<InferenceConfiguration> {\n    return this._client.get('/v1/inference', {query, ...options});\n  }\n  // END INFERENCE METHOD`);
source += `\n// BEGIN INFERENCE TYPE\nexport type InferenceConfiguration = ${type(schema)};\n// END INFERENCE TYPE\n`;
await writeFile(path,source);
