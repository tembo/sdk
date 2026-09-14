// File generated from our OpenAPI spec by Scalar. See README.md for details.

export { Tembo as default } from './client.js';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './api-promise';
export { Tembo, type ClientOptions, type AuthTokenProvider } from './client.js';
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
