import Utilities from '../src/Utilities.js';

const data = [];
describe('test for counting data', () => {
  test('testing when the array is empty', () => {
    expect(Utilities.counter(data)).toEqual(0);
  });
});
