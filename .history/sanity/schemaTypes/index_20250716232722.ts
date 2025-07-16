import { type SchemaTypeDefinition } from "sanity";

import { author } from "../lib/schemaTypes/author";
import { startup } from "../lib/schemaTypes
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};