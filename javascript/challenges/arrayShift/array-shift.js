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


module.exports = insertShiftArray;