import axios from "axios";

interface OmdbMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface OmdbSearchResponse {
  Search: OmdbMovie[];
  totalResults: string;
  Response: string;
}

interface OmdbSearchInput {
  movieTitle: string;
  apiKey: string;
}

const url = "https://www.omdbapi.com/";

async function search(input: OmdbSearchInput): Promise<OmdbSearchResponse> {
  const params = {
    s: input.movieTitle,
    apiKey: input.apiKey,
  };

  const result = await axios.get<OmdbSearchResponse>(url, { params });
  return result.data;
}

export { search };
