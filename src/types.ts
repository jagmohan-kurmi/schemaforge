export type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[];

export interface JsonLdObject {
  '@context'?: string;
  '@type'?: string;
  [key: string]: JsonLdValue | undefined;
}

export interface SchemaValidationResult {
  valid: boolean;
  errors: string[];
}

export interface PersonSchemaInput {
  name: string;
  url?: string;
  sameAs?: string[];
  image?: string;
}

export interface ProductSchemaInput {
  name: string;
  description?: string;
  sku?: string;
  brand?: string;
  price?: number;
  currency?: string;
}

export interface ArticleSchemaInput {
  headline: string;
  author?: string;
  datePublished?: string;
  description?: string;
  image?: string;
}
