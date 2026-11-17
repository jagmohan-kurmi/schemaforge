# SchemaForge

SchemaForge generates schema.org JSON-LD blocks for common content types and validates required properties before output.

## Features
- Person, Organization, LocalBusiness, Product, Article and WebPage support
- JSON-LD export helpers
- Validation of required schema fields
- Framework-friendly output format

## Installation

```bash
npm install @jagmohan-kurmi/schemaforge
```

## Quick start

```js
const { buildPersonSchema, toJsonLd } = require('@jagmohan-kurmi/schemaforge');
const jsonLd = toJsonLd(buildPersonSchema({ name: 'Jane Doe' }));
console.log(jsonLd);
```
