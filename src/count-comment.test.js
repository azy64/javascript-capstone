/**
 * @jest-environment jsdom
 */
 import commentCounter from './count-comment.js';

// const commentCounter = require('./count-comment.js')

test('Count the number of comments on a page', () => {
    let json = []
    expect(commentCounter(json)).toBe(0)
})
