'use strict';

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

 class Tree {
   constructor(root=null){
     this.root = root;
   }
 };


function fizzBuzzTree(tree) {
  function _preOrder(root) {
    if(!root) {
      return;
    }
    if(root.value %15 === 0) {
      root.value = 'fizzbuzz';
      _preOrder(root.left);
      _preOrder(root.right);
      return;
    } else if (root.value %3 === 0) {
      root.value = 'fizz';
      _preOrder(root.left);
      _preOrder(root.right);
      return;
    } else if(root.value %5 === 0) {
      root.value = 'buzz';
      _preOrder(root.left);
      _preOrder(root.right);
      return;
    }
    root.value = `${root.value}`;
    return;
  }
  _preOrder(tree.root);
  return tree;

}

module.exports = {
  Tree,
  fizzBuzzTree,
  Node,
}