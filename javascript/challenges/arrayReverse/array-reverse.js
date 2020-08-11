// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
let array = [14, 1, 6, 9, 13, 55, 8, 2];

function reverseArray(arr){
  let newArray = [];
  for (var i = arr.length -1; i> -1; i--){
    newArray.push(arr[i]);
  }

  return newArray;
}

reverseArray(array);