// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import * as ChatgptAPI from './chatgpt';
import {
  Chatgpt,
  type ChatgptRetrieveResponse,
  type ChatgptRetrieveUsageResponse,
  type ChatgptResetUsageResponse,
  type ChatgptResetUsageParams,
} from './chatgpt';
import * as ClaudeAPI from './claude';
import { Claude, type ClaudeRetrieveResponse, type ClaudeRetrieveUsageResponse } from './claude';
import * as SupergrokAPI from './supergrok';
import { Supergrok, type SupergrokRetrieveResponse } from './supergrok';

export class Subscriptions extends APIResource {
  chatgpt: ChatgptAPI.Chatgpt = new ChatgptAPI.Chatgpt(this._client);
  claude: ClaudeAPI.Claude = new ClaudeAPI.Claude(this._client);
  supergrok: SupergrokAPI.Supergrok = new SupergrokAPI.Supergrok(this._client);
}

Subscriptions.Chatgpt = Chatgpt;
Subscriptions.Claude = Claude;
Subscriptions.Supergrok = Supergrok;

export declare namespace Subscriptions {
  export {
    Chatgpt as Chatgpt,
    type ChatgptRetrieveResponse as ChatgptRetrieveResponse,
    type ChatgptRetrieveUsageResponse as ChatgptRetrieveUsageResponse,
    type ChatgptResetUsageResponse as ChatgptResetUsageResponse,
    type ChatgptResetUsageParams as ChatgptResetUsageParams,
  };

  export {
    Claude as Claude,
    type ClaudeRetrieveResponse as ClaudeRetrieveResponse,
    type ClaudeRetrieveUsageResponse as ClaudeRetrieveUsageResponse,
  };

  export { Supergrok as Supergrok, type SupergrokRetrieveResponse as SupergrokRetrieveResponse };
}
