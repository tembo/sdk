import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import test from 'node:test';
import { WebSocketServer } from 'ws';
import Tembo, { PermissionDeniedError } from '../dist/esm/index.js';

const sessionId = '7c9e6679-7425-40de-944b-e07fc1f90ae7';

async function liveServer() {
  const state = { issued: [], connected: [], refuse: false, sockets: new Set() };
  const server = createServer(async (request, response) => {
    if (request.method !== 'POST' || request.url !== '/v1/messages/live')
      return void response.writeHead(404).end();
    let body = '';
    for await (const chunk of request) body += chunk;
    if (state.refuse || JSON.parse(body).scope.sessionId !== sessionId) {
      return void response
        .writeHead(403, { 'content-type': 'application/json' })
        .end('{"error":"Forbidden"}');
    }
    const ticket = `ticket-${state.issued.length + 1}`;
    state.issued.push(ticket);
    response.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ticket }));
  });
  const wss = new WebSocketServer({ server, path: '/v1/messages/live' });
  wss.on('connection', (socket, request) => {
    const ticket = new URL(request.url, 'http://localhost').searchParams.get('ticket');
    // Tickets are single-use, like the API's.
    if (!state.issued.includes(ticket) || state.connected.includes(ticket))
      return socket.close(1008, 'Invalid ticket');
    state.connected.push(ticket);
    state.sockets.add(socket);
    socket.on('close', () => state.sockets.delete(socket));
    socket.send(JSON.stringify({ type: 'ready' }));
    socket.send(JSON.stringify({ resource: 'message', sessionId }));
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const client = new Tembo({ apiKey: 'test-key', baseURL: `http://127.0.0.1:${server.address().port}` });
  return {
    client,
    state,
    close: () =>
      new Promise((resolve) => {
        wss.close();
        server.close(resolve);
      }),
  };
}

test('live subscribe re-authorizes every connection with a fresh ticket', async () => {
  const { client, state, close } = await liveServer();
  const controller = new AbortController();
  const frames = [];
  try {
    for await (const frame of client.messages.live.subscribe(
      { sessionId },
      { signal: controller.signal, initialDelay: 10 },
    )) {
      frames.push(frame);
      if (frames.length === 2) for (const socket of state.sockets) socket.terminate();
      if (frames.length === 4) controller.abort();
    }
    assert.deepEqual(frames, [
      { type: 'ready' },
      { resource: 'message', sessionId },
      { type: 'ready' },
      { resource: 'message', sessionId },
    ]);
    assert.deepEqual(state.connected, ['ticket-1', 'ticket-2']);
    await new Promise((resolve) => setTimeout(resolve, 50));
    assert.equal(state.sockets.size, 0);
  } finally {
    await close();
  }
});

test('live subscribe stops when access is refused and closes when the loop exits', async () => {
  const { client, state, close } = await liveServer();
  try {
    const frames = [];
    await assert.rejects(async () => {
      for await (const frame of client.messages.live.subscribe({ sessionId }, { initialDelay: 10 })) {
        frames.push(frame);
        if (frames.length === 2) {
          state.refuse = true;
          for (const socket of state.sockets) socket.terminate();
        }
      }
    }, PermissionDeniedError);
    assert.equal(frames.length, 2);

    state.refuse = false;
    for await (const frame of client.messages.live.subscribe({ sessionId })) {
      assert.deepEqual(frame, { type: 'ready' });
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
    assert.equal(state.sockets.size, 0);
  } finally {
    await close();
  }
});
