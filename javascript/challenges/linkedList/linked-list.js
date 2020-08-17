'use strict';


class LinkedList {
  
  constructor() {
    this.head = null;
  }
  
  // insert method
  insert (value) {
    
    // Empty LinkedList (aka head = null)
    // Insert apples (value argument = apples)
    // Create a new Node (value, this.head) - In this case, value is apples and this.head is null
    // new Node is going to be an object {value: 'apples, next:null}
    // this.head = new Node isntance
    // return undefined (by default)

    // Not empty linked list { head = {value: 'apples, next:null}
    //insert bananas (vlaue arg = 'bananas')
    // create new Node('bananas', {value: 'apples', next: null})
    // this.nead = the new Node instance
    // This one line of code will handle empty or nont empty lists
    // return undefined (by default)

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
     
    // Includes method
    includes(value) {
      let currentNode = this.head;
      while (currentNode != null) {
        if(currentNode.value === value) {
          return true;
        } else {
          (currentNode = currentNode.next)
          }
      } return false;
    }

      // otherwise make currentNode = current.next
      // takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    
    
    // toString method
    toString() {
      return LinkedList();
      // returns string representing all values in linked list
    }

}
  

// Create new Node class
class Node {

  constructor(value, next) {
    this.value = value;
    this.next = next;

  }
}


module.exports = LinkedList;
