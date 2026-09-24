# Session files and computer APIs

These additive methods require the reviewed session-files backend deployment. `0.4.4-session.1` is a local prerelease, not an npm publication. Tembo Bot keeps one Bot per Session and waits for OpenAPI `x-tembo-session-files-ready: true` before using memory/routines.

```ts
import Tembo from '@tembo-io/sdk';
import { randomUUID } from 'node:crypto';
const client = new Tembo({ apiKey: process.env.TEMBO_API_KEY });
const session = await client.sessions.create({
  description: 'Start a research notebook.', // Initial user message only.
  memoryEnabled: true,
  visibility: 'private', autoDetectRepositories: false,
  codeRepositoryIds: [], sandboxSize: 'medium',
});
const input = {
  id: randomUUID(), requestId: randomUUID(), expectedRevision: 0,
  name: 'Morning briefing', prompt: 'Update the notebook using this session’s files.',
  cron: '0 9 * * 1-5', timezone: 'America/New_York', enabled: true,
  reporting: 'useful' as const,
};
const routine = await client.sessions.automations.create(session.id, input, { maxRetries: 0 });
// Retain input unchanged on an uncertain save; a new edit needs a new requestId and the current revision.
await client.sessions.automations.update(session.id, routine.id, {
  ...input, requestId: randomUUID(), expectedRevision: routine.revision, enabled: false,
});
const computer = await client.sessions.computer.reconnect(session.id);
// Treat viewerUrl as an authorized capability; do not log or share it.
```

Automations expose `list`, `create`, `retrieve`, `update`, `delete`, and `run`. Update replaces the full definition. Delete takes `{ requestId, expectedRevision }`; run takes `{ requestId }`. Run-now requires an enabled routine and reuses its request ID after uncertain delivery. Each returned definition includes revision, synchronization status, next/last execution timestamps, and last execution status. HTTP 409 distinguishes revision conflicts or pending recovery/synchronization; reload on `REVISION_CONFLICT`, otherwise retry the original operation. HTTP 422 means invalid or unrecoverable files.

The session computer stores memory/profile.md, memory/log/YYYY-MM.md, and automations/<routineId>/automation.toml under `/workspace/.tembo/sessions/<sessionId>/`. Saved prompts are read from files at dispatch; the server retains only wake-up metadata. Session `memoryEnabled` defaults off for existing clients. Local profile descriptions are not session prompts. There is no session `instructions` field or session `/schedules` API. Existing Tembo Agent APIs are unchanged.

Computer exposes `retrieve`, `start` (including resume), and `reconnect`. Missing initialized files or recoverable snapshots produce errors rather than silently resetting the workspace.

`sessions.streamEvents(sessionId, options)` returns a `Promise<Response>` with an SSE body. Pass an AbortSignal and `headers: { 'Last-Event-ID': '123' }`. Preserve activity event IDs; reconcile authoritative messages and session state after reconnect and session frames. Quiet wake activity is redacted to `routine.activity`, while useful reports are normal assistant records. Reconnect after EOF. The SDK timeout covers receiving headers; zero means immediate timeout.

`messages.create` accepts an optional client UUID `id`. Retry the same ID with identical session/content to reconcile uncertain delivery. Changed content conflicts. Omission preserves existing behavior. Manual follow-ups can use `deliveryMode: 'steer'`; internal routine wakes use the session queue. Message list items expose optional `isQueued` for older deployments.

## Regenerate

1. From the backend root, run `bun apps/api/scripts/exportSessionApi.ts ../bot-sdk/openapi/session-extensions.json`.
2. Run `npm run generate:sessions` and `npm test` here. The deterministic generator updates session/message contracts, child resources, SSE, merged OpenAPI, Scalar config, and operation manifest from actual Hono routes.
3. Build/pack using the existing SDK scripts. The base SDK remains Scalar-generated. Deploy platform dependencies before enabling app integration.

## Desktop demonstrations

The generated `sessions.computer.recordings` resource provides `list(sessionId)`, `start(sessionId, { id })`, and `stop(sessionId, recordingId)`. Keep the Start UUID for retries. Stop finalizes the recording in the VM and queues one learning turn in the same Session; poll the list when it returns `processing`.

The Mac app owns the toolbar and viewer. The guest owns ffmpeg, the finalized capture and the managed learning skill. Deploy the recording API, manager, scheduler, worker and guest image before enabling `TEMBO_SESSION_TEACHING_ENABLED`, advertised as `x-tembo-session-teaching-ready` in OpenAPI.

## Shared user memory

`client.userMemory.retrieve()`, `.update({ expectedRevision, requestId, profile?, enabled? })`, and `.clear({ expectedRevision, requestId })` manage the connected user's shared profile in the current organization. Setting `enabled: false` blocks Bot reads and writes while retaining the profile; clear removes its facts without re-enabling it. Use a UUID request ID for safe retries and reload/reapply the intended change after a 409 revision conflict.

`client.sessions.userMemory.retrieve(sessionId)` and `.update(sessionId, { profile, expectedRevision, requestId })` provide session-scoped access. Only the owner of a private, memory-enabled personal Chat session (or its current runtime credential) can use these endpoints. Runtime callers cannot re-enable sharing. The shared profile is limited to 6 KiB of UTF-8; bot-specific memory and logs remain in the session's workspace.

Deploy the database migration, API, workers, and guest runtime before enabling `TEMBO_SHARED_MEMORY_ENABLED=true` on API and workers. OpenAPI advertises `x-tembo-shared-memory-ready`. Version `0.4.4-session.2` is a local prerelease vendored by Tembo Bot; it is not published to npm.
