'use strict';

function Swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      low++;
      Swap(arr, i, low);
    }
  }
  Swap(arr, right, low + 1);
  return low + 1;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  };
}


let array = [8, 4, 23, 16, 15, 42]
quickSort(array, 0, array.length - 1)