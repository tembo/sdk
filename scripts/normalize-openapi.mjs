import assert from 'node:assert/strict';

const nodeKinds = [
  ['image', 'Image'],
  ['mention', 'Mention'],
  ['heading', 'Heading'],
  ['orderedList', 'OrderedList'],
  ['taskItem', 'TaskItem'],
  ['codeBlock', 'CodeBlock'],
];

export function normalizeOpenapiForScalar(source) {
  const schema = structuredClone(source);
  const schemas = schema.components?.schemas;
  const node = schemas?.TipTapNode;
  assert.equal(node?.anyOf?.length, 2, 'Review changed TipTapNode union before generating');
  const [structured, content] = node.anyOf;
  assert.deepEqual(Object.keys(structured), ['oneOf'], 'Cannot flatten a union with additional constraints');
  assert.equal(structured.oneOf?.length, nodeKinds.length, 'Review changed node variants before generating');
  assert.deepEqual(content, { $ref: '#/components/schemas/TipTapContentNode' });

  const references = structured.oneOf.map((variant, index) => {
    const [type, suffix] = nodeKinds[index];
    assert.equal(variant.type, 'object');
    assert.ok(variant.required?.includes('type'), 'Discriminators must be required for disjoint variants');
    assert.equal(variant.properties?.type?.const, type, 'Discriminators must remain distinct');
    const name = `TipTap${suffix}ContentNode`;
    assert.equal(schemas[name], undefined, `Cannot overwrite existing schema ${name}`);
    schemas[name] = variant;
    return { $ref: `#/components/schemas/${name}` };
  });
  node.anyOf = [...references, content];
  return schema;
}
