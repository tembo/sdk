// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Inputs extends APIResource {
  /**
   * List pending questions for the active session agent.
   *
   * @param {string} sessionID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InputListResponse>} List session inputs
   *
   * @example
   * ```ts
   * const input = await client.sessions.inputs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  list(sessionID: string, options?: RequestOptions): APIPromise<InputListResponse> {
    return this._client.get(__scalarPath`/v1/sessions/${sessionID}/inputs`, options);
  }

  /**
   * Answer a pending session question.
   *
   * @param {string} inputID
   * @param {InputUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InputUpdateResponse>} Update a session input
   *
   * @example
   * ```ts
   * const input = await client.sessions.inputs.update('inputId', {
   *   sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   answers: {},
   * });
   * ```
   */
  update(
    inputID: string,
    params: InputUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InputUpdateResponse> {
    const { sessionId, ...body } = params;
    return this._client.patch(__scalarPath`/v1/sessions/${sessionId}/inputs/${inputID}`, {
      body,
      ...options,
    });
  }
}

export interface InputListResponse {
  items: Array<InputListResponse.Item>;
  nextCursor: null;
}

export namespace InputListResponse {
  export interface Item {
    /**
     * @minLength 1
     */
    id: string;
    toolCallId: string;
    status: 'pending' | 'answered';
    /**
     * @minItems 1
     */
    questions: Array<Item.Question>;
  }

  export namespace Item {
    export interface Question {
      id: string;
      header: string;
      question: string;
      isOther: boolean;
      isSecret: boolean;
      options: Array<Question.Option>;
    }

    export namespace Question {
      export interface Option {
        label: string;
        description: string;
      }
    }
  }
}

export interface InputUpdateParams {
  /**
   * Path param
   * @format uuid
   */
  sessionId: string;
  /**
   * Body param: Answers keyed by question ID. Send an empty object to skip the questions.
   */
  answers: Record<string, Array<string>>;
}

export interface InputUpdateResponse {
  /**
   * @minLength 1
   */
  id: string;
  toolCallId: string;
  status: 'pending' | 'answered';
  /**
   * @minItems 1
   */
  questions: Array<InputUpdateResponse.Question>;
}

export namespace InputUpdateResponse {
  export interface Question {
    id: string;
    header: string;
    question: string;
    isOther: boolean;
    isSecret: boolean;
    options: Array<Question.Option>;
  }

  export namespace Question {
    export interface Option {
      label: string;
      description: string;
    }
  }
}
export declare namespace Inputs {
  export {
    type InputListResponse as InputListResponse,
    type InputUpdateResponse as InputUpdateResponse,
    type InputUpdateParams as InputUpdateParams,
  };
}
