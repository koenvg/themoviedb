import * as URI from 'urijs';
import { getApiURL } from './constants';
import { TVShow } from '../types';

export const fetchTVDetails = (TVID: string, apiKey: string): Promise<TVShow> => {
  const url = getApiURL(apiKey)
    .segment('tv')
    .segment(TVID)
    .href();
  return fetch(url)
    .then((response) => response.json());
};
