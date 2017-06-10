import { SearchResult } from './search';

export interface TVShowResult extends SearchResult, TVShowShort {
}

export interface TVShowShort {
  poster_path?: string;
  popularity: number;
  id: number;
  backdrop_path?: string;
  overview: string;
  first_air_date: string;
  origin_country: number[];
  genre_ids: number[];
  original_language: string;
  vote_average: number;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface TVShow extends TVShowResult {
  seasons: Season[];
  number_of_episodes: number;
  number_of_seasons: number;
  last_air_date: string;
  genres: Array<{ id: string, name: string }>;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path?: string;
  season_number: number;
}
