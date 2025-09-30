// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tembo } from '../client';

export abstract class APIResource {
  protected _client: Tembo;

  constructor(client: Tembo) {
    this._client = client;
  }
}
