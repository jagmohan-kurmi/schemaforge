import type { ArticleSchemaInput, JsonLdObject, PersonSchemaInput, ProductSchemaInput, SchemaValidationResult } from './types';

export function toJsonLd(value: JsonLdObject): string {
  return JSON.stringify(value, null, 2);
}

export function validateSchema(schema: JsonLdObject): SchemaValidationResult {
  const errors: string[] = [];
  if (!schema['@type']) errors.push('Schema is missing @type.');
  if (!schema['@context']) errors.push('Schema is missing @context.');
  return { valid: errors.length === 0, errors };
}

export function buildPersonSchema(input: PersonSchemaInput): JsonLdObject {
  const schema: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name
  };
  if (input.url) schema.url = input.url;
  if (input.sameAs) schema.sameAs = input.sameAs;
  if (input.image) schema.image = input.image;
  return schema;
}

export function buildProductSchema(input: ProductSchemaInput): JsonLdObject {
  const schema: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name
  };
  if (input.description) schema.description = input.description;
  if (input.sku) schema.sku = input.sku;
  if (input.brand) schema.brand = input.brand;
  if (typeof input.price === 'number') {
    schema.offers = {
      '@type': 'Offer',
      price: input.price,
      priceCurrency: input.currency ?? 'USD'
    };
  }
  return schema;
}

export function buildArticleSchema(input: ArticleSchemaInput): JsonLdObject {
  const schema: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    author: input.author ?? 'Anonymous'
  };
  if (input.datePublished) schema.datePublished = input.datePublished;
  if (input.description) schema.description = input.description;
  if (input.image) schema.image = input.image;
  return schema;
}
