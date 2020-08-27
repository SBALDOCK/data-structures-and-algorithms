'use strict';


 module.exports = function brackets(str) {
  let square = 0;
  let circle = 0;
  let curly = 0;

  if(!str) {
    return false;
  }
  for(let i = 0; i < str.length; i++) {
    let place = str[i];
    if(str.charAt(i) === '{') {
      curly++;
    }
    if(place === '[') {
      square++;
    }
    if(place === '(') {
      circle++;
    }
    if(place === '}') {
      curly--;
    }
    if(place === ']') {
      square--;
    }
    if(place === ')') {
      circle--;
    }
  }
  if (circle === 0 && square === 0 && curly === 0){
      return true;
  } else {
    return false;
  }
};



