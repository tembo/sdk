import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { normalizeOpenapiForScalar } from '../scripts/normalize-openapi.mjs';

const source = JSON.parse(readFileSync(new URL('../openapi/openapi.json', import.meta.url)));
const config = JSON.parse(readFileSync(new URL('../scalar.config.json', import.meta.url)));

test('normalization preserves the contract, hoisting only disjoint recursive variants', () => {
  const original = structuredClone(source);
  const normalized = normalizeOpenapiForScalar(source);
  assert.deepEqual(source, original);
  const references = normalized.components.schemas.TipTapNode.anyOf.slice(0, -1);
  const restored = structuredClone(normalized);
  const variants = references.map(reference => {
    const name = reference.$ref.split('/').at(-1);
    const variant = restored.components.schemas[name];
    delete restored.components.schemas[name];
    return variant;
  });
  assert.deepEqual(variants, source.components.schemas.TipTapNode.anyOf[0].oneOf);
  restored.components.schemas.TipTapNode.anyOf = [
    { oneOf: variants },
    normalized.components.schemas.TipTapNode.anyOf.at(-1),
  ];
  assert.deepEqual(restored, source);
});

test('all configured models resolve against the prepared schema', () => {
  const schema = normalizeOpenapiForScalar(source);
  function check(resources) {
    for (const resource of Object.values(resources)) {
      for (const reference of Object.values(resource.models ?? {})) {
        const model = reference.slice(2).split('/').reduce((value, key) => value?.[key], schema);
        assert.ok(model, `Missing configured model ${reference}`);
      }
      check(resource.subresources ?? {});
    }
  }
  check(config.resources);
});

test('normalization refuses overlapping variants or additional union constraints', () => {
  for (const mutate of [
    schema => { schema.components.schemas.TipTapNode.anyOf[0].oneOf[0].required = []; },
    schema => { schema.components.schemas.TipTapNode.anyOf[0].oneOf[0].properties.type.const = 'mention'; },
    schema => { schema.components.schemas.TipTapNode.anyOf[0].not = {}; },
    schema => { schema.components.schemas.TipTapImageContentNode = {}; },
  ]) {
    const schema = structuredClone(source);
    mutate(schema);
    assert.throws(() => normalizeOpenapiForScalar(schema));
  }
});
