import { fetchTVDetails } from '../tv';
import * as fetchMock from 'fetch-mock';

fetchMock.get('*', {});
const fetchSpy = jest.spyOn(window, 'fetch');

describe('tv', () => {
  it('fetchTVDetails', () => {
    return fetchTVDetails('TVID', 'APIKEY')
      .then(() => {
        expect(fetchSpy).toBeCalledWith('https://api.themoviedb.org/3/tv/TVID?api_key=APIKEY');
      });
  });
});
