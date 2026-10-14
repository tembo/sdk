import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function attachLiveExports(source) {
  return source.includes("from './live'")
    ? source
    : `${source}\nexport { Live, LiveConnection, LiveSubscriptionError, type LiveSubscribeParams, type LiveSubscribeOptions, type LiveClientMessage, type LiveServerMessage, type SessionEventDelta, type SessionOutputEvent } from './live';\n`;
}

export function attachLiveResource(source, resource) {
  const client = resource === 'client';
  const imported = client
    ? "import { Live as PublicLive } from './live';\n"
    : "import { SessionEvents as PublicSessionEvents } from '../../live';\n";
  const property = client ? 'live' : 'events';
  const constructor = client ? 'PublicLive(this)' : 'PublicSessionEvents(this._client)';
  const field = `  ${property}: ${client ? 'PublicLive' : 'PublicSessionEvents'} = new ${constructor};`;
  let updated = source;
  if (!updated.includes(imported.trim())) {
    const position = updated.indexOf('import ');
    if (position === -1) throw new Error('Review changed generated imports');
    updated = updated.slice(0, position) + imported + updated.slice(position);
  }
  // Generation can add its own property (or re-add one this script attached), so replace every
  // existing declaration with a single hand-maintained one.
  updated = updated.replace(new RegExp(`^  ${property}: .+ = new .+;\\n`, 'gm'), '');
  const declaration = client ? /export class Tembo[^\n{]*\{/ : /export class Sessions[^\n{]*\{/;
  if (!declaration.test(updated)) throw new Error('Review changed generated resource class');
  return updated.replace(declaration, (match, offset) =>
    updated[offset + match.length] === '\n' ? `${match}\n${field}` : `${match}\n${field}\n`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  for (const [file, transform] of [
    ['../src/index.ts', attachLiveExports],
    ['../src/client.ts', (source) => attachLiveResource(source, 'client')],
    ['../src/resources/sessions/sessions.ts', (source) => attachLiveResource(source, 'sessions')],
  ]) {
    const path = new URL(file, import.meta.url);
    const source = await readFile(path, 'utf8');
    const updated = transform(source);
    if (source !== updated) await writeFile(path, updated);
  }
}
