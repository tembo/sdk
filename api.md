# Tembo Public TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`ApiKeys`](#apikeys)
  - [List API keys](#list-api-keys)
  - [Create an API key](#create-an-api-key)
  - [Retrieve an API key](#retrieve-an-api-key)
  - [Update an API key](#update-an-api-key)
  - [Delete an API key](#delete-an-api-key)
- [`Skills`](#skills)
  - [List skills](#list-skills)
  - [Create a skill](#create-a-skill)
  - [Retrieve a skill](#retrieve-a-skill)
  - [Update a skill](#update-a-skill)
  - [Delete a skill](#delete-a-skill)
- [`Insights`](#insights)
  - [Retrieve insights](#retrieve-insights)
  - [Update insights](#update-insights)
  - [List insight members](#list-insight-members)
  - [List insight repositories](#list-insight-repositories)
- [`Organizations`](#organizations)
  - [Create an organization](#create-an-organization)
  - [Retrieve an organization](#retrieve-an-organization)
  - [Update an organization](#update-an-organization)
  - [Delete an organization](#delete-an-organization)
  - [`Organizations Members`](#organizations-members)
    - [List organization members](#list-organization-members)
    - [Create an organization member](#create-an-organization-member)
    - [Retrieve an organization member](#retrieve-an-organization-member)
    - [Update an organization member](#update-an-organization-member)
    - [Delete an organization member](#delete-an-organization-member)
  - [`Organizations Secrets`](#organizations-secrets)
    - [List organization secrets](#list-organization-secrets)
    - [Create an organization secret](#create-an-organization-secret)
    - [Retrieve an organization secret](#retrieve-an-organization-secret)
    - [Update an organization secret](#update-an-organization-secret)
    - [Delete an organization secret](#delete-an-organization-secret)
  - [`Organizations Settings`](#organizations-settings)
    - [Retrieve organization settings](#retrieve-organization-settings)
    - [Update organization settings](#update-organization-settings)
- [`McpConnections`](#mcpconnections)
  - [List MCP connections](#list-mcp-connections)
  - [Create an MCP connection](#create-an-mcp-connection)
  - [Retrieve an MCP connection](#retrieve-an-mcp-connection)
  - [Update an MCP connection](#update-an-mcp-connection)
  - [Delete an MCP connection](#delete-an-mcp-connection)
  - [Authorize an MCP connection](#authorize-an-mcp-connection)
  - [Test an MCP connection](#test-an-mcp-connection)
- [`Artifacts`](#artifacts)
  - [List artifacts](#list-artifacts)
  - [Create an artifact](#create-an-artifact)
  - [Retrieve an artifact](#retrieve-an-artifact)
  - [Delete an artifact](#delete-an-artifact)
- [`Messages`](#messages)
  - [List messages](#list-messages)
  - [Create a message](#create-a-message)
  - [Retrieve a message](#retrieve-a-message)
  - [Update a message](#update-a-message)
  - [Delete a message](#delete-a-message)
- [`Models`](#models)
  - [List models](#list-models)
  - [Update a model](#update-a-model)
- [`Users`](#users)
  - [Retrieve a user](#retrieve-a-user)
  - [Update a user](#update-a-user)
  - [Delete a user](#delete-a-user)
  - [`Users ConnectedAccounts`](#users-connectedaccounts)
    - [List user connected accounts](#list-user-connected-accounts)
    - [Retrieve a user connected account](#retrieve-a-user-connected-account)
- [`Sessions`](#sessions)
  - [List sessions](#list-sessions)
  - [Create a session](#create-a-session)
  - [Retrieve a session](#retrieve-a-session)
  - [Update a session](#update-a-session)
  - [Delete a session](#delete-a-session)
  - [Stop a session](#stop-a-session)
  - [List session events](#list-session-events)
  - [`Sessions Sources`](#sessions-sources)
    - [List session sources](#list-session-sources)
    - [Retrieve a session source](#retrieve-a-session-source)
  - [`Sessions Files`](#sessions-files)
    - [List session files](#list-session-files)
    - [Retrieve a session file](#retrieve-a-session-file)
  - [`Sessions Diffs`](#sessions-diffs)
    - [List session diffs](#list-session-diffs)
    - [Retrieve a session diff](#retrieve-a-session-diff)
- [`Projects`](#projects)
  - [Update project defaults](#update-project-defaults)
  - [List projects](#list-projects)
  - [Create a project](#create-a-project)
  - [Retrieve a project](#retrieve-a-project)
  - [Update a project](#update-a-project)
  - [Delete a project](#delete-a-project)
  - [`Projects EnvironmentVariables`](#projects-environmentvariables)
    - [List project environment variables](#list-project-environment-variables)
    - [Create project environment variables](#create-project-environment-variables)
    - [Delete a project environment variable](#delete-a-project-environment-variable)
  - [`Projects Snapshots`](#projects-snapshots)
    - [List project snapshots](#list-project-snapshots)
    - [Retrieve a project snapshot](#retrieve-a-project-snapshot)
    - [Update a project snapshot](#update-a-project-snapshot)
    - [Delete a project snapshot](#delete-a-project-snapshot)
  - [`Projects Builds`](#projects-builds)
    - [List project builds](#list-project-builds)
    - [Create a project build](#create-a-project-build)
    - [Retrieve a project build](#retrieve-a-project-build)
    - [Cancel a project build](#cancel-a-project-build)
  - [`Projects Schedules`](#projects-schedules)
    - [List project schedules](#list-project-schedules)
    - [Create a project schedule](#create-a-project-schedule)
    - [Retrieve a project schedule](#retrieve-a-project-schedule)
    - [Update a project schedule](#update-a-project-schedule)
    - [Delete a project schedule](#delete-a-project-schedule)
- [`PullRequests`](#pullrequests)
  - [List pull requests](#list-pull-requests)
  - [Retrieve a pull request](#retrieve-a-pull-request)
- [`Agents`](#agents)
  - [List agents](#list-agents)
  - [Create an agent](#create-an-agent)
  - [Retrieve an agent](#retrieve-an-agent)
  - [Update an agent](#update-an-agent)
  - [Delete an agent](#delete-an-agent)
  - [`Agents Templates`](#agents-templates)
    - [List agent templates](#list-agent-templates)
    - [Retrieve an agent template](#retrieve-an-agent-template)
  - [`Agents Schedules`](#agents-schedules)
    - [List agent schedules](#list-agent-schedules)
    - [Create an agent schedule](#create-an-agent-schedule)
    - [Retrieve an agent schedule](#retrieve-an-agent-schedule)
    - [Update an agent schedule](#update-an-agent-schedule)
    - [Delete an agent schedule](#delete-an-agent-schedule)
  - [`Agents Triggers`](#agents-triggers)
    - [List agent triggers](#list-agent-triggers)
    - [Create an agent trigger](#create-an-agent-trigger)
    - [Retrieve an agent trigger](#retrieve-an-agent-trigger)
    - [Update an agent trigger](#update-an-agent-trigger)
    - [Delete an agent trigger](#delete-an-agent-trigger)
  - [`Agents Runs`](#agents-runs)
    - [List agent runs](#list-agent-runs)
    - [Create an agent run](#create-an-agent-run)
    - [Retrieve an agent run](#retrieve-an-agent-run)
- [`Repositories`](#repositories)
  - [List repositories](#list-repositories)
  - [Retrieve a repository](#retrieve-a-repository)
- [`Integrations`](#integrations)
  - [List integrations](#list-integrations)
  - [Retrieve an integration](#retrieve-an-integration)
- [`Billing`](#billing)
  - [Retrieve billing](#retrieve-billing)
  - [List billing usage](#list-billing-usage)

## Setup

```ts
import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  apiKey: process.env['TEMBO_API_KEY'], // defaults to the TEMBO_API_KEY env var
});
```
## `ApiKeys`

### List API keys

List active API keys for the current organization.

| Direction | Type |
| --- | --- |
| Request | [`APIKeyListParams`](./src/resources/api-keys.ts) |
| Response | [`APIKeyListResponse`](./src/resources/api-keys.ts) |

```ts
const apiKey = await client.apiKeys.list({
  limit: '50',
});
```

### Create an API key

Create an API key for the current organization. The complete token is returned only by this operation.

| Direction | Type |
| --- | --- |
| Request | [`APIKeyCreateParams`](./src/resources/api-keys.ts) |
| Response | [`APIKeyCreateResponse`](./src/resources/api-keys.ts) |

```ts
const apiKey = await client.apiKeys.create({});
```

### Retrieve an API key

Retrieve an active API key without exposing its complete token.

| Direction | Type |
| --- | --- |
| Response | [`APIKeyRetrieveResponse`](./src/resources/api-keys.ts) |

```ts
const apiKey = await client.apiKeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update an API key

Rename an active API key.

| Direction | Type |
| --- | --- |
| Request | [`APIKeyUpdateParams`](./src/resources/api-keys.ts) |
| Response | [`APIKeyUpdateResponse`](./src/resources/api-keys.ts) |

```ts
const apiKey = await client.apiKeys.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
});
```

### Delete an API key

Revoke an active API key so it can no longer authenticate requests.

| Direction | Type |
| --- | --- |
| Response | [`APIKeyDeleteResponse`](./src/resources/api-keys.ts) |

```ts
const apiKey = await client.apiKeys.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Skills`

### List skills

List organization skills or skills checked into a repository.

| Direction | Type |
| --- | --- |
| Request | [`SkillListParams`](./src/resources/skills.ts) |
| Response | [`SkillListResponse`](./src/resources/skills.ts) |

```ts
const skill = await client.skills.list({
  limit: '50',
  source: 'organization',
});
```

### Create a skill

Create an organization skill with its files.

| Direction | Type |
| --- | --- |
| Request | [`SkillCreateParams`](./src/resources/skills.ts) |
| Response | [`SkillCreateResponse`](./src/resources/skills.ts) |

```ts
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
```

### Retrieve a skill

Retrieve an organization skill and all of its files.

| Direction | Type |
| --- | --- |
| Response | [`SkillRetrieveResponse`](./src/resources/skills.ts) |

```ts
const skill = await client.skills.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a skill

Update an organization skill. When files are provided, they replace the complete file set.

| Direction | Type |
| --- | --- |
| Request | [`SkillUpdateParams`](./src/resources/skills.ts) |
| Response | [`SkillUpdateResponse`](./src/resources/skills.ts) |

```ts
const skill = await client.skills.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
```

### Delete a skill

Delete an organization skill and all of its files.

| Direction | Type |
| --- | --- |
| Response | [`SkillDeleteResponse`](./src/resources/skills.ts) |

```ts
const skill = await client.skills.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Insights`

### Retrieve insights

Retrieve pull request contribution insights and their collection status for the current organization.

| Direction | Type |
| --- | --- |
| Response | [`InsightRetrieveResponse`](./src/resources/insights.ts) |

```ts
const insight = await client.insights.retrieve();
```

### Update insights

Enable or disable pull request insight collection. Enabling starts the initial refresh when needed.

| Direction | Type |
| --- | --- |
| Request | [`InsightUpdateParams`](./src/resources/insights.ts) |
| Response | [`InsightUpdateResponse`](./src/resources/insights.ts) |

```ts
const insight = await client.insights.update({
  enabled: false,
});
```

### List insight members

List organization members included in pull request insights.

| Direction | Type |
| --- | --- |
| Request | [`InsightListMembersParams`](./src/resources/insights.ts) |
| Response | [`InsightListMembersResponse`](./src/resources/insights.ts) |

```ts
const insight = await client.insights.listMembers({
  limit: '50',
});
```

### List insight repositories

List repositories included in pull request insights for the current organization.

| Direction | Type |
| --- | --- |
| Request | [`InsightListRepositoriesParams`](./src/resources/insights.ts) |
| Response | [`InsightListRepositoriesResponse`](./src/resources/insights.ts) |

```ts
const insight = await client.insights.listRepositories({
  limit: '50',
});
```

## `Organizations`

### Create an organization

Create an organization and make the authenticated user its administrator.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationCreateParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationCreateResponse`](./src/resources/organizations/organizations.ts) |

```ts
const organization = await client.organizations.create({
  name: 'x',
});
```

### Retrieve an organization

Retrieve an organization profile.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationRetrieveResponse`](./src/resources/organizations/organizations.ts) |

```ts
const organization = await client.organizations.retrieve('organizationId');
```

### Update an organization

Update organization profile fields or onboarding state.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationUpdateParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationUpdateResponse`](./src/resources/organizations/organizations.ts) |

```ts
const organization = await client.organizations.update('organizationId', {});
```

### Delete an organization

Permanently delete an organization and its related data.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationDeleteResponse`](./src/resources/organizations/organizations.ts) |

```ts
const organization = await client.organizations.delete('organizationId');
```

### `Organizations Members`

#### List organization members

List active members or pending invitations with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`MemberListParams`](./src/resources/organizations/members.ts) |
| Response | [`MemberListResponse`](./src/resources/organizations/members.ts) |

```ts
const member = await client.organizations.members.list('organizationId', {
  limit: 50,
  status: 'active',
});
```

#### Create an organization member

Invite or add a user to an organization with a role.

| Direction | Type |
| --- | --- |
| Request | [`MemberCreateParams`](./src/resources/organizations/members.ts) |
| Response | [`MemberCreateResponse`](./src/resources/organizations/members.ts) |

```ts
const member = await client.organizations.members.create('organizationId', {
  emailAddress: 'user@example.com',
  role: 'org:member',
});
```

#### Retrieve an organization member

Retrieve an active member or pending member invitation.

| Direction | Type |
| --- | --- |
| Request | [`MemberRetrieveParams`](./src/resources/organizations/members.ts) |
| Response | [`MemberRetrieveResponse`](./src/resources/organizations/members.ts) |

```ts
const member = await client.organizations.members.retrieve('memberId', {
  organizationId: 'organizationId',
});
```

#### Update an organization member

Update an organization member role.

| Direction | Type |
| --- | --- |
| Request | [`MemberUpdateParams`](./src/resources/organizations/members.ts) |
| Response | [`MemberUpdateResponse`](./src/resources/organizations/members.ts) |

```ts
const member = await client.organizations.members.update('memberId', {
  organizationId: 'organizationId',
  role: 'org:admin',
});
```

#### Delete an organization member

Remove an active member or revoke a pending invitation.

| Direction | Type |
| --- | --- |
| Request | [`MemberDeleteParams`](./src/resources/organizations/members.ts) |
| Response | [`MemberDeleteResponse`](./src/resources/organizations/members.ts) |

```ts
const member = await client.organizations.members.delete('memberId', {
  organizationId: 'organizationId',
});
```

### `Organizations Secrets`

#### List organization secrets

List redacted organization secret summaries with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`SecretListParams`](./src/resources/organizations/secrets.ts) |
| Response | [`SecretListResponse`](./src/resources/organizations/secrets.ts) |

```ts
const secret = await client.organizations.secrets.list('organizationId', {
  limit: 50,
});
```

#### Create an organization secret

Create an encrypted organization secret.

| Direction | Type |
| --- | --- |
| Request | [`SecretCreateParams`](./src/resources/organizations/secrets.ts) |
| Response | [`SecretCreateResponse`](./src/resources/organizations/secrets.ts) |

```ts
const secret = await client.organizations.secrets.create('organizationId', {
  key: 'x',
  value: 'x',
});
```

#### Retrieve an organization secret

Retrieve a redacted organization secret summary.

| Direction | Type |
| --- | --- |
| Request | [`SecretRetrieveParams`](./src/resources/organizations/secrets.ts) |
| Response | [`SecretRetrieveResponse`](./src/resources/organizations/secrets.ts) |

```ts
const secret = await client.organizations.secrets.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organizationId: 'organizationId',
});
```

#### Update an organization secret

Update a secret name, encrypted value, or both.

| Direction | Type |
| --- | --- |
| Request | [`SecretUpdateParams`](./src/resources/organizations/secrets.ts) |
| Response | [`SecretUpdateResponse`](./src/resources/organizations/secrets.ts) |

```ts
const secret = await client.organizations.secrets.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organizationId: 'organizationId',
});
```

#### Delete an organization secret

Permanently delete an organization secret.

| Direction | Type |
| --- | --- |
| Request | [`SecretDeleteParams`](./src/resources/organizations/secrets.ts) |
| Response | [`SecretDeleteResponse`](./src/resources/organizations/secrets.ts) |

```ts
const secret = await client.organizations.secrets.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organizationId: 'organizationId',
});
```

### `Organizations Settings`

#### Retrieve organization settings

Retrieve effective organization settings, including defaults for settings that have not been configured.

| Direction | Type |
| --- | --- |
| Response | [`SettingRetrieveResponse`](./src/resources/organizations/settings.ts) |

```ts
const setting = await client.organizations.settings.retrieve('organizationId');
```

#### Update organization settings

Update one or more organization settings.

| Direction | Type |
| --- | --- |
| Request | [`SettingUpdateParams`](./src/resources/organizations/settings.ts) |
| Response | [`SettingUpdateResponse`](./src/resources/organizations/settings.ts) |

```ts
const setting = await client.organizations.settings.update('organizationId', {});
```

## `McpConnections`

### List MCP connections

List MCP connections for the current organization with cursor pagination and optional search by name or URL. Command arguments, headers, and environment configuration are omitted.

| Direction | Type |
| --- | --- |
| Request | [`McpConnectionListParams`](./src/resources/mcp-connections.ts) |
| Response | [`McpConnectionListResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.list({
  limit: '50',
});
```

### Create an MCP connection

Create a new stdio or Streamable HTTP MCP connection. Remote connections support OAuth, client credentials, or static headers and begin authorization when required; stdio commands are stored but never executed by this API.

| Direction | Type |
| --- | --- |
| Request | [`McpConnectionCreateParams`](./src/resources/mcp-connections.ts) |
| Response | [`McpConnectionCreateResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.create({
  name: 'x',
  args: [],
  command: 'x',
  type: 'stdio',
  visibility: 'shared',
});
```

### Retrieve an MCP connection

Retrieve MCP connection configuration and authentication details. Stored header values, environment values, OAuth tokens, and client secrets are never returned.

| Direction | Type |
| --- | --- |
| Response | [`McpConnectionRetrieveResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update an MCP connection

Update MCP configuration. Header and environment objects merge write-only values by key, null values remove individual keys, and a null environment clears all variables. Hidden credentials are preserved unless explicitly changed or authentication is replaced; changing a remote server URL clears credentials for the old server. Call authorize explicitly after changing the server or authentication to reconnect.

| Direction | Type |
| --- | --- |
| Request | [`McpConnectionUpdateParams`](./src/resources/mcp-connections.ts) |
| Response | [`McpConnectionUpdateResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  type: 'remote',
});
```

### Delete an MCP connection

Delete an MCP connection from the current organization.

| Direction | Type |
| --- | --- |
| Response | [`McpConnectionDeleteResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Authorize an MCP connection

Connect or authorize a remote Streamable HTTP MCP connection, returning an OAuth URL when user authorization is required. Stdio connections are rejected because this action cannot authorize them.

| Direction | Type |
| --- | --- |
| Response | [`McpConnectionAuthorizeResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.authorize('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Test an MCP connection

Test a remote MCP connection by connecting to its server. Stdio connections are rejected because the API does not execute arbitrary local commands.

| Direction | Type |
| --- | --- |
| Response | [`McpConnectionTestResponse`](./src/resources/mcp-connections.ts) |

```ts
const mcpConnection = await client.mcpConnections.test('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Artifacts`

### List artifacts

List organization artifacts with optional session and type filters.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactListParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactListResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.list({
  limit: '50',
});
```

### Create an artifact

Create a file artifact for a session from inline content or an uploaded asset.

| Direction | Type |
| --- | --- |
| Request | [`ArtifactCreateParams`](./src/resources/artifacts.ts) |
| Response | [`ArtifactCreateResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.create({
  title: 'x',
  output: {
    type: 'html',
    content: 'x',
  },
  sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Retrieve an artifact

Retrieve an organization artifact by ID.

| Direction | Type |
| --- | --- |
| Response | [`ArtifactRetrieveResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Delete an artifact

Delete an organization artifact and its backing asset when present.

| Direction | Type |
| --- | --- |
| Response | [`ArtifactDeleteResponse`](./src/resources/artifacts.ts) |

```ts
const artifact = await client.artifacts.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Messages`

### List messages

List organization messages with optional session and thread filters.

| Direction | Type |
| --- | --- |
| Request | [`MessageListParams`](./src/resources/messages.ts) |
| Response | [`MessageListResponse`](./src/resources/messages.ts) |

```ts
const message = await client.messages.list({
  limit: '50',
});
```

### Create a message

Create a user message for a session and submit it to the session agent.

| Direction | Type |
| --- | --- |
| Request | [`MessageCreateParams`](./src/resources/messages.ts) |
| Response | [`MessageCreateResponse`](./src/resources/messages.ts) |

```ts
const message = await client.messages.create({
  content: 'x',
  sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Retrieve a message

Retrieve an organization message by ID.

| Direction | Type |
| --- | --- |
| Response | [`MessageRetrieveResponse`](./src/resources/messages.ts) |

```ts
const message = await client.messages.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a message

Update message content before its queued processing has started.

| Direction | Type |
| --- | --- |
| Request | [`MessageUpdateParams`](./src/resources/messages.ts) |
| Response | [`MessageUpdateResponse`](./src/resources/messages.ts) |

```ts
const message = await client.messages.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
```

### Delete a message

Delete a message and cancel its queued jobs, runtime turns, and active sandbox sessions.

| Direction | Type |
| --- | --- |
| Response | [`MessageDeleteResponse`](./src/resources/messages.ts) |

```ts
const message = await client.messages.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Models`

### List models

List the models available to the current organization, including enablement and inference-provider access.

| Direction | Type |
| --- | --- |
| Request | [`ModelListParams`](./src/resources/models.ts) |
| Response | [`ModelListResponse`](./src/resources/models.ts) |

```ts
const model = await client.models.list({
  limit: '50',
});
```

### Update a model

Enable or disable an organization model, or select its inference provider.

| Direction | Type |
| --- | --- |
| Request | [`ModelUpdateParams`](./src/resources/models.ts) |
| Response | [`ModelUpdateResponse`](./src/resources/models.ts) |

```ts
const model = await client.models.update('claude-fable-5-1', {});
```

## `Users`

### Retrieve a user

Retrieve a user profile visible to the caller.

| Direction | Type |
| --- | --- |
| Response | [`UserRetrieveResponse`](./src/resources/users/users.ts) |

```ts
const user = await client.users.retrieve('userId');
```

### Update a user

Update your user profile and onboarding information.

| Direction | Type |
| --- | --- |
| Request | [`UserUpdateParams`](./src/resources/users/users.ts) |
| Response | [`UserUpdateResponse`](./src/resources/users/users.ts) |

```ts
const user = await client.users.update('userId', {
  onboarding: {
    positionInCompany: 'x',
    useCase: 'x',
    howDidYouHear: 'x',
  },
});
```

### Delete a user

Queue permanent deletion of your user account.

| Direction | Type |
| --- | --- |
| Request | [`UserDeleteParams`](./src/resources/users/users.ts) |
| Response | [`UserDeleteResponse`](./src/resources/users/users.ts) |

```ts
const user = await client.users.delete('userId', {});
```

### `Users ConnectedAccounts`

#### List user connected accounts

List the user identity-provider accounts without returning credentials.

| Direction | Type |
| --- | --- |
| Request | [`ConnectedAccountListParams`](./src/resources/users/connected-accounts.ts) |
| Response | [`ConnectedAccountListResponse`](./src/resources/users/connected-accounts.ts) |

```ts
const connectedAccount = await client.users.connectedAccounts.list('userId', {
  limit: '50',
});
```

#### Retrieve a user connected account

Retrieve one identity-provider account without returning credentials.

| Direction | Type |
| --- | --- |
| Request | [`ConnectedAccountRetrieveParams`](./src/resources/users/connected-accounts.ts) |
| Response | [`ConnectedAccountRetrieveResponse`](./src/resources/users/connected-accounts.ts) |

```ts
const connectedAccount = await client.users.connectedAccounts.retrieve('connectedAccountId', {
  userId: 'userId',
});
```

## `Sessions`

### List sessions

List sessions you have permission to access, with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`SessionListParams`](./src/resources/sessions/sessions.ts) |
| Response | [`SessionListResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.list({
  limit: 50,
  includeArchived: true,
  includeTotal: false,
  sortBy: 'lastQueuedAt',
  state: 'all',
});
```

### Create a session

Create a session for a task. Provide the initial prompt in description and optionally configure its repositories and agent.

| Direction | Type |
| --- | --- |
| Request | [`SessionCreateParams`](./src/resources/sessions/sessions.ts) |
| Response | [`SessionCreateResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.create({
  mcpServers: [],
  description: 'x',
});
```

### Retrieve a session

Retrieve a session you have permission to access.

| Direction | Type |
| --- | --- |
| Response | [`SessionRetrieveResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a session

Update the configuration of a session you have permission to access.

| Direction | Type |
| --- | --- |
| Request | [`SessionUpdateParams`](./src/resources/sessions/sessions.ts) |
| Response | [`SessionUpdateResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
```

### Delete a session

Delete a session you have permission to access.

| Direction | Type |
| --- | --- |
| Response | [`SessionDeleteResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Stop a session

Interrupt active session work and continue with the next queued message.

| Direction | Type |
| --- | --- |
| Request | [`SessionStopParams`](./src/resources/sessions/sessions.ts) |
| Response | [`SessionStopResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.stop('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### List session events

List recorded session stream events with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`SessionListEventsParams`](./src/resources/sessions/sessions.ts) |
| Response | [`SessionListEventsResponse`](./src/resources/sessions/sessions.ts) |

```ts
const session = await client.sessions.listEvents('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: 50,
});
```

### `Sessions Sources`

#### List session sources

List session sources in the authenticated organization.

| Direction | Type |
| --- | --- |
| Request | [`SourceListParams`](./src/resources/sessions/sources.ts) |
| Response | [`SourceListResponse`](./src/resources/sessions/sources.ts) |

```ts
const source = await client.sessions.sources.list({
  limit: 50,
  includeTotal: false,
});
```

#### Retrieve a session source

Retrieve one session source.

| Direction | Type |
| --- | --- |
| Response | [`SourceRetrieveResponse`](./src/resources/sessions/sources.ts) |

```ts
const source = await client.sessions.sources.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### `Sessions Files`

#### List session files

List recorded session files without returning file contents.

| Direction | Type |
| --- | --- |
| Request | [`FileListParams`](./src/resources/sessions/files.ts) |
| Response | [`FileListResponse`](./src/resources/sessions/files.ts) |

```ts
const file = await client.sessions.files.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: 50,
});
```

#### Retrieve a session file

Retrieve one recorded session file and its content.

| Direction | Type |
| --- | --- |
| Request | [`FileRetrieveParams`](./src/resources/sessions/files.ts) |
| Response | [`FileRetrieveResponse`](./src/resources/sessions/files.ts) |

```ts
const file = await client.sessions.files.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Sessions Diffs`

#### List session diffs

List recorded session diff metadata with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`DiffListParams`](./src/resources/sessions/diffs.ts) |
| Response | [`DiffListResponse`](./src/resources/sessions/diffs.ts) |

```ts
const diff = await client.sessions.diffs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: 50,
});
```

#### Retrieve a session diff

Retrieve one recorded session diff and its content.

| Direction | Type |
| --- | --- |
| Request | [`DiffRetrieveParams`](./src/resources/sessions/diffs.ts) |
| Response | [`DiffRetrieveResponse`](./src/resources/sessions/diffs.ts) |

```ts
const diff = await client.sessions.diffs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  sessionId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

## `Projects`

### Update project defaults

Choose the default project and sandbox size for the organization.

| Direction | Type |
| --- | --- |
| Request | [`ProjectUpdateDefaultsParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectUpdateDefaultsResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.updateDefaults({
  projectId: 'x',
  sandboxSize: 'nano',
});
```

### List projects

List projects in the authenticated organization.

| Direction | Type |
| --- | --- |
| Request | [`ProjectListParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectListResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.list({
  limit: 50,
});
```

### Create a project

Create a reusable project environment.

| Direction | Type |
| --- | --- |
| Request | [`ProjectCreateParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectCreateResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.create({
  name: 'x',
  sizes: ['nano'],
});
```

### Retrieve a project

Retrieve project configuration. Use the project subresources to list snapshots, builds, schedules, and environment variables.

| Direction | Type |
| --- | --- |
| Response | [`ProjectRetrieveResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.retrieve('projectId');
```

### Update a project

Update project configuration fields.

| Direction | Type |
| --- | --- |
| Request | [`ProjectUpdateParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectUpdateResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.update('projectId', {});
```

### Delete a project

Archive a project and disable its schedule.

| Direction | Type |
| --- | --- |
| Response | [`ProjectDeleteResponse`](./src/resources/projects/projects.ts) |

```ts
const project = await client.projects.delete('projectId');
```

### `Projects EnvironmentVariables`

#### List project environment variables

List environment-variable names without exposing values.

| Direction | Type |
| --- | --- |
| Response | [`EnvironmentVariableListResponse`](./src/resources/projects/environment-variables.ts) |

```ts
const environmentVariable = await client.projects.environmentVariables.list('projectId');
```

#### Create project environment variables

Create one or more encrypted project environment variables.

| Direction | Type |
| --- | --- |
| Request | [`EnvironmentVariableCreateParams`](./src/resources/projects/environment-variables.ts) |
| Response | [`EnvironmentVariableCreateResponse`](./src/resources/projects/environment-variables.ts) |

```ts
const environmentVariable = await client.projects.environmentVariables.create('projectId', {
  secrets: [
    {
      key: '',
      value: 'x',
    },
  ],
});
```

#### Delete a project environment variable

Delete one encrypted project environment variable.

| Direction | Type |
| --- | --- |
| Request | [`EnvironmentVariableDeleteParams`](./src/resources/projects/environment-variables.ts) |
| Response | [`EnvironmentVariableDeleteResponse`](./src/resources/projects/environment-variables.ts) |

```ts
const environmentVariable = await client.projects.environmentVariables.delete('key', {
  projectId: 'projectId',
});
```

### `Projects Snapshots`

#### List project snapshots

List recent VM snapshots built for a project.

| Direction | Type |
| --- | --- |
| Request | [`SnapshotListParams`](./src/resources/projects/snapshots.ts) |
| Response | [`SnapshotListResponse`](./src/resources/projects/snapshots.ts) |

```ts
const snapshot = await client.projects.snapshots.list('projectId', {
  limit: 50,
});
```

#### Retrieve a project snapshot

Retrieve one project snapshot.

| Direction | Type |
| --- | --- |
| Request | [`SnapshotRetrieveParams`](./src/resources/projects/snapshots.ts) |
| Response | [`SnapshotRetrieveResponse`](./src/resources/projects/snapshots.ts) |

```ts
const snapshot = await client.projects.snapshots.retrieve('snapshotId', {
  projectId: 'projectId',
});
```

#### Update a project snapshot

Rename a snapshot or choose whether it is pinned.

| Direction | Type |
| --- | --- |
| Request | [`SnapshotUpdateParams`](./src/resources/projects/snapshots.ts) |
| Response | [`SnapshotUpdateResponse`](./src/resources/projects/snapshots.ts) |

```ts
const snapshot = await client.projects.snapshots.update('snapshotId', {
  projectId: 'projectId',
});
```

#### Delete a project snapshot

Archive a project snapshot.

| Direction | Type |
| --- | --- |
| Request | [`SnapshotDeleteParams`](./src/resources/projects/snapshots.ts) |
| Response | [`SnapshotDeleteResponse`](./src/resources/projects/snapshots.ts) |

```ts
const snapshot = await client.projects.snapshots.delete('snapshotId', {
  projectId: 'projectId',
});
```

### `Projects Builds`

#### List project builds

List recent queued, running, and failed project builds.

| Direction | Type |
| --- | --- |
| Request | [`BuildListParams`](./src/resources/projects/builds.ts) |
| Response | [`BuildListResponse`](./src/resources/projects/builds.ts) |

```ts
const build = await client.projects.builds.list('projectId', {
  limit: 50,
});
```

#### Create a project build

Build selected project sizes or rebuild one snapshot.

| Direction | Type |
| --- | --- |
| Request | [`BuildCreateParams`](./src/resources/projects/builds.ts) |
| Response | [`BuildCreateResponse`](./src/resources/projects/builds.ts) |

```ts
const build = await client.projects.builds.create('projectId', {});
```

#### Retrieve a project build

Retrieve project build status and captured logs.

| Direction | Type |
| --- | --- |
| Request | [`BuildRetrieveParams`](./src/resources/projects/builds.ts) |
| Response | [`BuildRetrieveResponse`](./src/resources/projects/builds.ts) |

```ts
const build = await client.projects.builds.retrieve('buildId', {
  projectId: 'projectId',
});
```

#### Cancel a project build

Cancel an active queued or running project build.

| Direction | Type |
| --- | --- |
| Request | [`BuildCancelParams`](./src/resources/projects/builds.ts) |
| Response | [`BuildCancelResponse`](./src/resources/projects/builds.ts) |

```ts
const build = await client.projects.builds.cancel('buildId', {
  projectId: 'projectId',
});
```

### `Projects Schedules`

#### List project schedules

List schedules linked to a project.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleListParams`](./src/resources/projects/schedules.ts) |
| Response | [`ScheduleListResponse`](./src/resources/projects/schedules.ts) |

```ts
const schedule = await client.projects.schedules.list('projectId', {
  limit: 50,
});
```

#### Create a project schedule

Create a recurring project build schedule.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleCreateParams`](./src/resources/projects/schedules.ts) |
| Response | [`ScheduleCreateResponse`](./src/resources/projects/schedules.ts) |

```ts
const schedule = await client.projects.schedules.create('projectId', {
  cron: 'x',
});
```

#### Retrieve a project schedule

Retrieve one project build schedule.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleRetrieveParams`](./src/resources/projects/schedules.ts) |
| Response | [`ScheduleRetrieveResponse`](./src/resources/projects/schedules.ts) |

```ts
const schedule = await client.projects.schedules.retrieve('scheduleId', {
  projectId: 'projectId',
});
```

#### Update a project schedule

Update timing or enabled state for a project schedule.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleUpdateParams`](./src/resources/projects/schedules.ts) |
| Response | [`ScheduleUpdateResponse`](./src/resources/projects/schedules.ts) |

```ts
const schedule = await client.projects.schedules.update('scheduleId', {
  projectId: 'projectId',
});
```

#### Delete a project schedule

Disable a project build schedule.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleDeleteParams`](./src/resources/projects/schedules.ts) |
| Response | [`ScheduleDeleteResponse`](./src/resources/projects/schedules.ts) |

```ts
const schedule = await client.projects.schedules.delete('scheduleId', {
  projectId: 'projectId',
});
```

## `PullRequests`

### List pull requests

List pull requests for the authenticated organization with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`PullRequestListParams`](./src/resources/pull-requests.ts) |
| Response | [`PullRequestListResponse`](./src/resources/pull-requests.ts) |

```ts
const pullRequest = await client.pullRequests.list({
  limit: '50',
});
```

### Retrieve a pull request

Retrieve a pull request for the authenticated organization.

| Direction | Type |
| --- | --- |
| Response | [`PullRequestRetrieveResponse`](./src/resources/pull-requests.ts) |

```ts
const pullRequest = await client.pullRequests.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Agents`

### List agents

List agents available in your organization, with optional search, status, integration, and author filters.

| Direction | Type |
| --- | --- |
| Request | [`AgentListParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentListResponse`](./src/resources/agents/agents.ts) |

```ts
const agent = await client.agents.list({
  limit: '50',
});
```

### Create an agent

Create an agent from instructions, a template, or another agent. sourceAgentId cannot be combined with other fields. Template creation accepts only templateName, name, and triggers; creation from scratch requires name.

| Direction | Type |
| --- | --- |
| Request | [`AgentCreateParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentCreateResponse`](./src/resources/agents/agents.ts) |

```ts
const agent = await client.agents.create({});
```

### Retrieve an agent

Retrieve an agent and its configuration, repository associations, and run summary.

| Direction | Type |
| --- | --- |
| Response | [`AgentRetrieveResponse`](./src/resources/agents/agents.ts) |

```ts
const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update an agent

Update agent configuration. Supply expectedUpdatedAt to reject an update if the agent changed since it was retrieved. Enabling or archiving an agent also updates its schedules and triggers.

| Direction | Type |
| --- | --- |
| Request | [`AgentUpdateParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentUpdateResponse`](./src/resources/agents/agents.ts) |

```ts
const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {});
```

### Delete an agent

Delete an agent and its scheduled and triggered jobs.

| Direction | Type |
| --- | --- |
| Response | [`AgentDeleteResponse`](./src/resources/agents/agents.ts) |

```ts
const agent = await client.agents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### `Agents Templates`

#### List agent templates

List reusable agent templates and their configuration requirements.

| Direction | Type |
| --- | --- |
| Request | [`TemplateListParams`](./src/resources/agents/templates.ts) |
| Response | [`TemplateListResponse`](./src/resources/agents/templates.ts) |

```ts
const template = await client.agents.templates.list({
  limit: '50',
});
```

#### Retrieve an agent template

Retrieve a reusable agent template by name, including its instructions and required parameters.

| Direction | Type |
| --- | --- |
| Response | [`TemplateRetrieveResponse`](./src/resources/agents/templates.ts) |

```ts
const template = await client.agents.templates.retrieve('templateName');
```

### `Agents Schedules`

#### List agent schedules

List the schedules configured for an agent.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleListParams`](./src/resources/agents/schedules.ts) |
| Response | [`ScheduleListResponse`](./src/resources/agents/schedules.ts) |

```ts
const schedule = await client.agents.schedules.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: '50',
});
```

#### Create an agent schedule

Create a recurring schedule that starts agent runs using a cron expression.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleCreateParams`](./src/resources/agents/schedules.ts) |
| Response | [`ScheduleCreateResponse`](./src/resources/agents/schedules.ts) |

```ts
const schedule = await client.agents.schedules.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  cron: 'x',
});
```

#### Retrieve an agent schedule

Retrieve an agent schedule, including its enabled state and next execution time.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleRetrieveParams`](./src/resources/agents/schedules.ts) |
| Response | [`ScheduleRetrieveResponse`](./src/resources/agents/schedules.ts) |

```ts
const schedule = await client.agents.schedules.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update an agent schedule

Update an agent schedule, including its cron expression or enabled state.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleUpdateParams`](./src/resources/agents/schedules.ts) |
| Response | [`ScheduleUpdateResponse`](./src/resources/agents/schedules.ts) |

```ts
const schedule = await client.agents.schedules.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  cron: 'x',
});
```

#### Delete an agent schedule

Delete a recurring agent schedule.

| Direction | Type |
| --- | --- |
| Request | [`ScheduleDeleteParams`](./src/resources/agents/schedules.ts) |
| Response | [`ScheduleDeleteResponse`](./src/resources/agents/schedules.ts) |

```ts
const schedule = await client.agents.schedules.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Agents Triggers`

#### List agent triggers

List the integration events configured to start runs of an agent.

| Direction | Type |
| --- | --- |
| Request | [`TriggerListParams`](./src/resources/agents/triggers.ts) |
| Response | [`TriggerListResponse`](./src/resources/agents/triggers.ts) |

```ts
const trigger = await client.agents.triggers.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: '50',
});
```

#### Create an agent trigger

Configure an integration event to start agent runs. Available filters depend on the integration and event name.

| Direction | Type |
| --- | --- |
| Request | [`TriggerCreateParams`](./src/resources/agents/triggers.ts) |
| Response | [`TriggerCreateResponse`](./src/resources/agents/triggers.ts) |

```ts
const trigger = await client.agents.triggers.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
});
```

#### Retrieve an agent trigger

Retrieve an agent trigger and its integration event filters.

| Direction | Type |
| --- | --- |
| Request | [`TriggerRetrieveParams`](./src/resources/agents/triggers.ts) |
| Response | [`TriggerRetrieveResponse`](./src/resources/agents/triggers.ts) |

```ts
const trigger = await client.agents.triggers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update an agent trigger

Update an agent trigger configuration or enabled state.

| Direction | Type |
| --- | --- |
| Request | [`TriggerUpdateParams`](./src/resources/agents/triggers.ts) |
| Response | [`TriggerUpdateResponse`](./src/resources/agents/triggers.ts) |

```ts
const trigger = await client.agents.triggers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  name: 'x',
});
```

#### Delete an agent trigger

Delete an integration event trigger for an agent.

| Direction | Type |
| --- | --- |
| Request | [`TriggerDeleteParams`](./src/resources/agents/triggers.ts) |
| Response | [`TriggerDeleteResponse`](./src/resources/agents/triggers.ts) |

```ts
const trigger = await client.agents.triggers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Agents Runs`

#### List agent runs

List executions of an agent, including status, linked session, measured duration, and failure summary.

| Direction | Type |
| --- | --- |
| Request | [`RunListParams`](./src/resources/agents/runs.ts) |
| Response | [`RunListResponse`](./src/resources/agents/runs.ts) |

```ts
const run = await client.agents.runs.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: '50',
});
```

#### Create an agent run

Queue an agent run with optional event input. The response confirms queuing, not completed execution.

| Direction | Type |
| --- | --- |
| Response | [`RunCreateResponse`](./src/resources/agents/runs.ts) |

```ts
const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Retrieve an agent run

Retrieve the status, linked session, measured duration, and failure summary of an agent run.

| Direction | Type |
| --- | --- |
| Request | [`RunRetrieveParams`](./src/resources/agents/runs.ts) |
| Response | [`RunRetrieveResponse`](./src/resources/agents/runs.ts) |

```ts
const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agentId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

## `Repositories`

### List repositories

List enabled repositories in the authenticated organization.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryListParams`](./src/resources/repositories.ts) |
| Response | [`RepositoryListResponse`](./src/resources/repositories.ts) |

```ts
const repository = await client.repositories.list({
  limit: 50,
  order: 'desc',
  sort: 'pullRequests',
});
```

### Retrieve a repository

Retrieve an enabled repository in the authenticated organization.

| Direction | Type |
| --- | --- |
| Response | [`RepositoryRetrieveResponse`](./src/resources/repositories.ts) |

```ts
const repository = await client.repositories.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Integrations`

### List integrations

List integrations for the authenticated organization.

| Direction | Type |
| --- | --- |
| Request | [`IntegrationListParams`](./src/resources/integrations.ts) |
| Response | [`IntegrationListResponse`](./src/resources/integrations.ts) |

```ts
const integration = await client.integrations.list({
  limit: '50',
  includeTotal: 'false',
});
```

### Retrieve an integration

Retrieve an integration for the authenticated organization.

| Direction | Type |
| --- | --- |
| Response | [`IntegrationRetrieveResponse`](./src/resources/integrations.ts) |

```ts
const integration = await client.integrations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Billing`

### Retrieve billing

Retrieve billing and credit information for the organization.

| Direction | Type |
| --- | --- |
| Response | [`BillingRetrieveResponse`](./src/resources/billing.ts) |

```ts
const billing = await client.billing.retrieve();
```

### List billing usage

List session usage with cursor pagination.

| Direction | Type |
| --- | --- |
| Request | [`BillingListUsageParams`](./src/resources/billing.ts) |
| Response | [`BillingListUsageResponse`](./src/resources/billing.ts) |

```ts
const billing = await client.billing.listUsage({
  limit: '50',
});
```
