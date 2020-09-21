'use strict';

class Hashtable {
  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {
    const index = this.hash(key);

    const contentsOfBucket = this.buckets[index];

    if (contentsOfBucket === undefined) {
      this.buckets[index] = [[key, value]];
    } else {
      for (let item of contentsOfBucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return null;
  }

  get(key) {
    const index = this.hash(key);
    const itemsInBucket = this.buckets[index];
    if (itemsInBucket === undefined) {
      return null
    } else {
      for (let item of itemsInBucket) {
        if (item[0] === key) {
          return item[1];
        }

      }
    }
    return key;
  }

  contains(key) {
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
      return false;
    }
    return true;
  }

  hash(key) {
    let sum = 0;
    for (let char of key) {
      const val = char.charCodeAt(0);
      sum += val;
    }
    const primed = sum * 599;
    const index = primed % this.buckets.length;
    return index;
  }

}

module.exports = Hashtable;

