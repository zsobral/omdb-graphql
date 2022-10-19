import { makeSchema } from "nexus";
import * as path from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.resolve(__dirname, "..", "generated", "nexus-typegen.ts"),
    schema: path.resolve(__dirname, "..", "generated", "schema.graphql"),
  },
  contextType: {
    module: path.resolve(__dirname, "context.ts"),
    export: "Context",
  },
});
