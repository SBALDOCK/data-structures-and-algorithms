'use strict';

module.exports = function repeatedWord(str) {
  str = str.toLowerCase();
  let arr = str.match(/[a-zA-Z]+\b/g)

  if (!arr) {
    return null;
  }
  while (arr.length) {
    let word = arr.shift();
    if (arr.includes(word)) {
      return word;
    }
  }
  return null;
}
