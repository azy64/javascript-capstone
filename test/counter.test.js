import Utilities from '../src/Utilities.js';

const data = [];
const data1 = 'njnnnn';
const data2 = [1, 3, 'jlnln', 'jeyygyg', true, false, 5];
describe('test for counting data', () => {
  test('testing when the array is empty', () => {
    expect(Utilities.counter(data)).toEqual(0);
  });
  test('testing when the parameter is not a array', () => {
    expect(Utilities.counter(data1)).toEqual(0);
  });
  test('testing when the array has elements', () => {
    expect(Utilities.counter(data2)).toEqual(7);
  });
});
