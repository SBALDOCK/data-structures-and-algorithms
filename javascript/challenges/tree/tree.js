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
    this.dork = root;
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
    _preOrder(this.dork);

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
    _inOrder(this.dork)

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
      _postOrder(this.dork)
  
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
      _preOrder(this.dork);
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

    if(!this.dork) {
      this.dork = new Node(value);
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
    add_inner(value, this.dork)
    
  }

  contains(value) {
    while(this.dork) {
      if(this.dork === value) {
        return true;
      } 
      if (value > this.dork) {
        this.dork = this.left;
      } else if (value < this.dork) {
        this.dork = this.right;
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