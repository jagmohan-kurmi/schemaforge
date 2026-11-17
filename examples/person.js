const { buildPersonSchema, toJsonLd } = require('../dist/src');

const person = buildPersonSchema({ name: 'Jane Doe', sameAs: ['https://example.com/jane'] });
console.log(toJsonLd(person));
