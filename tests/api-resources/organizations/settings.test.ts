// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource settings', () => {
  smokeCase(
    'organizations.settings.retrieve:single',
    { operation: 'retrieve', path: '/v1/organizations/{organizationId}/settings' },
    'retrieve',
    async () => {
      const setting = await client.organizations.settings.retrieve('organizationId');
    },
  );
  smokeCase(
    'organizations.settings.update:required',
    { operation: 'update', path: '/v1/organizations/{organizationId}/settings' },
    'update: only required params',
    async () => {
      const setting = await client.organizations.settings.update('organizationId', {});
    },
  );
  smokeCase(
    'organizations.settings.update:all',
    { operation: 'update', path: '/v1/organizations/{organizationId}/settings' },
    'update: required and optional params',
    async () => {
      const setting = await client.organizations.settings.update('organizationId', {
        ampApiKey: '',
        anthropicApiKey: '',
        awsBedrockAccessKeyId: '',
        awsBedrockRegion: '',
        awsBedrockSecretAccessKey: '',
        cloneDepth: 1,
        commitInstructions: '',
        cursorApiKey: '',
        customReviewBots: ['x'],
        customSystemPrompt: '',
        defaultAgent: '',
        defaultKeepAliveMinutes: 0,
        defaultSandboxSize: 'nano',
        deleteBranchWhenPrClosed: false,
        draftPrs: false,
        enableCoderabbitBot: false,
        enableCursorBot: false,
        enableGeminiCodeAssistBot: false,
        enableGithubActionsBot: false,
        enableGraphiteBot: false,
        enableGreptileBot: false,
        experimentalMcp: false,
        featureMentionAuthor: false,
        gcpVertexAiLocation: '',
        gcpVertexAiProject: '',
        gcpVertexAiServiceAccountJson: '',
        kernelApiKey: '',
        maxBotReviews: 0,
        maxSolutions: 0,
        openaiApiKey: '',
        xaiApiKey: '',
        openrouterApiKey: '',
        pgStatStatementsResetFrequency: '',
        pmSystemPrompt: '',
        prTitleInstructions: '',
        pullRequestInsightsEnabled: false,
        shouldSignCommits: false,
        slackReviewOnTembo: false,
        slowQueryThresholdMs: 0,
        sshPublicKeys: '',
        weeklyReportEnabled: false,
      });
    },
  );
  smokeCase(
    'organizations.settings.validateCredentials:single',
    {
      operation: 'validateCredentials',
      path: '/v1/organizations/{organizationId}/settings/validate-credentials',
    },
    'validateCredentials',
    async () => {
      const setting = await client.organizations.settings.validateCredentials('organizationId', {
        provider: 'anthropic',
        apiKey: '',
      });
    },
  );
});
