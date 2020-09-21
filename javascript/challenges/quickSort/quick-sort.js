'use strict';

function Swap(arr, leftIndex, rightIndex) {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;
  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r++;
    }
    if (l <= r) {
      Swap(arr, l, r)
      l++;
      r++;
    }
  };
  return arr;

}

function quickSort(arr, leftIndex, rightIndex) {
  let pivot;
  if (arr.length > 1) {
    pivot = partition(arr, left, right);
    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1);
    }
    if (pivot < right) {
      quickSort(arr, pivot, right);
    };
  }
  return arr;
}


let array = [8, 4, 23, 16, 15, 42]
quickSort(array, 0, array.length - 1)