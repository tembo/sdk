import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { normalizeOpenapiForScalar } from '../scripts/normalize-openapi.mjs';

const source = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const config = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));

test('normalization preserves the contract, flattening only the disjoint recursive variant union', () => {
  const original = structuredClone(source);
  const normalized = normalizeOpenapiForScalar(source);
  assert.deepEqual(source, original);
  const references = normalized.components.schemas.TipTapNode.anyOf.slice(0, -1);
  assert.deepEqual(references, source.components.schemas.TipTapNode.anyOf[0].oneOf);
  const restored = structuredClone(normalized);
  restored.components.schemas.TipTapNode.anyOf = [
    { oneOf: references },
    normalized.components.schemas.TipTapNode.anyOf.at(-1),
  ];
  assert.deepEqual(restored, source);
});

test('all configured models resolve against the prepared schema', () => {
  const schema = normalizeOpenapiForScalar(source);
  function check(resources) {
    for (const resource of Object.values(resources)) {
      for (const reference of Object.values(resource.models ?? {})) {
        const model = reference
          .slice(2)
          .split('/')
          .reduce((value, key) => value?.[key], schema);
        assert.ok(model, `Missing configured model ${reference}`);
      }
      check(resource.subresources ?? {});
    }
  }
  check(config.resources);
});

test('normalization refuses overlapping variants or additional union constraints', () => {
  for (const mutate of [
    (schema) => {
      schema.components.schemas.TipTapImageNode.required = [];
    },
    (schema) => {
      schema.components.schemas.TipTapImageNode.properties.type.const = 'mention';
    },
    (schema) => {
      schema.components.schemas.TipTapNode.anyOf[0].not = {};
    },
    (schema) => {
      schema.components.schemas.TipTapNode.anyOf[0].oneOf[0] = schema.components.schemas.TipTapImageNode;
    },
    (schema) => {
      schema.components.schemas.TipTapNode.anyOf[0].oneOf.reverse();
    },
  ]) {
    const schema = structuredClone(source);
    mutate(schema);
    assert.throws(() => normalizeOpenapiForScalar(schema));
  }
});
