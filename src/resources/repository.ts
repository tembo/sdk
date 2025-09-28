// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Repository extends APIResource {
  /**
   * Gets a list of enabled code repositories for the organization
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/repository/list', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
