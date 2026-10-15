// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Pins extends APIResource {
  /**
   * List sessions, pull requests, and projects you have pinned, in pin order.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PinListResponse>} List pins
   *
   * @example
   * ```ts
   * const pin = await client.pins.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PinListResponse> {
    return this._client.get('/v1/pins', options);
  }

  /**
   * Pin a session, pull request, or project you have permission to access.
   *
   * @param {PinCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PinCreateResponse>} Create a pin
   *
   * @example
   * ```ts
   * const pin = await client.pins.create({
   *   type: 'session',
   *   id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  create(body: PinCreateParams, options?: RequestOptions): APIPromise<PinCreateResponse> {
    return this._client.post('/v1/pins', { body, ...options });
  }

  /**
   * Update the placement of a pin.
   *
   * @param {string} resourceID
   * @param {PinUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PinUpdateResponse>} Update a pin
   *
   * @example
   * ```ts
   * const pin = await client.pins.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   resourceType: 'session',
   *   placement: {
   *     target: {
   *       type: 'session',
   *       id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     },
   *     position: 'before',
   *   },
   * });
   * ```
   */
  update(
    resourceID: string,
    params: PinUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PinUpdateResponse> {
    const { resourceType, ...body } = params;
    return this._client.patch(__scalarPath`/v1/pins/${resourceType}/${resourceID}`, { body, ...options });
  }

  /**
   * Unpin a session, pull request, or project.
   *
   * @param {string} resourceID
   * @param {PinDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PinDeleteResponse>} Delete a pin
   *
   * @example
   * ```ts
   * const pin = await client.pins.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   resourceType: 'session',
   * });
   * ```
   */
  delete(
    resourceID: string,
    params: PinDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PinDeleteResponse> {
    const { resourceType } = params;
    return this._client.delete(__scalarPath`/v1/pins/${resourceType}/${resourceID}`, options);
  }
}

export interface PinListResponse {
  resources: Array<PinListResponse.Resource | PinListResponse.Resource2 | PinListResponse.Resource3>;
}

export namespace PinListResponse {
  export interface Resource {
    type: 'session';
    resource: Resource.Resource;
  }

  export namespace Resource {
    export interface Resource {
      id: string;
      title: string;
      kind: string;
      externalId: string | null;
      agentId: string | null;
      /**
       * @format date-time
       */
      createdAt: string;
      /**
       * @format date-time
       */
      updatedAt: string;
      /**
       * @format date-time
       */
      lastQueuedAt: string | null;
      createdBy: string | null;
      projectId: string | null;
      level: number;
      visibility: 'public' | 'private';
      vm: Resource.VM | null;
      sessionSource: Resource.SessionSource;
      pullRequests: Array<Resource.PullRequest>;
      diffSummary: Resource.DiffSummary | null;
      state: Resource.State;
    }

    export namespace Resource {
      export interface VM {
        id: string;
        status: 'Initializing' | 'Running' | 'Warm' | 'Stopping' | 'Idle' | 'Terminated';
      }

      export interface SessionSource {
        type: string;
        name: string;
        sessionSourceCodeRepositories: Array<SessionSource.SessionSourceCodeRepository>;
      }

      export namespace SessionSource {
        export interface SessionSourceCodeRepository {
          codeRepository: SessionSourceCodeRepository.CodeRepository;
        }

        export namespace SessionSourceCodeRepository {
          export interface CodeRepository {
            id: string;
            name: string;
            integration: CodeRepository.Integration;
          }

          export namespace CodeRepository {
            export interface Integration {
              type: 'github' | 'gitlab' | 'bitbucket';
            }
          }
        }
      }

      export interface PullRequest {
        status: 'open' | 'merged' | 'closed';
        diffSummary: PullRequest.DiffSummary | null;
      }

      export namespace PullRequest {
        export interface DiffSummary {
          additions: number;
          deletions: number;
        }
      }

      export interface DiffSummary {
        additions: number;
        deletions: number;
      }

      export interface State {
        isQueued: boolean;
        isCancelled: boolean;
        isCompleted: boolean;
        isFailed: boolean;
        inProgress: boolean;
        current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
      }
    }
  }

  export interface Resource2 {
    type: 'pull_request';
    resource: Resource2.Resource;
  }

  export namespace Resource2 {
    export interface Resource {
      id: string;
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
      author: Resource.Author | null;
      codeRepository: Resource.CodeRepository | null;
    }

    export namespace Resource {
      export interface Author {
        login: string | null;
        avatarUrl: string | null;
      }

      export interface CodeRepository {
        name: string;
        owner: string | null;
        integration: CodeRepository.Integration;
      }

      export namespace CodeRepository {
        export interface Integration {
          type: 'github' | 'gitlab' | 'bitbucket';
        }
      }
    }
  }

  export interface Resource3 {
    type: 'project';
    resource: Resource3.Resource;
  }

  export namespace Resource3 {
    export interface Resource {
      id: string;
      name: string;
      icon:
        | 'folder'
        | 'code'
        | 'terminal'
        | 'book'
        | 'brain'
        | 'bug'
        | 'building'
        | 'cloud'
        | 'globe'
        | 'idea'
        | 'tools'
        | 'magic'
        | 'processor'
        | 'sandbox'
        | 'server'
        | 'tasks'
        | 'tactics'
        | 'images'
        | 'database'
        | 'api'
        | 'mobile'
        | 'package';
      color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    }
  }
}

export interface PinCreateParams {
  type: 'session' | 'pull_request' | 'project';
  /**
   * @format uuid
   */
  id: string;
  placement?: PinCreateParams.Placement;
}

export namespace PinCreateParams {
  export interface Placement {
    target: Placement.Target;
    position: 'before' | 'after';
  }

  export namespace Placement {
    export interface Target {
      type: 'session' | 'pull_request' | 'project';
      /**
       * @format uuid
       */
      id: string;
    }
  }
}

export type PinCreateResponse =
  | PinCreateResponse.PinCreateResponseItem
  | PinCreateResponse.PinCreateResponseItem2
  | PinCreateResponse.PinCreateResponseItem3;

export namespace PinCreateResponse {
  export interface PinCreateResponseItem {
    type: 'session';
    resource: PinCreateResponseItem.Resource;
  }

  export namespace PinCreateResponseItem {
    export interface Resource {
      id: string;
      title: string;
      kind: string;
      externalId: string | null;
      agentId: string | null;
      /**
       * @format date-time
       */
      createdAt: string;
      /**
       * @format date-time
       */
      updatedAt: string;
      /**
       * @format date-time
       */
      lastQueuedAt: string | null;
      createdBy: string | null;
      projectId: string | null;
      level: number;
      visibility: 'public' | 'private';
      vm: Resource.VM | null;
      sessionSource: Resource.SessionSource;
      pullRequests: Array<Resource.PullRequest>;
      diffSummary: Resource.DiffSummary | null;
      state: Resource.State;
    }

    export namespace Resource {
      export interface VM {
        id: string;
        status: 'Initializing' | 'Running' | 'Warm' | 'Stopping' | 'Idle' | 'Terminated';
      }

      export interface SessionSource {
        type: string;
        name: string;
        sessionSourceCodeRepositories: Array<SessionSource.SessionSourceCodeRepository>;
      }

      export namespace SessionSource {
        export interface SessionSourceCodeRepository {
          codeRepository: SessionSourceCodeRepository.CodeRepository;
        }

        export namespace SessionSourceCodeRepository {
          export interface CodeRepository {
            id: string;
            name: string;
            integration: CodeRepository.Integration;
          }

          export namespace CodeRepository {
            export interface Integration {
              type: 'github' | 'gitlab' | 'bitbucket';
            }
          }
        }
      }

      export interface PullRequest {
        status: 'open' | 'merged' | 'closed';
        diffSummary: PullRequest.DiffSummary | null;
      }

      export namespace PullRequest {
        export interface DiffSummary {
          additions: number;
          deletions: number;
        }
      }

      export interface DiffSummary {
        additions: number;
        deletions: number;
      }

      export interface State {
        isQueued: boolean;
        isCancelled: boolean;
        isCompleted: boolean;
        isFailed: boolean;
        inProgress: boolean;
        current?: 'inProgress' | 'queued' | 'completed' | 'failed' | 'cancelled';
      }
    }
  }

  export interface PinCreateResponseItem2 {
    type: 'pull_request';
    resource: PinCreateResponseItem2.Resource;
  }

  export namespace PinCreateResponseItem2 {
    export interface Resource {
      id: string;
      url: string;
      title: string | null;
      status: 'open' | 'merged' | 'closed';
      isDraft: boolean;
      author: Resource.Author | null;
      codeRepository: Resource.CodeRepository | null;
    }

    export namespace Resource {
      export interface Author {
        login: string | null;
        avatarUrl: string | null;
      }

      export interface CodeRepository {
        name: string;
        owner: string | null;
        integration: CodeRepository.Integration;
      }

      export namespace CodeRepository {
        export interface Integration {
          type: 'github' | 'gitlab' | 'bitbucket';
        }
      }
    }
  }

  export interface PinCreateResponseItem3 {
    type: 'project';
    resource: PinCreateResponseItem3.Resource;
  }

  export namespace PinCreateResponseItem3 {
    export interface Resource {
      id: string;
      name: string;
      icon:
        | 'folder'
        | 'code'
        | 'terminal'
        | 'book'
        | 'brain'
        | 'bug'
        | 'building'
        | 'cloud'
        | 'globe'
        | 'idea'
        | 'tools'
        | 'magic'
        | 'processor'
        | 'sandbox'
        | 'server'
        | 'tasks'
        | 'tactics'
        | 'images'
        | 'database'
        | 'api'
        | 'mobile'
        | 'package';
      color: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink';
    }
  }
}

export interface PinUpdateParams {
  /**
   * Path param
   */
  resourceType: 'session' | 'pull_request' | 'project';
  /**
   * Body param
   */
  placement: PinUpdateParams.Placement;
}

export namespace PinUpdateParams {
  export interface Placement {
    target: Placement.Target;
    position: 'before' | 'after';
  }

  export namespace Placement {
    export interface Target {
      type: 'session' | 'pull_request' | 'project';
      /**
       * @format uuid
       */
      id: string;
    }
  }
}

export interface PinUpdateResponse {
  updated: boolean;
}

export interface PinDeleteParams {
  resourceType: 'session' | 'pull_request' | 'project';
}

export interface PinDeleteResponse {
  type: 'session' | 'pull_request' | 'project';
  /**
   * @format uuid
   */
  id: string;
  deleted: true;
}
export declare namespace Pins {
  export {
    type PinListResponse as PinListResponse,
    type PinCreateResponse as PinCreateResponse,
    type PinUpdateResponse as PinUpdateResponse,
    type PinDeleteResponse as PinDeleteResponse,
    type PinCreateParams as PinCreateParams,
    type PinUpdateParams as PinUpdateParams,
    type PinDeleteParams as PinDeleteParams,
  };
}
