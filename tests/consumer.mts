import Tembo from '@tembo-io/sdk';

const client = new Tembo({ apiKey: 'typecheck-only' });
void client.models.list({ limit: '1' });
void client.agents.create({ instructions: { type: 'doc', content: [{ type: 'paragraph' }] } });
void client.messages.create({ sessionId: 'typecheck-only', content: 'Hello', richContent: { type: 'doc' } });
