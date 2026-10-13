import assert from 'node:assert/strict';
import Tembo, { Live } from '../dist/esm/index.js';

if (!process.env.TEMBO_API_KEY) throw new Error('Set TEMBO_API_KEY to a dev API key.');
const client = new Tembo({
  apiKey: process.env.TEMBO_API_KEY,
  baseURL: process.env.TEMBO_API_URL ?? 'https://internal.tembo-development.com/public-api',
  maxRetries: 0,
  timeout: 15000,
});
const runAgent = process.env.RUN_AGENT === '1';
let sessionId = process.env.TEMBO_TEST_SESSION_ID;
if (!sessionId && !runAgent)
  throw new Error('Set TEMBO_TEST_SESSION_ID, or RUN_AGENT=1 to create a private smoke-test session.');
if (!sessionId) {
  const created = await client.sessions.create({
    description:
      'Public SDK live smoke test. Do not use tools, edit files, access repositories, or create pull requests.',
    queueRightAway: false,
    visibility: 'private',
    codeRepositoryIds: [],
  });
  sessionId = created.id;
}
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 180000);
let marker = 'LIVE_API_SDK_OK';
const forceReconnect = process.env.FORCE_RECONNECT === '1' && runAgent;
const originalConnect = Live.prototype.connect;
const originalAuthorize = Live.prototype.authorize;
let connection;
let authorizations = 0;
let reconnected = false;
if (forceReconnect) {
  Live.prototype.connect = function (...params) {
    connection = originalConnect.apply(this, params);
    return connection;
  };
  Live.prototype.authorize = function (...params) {
    authorizations++;
    return originalAuthorize.apply(this, params);
  };
}
let messageId;
let output = '';
let completed = false;
try {
  for await (const frame of client.sessions.events.live.subscribe(
    { sessionId },
    { signal: controller.signal },
  )) {
    if (frame.type === 'ready') {
      console.log('PASS dev SDK subscription authorized');
      if (!runAgent) {
        completed = true;
        break;
      }
      if (!messageId) {
        const sent = await client.messages.create({
          sessionId,
          content: `Reply with exactly ${marker}. Do not use tools. This tests public SDK live output.`,
        });
        messageId = sent.message.id;
      }
    } else {
      assert.equal(frame.type, 'delta');
      if (frame.data.messageId !== messageId) continue;
      if (frame.data.event === 'response.output_text.delta') output += JSON.parse(frame.data.message).delta;
      if (frame.data.event === 'response.completed') {
        assert.equal(output.trim(), marker);
        if (forceReconnect && !reconnected) {
          reconnected = true;
          marker = 'LIVE_API_SDK_RECONNECTED_OK';
          messageId = undefined;
          output = '';
          connection.close();
          continue;
        }
        completed = true;
        console.log(`PASS real SDK token stream (${sessionId}, ${messageId})`);
        break;
      }
    }
  }
  assert.ok(completed, 'SDK live test timed out before expected output');
  if (forceReconnect) {
    assert.ok(reconnected && authorizations >= 2);
    console.log('PASS real SDK reconnect obtains a fresh authorization and streams another turn');
  }
  if (runAgent) {
    const deadline = Date.now() + 30000;
    let recorded = false;
    while (!recorded && Date.now() < deadline) {
      const events = await client.sessions.listEvents(sessionId, { messageId, limit: 100 });
      recorded = events.items.some((event) => event.eventData?.accumulatedText === marker);
      if (!recorded) await new Promise((resolve) => setTimeout(resolve, 100));
    }
    assert.ok(recorded, 'Live assistant output was not recorded');
    console.log('PASS SDK live output reconciles with recorded events');
  }
} finally {
  clearTimeout(timer);
  controller.abort();
  Live.prototype.connect = originalConnect;
  Live.prototype.authorize = originalAuthorize;
  if (runAgent) await client.sessions.stop(sessionId, { cancelQueued: true });
}
