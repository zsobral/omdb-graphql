import {
  arg,
  inputObjectType,
  list,
  nonNull,
  objectType,
  queryField,
} from "nexus";
import { search } from "../data-sources/omdb-data-source";

export const Movie = objectType({
  name: "Movie",
  definition: (t) => {
    t.nonNull.string("imdbId");
    t.nonNull.string("title");
    t.nonNull.string("year");
    t.nonNull.string("posterUrl");
  },
});

export const MoviesInput = inputObjectType({
  name: "MoviesInput",
  definition: (t) => {
    t.nonNull.string("movieTitle");
  },
});

export const movies = queryField("movies", {
  type: list(nonNull("Movie")),
  args: {
    input: nonNull(arg({ type: "MoviesInput" })),
  },
  resolve: async (source, args, context) => {
    const omdbMovies = await search({
      apiKey: context.omdbApiKey,
      movieTitle: args.input.movieTitle,
    });

    return omdbMovies.Search.map((movie) => ({
      imdbId: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      posterUrl: movie.Poster,
    }));
  },
});
