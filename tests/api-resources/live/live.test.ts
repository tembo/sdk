// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource live', () => {
  smokeCase('live.authorize:single', { operation: 'authorize', path: '/v1/live' }, 'authorize', async () => {
    const live = await client.live.authorize();
  });
  smokeCase('live.connect:single', { operation: 'connect', path: '/v1/live' }, 'connect', async () => {
    const socket = client.live.connect({
      ticket: 'ticket',
    });
    try {
      // Stop at the first proof a side works: the server accepted the upgrade (`open`) or sent a
      // payload (`message`/`raw`). Leaving the socket open would keep the worker alive.
      for await (const message of socket) {
        if (message.type === 'open' || message.type === 'message' || message.type === 'raw') break;
      }
    } finally {
      socket.close();
    }
  });
});
