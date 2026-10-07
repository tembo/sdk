// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Retrieve user preferences without exposing stored credentials.
   *
   * @param {string} userID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SettingRetrieveResponse>} Retrieve user settings
   *
   * @example
   * ```ts
   * const setting = await client.users.settings.retrieve('userId');
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/users/${userID}/settings`, options);
  }

  /**
   * Merge user preference updates while preserving unrelated settings.
   *
   * @param {string} userID
   * @param {SettingUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SettingUpdateResponse>} Update user settings
   *
   * @example
   * ```ts
   * const setting = await client.users.settings.update('userId', {});
   * ```
   */
  update(
    userID: string,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/users/${userID}/settings`, { body, ...options });
  }
}

export interface SettingRetrieveResponse {
  autoRestartVm?: boolean;
  defaultProjectId?: string | null;
  gpgKey?: string;
  includeTemboCommitAttribution?: boolean;
  desktopNotificationsEnabled?: boolean;
  desktopNotificationPreferences?: SettingRetrieveResponse.DesktopNotificationPreferences;
  appearancePreferences?: SettingRetrieveResponse.AppearancePreferences;
  appSidebarPreferences?: SettingRetrieveResponse.AppSidebarPreferences;
  diffPreferences?: SettingRetrieveResponse.DiffPreferences;
  dashboardPreferences?: SettingRetrieveResponse.DashboardPreferences;
  composerPreferences?: SettingRetrieveResponse.ComposerPreferences;
  reviewPreferences?: SettingRetrieveResponse.ReviewPreferences;
  diffLightTheme?: string;
  diffDarkTheme?: string;
  /**
   * @pattern ^[^:]+:[^:]+(?::[^:]+)?$
   */
  defaultAgent?: string;
  followUpBehavior?: 'queue' | 'steer';
  /**
   * @maxLength 4096
   */
  customSystemPrompt?: string;
}

export namespace SettingRetrieveResponse {
  export interface DesktopNotificationPreferences {
    awaitingApproval?: boolean;
    pullRequestOpened?: boolean;
    pullRequestReviewRequested?: boolean;
  }

  export interface AppearancePreferences {
    appTheme?: 'light' | 'dark' | 'system';
    accentTheme?: AppearancePreferences.AccentTheme;
  }

  export namespace AppearancePreferences {
    export interface AccentTheme {
      themeId?: string;
      customSurface?: string | null;
      customAccent?: string | null;
      customIntensity?: number;
      systemLight?: string;
      systemDark?: string;
    }
  }

  export interface AppSidebarPreferences {
    open?: boolean;
    sessionOwnerScope?: 'mine' | 'team';
    sessionSortBy?: 'createdAt' | 'updatedAt';
    sessionOrganization?: 'list' | 'project';
    showArchivedSessions?: boolean;
    width?: number;
    rightSidebar?: Record<string, AppSidebarPreferences.RightSidebar>;
  }

  export namespace AppSidebarPreferences {
    export interface RightSidebar {
      open?: boolean;
      width?: string;
    }
  }

  export interface DiffPreferences {
    style?: 'unified' | 'split';
    indicators?: 'classic' | 'bars' | 'none';
    overflow?: 'scroll' | 'wrap';
    showLineNumbers?: boolean;
    expandUnchanged?: boolean;
    showFileTree?: boolean;
    fileTreePosition?: 'left' | 'right';
    fileTreeView?: 'list' | 'tree';
    lightTheme?: string;
    darkTheme?: string;
  }

  export interface DashboardPreferences {
    taskFilters?: DashboardPreferences.TaskFilters;
  }

  export namespace DashboardPreferences {
    export interface TaskFilters {
      statusFilter?: Array<string>;
      sortBy?: 'createdAt' | 'updatedAt';
      searchQuery?: string;
      integrationType?: Array<string>;
      externalId?: string;
      projectFilter?: Array<string>;
      authorFilter?: Array<string>;
      prStatusFilter?: Array<string>;
      automationFilter?: Array<string>;
    }
  }

  export interface ComposerPreferences {
    lastSelectedRepositories?: Array<ComposerPreferences.LastSelectedRepository>;
  }

  export namespace ComposerPreferences {
    export interface LastSelectedRepository {
      id: string;
      name?: string;
      type?: string;
    }
  }

  export interface ReviewPreferences {
    fileSortMode?: 'tree' | 'path-asc' | 'path-desc' | 'largest' | 'smallest';
    excludedFilePatterns?: Array<string>;
    sections?: Record<string, boolean>;
    hideBotComments?: boolean;
    layout?: ReviewPreferences.Layout;
  }

  export namespace ReviewPreferences {
    export interface Layout {
      focusChatHeight?: number;
      activeTab?: string;
      activeViewMode?: string;
      focusChatOpen?: boolean;
      focusMode?: boolean;
      leftDesktopSidebarOpen?: boolean;
      leftDesktopSidebarWidth?: number;
      rightDesktopSidebarOpen?: boolean;
      rightDesktopSidebarWidth?: number;
    }
  }
}

export interface SettingUpdateParams {
  autoRestartVm?: boolean;
  /**
   * @minLength 1
   * @maxLength 255
   */
  defaultProjectId?: string | null;
  /**
   * @maxLength 32768
   */
  gpgKey?: string;
  includeTemboCommitAttribution?: boolean;
  desktopNotificationsEnabled?: boolean;
  desktopNotificationPreferences?: SettingUpdateParams.DesktopNotificationPreferences;
  appearancePreferences?: SettingUpdateParams.AppearancePreferences;
  appSidebarPreferences?: SettingUpdateParams.AppSidebarPreferences;
  diffPreferences?: SettingUpdateParams.DiffPreferences;
  dashboardPreferences?: SettingUpdateParams.DashboardPreferences;
  composerPreferences?: SettingUpdateParams.ComposerPreferences;
  reviewPreferences?: SettingUpdateParams.ReviewPreferences;
  /**
   * @maxLength 255
   */
  diffLightTheme?: string;
  /**
   * @maxLength 255
   */
  diffDarkTheme?: string;
  /**
   * @maxLength 255
   * @pattern ^[^:]+:[^:]+(?::[^:]+)?$
   */
  defaultAgent?: string | null;
  followUpBehavior?: 'queue' | 'steer';
  /**
   * @maxLength 4096
   */
  customSystemPrompt?: string;
}

export namespace SettingUpdateParams {
  export interface DesktopNotificationPreferences {
    awaitingApproval?: boolean;
    pullRequestOpened?: boolean;
    pullRequestReviewRequested?: boolean;
  }

  export interface AppearancePreferences {
    appTheme?: 'light' | 'dark' | 'system';
    accentTheme?: AppearancePreferences.AccentTheme;
  }

  export namespace AppearancePreferences {
    export interface AccentTheme {
      /**
       * @maxLength 255
       */
      themeId?: string;
      /**
       * @maxLength 4096
       */
      customSurface?: string | null;
      /**
       * @maxLength 4096
       */
      customAccent?: string | null;
      /**
       * @minimum 0.25
       * @maximum 2
       */
      customIntensity?: number;
      /**
       * @maxLength 255
       */
      systemLight?: string;
      /**
       * @maxLength 255
       */
      systemDark?: string;
    }
  }

  export interface AppSidebarPreferences {
    open?: boolean;
    sessionOwnerScope?: 'mine' | 'team';
    sessionSortBy?: 'createdAt' | 'updatedAt';
    sessionOrganization?: 'list' | 'project';
    showArchivedSessions?: boolean;
    /**
     * @minimum 0
     * @maximum 10000
     */
    width?: number;
    rightSidebar?: Record<string, AppSidebarPreferences.RightSidebar>;
  }

  export namespace AppSidebarPreferences {
    export interface RightSidebar {
      open?: boolean;
      /**
       * @maxLength 255
       */
      width?: string;
    }
  }

  export interface DiffPreferences {
    style?: 'unified' | 'split';
    indicators?: 'classic' | 'bars' | 'none';
    overflow?: 'scroll' | 'wrap';
    showLineNumbers?: boolean;
    expandUnchanged?: boolean;
    showFileTree?: boolean;
    fileTreePosition?: 'left' | 'right';
    fileTreeView?: 'list' | 'tree';
    /**
     * @maxLength 255
     */
    lightTheme?: string;
    /**
     * @maxLength 255
     */
    darkTheme?: string;
  }

  export interface DashboardPreferences {
    taskFilters?: DashboardPreferences.TaskFilters;
  }

  export namespace DashboardPreferences {
    export interface TaskFilters {
      /**
       * @maxItems 100
       */
      statusFilter?: Array<string>;
      sortBy?: 'createdAt' | 'updatedAt';
      /**
       * @maxLength 4096
       */
      searchQuery?: string;
      /**
       * @maxItems 100
       */
      integrationType?: Array<string>;
      /**
       * @maxLength 4096
       */
      externalId?: string;
      /**
       * @maxItems 100
       */
      projectFilter?: Array<string>;
      /**
       * @maxItems 100
       */
      authorFilter?: Array<string>;
      /**
       * @maxItems 100
       */
      prStatusFilter?: Array<string>;
      /**
       * @maxItems 100
       */
      automationFilter?: Array<string>;
    }
  }

  export interface ComposerPreferences {
    /**
     * @maxItems 100
     */
    lastSelectedRepositories?: Array<ComposerPreferences.LastSelectedRepository>;
  }

  export namespace ComposerPreferences {
    export interface LastSelectedRepository {
      /**
       * @maxLength 4096
       */
      id: string;
      /**
       * @maxLength 4096
       */
      name?: string;
      /**
       * @maxLength 255
       */
      type?: string;
    }
  }

  export interface ReviewPreferences {
    fileSortMode?: 'tree' | 'path-asc' | 'path-desc' | 'largest' | 'smallest';
    /**
     * @maxItems 100
     */
    excludedFilePatterns?: Array<string>;
    sections?: Record<string, boolean>;
    hideBotComments?: boolean;
    layout?: ReviewPreferences.Layout;
  }

  export namespace ReviewPreferences {
    export interface Layout {
      /**
       * @maximum 10000
       * @exclusiveMinimum 0
       */
      focusChatHeight?: number;
      /**
       * @maxLength 255
       */
      activeTab?: string;
      /**
       * @maxLength 255
       */
      activeViewMode?: string;
      focusChatOpen?: boolean;
      focusMode?: boolean;
      leftDesktopSidebarOpen?: boolean;
      /**
       * @minimum 0
       * @maximum 10000
       */
      leftDesktopSidebarWidth?: number;
      rightDesktopSidebarOpen?: boolean;
      /**
       * @minimum 0
       * @maximum 10000
       */
      rightDesktopSidebarWidth?: number;
    }
  }
}

export interface SettingUpdateResponse {
  autoRestartVm?: boolean;
  defaultProjectId?: string | null;
  gpgKey?: string;
  includeTemboCommitAttribution?: boolean;
  desktopNotificationsEnabled?: boolean;
  desktopNotificationPreferences?: SettingUpdateResponse.DesktopNotificationPreferences;
  appearancePreferences?: SettingUpdateResponse.AppearancePreferences;
  appSidebarPreferences?: SettingUpdateResponse.AppSidebarPreferences;
  diffPreferences?: SettingUpdateResponse.DiffPreferences;
  dashboardPreferences?: SettingUpdateResponse.DashboardPreferences;
  composerPreferences?: SettingUpdateResponse.ComposerPreferences;
  reviewPreferences?: SettingUpdateResponse.ReviewPreferences;
  diffLightTheme?: string;
  diffDarkTheme?: string;
  /**
   * @pattern ^[^:]+:[^:]+(?::[^:]+)?$
   */
  defaultAgent?: string;
  followUpBehavior?: 'queue' | 'steer';
  /**
   * @maxLength 4096
   */
  customSystemPrompt?: string;
}

export namespace SettingUpdateResponse {
  export interface DesktopNotificationPreferences {
    awaitingApproval?: boolean;
    pullRequestOpened?: boolean;
    pullRequestReviewRequested?: boolean;
  }

  export interface AppearancePreferences {
    appTheme?: 'light' | 'dark' | 'system';
    accentTheme?: AppearancePreferences.AccentTheme;
  }

  export namespace AppearancePreferences {
    export interface AccentTheme {
      themeId?: string;
      customSurface?: string | null;
      customAccent?: string | null;
      customIntensity?: number;
      systemLight?: string;
      systemDark?: string;
    }
  }

  export interface AppSidebarPreferences {
    open?: boolean;
    sessionOwnerScope?: 'mine' | 'team';
    sessionSortBy?: 'createdAt' | 'updatedAt';
    sessionOrganization?: 'list' | 'project';
    showArchivedSessions?: boolean;
    width?: number;
    rightSidebar?: Record<string, AppSidebarPreferences.RightSidebar>;
  }

  export namespace AppSidebarPreferences {
    export interface RightSidebar {
      open?: boolean;
      width?: string;
    }
  }

  export interface DiffPreferences {
    style?: 'unified' | 'split';
    indicators?: 'classic' | 'bars' | 'none';
    overflow?: 'scroll' | 'wrap';
    showLineNumbers?: boolean;
    expandUnchanged?: boolean;
    showFileTree?: boolean;
    fileTreePosition?: 'left' | 'right';
    fileTreeView?: 'list' | 'tree';
    lightTheme?: string;
    darkTheme?: string;
  }

  export interface DashboardPreferences {
    taskFilters?: DashboardPreferences.TaskFilters;
  }

  export namespace DashboardPreferences {
    export interface TaskFilters {
      statusFilter?: Array<string>;
      sortBy?: 'createdAt' | 'updatedAt';
      searchQuery?: string;
      integrationType?: Array<string>;
      externalId?: string;
      projectFilter?: Array<string>;
      authorFilter?: Array<string>;
      prStatusFilter?: Array<string>;
      automationFilter?: Array<string>;
    }
  }

  export interface ComposerPreferences {
    lastSelectedRepositories?: Array<ComposerPreferences.LastSelectedRepository>;
  }

  export namespace ComposerPreferences {
    export interface LastSelectedRepository {
      id: string;
      name?: string;
      type?: string;
    }
  }

  export interface ReviewPreferences {
    fileSortMode?: 'tree' | 'path-asc' | 'path-desc' | 'largest' | 'smallest';
    excludedFilePatterns?: Array<string>;
    sections?: Record<string, boolean>;
    hideBotComments?: boolean;
    layout?: ReviewPreferences.Layout;
  }

  export namespace ReviewPreferences {
    export interface Layout {
      focusChatHeight?: number;
      activeTab?: string;
      activeViewMode?: string;
      focusChatOpen?: boolean;
      focusMode?: boolean;
      leftDesktopSidebarOpen?: boolean;
      leftDesktopSidebarWidth?: number;
      rightDesktopSidebarOpen?: boolean;
      rightDesktopSidebarWidth?: number;
    }
  }
}
export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
