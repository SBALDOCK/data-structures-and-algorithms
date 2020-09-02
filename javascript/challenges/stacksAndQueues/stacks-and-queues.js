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
      node = this.front;
      this.front = this.front.next;
    } 
    return node;
  }

  peek() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot view empty queue');
    }
    if(this.front !== null) {
      return this.front.value;
    } 
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else if (this.front.value) {
      return false;
    }
  }

}

// Stack Class - Current set up for an array
class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }
  
  isEmpty(){
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot peek from empty stack')
    }
    return this.top.value;
    }

  push(value){
    const prev = this.top;
    this.top = new Node(value, this.top);
    this.top.next = prev;
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


module.exports = {
  Stack,
  Queue,
  Node
}


