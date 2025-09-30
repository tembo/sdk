// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Get information about the current authenticated user
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/me', options);
  }
}

export interface MeRetrieveResponse {
  /**
   * Organization ID for the authenticated user
   */
  orgId: string | null;

  /**
   * User ID for the authenticated user
   */
  userId: string | null;
}

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };
}
