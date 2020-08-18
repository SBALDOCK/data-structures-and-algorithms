'use strict';


class LinkedList {
  
  constructor() {
    this.head = null;
  }
  
  // insert method
  insert (value) {
    
    this.head = new Node (value, this.head);
  }

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

  insertBefore(targetValue, value) {
    let currentNode = this.head
    while(currentNode.next){
      if(currentNode.next === targetValue){
        currentNode.next = new Node (value, currentNode.next);
        return;
      }
      currentNode = currentNode.next;
      }
    }
  

  insertAfter(targetValue, value) {
    let currentNode = this.head
    while(currentNode.next) {
      if(currentNode === targetValue) {
        currentNode.next = new Node(value, currentNode.next);
        return;
      }

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
    let currentNode = this.head;
    let newArray = [];
    while(currentNode !== null) {
      newArray.push('{ '+ currentNode.value + ' } >')
      currentNode = currentNode.next;
    }
    let literal = newArray.join(' ').toString();
    return `${literal} Null`;
  }

}
  
// Create new Node class
class Node {

  constructor(value, next = null) {
    this.value = value;
    this.next = next;

  }
}

module.exports = LinkedList;
