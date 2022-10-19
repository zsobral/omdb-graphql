import { server } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
