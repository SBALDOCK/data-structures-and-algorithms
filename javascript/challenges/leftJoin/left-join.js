'use strict';

function leftJoin(hashOne, hashTwo) {
  let returnArr = [];

  for (let i = 0; i < hashOne.length; i++) {
    let hashArr = [];
    let hashOneKey = hashOne[i];
    let hashOneValue = hashOne.get(hashOneKey);
    hashArr.push(hashOneKey, hashOneValue);
  }

  if (hashTwo.contains(hashOneKey)) {
    hashArr.push(hashTwo.get(hashOneKey));
  } else {
    hashArr.push('null');
  }
  returnArr.push(hashArr);
}

module.exports = leftJoin;