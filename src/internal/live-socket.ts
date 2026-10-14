import { WebSocket } from 'ws';
import { NodeWebSocket } from './ws-adapter-node';
import type { WebSocketLike } from './ws-adapter';

export function createLiveSocket(url: URL): WebSocketLike {
  return new NodeWebSocket(new WebSocket(url));
}
