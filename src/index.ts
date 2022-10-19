import { server } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Context } from "./context";

startStandaloneServer(server, {
  listen: { port: 8080 },
  context: async ({ req }) => new Context({ req }),
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
