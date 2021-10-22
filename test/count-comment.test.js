/**
 * @jest-environment jsdom
 */
import commentCounter from '../src/count-comment.js';

// const commentCounter = require('./count-comment.js')

test('Count the number of comments on a page', () => {
  const json = [];
  expect(commentCounter(json)).toBe(0);
});
