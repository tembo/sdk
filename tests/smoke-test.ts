// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Tembo from '@tembo-io/sdk';

// One shared client runs every case.
const client = new Tembo();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/v1/api-keys',
    label: 'required params',
    run: async () => {
      const apiKey = await client.apiKeys.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/api-keys',
    label: 'all params',
    run: async () => {
      const apiKey = await client.apiKeys.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/api-keys',
    label: 'required params',
    run: async () => {
      const apiKey = await client.apiKeys.create({});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/api-keys',
    label: 'all params',
    run: async () => {
      const apiKey = await client.apiKeys.create({
        name: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/api-keys/{apiKeyId}',
    run: async () => {
      const apiKey = await client.apiKeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/api-keys/{apiKeyId}',
    run: async () => {
      const apiKey = await client.apiKeys.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/api-keys/{apiKeyId}',
    run: async () => {
      const apiKey = await client.apiKeys.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/skills',
    label: 'required params',
    run: async () => {
      const skill = await client.skills.list({
        limit: '50',
        source: 'organization',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/skills',
    label: 'all params',
    run: async () => {
      const skill = await client.skills.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        names: 'names',
        repositoryIds: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: 'search',
        source: 'organization',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/skills',
    run: async () => {
      const skill = await client.skills.create({
        description: '',
        name: 'x',
        files: [
          {
            content: '',
            filename: 'x',
          },
        ],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/skills/{skillId}',
    run: async () => {
      const skill = await client.skills.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/skills/{skillId}',
    label: 'required params',
    run: async () => {
      const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/skills/{skillId}',
    label: 'all params',
    run: async () => {
      const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        description: '',
        name: 'x',
        files: [
          {
            content: '',
            filename: 'x',
          },
        ],
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/skills/{skillId}',
    run: async () => {
      const skill = await client.skills.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/insights',
    run: async () => {
      const insight = await client.insights.retrieve();
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/insights',
    run: async () => {
      const insight = await client.insights.update({
        enabled: false,
      });
    },
  },

  {
    operation: 'listMembers',
    method: 'GET',
    path: '/v1/insights/members',
    label: 'required params',
    run: async () => {
      const insight = await client.insights.listMembers({
        limit: '50',
      });
    },
  },

  {
    operation: 'listMembers',
    method: 'GET',
    path: '/v1/insights/members',
    label: 'all params',
    run: async () => {
      const insight = await client.insights.listMembers({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'listRepositories',
    method: 'GET',
    path: '/v1/insights/repositories',
    label: 'required params',
    run: async () => {
      const insight = await client.insights.listRepositories({
        limit: '50',
      });
    },
  },

  {
    operation: 'listRepositories',
    method: 'GET',
    path: '/v1/insights/repositories',
    label: 'all params',
    run: async () => {
      const insight = await client.insights.listRepositories({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.create({
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.create({
        name: 'x',
        slug: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organizationId}',
    run: async () => {
      const organization = await client.organizations.retrieve('organizationId');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.update('organizationId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.update('organizationId', {
        name: 'x',
        slug: 'x',
        onboarding: {},
        onboardingCompleted: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/organizations/{organizationId}',
    run: async () => {
      const organization = await client.organizations.delete('organizationId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/members',
    label: 'required params',
    run: async () => {
      const member = await client.organizations.members.list('organizationId', {
        limit: 50,
        status: 'active',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/members',
    label: 'all params',
    run: async () => {
      const member = await client.organizations.members.list('organizationId', {
        cursor: 'cursor',
        limit: 50,
        search: 'search',
        status: 'active',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations/{organizationId}/members',
    run: async () => {
      const member = await client.organizations.members.create('organizationId', {
        emailAddress: 'user@example.com',
        role: 'org:member',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/members/{memberId}',
    run: async () => {
      const member = await client.organizations.members.retrieve('memberId', {
        organizationId: 'organizationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}/members/{memberId}',
    run: async () => {
      const member = await client.organizations.members.update('memberId', {
        organizationId: 'organizationId',
        role: 'org:admin',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/organizations/{organizationId}/members/{memberId}',
    run: async () => {
      const member = await client.organizations.members.delete('memberId', {
        organizationId: 'organizationId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/secrets',
    label: 'required params',
    run: async () => {
      const secret = await client.organizations.secrets.list('organizationId', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/secrets',
    label: 'all params',
    run: async () => {
      const secret = await client.organizations.secrets.list('organizationId', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        search: 'search',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations/{organizationId}/secrets',
    run: async () => {
      const secret = await client.organizations.secrets.create('organizationId', {
        key: 'x',
        value: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/secrets/{secretId}',
    run: async () => {
      const secret = await client.organizations.secrets.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}/secrets/{secretId}',
    label: 'required params',
    run: async () => {
      const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}/secrets/{secretId}',
    label: 'all params',
    run: async () => {
      const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
        key: 'x',
        value: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/organizations/{organizationId}/secrets/{secretId}',
    run: async () => {
      const secret = await client.organizations.secrets.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organizationId: 'organizationId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organizationId}/settings',
    run: async () => {
      const setting = await client.organizations.settings.retrieve('organizationId');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}/settings',
    label: 'required params',
    run: async () => {
      const setting = await client.organizations.settings.update('organizationId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/organizations/{organizationId}/settings',
    label: 'all params',
    run: async () => {
      const setting = await client.organizations.settings.update('organizationId', {
        ampApiKey: '',
        anthropicApiKey: '',
        awsBedrockAccessKeyId: '',
        awsBedrockRegion: '',
        awsBedrockSecretAccessKey: '',
        cloneDepth: 1,
        commitInstructions: '',
        cursorApiKey: '',
        customSystemPrompt: '',
        defaultAgent: '',
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
        freePrPeriod: 0,
        gcpVertexAiLocation: '',
        gcpVertexAiProject: '',
        gcpVertexAiServiceAccountJson: '',
        kernelApiKey: '',
        maxBotReviews: 0,
        maxSolutions: 0,
        openaiApiKey: '',
        openrouterApiKey: '',
        pgStatStatementsResetFrequency: '',
        pmSystemPrompt: '',
        prTitleInstructions: '',
        pullRequestInsightsEnabled: false,
        repositoryDetectionHint: '',
        shouldSignCommits: false,
        slackReviewOnTembo: false,
        slowQueryThresholdMs: 0,
        sshPublicKeys: '',
        weeklyReportEnabled: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/mcp-connections',
    label: 'required params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/mcp-connections',
    label: 'all params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.list({
        connected: 'true',
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        search: 'search',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp-connections',
    label: 'required params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.create({
        name: 'x',
        args: [],
        command: 'x',
        type: 'stdio',
        visibility: 'shared',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp-connections',
    label: 'all params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.create({
        name: 'x',
        args: [],
        command: 'x',
        env: {},
        type: 'stdio',
        visibility: 'shared',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/mcp-connections/{mcpConnectionId}',
    run: async () => {
      const mcpConnection = await client.mcpConnections.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp-connections/{mcpConnectionId}',
    label: 'required params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        type: 'remote',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp-connections/{mcpConnectionId}',
    label: 'all params',
    run: async () => {
      const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        serverUrl: 'https://example.com',
        type: 'remote',
        authType: 'oauth',
        clientId: 'x',
        clientSecret: 'x',
        headers: {},
        oauthRegistration: 'automatic',
        scope: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/mcp-connections/{mcpConnectionId}',
    run: async () => {
      const mcpConnection = await client.mcpConnections.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'authorize',
    method: 'POST',
    path: '/v1/mcp-connections/{mcpConnectionId}/authorize',
    run: async () => {
      const mcpConnection = await client.mcpConnections.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'test',
    method: 'POST',
    path: '/v1/mcp-connections/{mcpConnectionId}/test',
    run: async () => {
      const mcpConnection = await client.mcpConnections.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/artifacts',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/artifacts',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        jobId: 'jobId',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        types: 'PullRequest',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/artifacts',
    label: 'required params',
    run: async () => {
      const artifact = await client.artifacts.create({
        title: 'x',
        output: {
          type: 'html',
          content: 'x',
        },
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/artifacts',
    label: 'all params',
    run: async () => {
      const artifact = await client.artifacts.create({
        title: 'x',
        description: 'x',
        category: 'code_walkthrough',
        output: {
          type: 'html',
          content: 'x',
        },
        relatedPullRequestUrls: ['https://example.com'],
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/artifacts/{artifactId}',
    run: async () => {
      const artifact = await client.artifacts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/artifacts/{artifactId}',
    run: async () => {
      const artifact = await client.artifacts.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/messages',
    label: 'required params',
    run: async () => {
      const message = await client.messages.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/messages',
    label: 'all params',
    run: async () => {
      const message = await client.messages.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        threadId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/messages',
    label: 'required params',
    run: async () => {
      const message = await client.messages.create({
        content: 'x',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/messages',
    label: 'all params',
    run: async () => {
      const message = await client.messages.create({
        artifactId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        content: 'x',
        mcpServers: ['x'],
        pullRequestId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        agentOptions: {},
        deliveryMode: 'queue',
        richContent: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
        slashCommand: {
          command: 'x',
        },
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/messages/{messageId}',
    run: async () => {
      const message = await client.messages.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/messages/{messageId}',
    label: 'required params',
    run: async () => {
      const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/messages/{messageId}',
    label: 'all params',
    run: async () => {
      const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        content: 'x',
        richContent: {
          type: 'image',
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/messages/{messageId}',
    run: async () => {
      const message = await client.messages.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/models',
    label: 'required params',
    run: async () => {
      const model = await client.models.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/models',
    label: 'all params',
    run: async () => {
      const model = await client.models.list({
        cursor: 'claude-fable-5-1',
        limit: '50',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/models/{modelName}',
    label: 'required params',
    run: async () => {
      const model = await client.models.update('claude-fable-5-1', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/models/{modelName}',
    label: 'all params',
    run: async () => {
      const model = await client.models.update('claude-fable-5-1', {
        enabled: false,
        inferenceProvider: 'TemboManagedInference',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/users/{userId}',
    run: async () => {
      const user = await client.users.retrieve('userId');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/users/{userId}',
    run: async () => {
      const user = await client.users.update('userId', {
        onboarding: {
          positionInCompany: 'x',
          useCase: 'x',
          howDidYouHear: 'x',
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/users/{userId}',
    label: 'required params',
    run: async () => {
      const user = await client.users.delete('userId', {});
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/users/{userId}',
    label: 'all params',
    run: async () => {
      const user = await client.users.delete('userId', {
        deletionQuestionnaire: {
          reasons: ['x'],
          submittedAt: '2024-01-01T00:00:00.000Z',
        },
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/users/{userId}/connected-accounts',
    label: 'required params',
    run: async () => {
      const connectedAccount = await client.users.connectedAccounts.list('userId', {
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/users/{userId}/connected-accounts',
    label: 'all params',
    run: async () => {
      const connectedAccount = await client.users.connectedAccounts.list('userId', {
        cursor: 'cursor',
        limit: '50',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/users/{userId}/connected-accounts/{connectedAccountId}',
    run: async () => {
      const connectedAccount = await client.users.connectedAccounts.retrieve('connectedAccountId', {
        userId: 'userId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions',
    label: 'required params',
    run: async () => {
      const session = await client.sessions.list({
        limit: 50,
        includeArchived: true,
        includeTotal: false,
        sortBy: 'lastQueuedAt',
        state: 'all',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions',
    label: 'all params',
    run: async () => {
      const session = await client.sessions.list({
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        createdBy: 'createdBy',
        createdAfter: '2024-01-01T00:00:00.000Z',
        cursor: 'cursor',
        limit: 50,
        excludePinned: 'true',
        externalIds: 'externalIds',
        hasProject: 'true',
        includeArchived: true,
        includeTotal: false,
        participant: 'participant',
        pendingReviewerKeys: 'pendingReviewerKeys',
        projectIds: 'projectIds',
        pullRequestStatuses: 'pullRequestStatuses',
        repositoryIds: 'repositoryIds',
        search: 'search',
        sortBy: 'lastQueuedAt',
        sourceIds: 'sourceIds',
        sourceTypes: 'sourceTypes',
        state: 'all',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/sessions',
    label: 'required params',
    run: async () => {
      const session = await client.sessions.create({
        mcpServers: [],
        description: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/sessions',
    label: 'all params',
    run: async () => {
      const session = await client.sessions.create({
        agent: 'x',
        baseBranch: 'x',
        mcpServers: [],
        projectId: '',
        sandboxSize: 'nano',
        targetBranch: 'x',
        visibility: 'private',
        agentOptions: {},
        autoDetectRepositories: false,
        branchName: 'x',
        codeRepositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        description: 'x',
        id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        richContent: {},
        pullRequestId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        queueRightAway: false,
        sessionMode: 'chat',
        startupAgent: 'claudeCode',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/sessions/{sessionId}',
    run: async () => {
      const session = await client.sessions.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/sessions/{sessionId}',
    label: 'required params',
    run: async () => {
      const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/sessions/{sessionId}',
    label: 'all params',
    run: async () => {
      const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agent: 'x',
        agentOptions: {},
        baseBranch: 'x',
        branchName: 'x',
        description: 'x',
        richContent: {},
        level: 0,
        mcpServers: ['x'],
        mode: 'normal',
        projectId: '',
        sandboxSize: 'nano',
        targetBranch: 'x',
        title: 'x',
        visibility: 'private',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/sessions/{sessionId}',
    run: async () => {
      const session = await client.sessions.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'stop',
    method: 'POST',
    path: '/v1/sessions/{sessionId}/stop',
    label: 'required params',
    run: async () => {
      const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'stop',
    method: 'POST',
    path: '/v1/sessions/{sessionId}/stop',
    label: 'all params',
    run: async () => {
      const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cancelQueued: 'true',
      });
    },
  },

  {
    operation: 'listEvents',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/events',
    label: 'required params',
    run: async () => {
      const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  },

  {
    operation: 'listEvents',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/events',
    label: 'all params',
    run: async () => {
      const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: 'cursor',
        limit: 50,
        messageId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/sources',
    label: 'required params',
    run: async () => {
      const source = await client.sessions.sources.list({
        limit: 50,
        includeTotal: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/sources',
    label: 'all params',
    run: async () => {
      const source = await client.sessions.sources.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        enabled: 'true',
        includeTotal: false,
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: 'search',
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        types: 'types',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/sessions/sources/{sourceId}',
    run: async () => {
      const source = await client.sessions.sources.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/files',
    label: 'required params',
    run: async () => {
      const file = await client.sessions.files.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/files',
    label: 'all params',
    run: async () => {
      const file = await client.sessions.files.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        search: 'search',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/files/{fileId}',
    run: async () => {
      const file = await client.sessions.files.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/diffs',
    label: 'required params',
    run: async () => {
      const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/diffs',
    label: 'all params',
    run: async () => {
      const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        hasChanges: 'true',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/sessions/{sessionId}/diffs/{diffId}',
    run: async () => {
      const diff = await client.sessions.diffs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'updateDefaults',
    method: 'PUT',
    path: '/v1/projects/defaults',
    run: async () => {
      const project = await client.projects.updateDefaults({
        projectId: 'x',
        sandboxSize: 'nano',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects',
    label: 'required params',
    run: async () => {
      const project = await client.projects.list({
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects',
    label: 'all params',
    run: async () => {
      const project = await client.projects.list({
        cursor: 'cursor',
        limit: 50,
        defaultOnly: 'true',
        search: 'search',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects',
    label: 'required params',
    run: async () => {
      const project = await client.projects.create({
        name: 'x',
        sizes: ['nano'],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects',
    label: 'all params',
    run: async () => {
      const project = await client.projects.create({
        description: '',
        includeDeps: false,
        includeSkills: false,
        name: 'x',
        setupScript: '',
        codeRepositoryIds: ['x'],
        agentInstructions: '',
        color: 'neutral',
        icon: 'folder',
        runNow: false,
        schedule: {
          cron: 'x',
        },
        sizes: ['nano'],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{projectId}',
    run: async () => {
      const project = await client.projects.retrieve('projectId');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}',
    label: 'required params',
    run: async () => {
      const project = await client.projects.update('projectId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}',
    label: 'all params',
    run: async () => {
      const project = await client.projects.update('projectId', {
        description: '',
        includeDeps: false,
        includeSkills: false,
        name: 'x',
        setupScript: '',
        codeRepositoryIds: ['x'],
        agentInstructions: '',
        color: 'neutral',
        icon: 'folder',
        defaultForSizes: ['nano'],
        environmentVariables: {},
        schedule: {},
        sizes: ['nano'],
        warmPoolEnabled: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{projectId}',
    run: async () => {
      const project = await client.projects.delete('projectId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/environment-variables',
    run: async () => {
      const environmentVariable = await client.projects.environmentVariables.list('projectId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{projectId}/environment-variables',
    run: async () => {
      const environmentVariable = await client.projects.environmentVariables.create('projectId', {
        secrets: [
          {
            key: '',
            value: 'x',
          },
        ],
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{projectId}/environment-variables/{key}',
    run: async () => {
      const environmentVariable = await client.projects.environmentVariables.delete('key', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/snapshots',
    label: 'required params',
    run: async () => {
      const snapshot = await client.projects.snapshots.list('projectId', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/snapshots',
    label: 'all params',
    run: async () => {
      const snapshot = await client.projects.snapshots.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{projectId}/snapshots/{snapshotId}',
    run: async () => {
      const snapshot = await client.projects.snapshots.retrieve('snapshotId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}/snapshots/{snapshotId}',
    label: 'required params',
    run: async () => {
      const snapshot = await client.projects.snapshots.update('snapshotId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}/snapshots/{snapshotId}',
    label: 'all params',
    run: async () => {
      const snapshot = await client.projects.snapshots.update('snapshotId', {
        projectId: 'projectId',
        name: '',
        pinned: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{projectId}/snapshots/{snapshotId}',
    run: async () => {
      const snapshot = await client.projects.snapshots.delete('snapshotId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/builds',
    label: 'required params',
    run: async () => {
      const build = await client.projects.builds.list('projectId', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/builds',
    label: 'all params',
    run: async () => {
      const build = await client.projects.builds.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{projectId}/builds',
    label: 'required params',
    run: async () => {
      const build = await client.projects.builds.create('projectId', {});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{projectId}/builds',
    label: 'all params',
    run: async () => {
      const build = await client.projects.builds.create('projectId', {
        sizes: ['nano'],
        snapshotId: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{projectId}/builds/{buildId}',
    run: async () => {
      const build = await client.projects.builds.retrieve('buildId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'POST',
    path: '/v1/projects/{projectId}/builds/{buildId}/cancel',
    run: async () => {
      const build = await client.projects.builds.cancel('buildId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/schedules',
    label: 'required params',
    run: async () => {
      const schedule = await client.projects.schedules.list('projectId', {
        limit: 50,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{projectId}/schedules',
    label: 'all params',
    run: async () => {
      const schedule = await client.projects.schedules.list('projectId', {
        cursor: 'cursor',
        limit: 50,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{projectId}/schedules',
    label: 'required params',
    run: async () => {
      const schedule = await client.projects.schedules.create('projectId', {
        cron: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{projectId}/schedules',
    label: 'all params',
    run: async () => {
      const schedule = await client.projects.schedules.create('projectId', {
        cron: 'x',
        timezone: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{projectId}/schedules/{scheduleId}',
    run: async () => {
      const schedule = await client.projects.schedules.retrieve('scheduleId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}/schedules/{scheduleId}',
    label: 'required params',
    run: async () => {
      const schedule = await client.projects.schedules.update('scheduleId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{projectId}/schedules/{scheduleId}',
    label: 'all params',
    run: async () => {
      const schedule = await client.projects.schedules.update('scheduleId', {
        projectId: 'projectId',
        cron: 'x',
        enabled: false,
        timezone: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{projectId}/schedules/{scheduleId}',
    run: async () => {
      const schedule = await client.projects.schedules.delete('scheduleId', {
        projectId: 'projectId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pull-requests',
    label: 'required params',
    run: async () => {
      const pullRequest = await client.pullRequests.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pull-requests',
    label: 'all params',
    run: async () => {
      const pullRequest = await client.pullRequests.list({
        authorIds: 'authorIds',
        createdAfter: '2024-01-01T00:00:00.000Z',
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        excludeAuthorIds: 'excludeAuthorIds',
        excludeOrganizationName: 'excludeOrganizationName',
        excludeReturnedAuthorIds: 'excludeReturnedAuthorIds',
        excludeReviewerIds: 'excludeReviewerIds',
        hasTemboSession: 'true',
        includeAuthors: 'true',
        includeTotal: 'true',
        repositoryIds: 'repositoryIds',
        reviewerIds: 'reviewerIds',
        mergedAfter: '2024-01-01T00:00:00.000Z',
        search: 'search',
        sortBy: 'createdAt',
        state: 'open',
        updatedAfter: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/pull-requests/{pullRequestId}',
    run: async () => {
      const pullRequest = await client.pullRequests.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents',
    label: 'required params',
    run: async () => {
      const agent = await client.agents.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.list({
        cursor: 'cursor',
        limit: '50',
        ids: 'ids',
        search: 'search',
        archived: 'true',
        sort: 'latestRun',
        status: 'status',
        integration: 'integration',
        author: 'author',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents',
    label: 'required params',
    run: async () => {
      const agent = await client.agents.create({});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.create({
        name: 'x',
        instructions: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] }],
        },
        mcpServers: ['x'],
        agent: 'x',
        agentOptions: {},
        sandboxSize: 'nano',
        projectId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        artifactType: 'PullRequest',
        autoDetectRepositories: false,
        repositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        triggers: [
          {
            name: 'x',
          },
        ],
        schedules: [
          {
            cron: 'x',
          },
        ],
        templateName: 'addTestCoverage',
        sourceAgentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agentId}',
    run: async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agentId}',
    label: 'required params',
    run: async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agentId}',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        expectedUpdatedAt: '2024-01-01T00:00:00.000Z',
        name: 'x',
        key: 'x',
        instructions: {
          type: 'image',
        },
        mcpServers: ['x'],
        agent: 'x',
        agentOptions: {},
        userState: {},
        sandboxSize: 'nano',
        projectId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        templateId: '',
        script: '',
        artifactType: 'PullRequest',
        autoDetectRepositories: false,
        repositoryIds: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        enabled: false,
        archived: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/agents/{agentId}',
    run: async () => {
      const agent = await client.agents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/templates',
    label: 'required params',
    run: async () => {
      const template = await client.agents.templates.list({
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/templates',
    label: 'all params',
    run: async () => {
      const template = await client.agents.templates.list({
        cursor: 'addTestCoverage',
        limit: '50',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/templates/{templateName}',
    run: async () => {
      const template = await client.agents.templates.retrieve('templateName');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/schedules',
    label: 'required params',
    run: async () => {
      const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/schedules',
    label: 'all params',
    run: async () => {
      const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agentId}/schedules',
    run: async () => {
      const schedule = await client.agents.schedules.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cron: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agentId}/schedules/{scheduleId}',
    run: async () => {
      const schedule = await client.agents.schedules.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agentId}/schedules/{scheduleId}',
    run: async () => {
      const schedule = await client.agents.schedules.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        cron: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/agents/{agentId}/schedules/{scheduleId}',
    run: async () => {
      const schedule = await client.agents.schedules.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/triggers',
    label: 'required params',
    run: async () => {
      const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/triggers',
    label: 'all params',
    run: async () => {
      const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agentId}/triggers',
    label: 'required params',
    run: async () => {
      const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agentId}/triggers',
    label: 'all params',
    run: async () => {
      const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        integrationType: 'x',
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        filters: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agentId}/triggers/{triggerId}',
    run: async () => {
      const trigger = await client.agents.triggers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agentId}/triggers/{triggerId}',
    label: 'required params',
    run: async () => {
      const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agentId}/triggers/{triggerId}',
    label: 'all params',
    run: async () => {
      const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        filters: {
          projects: [''],
          boards: [''],
          statuses: [''],
          assignedTo: [''],
          labels: [''],
          includeNewIssues: false,
        },
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/agents/{agentId}/triggers/{triggerId}',
    run: async () => {
      const trigger = await client.agents.triggers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/runs',
    label: 'required params',
    run: async () => {
      const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: '50',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/{agentId}/runs',
    label: 'all params',
    run: async () => {
      const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agentId}/runs',
    run: async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agentId}/runs/{runId}',
    run: async () => {
      const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/repositories',
    label: 'required params',
    run: async () => {
      const repository = await client.repositories.list({
        limit: 50,
        order: 'desc',
        sort: 'pullRequests',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/repositories',
    label: 'all params',
    run: async () => {
      const repository = await client.repositories.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 50,
        ids: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        integrationId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        order: 'desc',
        search: 'search',
        sort: 'pullRequests',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/repositories/{repositoryId}',
    run: async () => {
      const repository = await client.repositories.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/integrations',
    label: 'required params',
    run: async () => {
      const integration = await client.integrations.list({
        limit: '50',
        includeTotal: 'false',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/integrations',
    label: 'all params',
    run: async () => {
      const integration = await client.integrations.list({
        cursor: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: '50',
        enabled: 'true',
        hasEnabledRepositories: 'true',
        ids: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search: 'search',
        type: 'type',
        createdAfter: '2024-01-01T00:00:00.000Z',
        excludeOrganizationName: 'excludeOrganizationName',
        includeTotal: 'false',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/integrations/{integrationId}',
    run: async () => {
      const integration = await client.integrations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/billing',
    run: async () => {
      const billing = await client.billing.retrieve();
    },
  },

  {
    operation: 'listUsage',
    method: 'GET',
    path: '/v1/billing/usage',
    label: 'required params',
    run: async () => {
      const billing = await client.billing.listUsage({
        limit: '50',
      });
    },
  },

  {
    operation: 'listUsage',
    method: 'GET',
    path: '/v1/billing/usage',
    label: 'all params',
    run: async () => {
      const billing = await client.billing.listUsage({
        cursor: 'cursor',
        limit: '50',
      });
    },
  },
];

/**
 * How many cases run at once, capped at the number of cases there are.
 *
 * SCALAR_SMOKE_CONCURRENCY overrides the default; anything unparseable falls back to it.
 */
const smokeConcurrency = (caseCount: number): number => {
  const override = Number.parseInt(process.env['SCALAR_SMOKE_CONCURRENCY'] ?? '', 10);
  const limit = Number.isInteger(override) && override > 0 ? override : 32;
  return Math.min(limit, caseCount);
};

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run the selected cases under a bounded worker pool rather than all at once. A large SDK has
  // hundreds of operations, and firing every request together exceeds what the client's transport
  // keeps connections for while the runner is already busy with other targets. Each worker pulls
  // the next index off a shared cursor and writes into a pre-sized array, so results stay in case
  // order however the workers interleave. The per-case body catches everything and never rejects,
  // so one failing operation still cannot block the others.
  const results: SmokeResult[] = new Array<SmokeResult>(selected.length);
  let cursor = 0;
  const runNext = async (): Promise<void> => {
    for (let index = cursor++; index < selected.length; index = cursor++) {
      const testCase = selected[index];
      if (!testCase) continue;
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        results[index] = { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        results[index] = {
          ...identity,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
      }
    }
  };
  await Promise.all(Array.from({ length: smokeConcurrency(selected.length) }, runNext));
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
