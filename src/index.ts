// File generated from our OpenAPI spec by Scalar. See README.md for details.

export { Tembo as default } from './client.js';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './api-promise';
export { Tembo } from './client.js';
export { type ClientOptions, type AuthTokenProvider } from './client';
export {
  Live,
  LiveConnection,
  LiveSubscriptionError,
  type LiveSubscribeParams,
  type LiveSubscribeOptions,
  type LiveClientMessage,
  type LiveServerMessage,
  type SessionEventDelta,
  type SessionOutputEvent,
} from './live';
export {
  TemboError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';
