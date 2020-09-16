'use strict';

function mergeSort(arr) {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }

  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, n);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  return arr;

}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(right.shift());
      i = i + 1;
      k = k + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
  }
  if (i === left.length) {
    arr = [...arr, right[j]];
  } else {
    arr[j] = left[i];
  }
}


module.exports = mergeSort();
