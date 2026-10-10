// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path as __scalarPath } from '../../internal/utils/path';
import type { Uploadable } from '../../core/uploads';

export class ProfilePicture extends APIResource {
  /**
   * Redirect to a user's profile picture. Signed URLs are valid for one hour.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Redirect to the user profile picture
   *
   * @example
   * ```ts
   * await client.users.profilePicture.retrieve('userId');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/v1/users/${userID}/profile-picture`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload a JPEG, PNG, GIF, or WebP profile picture up to 5 MB.
   *
   * @param {string} userID
   * @param {ProfilePictureUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProfilePictureUpdateResponse>} Update your profile picture
   *
   * @example
   * ```ts
   * const profilePicture = await client.users.profilePicture.update('userId', {
   *   file: new File(['file'], 'file'),
   * });
   * ```
   */
  update(
    userID: string,
    body: ProfilePictureUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfilePictureUpdateResponse> {
    return this._client.put(
      __scalarPath`/v1/users/${userID}/profile-picture`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Delete your profile picture. This succeeds if no picture exists.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProfilePictureDeleteResponse>} Delete your profile picture
   *
   * @example
   * ```ts
   * const profilePicture = await client.users.profilePicture.delete('userId');
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<ProfilePictureDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/users/${userID}/profile-picture`, options);
  }
}

export interface ProfilePictureUpdateParams {
  /**
   * @format binary
   */
  file: Uploadable;
}

export interface ProfilePictureUpdateResponse {
  /**
   * @minLength 1
   * @maxLength 255
   */
  userId: string;
  /**
   * @format uri
   */
  url: string;
}

export interface ProfilePictureDeleteResponse {
  /**
   * @minLength 1
   * @maxLength 255
   */
  userId: string;
  deleted: true;
}
export declare namespace ProfilePicture {
  export {
    type ProfilePictureUpdateResponse as ProfilePictureUpdateResponse,
    type ProfilePictureDeleteResponse as ProfilePictureDeleteResponse,
    type ProfilePictureUpdateParams as ProfilePictureUpdateParams,
  };
}
