'use strict';

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left, right) {
  let newArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return newArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let array = [1, 5, 2, 9];
mergeSort(array);
// function mergeSort(arr) {
//   let n = arr.length;
//   if (n <= 1) {
//     return arr;
//   }

//   let mid = Math.floor(n / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid, n);

//   mergeSort(left);
//   mergeSort(right);
//   merge(left, right, arr);
//   return arr;

// }

// function merge(left, right, arr) {
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       arr.push(right.shift());
//       i = i + 1;
//       k = k + 1;
//     } else {
//       arr[k] = right[j];
//       j = j + 1;
//     }
//   }
//   if (i === left.length) {
//     arr = [...arr, right[j]];
//   } else {
//     arr[j] = left[i];
//   }
// }


// module.exports = mergeSort();
