'use strict';

class PseudoQueue {

  constructor(value) {
    this.value = value;
  }

  enqueue() {
    let firstStack = new Stack();
    let secondStack = new Stack();
    let node = new Node ();
    let enqueueNode = new Node ();
    node = firstStack.top;
    while (firstStack.top.value !== null) {
      secondStack.push(this.firstStack.pop);
    }
    enqueueNode.push(firstStack);
    while (secondStack.top.value !== null) {
      firstStack.push(secondStack.pop);
    }
    return firstStack;
  };

  dequeue() {
    let firstStack = new Stack();
    let secondStack = new Stack();
  };

}

// Create new Node class
class Stack {
  constructor(top) {
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
