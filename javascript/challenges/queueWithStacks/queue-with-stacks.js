'use strict';

class PseudoQueue {

  constructor(value, firstStack, secondStack) {
    this.top = null;
    this.value = value;
    this.firstStack = firstStack;
    this.secondStack = secondStack;
  }

  enqueue() {
    let first = this.firstStack;
    let second = this.secondStack;
    let node = new Node ();
    let enqueueNode = new Node ();
    node = first.top;
    while (first.top.value !== null) {
      second.push(this.first.pop);
    }
    enqueueNode.push(first);
    while (second.top.value !== null) {
      first.push(second.pop);
    }
    return first;
  };

  dequeue() {
    let firstStack = new Stack();
    let secondStack = new Stack();
  };

}

// Create new Node class
class Stack {
  constructor() {
   this.top = null;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = PseudoQueue;
