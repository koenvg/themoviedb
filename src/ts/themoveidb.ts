import { search } from './api/search';

export const theMovieDB = (apiKey: string) => ({
  search: (query: string) => search(query, apiKey),

});
