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

  findMaximumValue() {
    const arr = [];
    let max = 0;

      function _preOrder(root) {
        if(!root) {
          return;
        }

        if(root.left) {
          _preOrder(root.left);
        }

        arr.push(root.value);

        if(root.right){
          _preOrder(root.right);
        }
      }
      _preOrder(this.root);
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
          max = arr[i]
          return max;
        }
      }
  }
}



class BinarySearchTree extends BinaryTree {


  add(value) {

    if(!this.root) {
      this.root = new Node(value);
      return;
    }
    
    function add_inner(value, root) {
      const node = new Node(value);
   
      if(value <= root.value) {
   
        root.left = node;
      } else {
        root.right = node;
      }
    }
    add_inner(value, this.root)
    
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

  contains(value) {

  }
};

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
}