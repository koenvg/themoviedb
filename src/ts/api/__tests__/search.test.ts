import { search } from '../search';
import * as fetchMock from 'fetch-mock';

fetchMock.get('*', {});
const fetchSpy = jest.spyOn(window, 'fetch');

describe('search', () => {

  it('should use the correct url for the search', () => {
    return search('banaan', 'apiKey')
      .then(() => {
        expect(fetchSpy).toBeCalledWith('https://api.themoviedb.org/3/search/multi?api_key=apiKey&query=banaan');
      });
  });
});
