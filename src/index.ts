import { server } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = process.env.PORT || 8080;

startStandaloneServer(server, {
  listen: {
    port: Number(port),
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
