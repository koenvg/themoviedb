import { search } from './api/search';
import { fetchTVDetails } from './api/tv';

require('isomorphic-fetch'); // tslint:disable-line

export const theMovieDB = (apiKey: string) => ({
  search: (query: string) => search(query, apiKey),
  fetchTVDetails: (TVID: string) => fetchTVDetails(TVID, apiKey),
});
