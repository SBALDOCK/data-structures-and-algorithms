'use strict';

function leftJoin(obj1, obj2) {

  const output = [];

  for (let word in obj1) { // O(n) - Time

    let synonym = obj1[word];

    let antonym = 'Null';

    if (word in obj2) { // O(1) - Time
      antonym = obj2[word];
    }

    const entry = [word, synonym, antonym]; // O(1) - Time

    output.push(entry); // Time O(n) - Time
    // Space - O(n) - Dependent on the size of the left table
  }
}

module.exports = leftJoin;

