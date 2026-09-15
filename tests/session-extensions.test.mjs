import assert from 'node:assert/strict';
import test from 'node:test';
import Tembo from '../dist/esm/index.js';
import { createServer } from 'node:http';

test('SSE waits for real response headers without an immediate timeout', async () => {
  const server = createServer((_request, response) => {
    setTimeout(() => {
      response.writeHead(200, { 'content-type': 'text/event-stream' });
      response.end('id: 1\nevent: activity\ndata: {}\n\n');
    }, 20);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const client = new Tembo({ apiKey: 'test', baseURL: `http://127.0.0.1:${server.address().port}` });
    const response = await client.sessions.streamEvents('session');
    assert.match(await response.text(), /id: 1/);
  } finally {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
});

test('session extensions preserve authenticated paths, bodies and resume headers', async () => {
  const requests = [];
  const client = new Tembo({
    apiKey: 'test',
    maxRetries: 0,
    fetch: async (input, init) => {
      const request = new Request(input, init);
      requests.push({
        url: request.url,
        method: request.method,
        headers: request.headers,
        body: await request.text(),
      });
      return request.url.endsWith('/stream')
        ? new Response('id: 42\nevent: activity\ndata: {}\n\n', {
            headers: { 'content-type': 'text/event-stream' },
          })
        : Response.json({ items: [] });
    },
  });
  const routine = {
    id: '00000000-0000-4000-8000-000000000001',
    requestId: '00000000-0000-4000-8000-000000000002',
    expectedRevision: 0,
    reporting: 'useful',
    name: 'Briefing',
    prompt: 'Use this session’s files',
    cron: '0 9 * * 1-5',
    timezone: 'America/New_York',
    enabled: true,
  };
  await client.sessions.automations.create('session/one', routine);
  await client.sessions.automations.update('session/one', 'schedule/one', {
    ...routine,
    expectedRevision: 1,
    enabled: false,
  });
  await client.sessions.automations.run('session/one', 'schedule/one', { requestId: 'stable-run' });
  await client.sessions.computer.reconnect('session/one');
  const stream = await client.sessions.streamEvents('session/one', { headers: { 'Last-Event-ID': '41' } });
  assert.equal(requests[0].url, 'https://api.tembo.io/v1/sessions/session%2Fone/automations');
  assert.deepEqual(JSON.parse(requests[0].body), routine);
  assert.equal(requests[1].method, 'PATCH');
  assert.equal(requests[2].method, 'POST');
  assert.equal(requests[3].url, 'https://api.tembo.io/v1/sessions/session%2Fone/computer/reconnect');
  assert.equal(requests[4].headers.get('Last-Event-ID'), '41');
  assert.equal(requests[4].headers.get('authorization'), 'Bearer test');
  assert.match(await stream.text(), /id: 42/);
  assert.deepEqual(JSON.parse(requests[2].body), { requestId: 'stable-run' });
  await client.sessions.automations.delete('session/one', 'schedule/one', {
    requestId: 'stable-delete',
    expectedRevision: 2,
  });
  assert.equal(requests[5].method, 'DELETE');
  assert.deepEqual(JSON.parse(requests[5].body), { requestId: 'stable-delete', expectedRevision: 2 });
});

test('recordings target the session computer with stable IDs and authenticated requests', async () => {
  const requests = [];
  const client = new Tembo({
    apiKey: 'test',
    maxRetries: 0,
    fetch: async (url, init) => {
      const request = new Request(url, init);
      requests.push({
        url: request.url,
        method: request.method,
        authorization: request.headers.get('authorization'),
        body: await request.text(),
      });
      return Response.json({ items: [] });
    },
  });
  await client.sessions.computer.recordings.start('session/one', { id: 'stable-recording' });
  await client.sessions.computer.recordings.list('session/one');
  await client.sessions.computer.recordings.stop('session/one', 'recording/one');
  assert.equal(requests[0].url, 'https://api.tembo.io/v1/sessions/session%2Fone/computer/recordings');
  assert.deepEqual(JSON.parse(requests[0].body), { id: 'stable-recording' });
  assert.equal(requests[1].method, 'GET');
  assert.equal(requests[2].method, 'POST');
  assert.equal(
    requests[2].url,
    'https://api.tembo.io/v1/sessions/session%2Fone/computer/recordings/recording%2Fone/stop',
  );
  assert.ok(requests.every((request) => request.authorization === 'Bearer test'));
});
