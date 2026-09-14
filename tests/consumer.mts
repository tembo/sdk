import Tembo from '@tembo-io/sdk';
import type { TipTapNode, TipTapContentNode } from '@tembo-io/sdk/resources/messages';

type AssertFalse<Value extends false> = Value;
type IsAny<Value> = 0 extends (1 & Value) ? true : false;
type IsUnknown<Value> = unknown extends Value ? true : false;
type NodeIsNotAny = AssertFalse<IsAny<TipTapNode>>;
type NodeIsNotUnknown = AssertFalse<IsUnknown<TipTapNode>>;
type ChildIsNotUnknown = AssertFalse<IsUnknown<NonNullable<TipTapContentNode['content']>[number]>>;
type RejectsPrimitive = AssertFalse<number extends TipTapNode ? true : false>;
type RejectsInvalidChild = AssertFalse<{ type: 'paragraph'; content: number[] } extends TipTapNode ? true : false>;

const nestedDocument: TipTapNode = {
  type: 'doc',
  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Typed children' }] }],
};

const client = new Tembo({ apiKey: 'typecheck-only' });
void client.models.list({ limit: '1' });
void client.agents.create({ instructions: { type: 'doc', content: [{ type: 'paragraph' }] } });
void client.messages.create({ sessionId: 'typecheck-only', content: 'Hello', richContent: { type: 'doc' } });
void client.agents.create({ instructions: nestedDocument });
