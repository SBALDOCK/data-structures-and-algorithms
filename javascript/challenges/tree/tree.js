'use strict';

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor (root=null) {
    this.root = root;
  }

  preOrder() {
    const arr = [];

    function _preOrder(root) {

      if(!root){
        return;
      }

      arr.push(root.value);

      _preOrder(root.left);
      _preOrder(root.right);

    }
    _preOrder(this.root);

    return arr;
  }

  inOrder() {
    const arr = [];
    function _inOrder(root) {

      if(!root){
        return;
      }

      _inOrder(root.left);
      arr.push(root.value);
      _inOrder(root.right);

    }
    _inOrder(this.root)

    return arr;
  }
  
  postOrder() {
 
      const arr = [];
      function _postOrder(root) {
  
        if(!root){
          return;
        }
        _postOrder(root.left);
        _postOrder(root.right);
        arr.push(root.value);
      }
      _postOrder(this.root)
  
      return arr;
  }
}

class BinarySearchTree extends BinaryTree {


  add(value) {
    const newVal = new Node(value);
   
    while(this.left || this.right) {
      if(this.root === null) {
        this.root = newVal;
      }
      if(newVal.value < this.root) {
        this.root = this.root.left;
      }
      if(newVal.value > this.root) {
        this.root = this.root.right;
      }
    }
    return newVal;
  }

  contains(value) {
    while(this.root) {
      if(this.root === value) {
        return true;
      } 
      if (value > this.root) {
        this.root = this.left;
      } else if (value < this.root) {
        this.root = this.right;
      } else {
        return false;
      }
    }
  }
};

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
}