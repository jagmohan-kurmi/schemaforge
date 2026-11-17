import test from 'node:test';
import assert from 'node:assert/strict';

import { buildArticleSchema, buildPersonSchema, buildProductSchema, toJsonLd, validateSchema } from '../src/schema';

test('buildPersonSchema emits valid Person JSON-LD', () => {
  const schema = buildPersonSchema({ name: 'Jane Doe', url: 'https://example.com/jane' });
  assert.equal(schema['@type'], 'Person');
  assert.equal(schema.name, 'Jane Doe');
  assert.equal(validateSchema(schema).valid, true);
});

test('buildProductSchema includes Offer details', () => {
  const schema = buildProductSchema({ name: 'Notebook', description: 'A useful notebook', price: 15.5, currency: 'USD' });
  assert.equal(schema['@type'], 'Product');
  assert.ok((schema.offers as any).price === 15.5);
});

test('toJsonLd returns valid JSON output', () => {
  const article = buildArticleSchema({ headline: 'AI SEO for teams', author: 'Jane' });
  const output = toJsonLd(article);
  assert.ok(output.includes('"@type": "Article"'));
  assert.ok(output.includes('"headline": "AI SEO for teams"'));
});
