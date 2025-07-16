import { type SchemaTypeDefinition } from "sanity";

import { author } from "../lib/schemaTypes/author";
import { startup } from "../schemaTypes/
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};