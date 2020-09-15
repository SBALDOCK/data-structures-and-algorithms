'use strict';

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor (root=null) {
    this.root = root;
  }

  breadthFirst(tree){
    let tempArr = [];
    node1 = new Node();
    this.root = node1;
    const binaryArray = [];
    binaryArray.push(this.root);
    if(!tree.root) {
      throw new RangeError('This thing is empty');}
    while(!binaryArray.isEmpty()){
      binaryArray.shift();
      tempArr.push(this.root.value);
    }
    if(this.root.left !== null){
      binaryArray.push(this.root.left.value);
    }
    if(this.root.right !== null){
      binaryArray.push(this.root.right.value);
    }
    return tempArr;
  }
  
}

module.exports = {
  Node,
  Queue,
  Tree
}