'use strict';


class LinkedList {
  
  constructor() {
    this.head = null;
  }
  
  // insert method
  insert (value) {
    
    this.head = new Node (value, this.head);
  }

  // Code Challenge 6

  // Append method
  append(value) {
    const newNode = new Node(value);
    if(! this.head) {
      // add to the tail of the list
      this.head = newNode;
      return;
    }
    // create a while loop looking for a node with the next of null
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    } 
    // we now know that currentNode is a node, in fact the LAST node
    currentNode.next = newNode;
  }

  // insertBefore method
  insertBefore(targetValue, value) {
    if(!this.head) {
      return;
    }
    if(this.head.value === targetValue) {
      this.insert(value);
      return;
    }
    let currentNode = this.head
    while(currentNode){
      if(!currentNode.next){
        break;
      }
      if(currentNode.next.value === targetValue){
        currentNode.next = new Node (value, currentNode.next);
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // insertAfter Method
  insertAfter(targetValue, value) {
    if(!this.head) {
      return;
    }
    if(this.head.value === targetValue) {
      this.insert(value);
      return;
    }
    let currentNode = this.head
    while(currentNode){
        if(!currentNode.next){
          break;
        }
        if(currentNode.value === targetValue){
          currentNode.next = new Node (value, currentNode.next);
          return;
        }
        currentNode = currentNode.next;
     }
  }
     
  // Includes method
  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if(currentNode.value === value) {
        return true;
      } else {
        (currentNode = currentNode.next)
        }
    } return false;
  }
    
  // toString method
  toString(value) {
    let str = '';
    let currentNode = this.head;
    // let newArray = [];
    while(currentNode) {
      str += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
      // newArray.push('{ '+ currentNode.value + ' } >')
    }
    return str;
    // let literal = newArray.join(' ').toString();
    // return `${literal} Null`;
  }

  // Code Challenge 7 

  // establish that there is a head
  // Where k is greater than the length - K is null?
  // Where k and length of list are same - k is the last node
  // Where k is not a positive integer - 
  // Where k is 
  // Where k is in the middle, neither the first nor last node

}
  
// Create new Node class
class Node {

  constructor(value, next = null) {
    this.value = value;
    this.next = next;

  }
}

module.exports = LinkedList;
