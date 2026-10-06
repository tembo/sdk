# Changelog

## [0.9.0](https://github.com/tembo/sdk/compare/v0.8.0...v0.9.0) (2026-10-06)


### ⚠ BREAKING CHANGES

* **api:** 24 breaking changes to the SDK surface.
    - Serialization or defaults of query param `limit` on `apiKeys.list` changed.
    - Serialization or defaults of query param `limit` on `skills.list` changed.
    - Serialization or defaults of query param `limit` on `insights.listMembers` changed.
    - Serialization or defaults of query param `limit` on `insights.listRepositories` changed.
    - Removed body field `repositoryDetectionHint` from `organizations.settings.update`.
    - Serialization or defaults of query param `limit` on `mcpConnections.list` changed.
    - Serialization or defaults of query param `limit` on `artifacts.list` changed.
    - Serialization or defaults of query param `limit` on `messages.list` changed.
    - Serialization or defaults of query param `limit` on `models.list` changed.
    - Serialization or defaults of query param `limit` on `runtimes.list` changed.
    - Serialization or defaults of query param `limit` on `users.connectedAccounts.list` changed.
    - Removed body field `autoDetectRepositories` from `sessions.create`.
    - Serialization or defaults of query param `limit` on `pullRequests.list` changed.
    - Serialization or defaults of query param `limit` on `agents.list` changed.
    - Removed body field `autoDetectRepositories` from `agents.create`.
    - Removed body field `autoDetectRepositories` from `agents.update`.
    - Serialization or defaults of query param `limit` on `agents.templates.list` changed.
    - Serialization or defaults of query param `limit` on `agents.schedules.list` changed.
    - Serialization or defaults of query param `limit` on `agents.triggers.list` changed.
    - Serialization or defaults of query param `limit` on `agents.runs.list` changed.
    - Serialization or defaults of query param `limit` on `integrations.list` changed.
    - Serialization or defaults of query param `includeTotal` on `integrations.list` changed.
    - Serialization or defaults of query param `limit` on `billing.listUsage` changed.
    - Schema `trigger_filters` shape changed.

### Features

