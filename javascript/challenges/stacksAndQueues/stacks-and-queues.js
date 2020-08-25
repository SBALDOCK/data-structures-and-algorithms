'use strict';


class Queue {

  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value, null);
    if(this.back === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    let node;
    if(this.isEmpty()) {
      throw new RangeError('Cannot dequeue from empty queue');
    }
    if (this.front !== null) {
      node = this.front.value;
      this.front = this.front.next;
    } 
    return node;
  }

  peek() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot view empty queue');
    }
    return this.front.value;
  }

  isEmpty(){
    return (this.length < 1) ? true : false;
  }

}

// Stack Class - Current set up for an array
class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }
  
  isEmpty(){
    return (this.length < 1) ? true : false;
  }

  push(value){
    const node = new Node(value, this.top);
    node.next = this.top;
    this.top = node;
  }
  
  peek() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot peek from empty stack')
    }
    return this.top.value;
    }

  pop(){
    if(this.isEmpty()) {
      throw new RangeError('Cannot pop from empty stack')
    } 
    let current = this.top;
    this.top = this.top.next;
    current.next = null;
    return current.value;
  }
}

// Create new Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


module.exports = Stack;


