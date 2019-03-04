import { uniq } from 'lodash';
import wait from 'waait';
import { getName } from './src/user';

console.log('it works!');

console.log(uniq([1, 1, 2, 3, 4, 55, 6, 6, 6]));

console.log(getName());

async function go() {
  console.log('Starting!');
  await wait(2000);
  console.log('Done!');
}

go();
