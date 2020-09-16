'use strict';

const mergeSort = require('./merge-sort');

const testArray = [1, 9, 5, 11]

it('should merge sort a test array', () => {
  let arr = new Array(testArray);
  expect(arr).toBe([1, 5, 9, 11]);
})