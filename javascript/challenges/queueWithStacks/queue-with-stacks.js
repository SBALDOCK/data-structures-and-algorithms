'use strict';

class PseudoQueue {

  constructor(value, firstStack, secondStack) {
    this.value = value;
    this.firstStack = firstStack;
    this.secondStack = secondStack;
  }

  enqueue() {
    let firstStack = this.firstStack;
    
    let node = new Node();
    node = firstStack.top;
    let enqueueNode = new Node();
    let secondStack = this.second;
    while (firstStack.top) {
      secondStack.push(node.pop);
    }
    firstStack.push(enqueueNode);
    while (secondStack.top) {
      firstStack.push(secondStack.pop);
    }
    return firstStack;
  };

  dequeue() {
   let first = this.firstStack;
   let second = this.secondStack;
   let node = new Node();
   node = first.top.value;
   while (first.top.value !== null) {
     second.push(this.first.pop);
   }
   while(second.top.value !== null) {
     this.second.pop;
     return second;
   }
   return first;

  };

}


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  PseudoQueue,
  Node
};
