import { search } from './api/search';
import { fetchTVDetails } from './api/tv';
import { TVShow, TVShowResult } from './models/tvShow';
import { Pagination } from './models/pagination';
import { MovieResult } from './models/movie';

require('isomorphic-fetch'); // tslint:disable-line

export const theMovieDB = (apiKey: string) => ({
  search: (query: string) => search(query, apiKey),
  fetchTVDetails: (TVID: string) => fetchTVDetails(TVID, apiKey),
});

export * from './models/movie';
export * from './models/pagination';
export * from './models/search';
export * from './models/tvShow';
