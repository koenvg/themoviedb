import * as URI from 'urijs';
import { getApiURL } from './constants';
import { Pagination, MovieResult, TVShowResult } from '../types';

export const search = (query: string, apiKey: string): Promise<Pagination<MovieResult | TVShowResult>> => {
  const url = getApiURL(apiKey)
    .segment('/search/multi')
    .addSearch('query', query)
    .href();
  return fetch(url)
    .then((response) => response.json());
};
