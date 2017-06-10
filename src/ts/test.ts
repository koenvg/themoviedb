// tslint:disable
import themoveDb from './index';

const { search } = themoveDb('58b2d591951178a249c5bb3cd2bbdb89');

search('Game of thrones').then((results) => {
  console.log(results);
});
