// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TemboSDK } from '../client';

export abstract class APIResource {
  protected _client: TemboSDK;

  constructor(client: TemboSDK) {
    this._client = client;
  }
}
