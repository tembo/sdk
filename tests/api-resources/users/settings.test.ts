// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource settings', () => {
  smokeCase(
    'users.settings.retrieve:single',
    { operation: 'retrieve', path: '/v1/users/{userId}/settings' },
    'retrieve',
    async () => {
      const setting = await client.users.settings.retrieve('userId');
    },
  );
  smokeCase(
    'users.settings.update:required',
    { operation: 'update', path: '/v1/users/{userId}/settings' },
    'update: only required params',
    async () => {
      const setting = await client.users.settings.update('userId');
    },
  );
  smokeCase(
    'users.settings.update:all',
    { operation: 'update', path: '/v1/users/{userId}/settings' },
    'update: required and optional params',
    async () => {
      const setting = await client.users.settings.update('userId', {
        defaultSessionVisibilityByWorkspace: {},
        autoRestartVm: false,
        defaultProjectId: 'x',
        gpgKey: '',
        includeTemboCommitAttribution: false,
        openPullRequestsAsBot: false,
        desktopNotificationsEnabled: false,
        desktopNotificationPreferences: {},
        hasDesktopApp: false,
        openLinksInDesktopApp: false,
        appearancePreferences: {},
        appSidebarPreferences: {},
        diffPreferences: {},
        dashboardPreferences: {},
        composerPreferences: {},
        reviewPreferences: {},
        diffLightTheme: '',
        diffDarkTheme: '',
        defaultAgent: '',
        defaultFastMode: false,
        followUpBehavior: 'queue',
        customSystemPrompt: '',
      });
    },
  );
});