* **api:** update query param limit on apiKeys.list (+26 more changes) ([6c308dd](https://github.com/tembo/sdk/commit/6c308dd35e3f6e4f0c3adf52f3dc2527a2b31f6c))
* **api:** update SDK surface (12 changes) ([730f0fe](https://github.com/tembo/sdk/commit/730f0fe97d089799c9f65cc5569dd8ccd4db0eac))


### Bug Fixes

* **sdk:** apply reviewed mappings during manual recovery ([4ffa383](https://github.com/tembo/sdk/commit/4ffa3837c1400550f75cc8772b88dbbeb41f9040))
* **sdk:** keep schema generation fixtures in sync ([ba61596](https://github.com/tembo/sdk/commit/ba61596c2bb787e3e8c31714e160263d75b7c520))
* **sdk:** map subscription APIs ([618cdb8](https://github.com/tembo/sdk/commit/618cdb8ac71b533526003750026e5c51b8d0355f))
* **sdk:** map user and organization subscription APIs ([8b0397b](https://github.com/tembo/sdk/commit/8b0397b0a26bf227c94dc4fac33db33b4fd3fb69))


### Chores

* **api:** sync production OpenAPI snapshot ([d330748](https://github.com/tembo/sdk/commit/d330748179d59498b53413f9f31b0fa37c764636))

## [0.8.0](https://github.com/tembo/sdk/compare/v0.7.0...v0.8.0) (2026-10-05)


### Features

* **api:** update SDK surface (2 changes) ([5bf614f](https://github.com/tembo/sdk/commit/5bf614f24a7383c194a6f3a43e1aebd1a903a503))


### Chores

* **api:** sync production OpenAPI snapshot ([506801c](https://github.com/tembo/sdk/commit/506801ccdb7da81c84732752257917533ee9241c))

## [0.7.0](https://github.com/tembo/sdk/compare/v0.6.0...v0.7.0) (2026-10-02)


### ⚠ BREAKING CHANGES

* **api:** 2 breaking changes to the SDK surface.
    - Schema `agent_options_input` shape changed.
    - Property `agent_options.speed` type changed from `enum(normal | fast)` to `enum(normal | fast | ultrafast)`.

### Features

* **api:** add operation runtimes.list ([d773116](https://github.com/tembo/sdk/commit/d77311632e2dd8ed18492434a31bea49b090091b))
* **api:** update schema agent_options_input (+5 more changes) ([9d60a0a](https://github.com/tembo/sdk/commit/9d60a0a50bdb53508b4c4eacfa54a7c84636cff3))


### Bug Fixes

* **ci:** avoid duplicate SDK branch checks ([0163580](https://github.com/tembo/sdk/commit/01635806c23ead586be651137320b3d9be6fa975))
* **ci:** validate pending SDK mappings safely ([7e6a69d](https://github.com/tembo/sdk/commit/7e6a69dd6974207032b82167a6151aa24bf1a203))
* **sdk:** map runtimes API resource ([6f452f7](https://github.com/tembo/sdk/commit/6f452f7330e18aecb093b3655a4077da84d998bc))
* **sdk:** map runtimes API resource ([d22a415](https://github.com/tembo/sdk/commit/d22a415723d5f89d024bbf3d836d7958bf5d08b2))


### Chores

* **api:** sync production OpenAPI snapshot ([a355bb5](https://github.com/tembo/sdk/commit/a355bb549502fdf1db555778caa41f7d023baf97))

## [0.6.0](https://github.com/tembo/sdk/compare/v0.5.0...v0.6.0) (2026-10-01)


### ⚠ BREAKING CHANGES

* **api:** 3 breaking changes to the SDK surface.
    - Removed body field `onboarding` from `organizations.update`.
    - Removed body field `onboardingCompleted` from `organizations.update`.
    - Removed operation `users.update` (`PATCH /v1/users/{userId}`).

### Features

* **api:** add operation users.me (+3 more changes) ([5eae66e](https://github.com/tembo/sdk/commit/5eae66e7a814b57173e35a7f558fcf444b9bac5b))
* **api:** update SDK surface (4 changes) ([ff861e1](https://github.com/tembo/sdk/commit/ff861e1a7c8b729fe05588793e76d77b5bd3c9e1))
* **sdk:** automate OpenAPI resource mapping updates ([89dde7b](https://github.com/tembo/sdk/commit/89dde7b39a4b7c46ffa71850c2cd550b03b20bca))


### Bug Fixes

* **sdk:** align public user and session resource mappings ([861e406](https://github.com/tembo/sdk/commit/861e40682b60776764f423ea3e1f473206abeafb))
* **sdk:** guard resource names and support named model refs ([68f1ce3](https://github.com/tembo/sdk/commit/68f1ce36ccba715cfb37e49e3b2538356c47c79f))
* **sdk:** keep OpenAPI synchronization self-contained ([647df69](https://github.com/tembo/sdk/commit/647df69463b4b4e53f2a2cd53bb0c4a5fd8fad0d))


### Reverts

* **sdk:** remove automatic OpenAPI mapping sync ([e4da8f2](https://github.com/tembo/sdk/commit/e4da8f26232ccab45e64fde351e2fbd2f055be97))


### Chores

* **api:** sync production OpenAPI snapshot ([b7f1db7](https://github.com/tembo/sdk/commit/b7f1db73e1f2299d4001cbb67e85cfff665120e8))

## [0.5.0](https://github.com/tembo/sdk/compare/v0.4.3...v0.5.0) (2026-09-28)


### ⚠ BREAKING CHANGES

* **api:** 4 breaking changes to the SDK surface.
    - Removed body field `freePrPeriod` from `organizations.settings.update`.
    - Removed operation `sessions.files.list` (`GET /v1/sessions/{sessionId}/files`).
    - Removed operation `sessions.files.retrieve` (`GET /v1/sessions/{sessionId}/files/{fileId}`).
    - Schema `trigger_filters` shape changed.

### Features

* **api:** update SDK surface (8 changes) ([b37d083](https://github.com/tembo/sdk/commit/b37d083104238cd69795630a1ef5754ed6e623d8))


### Bug Fixes

* **sdk:** remove stale session file mappings ([a3e6ba4](https://github.com/tembo/sdk/commit/a3e6ba4aaaeb72125aaac1139220812d31f025b1))


### Chores

* **api:** sync production OpenAPI snapshot ([8232eff](https://github.com/tembo/sdk/commit/8232effea817a574319a9aaf3b706361b2066ec1))

## [0.4.3](https://github.com/tembo/sdk/compare/v0.4.2...v0.4.3) (2026-09-20)


### Chores

* **api:** sync production OpenAPI snapshot ([2035971](https://github.com/tembo/sdk/commit/2035971dad00043c607d2091ef4f85ea0555146f))
* **api:** update generated SDK content ([226b0a1](https://github.com/tembo/sdk/commit/226b0a1cab92f09d9419da318bccf94e770051b4))

## [0.4.2](https://github.com/tembo/sdk/compare/v0.4.1...v0.4.2) (2026-09-16)


### Chores

* **api:** regenerate SDK ([55a51f4](https://github.com/tembo/sdk/commit/55a51f48224c466de10bd235a64bcd41db03e21e))
* **api:** sync production OpenAPI snapshot ([cfd1e6e](https://github.com/tembo/sdk/commit/cfd1e6ed23bfc7c86a0d32b05b9b653783ca1527))

## [0.4.1](https://github.com/tembo/sdk/compare/v0.4.0...v0.4.1) (2026-09-15)


### Bug Fixes

* **ci:** notify docs with the exact released SDK version ([6b852c3](https://github.com/tembo/sdk/commit/6b852c339615f48ad2fcd4bf68a6cbad8b7de59b))
* **ci:** notify docs with the exact released SDK version ([edcd2e8](https://github.com/tembo/sdk/commit/edcd2e8b41659e15b9ad7c30ff3c52ce699d00d2))

## [0.4.0](https://github.com/tembo/sdk/compare/v0.3.1...v0.4.0) (2026-09-15)


### ⚠ BREAKING CHANGES

* **api:** Schema `trigger_filters` shape changed.

### Features

* **api:** update schema trigger_filters (+3 more changes) ([45adef7](https://github.com/tembo/sdk/commit/45adef7cddb05f36177e4968a8b0b74fe2f489f7))


### Chores

* **api:** sync production OpenAPI snapshot ([bf8cdbb](https://github.com/tembo/sdk/commit/bf8cdbb815afe64ff53607d5d804bdcf700eb85b))
* **api:** sync production OpenAPI snapshot ([6701a02](https://github.com/tembo/sdk/commit/6701a0272a892dfa676363e0615beb40eaa680ff))
* release 0.3.2 ([a35ba72](https://github.com/tembo/sdk/commit/a35ba7287b532854184ba60b64f6d53b59945dbc))
* release 0.4.0 ([e8f4490](https://github.com/tembo/sdk/commit/e8f44900a4b86e54fba06f6a2f515774c1be9782))

## [0.3.1](https://github.com/tembo/sdk/compare/v0.3.0...v0.3.1) (2026-09-14)


### Bug Fixes

* **ci:** update docs when SDK publication succeeds ([f611707](https://github.com/tembo/sdk/commit/f611707f8e837b710f57dc3344638f3876064ad4))


### Documentation

* remove credential setup from contributor guide ([2577b63](https://github.com/tembo/sdk/commit/2577b63355613d8cb41d284b7fb52312a1c19f6e))
* trim SDK automation setup notes ([33a8896](https://github.com/tembo/sdk/commit/33a889685d25ff3d25770dc8c1a99789819ea579))

## [0.3.0](https://github.com/tembo/sdk/compare/v0.2.3...v0.3.0) (2026-09-14)


### ⚠ BREAKING CHANGES

* **api:** Removed environment `development`.

### Features

* **api:** initial SDK generation ([f284491](https://github.com/tembo/sdk/commit/f284491b14fefc28b7457c9152109381edb7b3db))
* **api:** remove environment development (+1 more change) ([504cabb](https://github.com/tembo/sdk/commit/504cabb11ea2cbb7bc23832b8958d437cd9e6ef1))
* **sdk:** enable Scalar npm trusted publishing ([1dd2b96](https://github.com/tembo/sdk/commit/1dd2b9678449a906f0842887dda5ed4243508e07))
* **sdk:** prepare Scalar TypeScript migration ([271db4c](https://github.com/tembo/sdk/commit/271db4cbb71c2892da85b0b8a7027502e4cfe5b3))


### Bug Fixes

* **sdk:** generate and validate against production API ([b36c41f](https://github.com/tembo/sdk/commit/b36c41f5c0787e4da2a34202e5c8d763af7396a8))
* **sdk:** preserve recursive rich-content types in Scalar output ([f879990](https://github.com/tembo/sdk/commit/f879990172a1ffa3b2b60997d515ca377a79bbe5))
* **sdk:** use production in example environment ([f6f968f](https://github.com/tembo/sdk/commit/f6f968f87a260da1d68beccd8b56a1ae9dc56aed))


### Chores

* **api:** update generated SDK content ([6cd2d80](https://github.com/tembo/sdk/commit/6cd2d800d0a502409f5ff89925db76cb86bd8532))
* **api:** update generated SDK content ([0858bf8](https://github.com/tembo/sdk/commit/0858bf89eebb8e2bdf9ec308c21df54683f7ca0e))


### Documentation

* **sdk:** clarify release guidance and preserve license notices ([7a255ec](https://github.com/tembo/sdk/commit/7a255ec47cc850487caa4b05ccfbfabd9ff96b7c))
* **sdk:** preserve Scalar-generated documentation ([791d4fc](https://github.com/tembo/sdk/commit/791d4fccc8cad8a1cb83def292a83b8b2f50b095))
* **sdk:** reference renamed Scalar project ([1840150](https://github.com/tembo/sdk/commit/1840150e4aea902c0d8d832afee5966879f90c1e))
* **sdk:** use a single release PR for review ([999f4b1](https://github.com/tembo/sdk/commit/999f4b1206f8dcc23be4aad898c63a17bd6b78a0))

## 0.2.3 (2026-01-31)

Full Changelog: [v0.2.2...v0.2.3](https://github.com/tembo/sdk/compare/v0.2.2...v0.2.3)

### Chores

* **ci:** upgrade `actions/github-script` ([13e506f](https://github.com/tembo/sdk/commit/13e506f361ee9d4547892b16f9bea810a3515256))
* **internal:** update `actions/checkout` version ([a2ec104](https://github.com/tembo/sdk/commit/a2ec10474da63e9326637b7d3dec132727e558f5))

## 0.2.2 (2026-01-06)

Full Changelog: [v0.2.1...v0.2.2](https://github.com/tembo/sdk/compare/v0.2.1...v0.2.2)

### Features

* **api:** api update ([16d3b82](https://github.com/tembo/sdk/commit/16d3b82e7a429e5e3f7c2b824b0e736423acaf61))

## 0.2.1 (2026-01-05)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/tembo/sdk/compare/v0.2.0...v0.2.1)

### Features

* **api:** api update ([9bd85d3](https://github.com/tembo/sdk/commit/9bd85d32c9fd19f4db12a0ef39f54b55f5703ff4))

## 0.2.0 (2026-01-01)

Full Changelog: [v0.1.3...v0.2.0](https://github.com/tembo/sdk/compare/v0.1.3...v0.2.0)

### Features

* **api:** api update ([2ca3426](https://github.com/tembo/sdk/commit/2ca342681e1f61221fc11ead1e2831240736e6ad))

## 0.1.3 (2025-11-27)

Full Changelog: [v0.1.2...v0.1.3](https://github.com/tembo/sdk/compare/v0.1.2...v0.1.3)

### Chores

* add docs link ([f811f18](https://github.com/tembo/sdk/commit/f811f18f73e825ec24a323285b1157814475c39a))

## 0.1.2 (2025-10-07)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/tembo/sdk/compare/v0.1.1...v0.1.2)

### Chores

* **internal:** use npm pack for build uploads ([665eede](https://github.com/tembo/sdk/commit/665eede92119fa20db6fce5afc88d15a17371607))

## 0.1.1 (2025-10-05)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/tembo/sdk/compare/v0.1.0...v0.1.1)

### Features

* **api:** manual updates ([786b325](https://github.com/tembo/sdk/commit/786b3252ea1c60e06a842684c5077c55fb23e0fe))

## 0.1.0 (2025-10-05)

Full Changelog: [v0.0.8...v0.1.0](https://github.com/tembo/sdk/compare/v0.0.8...v0.1.0)

### Features

* **api:** api update ([67ab02f](https://github.com/tembo/sdk/commit/67ab02fd70abe506b6499b5be8cb9f1dc2fe8b6a))

## 0.0.8 (2025-10-05)

Full Changelog: [v0.0.7...v0.0.8](https://github.com/tembo/sdk/compare/v0.0.7...v0.0.8)

### Features

* **api:** manual updates ([eb121ad](https://github.com/tembo/sdk/commit/eb121ad9be2998611b75b3d52c77772fee9035b5))

## 0.0.7 (2025-10-05)

Full Changelog: [v0.0.6...v0.0.7](https://github.com/tembo/sdk/compare/v0.0.6...v0.0.7)

### Features

* **api:** api update ([c7ecab4](https://github.com/tembo/sdk/commit/c7ecab4641c84e1c55f428de26fbd8e14ce14c7d))
* **api:** manual updates ([ec7a586](https://github.com/tembo/sdk/commit/ec7a586a13b4f902a22b34a3fcbfabe0f8f1608c))


### Chores

* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([5344e57](https://github.com/tembo/sdk/commit/5344e5744836d1b21139bc2d8a2fd910428c38e6))

## 0.0.6 (2025-10-03)

Full Changelog: [v0.0.5...v0.0.6](https://github.com/tembo/sdk/compare/v0.0.5...v0.0.6)

### Features

* **api:** api update ([fa315b3](https://github.com/tembo/sdk/commit/fa315b373d3a90a0de18155fbd34736399fa1799))

## 0.0.5 (2025-10-01)

Full Changelog: [v0.0.4...v0.0.5](https://github.com/tembo/sdk/compare/v0.0.4...v0.0.5)

### Features

* **api:** manual updates ([bbfa5df](https://github.com/tembo/sdk/commit/bbfa5dfdbee0db3724ccc6083778a163bcbe4056))

## 0.0.4 (2025-09-30)

Full Changelog: [v0.0.3...v0.0.4](https://github.com/tembo/sdk/compare/v0.0.3...v0.0.4)

### Chores

* update SDK settings ([c558dd7](https://github.com/tembo/sdk/commit/c558dd7e3afc6411dc0a0feb8e07fab13863f51c))

## 0.0.3 (2025-09-30)

Full Changelog: [v0.0.2...v0.0.3](https://github.com/tembo/sdk/compare/v0.0.2...v0.0.3)

### Chores

* update SDK settings ([fe61ca5](https://github.com/tembo/sdk/commit/fe61ca5acc022810ed83f4050c36b65f6d1d334e))

## 0.0.2 (2025-09-30)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/tembo/sdk/compare/v0.0.1...v0.0.2)

### Chores

* sync repo ([c753fc3](https://github.com/tembo/sdk/commit/c753fc351a61b38361030eb089c932da8e49126d))
* update SDK settings ([9d9eaef](https://github.com/tembo/sdk/commit/9d9eaef2160c9636d5c2830697bf4064127fb09b))
* update SDK settings ([1161aa0](https://github.com/tembo/sdk/commit/1161aa0a796625716b3df1737e01f267e429c31c))
* update SDK settings ([c9bfac4](https://github.com/tembo/sdk/commit/c9bfac477594e7c0f684379a4abecb49be6e2850))
