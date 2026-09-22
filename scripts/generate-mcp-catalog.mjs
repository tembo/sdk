import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const spec = JSON.parse(await readFile(new URL('openapi/openapi.json', root), 'utf8'));
const schema = spec.paths['/v1/mcp-connections/suggested'].get.responses['200'].content['application/json'].schema;
function type(s) {
  if (s.enum) return s.enum.map(JSON.stringify).join(' | ');
  if (s.anyOf) return s.anyOf.map(type).join(' | ');
  if (Array.isArray(s.type)) return s.type.map(t => type({...s,type:t})).join(' | ');
  if (s.type === 'array') return `Array<${type(s.items)}>`;
  if (s.type === 'object') return `{${Object.entries(s.properties).map(([k,v])=>`${k}${s.required?.includes(k)?'':'?'}: ${type(v)}`).join(';')}}`;
  if (['string','boolean','null'].includes(s.type)) return s.type;
  throw new Error(JSON.stringify(s));
}
const path = new URL('src/resources/mcp-connections.ts', root);
let source = await readFile(path,'utf8');
source = source.replace(/\n\/\/ BEGIN SUGGESTED TYPE[\s\S]*?\/\/ END SUGGESTED TYPE\n/g,'\n');
source = source.replace(/  \/\/ BEGIN SUGGESTED METHOD[\s\S]*?  \/\/ END SUGGESTED METHOD\n/g,'');
source = source.replace('export class McpConnections extends APIResource {', `export class McpConnections extends APIResource {\n  // BEGIN SUGGESTED METHOD\n  /** List Tembo's suggested MCP servers and their connection status. */\n  suggested(options?: RequestOptions): APIPromise<McpSuggestedServers> {\n    return this._client.get('/v1/mcp-connections/suggested', options);\n  }\n  // END SUGGESTED METHOD`);
source += `\n// BEGIN SUGGESTED TYPE\nexport type McpSuggestedServers = ${type(schema)};\n// END SUGGESTED TYPE\n`;
await writeFile(path,source);
