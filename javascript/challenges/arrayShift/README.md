# data-structures-and-algorithms
Code 401 Code Challenges

# Shift an Array
* Today, we are going to learn how to add a value to the middle of an array without any built-in JavaScript methods to make it easier. Yeehaw!

## Challenge Description
* Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
* I used splice to place the value in the middle of the array. By incorporating `arr.length / 2` the value is added to the middle of an array. This solution only truly works for arrays with an even number of elements. I have not figured out a solution for array with an odd number. 

## Solution

[array-shift](javascript/challenges/arrayShift/array-shift.js)

![whiteboard](arrayShift.png)