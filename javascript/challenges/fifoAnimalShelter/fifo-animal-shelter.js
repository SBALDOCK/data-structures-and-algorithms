'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
    this.front = null;
    this.rear = null;
  }
  
  enqueue(animal) {
    if(!this.rear) {
      let temp = new Node(animal, null);
      this.front = temp;
      this.rear = temp;
      return;
    }
    let temp = new Node(animal, null);
    this.rear.next = temp;
    this.rear = temp;
  };
  
  dequeue() {
    // create empty queue
    // add animal to queue
    // determine if front matches preference
    // If so, return
    // If not, shift front to empty array
    // Keep looping through until front matches preference
    // Once front matches preference, return
    // push
    let queue = this.queue;
    let current = new Node;
    let temp = this.front;
    current = temp;
    queue.push(current);
    let value = queue.shift();
    return value;
  }


};


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = AnimalShelter;
