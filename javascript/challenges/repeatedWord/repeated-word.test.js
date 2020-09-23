'use strict';

const repeatedWord = require('./repeated-word.js');

it('should return null from empty string', () => {
  const result = repeatedWord(' ');
  expect(result).toBe(null);
})

it('should return the first repeated string', () => {
  const string = ('once upon a time there was a brave princess who');
  const result = repeatedWord(string);
  expect(result).toBe('a');
})

it('should return null from zero matches', () => {
  const string = ('the human torch was denied a bank loan');
  const result = repeatedWord(string);
  expect(result).toBe(null)
})

