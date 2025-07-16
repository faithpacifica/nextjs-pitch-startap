import { type SchemaTypeDefinition } from "sanity";

import { author } from "../lib/schemaTypes/author";
import { startup } from "./startup";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};