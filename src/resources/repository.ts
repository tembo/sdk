// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Repository extends APIResource {
  /**
   * Gets a list of enabled code repositories for the organization
   */
  list(options?: RequestOptions): APIPromise<RepositoryListResponse> {
    return this._client.get('/repository/list', options);
  }
}

export interface RepositoryListResponse {
  /**
   * Array of enabled code repositories for the organization
   */
  codeRepositories: Array<RepositoryListResponse.CodeRepository>;
}

export namespace RepositoryListResponse {
  export interface CodeRepository {
    /**
     * Unique identifier for the code repository
     */
    id: string;

    /**
     * Timestamp when the repository record was created
     */
    createdAt: string;

    /**
     * Timestamp when the repository was enabled
     */
    enabledAt: string;

    /**
     * Name of the repository
     */
    name: string;

    /**
     * Organization ID that owns this repository
     */
    organizationId: string;

    /**
     * Timestamp when the repository record was last updated
     */
    updatedAt: string;

    /**
     * Default branch name
     */
    branch?: string;

    /**
     * Repository description
     */
    description?: string;

    /**
     * Associated integration details
     */
    integration?: CodeRepository.Integration;

    /**
     * Repository URL
     */
    url?: string;
  }

  export namespace CodeRepository {
    /**
     * Associated integration details
     */
    export interface Integration {
      /**
       * Unique identifier for the integration
       */
      id: string;

      /**
       * Integration configuration settings
       */
      configuration: { [key: string]: unknown };

      /**
       * Name of the integration
       */
      name: string;

      /**
       * Type of integration (e.g., github, gitlab)
       */
      type: string;
    }
  }
}

export declare namespace Repository {
  export { type RepositoryListResponse as RepositoryListResponse };
}
