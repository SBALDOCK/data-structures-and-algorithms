// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

const insertShiftArray = (arr, value) => {
  
  let length = arr.length / 2;
  arr.splice(length, 0, value);
  return arr;
}

// Joseph's solution
// let middle = Math.ceil(arr.length / 2);

// let current = arr[middle];
// arr[middle] = value;

// for (let i = middle +1; i < arr.length; i++) {
//   let temp = arr[i];
//   arr[i] = current;
//   current = temp;
//   [arr[i], current] = [current, arr[i]]; - Replaces previous three lines
// }

// arr.push(current);


/* I'm still working on developing testing ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

test('insertShiftArray exists', () => {
  expect(insertShiftArray).toBeDefined();
})

test('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
})

it('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x']
  insertShiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
})

it('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
})