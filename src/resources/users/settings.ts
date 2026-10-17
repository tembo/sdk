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
   * Configure personal agent/model and project defaults, system instructions, follow-up queue/steer behavior, VM restart, commit signing/attribution, notifications, themes, and review layout. Updates preserve unrelated settings.
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
  hasDesktopApp?: boolean;
  openLinksInDesktopApp?: boolean;
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
  /**
   * Automatically restart a session VM when needed.
   */
  autoRestartVm?: boolean;
  /**
   * Default project environment for new sessions, or null to clear the preference.
   * @minLength 1
   * @maxLength 255
   */
  defaultProjectId?: string | null;
  /**
   * GPG signing key configuration. This value is returned by retrieveUserSettings.
   * @maxLength 32768
   */
  gpgKey?: string;
  /**
   * Include Tembo attribution in agent-created commits.
   */
  includeTemboCommitAttribution?: boolean;
  /**
   * Enable or disable desktop notifications.
   */
  desktopNotificationsEnabled?: boolean;
  /**
   * Notification types to show on the desktop.
   */
  desktopNotificationPreferences?: SettingUpdateParams.DesktopNotificationPreferences;
  /**
   * Whether the user has signed in to the Tembo desktop app.
   */
  hasDesktopApp?: boolean;
  /**
   * Open Tembo links from the browser in the desktop app when it is installed.
   */
  openLinksInDesktopApp?: boolean;
  /**
   * Theme, accent, and appearance preferences. Nested updates preserve unrelated preferences.
   */
  appearancePreferences?: SettingUpdateParams.AppearancePreferences;
  /**
   * Application sidebar layout preferences.
   */
  appSidebarPreferences?: SettingUpdateParams.AppSidebarPreferences;
  /**
   * Diff display and comparison preferences.
   */
  diffPreferences?: SettingUpdateParams.DiffPreferences;
  /**
   * Dashboard task-filter preferences.
   */
  dashboardPreferences?: SettingUpdateParams.DashboardPreferences;
  /**
   * Message composer preferences, including selected repositories.
   */
  composerPreferences?: SettingUpdateParams.ComposerPreferences;
  /**
   * Code review file sorting, exclusions, bot comment visibility, and layout preferences.
   */
  reviewPreferences?: SettingUpdateParams.ReviewPreferences;
  /**
   * Diff syntax theme for light mode.
   * @maxLength 255
   */
  diffLightTheme?: string;
  /**
   * Diff syntax theme for dark mode.
   * @maxLength 255
   */
  diffDarkTheme?: string;
  /**
   * Default coding agent and model key. Null clears the preference.
   * @maxLength 255
   * @pattern ^[^:]+:[^:]+(?::[^:]+)?$
   */
  defaultAgent?: string | null;
  /**
   * Default follow-up delivery: queue a new turn or steer an active turn.
   */
  followUpBehavior?: 'queue' | 'steer';
  /**
   * Personal system instructions supplied to agents.
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
  hasDesktopApp?: boolean;
  openLinksInDesktopApp?: boolean;
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
