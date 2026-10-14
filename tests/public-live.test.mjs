import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import test from 'node:test';
import { WebSocketServer } from 'ws';
import Tembo, { LiveSubscriptionError } from '../dist/esm/index.js';
import { attachLiveExports, attachLiveResource } from '../scripts/attach-live.mjs';
import { migrateLiveMappings } from '../scripts/live-mappings.mjs';

const sessionId = '7c9e6679-7425-40de-944b-e07fc1f90ae7';
const delta = {
  type: 'delta',
  data: { event: 'response.output_text.delta', message: '{"delta":"hello"}', messageId: 'message-1' },
};
const params = { resource: 'sessions.events', input: { scope: { sessionId } } };
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function fixture() {
  const state = {
    tickets: [],
    connections: [],
    subscriptions: [],
    sockets: new Set(),
    hold: false,
    status: 200,
    scopedStatus: undefined,
    rejectUpgrade: false,
    stallTicket: false,
    requests: 0,
  };
  const server = createServer(async (request, response) => {
    assert.equal(request.url, '/v1/live');
    assert.equal(request.method, 'POST');
    assert.equal(request.headers.authorization, 'Bearer test-key');
    let body = '';
    for await (const chunk of request) body += chunk;
    assert.equal(body, '');
    state.requests++;
    if (state.stallTicket) return;
    if (state.status !== 200)
      return response
        .writeHead(state.status, { 'content-type': 'application/json' })
        .end('{"error":"Refused"}');
    const ticket = `ticket-${state.tickets.length + 1}`;
    state.tickets.push(ticket);
    response.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ticket }));
  });
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (request, socket, head) => {
    const url = new URL(request.url, 'http://localhost');
    assert.equal(url.pathname, '/v1/live');
    assert.equal(request.headers.authorization, undefined);
    const ticket = url.searchParams.get('ticket');
    if (state.rejectUpgrade || !state.tickets.includes(ticket))
      return socket.end('HTTP/1.1 401 Unauthorized\r\n\r\n');
    state.connections.push(ticket);
    wss.handleUpgrade(request, socket, head, (connection) => wss.emit('connection', connection));
  });
  wss.on('connection', (socket) => {
    state.sockets.add(socket);
    socket.on('close', () => state.sockets.delete(socket));
    socket.send(JSON.stringify({ type: 'ready' }));
    socket.on('message', (data) => {
      const message = JSON.parse(String(data));
      state.subscriptions.push(message);
      if (message.op === 'unsubscribe') return;
      if (state.scopedStatus)
        return socket.send(
          JSON.stringify({ id: message.id, type: 'error', status: state.scopedStatus, message: 'Refused' }),
        );
      assert.equal(message.resource, 'sessions.events');
      assert.equal(message.input.scope.sessionId, sessionId);
      if (!state.hold) {
        socket.send(JSON.stringify({ id: message.id, type: 'ready' }));
        socket.send(JSON.stringify({ id: message.id, type: 'event', data: delta }));
      }
    });
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const client = new Tembo({
    apiKey: 'test-key',
    baseURL: `http://127.0.0.1:${server.address().port}`,
    maxRetries: 0,
  });
  return {
    server,
    client,
    state,
    async close() {
      server.closeAllConnections();
      for (const socket of state.sockets) socket.terminate();
      await new Promise((resolve) => wss.close(resolve));
      await new Promise((resolve) => server.close(resolve));
    },
  };
}

test('public live authorizes and resubscribes with fresh tickets after disconnect', async () => {
  const { client, state, close } = await fixture();
  const frames = [];
  try {
    for await (const frame of client.live.subscribe(params, { initialDelay: 5 })) {
      frames.push(frame);
      if (frames.length === 2) for (const socket of state.sockets) socket.terminate();
      if (frames.length === 4) break;
    }
    assert.deepEqual(frames, [{ type: 'ready' }, delta, { type: 'ready' }, delta]);
    assert.deepEqual(state.connections, ['ticket-1', 'ticket-2']);
    assert.deepEqual(
      state.subscriptions,
      [1, 2].map(() => ({ op: 'subscribe', id: 'events', ...params })),
    );
    await wait(30);
    assert.equal(state.sockets.size, 0);
  } finally {
    await close();
  }
});

test('public live readiness waits for scoped authorization and the session facade works', async () => {
  const { client, state, close } = await fixture();
  state.hold = true;
  const controller = new AbortController();
  const iterator = client.sessions.events.live.subscribe({ sessionId }, { signal: controller.signal });
  try {
    const pending = iterator.next();
    assert.equal(
      await Promise.race([pending.then(() => 'yielded'), wait(50).then(() => 'waiting')]),
      'waiting',
    );
    for (const socket of state.sockets) socket.send(JSON.stringify({ id: 'events', type: 'ready' }));
    assert.deepEqual((await pending).value, { type: 'ready' });
    const end = iterator.next();
    controller.abort();
    assert.equal((await end).done, true);
  } finally {
    controller.abort();
    await iterator.return();
    await close();
  }
});

test('one-shot public connection supports multiplexed subscriptions', async () => {
  const { client, state, close } = await fixture();
  try {
    const connection = client.live.connect(await client.live.authorize());
    const iterator = connection[Symbol.asyncIterator]();
    assert.deepEqual((await iterator.next()).value, { type: 'ready' });
    connection.send({ op: 'subscribe', id: 'first', ...params });
    connection.send({ op: 'subscribe', id: 'second', ...params });
    const frames = [];
    while (frames.length < 4) frames.push((await iterator.next()).value);
    assert.deepEqual(
      frames.map((frame) => [frame.id, frame.type]),
      [
        ['first', 'ready'],
        ['first', 'event'],
        ['second', 'ready'],
        ['second', 'event'],
      ],
    );
    connection.send({ op: 'unsubscribe', id: 'first' });
    await iterator.return();
    assert.equal(state.connections.length, 1);
  } finally {
    await close();
  }
});

test('scoped refusals and revoked subscriptions are terminal', async () => {
  for (const status of [400, 403, 404]) {
    const { client, state, close } = await fixture();
    state.scopedStatus = status;
    try {
      await assert.rejects(
        client.live.subscribe(params, { initialDelay: 1 }).next(),
        (error) => error instanceof LiveSubscriptionError && error.status === status,
      );
      assert.equal(state.requests, 1);
    } finally {
      await close();
    }
  }
  const { client, state, close } = await fixture();
  const iterator = client.live.subscribe(params);
  try {
    await iterator.next();
    await iterator.next();
    const pending = iterator.next();
    for (const socket of state.sockets)
      socket.send(JSON.stringify({ id: 'events', type: 'error', status: 404, message: 'Revoked' }));
    await assert.rejects(pending, (error) => error instanceof LiveSubscriptionError && error.status === 404);
    assert.equal(state.requests, 1);
  } finally {
    await iterator.return();
    await close();
  }
});

test('rejected upgrades fail promptly instead of hanging', async () => {
  const { client, state, close } = await fixture();
  state.rejectUpgrade = true;
  try {
    await assert.rejects(
      client.live.subscribe(params, { maxRetries: 0, timeout: 500 }).next(),
      /Live connection failed/,
    );
    assert.equal(state.requests, 1);
  } finally {
    await close();
  }
});

test('abort interrupts backoff and authorization refuses without retries', async () => {
  const { client, state, close } = await fixture();
  const controller = new AbortController();
  state.status = 503;
  try {
    const pending = client.live.subscribe(params, { signal: controller.signal, initialDelay: 10000 }).next();
    await wait(50);
    controller.abort();
    assert.equal((await pending).done, true);
    state.status = 403;
    await assert.rejects(client.live.subscribe(params).next(), (error) => error.status === 403);
    assert.equal(state.requests, 2);
  } finally {
    await close();
  }
});

test('subscription readiness has a deadline and retry limits are honored', async () => {
  const { client, state, close } = await fixture();
  state.hold = true;
  try {
    await assert.rejects(
      client.live.subscribe(params, { maxRetries: 1, initialDelay: 1, timeout: 25 }).next(),
      /timed out/,
    );
    assert.equal(state.requests, 2);
    await assert.rejects(client.live.subscribe(params, { maxRetries: -1 }).next(), RangeError);
  } finally {
    await close();
  }
});

test('invalid frames and oversized unread buffers fail safely', async () => {
  const { client, state, close } = await fixture();
  const iterator = client.live.subscribe(params, { maxRetries: 0 });
  try {
    await iterator.next();
    await iterator.next();
    const pending = iterator.next();
    for (const socket of state.sockets) socket.send('not-json');
    await assert.rejects(pending, LiveSubscriptionError);
    const connection = client.live.connect(await client.live.authorize());
    const stream = connection[Symbol.asyncIterator]();
    await stream.next();
    for (const socket of state.sockets)
      for (let index = 0; index < 5; index++)
        socket.send(
          JSON.stringify({
            id: 'events',
            type: 'event',
            data: { type: 'delta', data: { event: 'text', message: 'x'.repeat(256 * 1024) } },
          }),
        );
    await wait(30);
    await assert.rejects(stream.next(), /buffer exceeded/);
  } finally {
    await iterator.return();
    await close();
  }
});

test('live helpers are reattached after regeneration, including new generated live properties', () => {
  const generated =
    "export { Tembo as default } from './client.js';\nexport { Tembo, type ClientOptions, type AuthTokenProvider } from './client.js';\n";
  const attached = attachLiveExports(generated);
  assert.match(attached, /LiveSubscriptionError/);
  assert.equal(attachLiveExports(attached), attached);
  const client =
    'import { Live } from "./generated-live";\nexport class Tembo {\n  live: Live = new Live(this);\n}\n';
  const updated = attachLiveResource(client, 'client');
  assert.match(updated, /live: PublicLive = new PublicLive\(this\)/);
  assert.equal(attachLiveResource(updated, 'client'), updated);
  const merged =
    "import { Live as PublicLive } from './live';\nimport { Live } from './resources/live/live';\nexport class Tembo {\n  live: PublicLive = new PublicLive(this);\n  apiKey: string;\n  live: Live = new Live(this);\n}\n";
  const deduped = attachLiveResource(merged, 'client');
  assert.equal(deduped.match(/^ {2}live: /gm).length, 1);
  assert.match(deduped, /live: PublicLive = new PublicLive\(this\)/);
  assert.equal(attachLiveResource(deduped, 'client'), deduped);
  const sessions = 'import { APIResource } from "./resource";\nexport class Sessions extends APIResource {}';
  const expanded = attachLiveResource(sessions, 'sessions');
  assert.match(expanded, /events: PublicSessionEvents/);
  assert.equal(attachLiveResource(expanded, 'sessions'), expanded);
  assert.equal(typeof new Tembo({ apiKey: 'key' }).withOptions({ timeout: 1 }).live.subscribe, 'function');
});

test('pending live mappings replace obsolete endpoints without mutating production config', () => {
  const config = {
    resources: {
      messages: { subresources: { live: { methods: {} } } },
      sessions: { subresources: { live: { methods: {} }, diffs: { methods: {} } } },
    },
    environments: { production: 'https://api.tembo.io' },
  };
  const migrated = migrateLiveMappings(config);
  assert.ok(config.resources.messages.subresources.live);
  assert.equal(migrated.resources.messages.subresources.live, undefined);
  assert.equal(migrated.resources.sessions.subresources.live, undefined);
  assert.deepEqual(
    migrated.resources.sessions.subresources.diffs,
    config.resources.sessions.subresources.diffs,
  );
  assert.equal(migrated.resources.live.methods.authorize.endpoint, 'post /v1/live');
  assert.equal(migrated.resources.live.methods.connect.kind, 'websocket');
  assert.deepEqual(migrated.environments, config.environments);
});

test('the subscription timeout also bounds a stalled ticket request', async () => {
  const { client, state, close } = await fixture();
  state.stallTicket = true;
  try {
    const started = Date.now();
    await assert.rejects(client.live.subscribe(params, { maxRetries: 0, timeout: 50 }).next());
    assert.ok(Date.now() - started < 2000);
  } finally {
    await close();
  }
});
