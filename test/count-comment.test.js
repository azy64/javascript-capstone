/**
 * @jest-environment jsdom
 */
import comment from '../src/counter.js';

const json = [];
const json2 = [
  {
    comment: 'Oliver Queen is hardcore', username: 'King', creation_date: '2021-10-21',
  },
  {
    creation_date: '2021-10-22', username: 'Queen', comment: 'Yes',
  },
];

test('Count the number of comments on a page', () => {
  expect(comment(json)).toBe(0);
  expect(comment(json2)).toBe(2);
});
