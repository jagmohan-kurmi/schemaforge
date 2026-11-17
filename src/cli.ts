#!/usr/bin/env node

import { buildArticleSchema, buildPersonSchema, buildProductSchema, toJsonLd, validateSchema } from './schema';

function printUsage(): void {
  console.log('SchemaForge CLI\n\nUsage: schemaforge person|product|article --name "Example"');
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) { printUsage(); process.exit(0); }

const type = args[0];
try {
  let schema;
  if (type === 'person') schema = buildPersonSchema({ name: args[args.indexOf('--name') + 1] ?? 'Example Person' });
  else if (type === 'product') schema = buildProductSchema({ name: args[args.indexOf('--name') + 1] ?? 'Example Product', price: 39.99, currency: 'USD' });
  else if (type === 'article') schema = buildArticleSchema({ headline: args[args.indexOf('--name') + 1] ?? 'Example Article' });
  else throw new Error('Unsupported schema type');
  const validation = validateSchema(schema);
  console.log(JSON.stringify({ schema, validation }, null, 2));
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';
  console.error(`SchemaForge error: ${message}`);
  process.exit(1);
}
