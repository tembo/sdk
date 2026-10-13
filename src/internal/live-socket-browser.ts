import { BrowserWebSocket } from './ws-adapter-browser';
import type { WebSocketLike } from './ws-adapter';

export function createLiveSocket(url: URL): WebSocketLike {
  return new BrowserWebSocket(
    new WebSocket(url) as unknown as ConstructorParameters<typeof BrowserWebSocket>[0],
  );
}
