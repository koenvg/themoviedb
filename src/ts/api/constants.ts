import * as URI from 'urijs';

export const API_URL = 'https://api.themoviedb.org/3/';

export const getApiURL = (apiKey: string) => {
  return URI(API_URL).addSearch('api_key', apiKey);
};
