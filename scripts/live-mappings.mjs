import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function migrateLiveMappings(config) {
  const next = structuredClone(config);
  delete next.resources.messages?.subresources?.live;
  delete next.resources.sessions?.subresources?.live;
  next.resources.live = {
    methods: {
      authorize: { kind: 'http', endpoint: 'post /v1/live', verb: 'post', path: '/v1/live' },
      connect: { kind: 'websocket', endpoint: 'get /v1/live', verb: 'get', path: '/v1/live' },
    },
  };
  return next;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const config = JSON.parse(await readFile(new URL('../scalar.config.json', import.meta.url), 'utf8'));
  console.log(JSON.stringify(migrateLiveMappings(config), null, 2));
}
