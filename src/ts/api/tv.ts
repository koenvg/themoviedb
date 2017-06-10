import * as URI from 'urijs';
import { getApiURL } from './constants';
import { Pagination, TVShow } from '../types';

export const fetchTVDetails = (TVID: string, apiKey: string) => {
  const url = getApiURL(apiKey)
    .segment('tv')
    .segment(TVID)
    .href();
  return fetch(url)
    .then((response) => response.json());
};
