'use strict';

 // Big O in comments - O(n)
//  module.exports = function brackets(str) {
//   let square = 0; //1 
//   let circle = 0; //1
//   let curly = 0; //1

//   if(!str) { //1 - Big O is concerned with the worst case and this requires no work
//     return false;
//   }

//   for(let i = 0; i < str.length; i++) {// 7 steps times string length (n)
//     let place = str[i];

//     if(place === '{') {curly++;}
//     if(place === '[') {square++;}
//     if(place === '(') {circle++;}
//     if(place === '}') {curly--;}
//     if(place === ']') {square--;}
//     if(place === ')') {circle--;}
//   }

//   if (circle === 0 && square === 0 && curly === 0){
//       return true;
//   } else {
//     return false;
//   }
// };


module.exports = function brackets(str) {

  if (str.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
};



