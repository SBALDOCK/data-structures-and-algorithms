'use strict';


class LinkedList {
  
  constructor() {
    this.head = null;
  }
  
  // insert method
  insert (value) {
    
    this.head = new Node (value, this.head);
  }

  // Code Challenge 6----------------------------------------------------------------------

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
    }
    return str;
  }

  // Code Challenge 7-------------------------------------------------------------
  // Solution converting Linked List to Array to identify index positions

  kthFromTheEnd(k) {
    const arr = [];
    let currentNode = this.head;
    if(currentNode) {
      arr.push(currentNode.value);
    }
    while(currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    if(k > arr.length) {
      throw new RangeError('k too big');
    } else if (k === arr.length) {
      throw new RangeError('k is 1 too big');
    } else if ( k < 0) {
      throw new RangeError('k is too small');
    } else {
      const indexOfValue = arr.length - (k + 1);
      return arr[indexOfValue];
    }
  }
}

// Code Challenge 8-------------------------------------------------------------
// Big 0 for time - O(n)
// Big 0 for space - O(1)

function zipLists (list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  while(currentNode1 && currentNode2) {

    let pointer1 = currentNode1.next;
    currentNode1.next = currentNode2;

    let pointer2 = currentNode2.next;

    if(pointer1) {
      currentNode2.next = pointer1;
    } else {
      break;
    }

    currentNode1 = pointer1;
    currentNode2 = pointer2;
  }
  return list1
}

// Create new Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


module.exports = {
  zipLists,
  LinkedList
};
