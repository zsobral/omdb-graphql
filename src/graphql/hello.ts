import { extendType } from "nexus";

export const HelloQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.string("hello", { resolve: () => "Hello" });
  },
});
