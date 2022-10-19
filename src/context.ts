import { IncomingMessage } from "http";

export class Context {
  public omdbApiKey: string;

  constructor({ req }: { req: IncomingMessage }) {
    const omdbApiKey = req.headers["omdb-api-key"];

    if (typeof omdbApiKey !== "string") {
      throw new Error("invalid omdb api key");
    }

    this.omdbApiKey = omdbApiKey;
  }
}
