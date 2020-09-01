'use strict';

const { BinaryTree, Node, BinarySearchTree } = require('./tree.js');

it ('can instantiate an empty tree', () => {
  expect(BinaryTree).toBeDefined();
})

it ('can successfully instantiate a tree with a single root node', () => {
  const tree = new BinaryTree('bananas');
  expect(tree.root).toBe('bananas');
})

it ('can successfully add a left child and right child to a single root node', () => {
  const apples = new Node('apples', 'bananas', 'mangos');
  expect(apples.value).toStrictEqual('apples');
  expect(apples.left).toStrictEqual('bananas');
  expect(apples.right).toStrictEqual('mangos')
})


it ('can successfully return a collection from a preorder traversal', () => {
  const bananas = new Node('bananas');
  const mangos = new Node('mangos');
  const apples = new Node('apples', bananas, mangos);
  const tree = new BinaryTree(apples);
  expect(tree.preOrder()).toEqual(['apples', 'bananas', 'mangos']);
  
});

it ('can successfully return a collection from an inorder traversal', ( )=> {
  const bananas = new Node('bananas');
  const mangos = new Node('mangos');
  const apples = new Node('apples', bananas, mangos);
  const tree = new BinaryTree(apples);
  expect(tree.inOrder()).toStrictEqual(['bananas', 'apples', 'mangos']);
  
})

it ('can successfully return a collection from a postorder traversal', () => {
  const bananas = new Node('bananas');
  const mangos = new Node('mangos');
  const apples = new Node('apples', bananas, mangos);
  const tree = new BinaryTree(apples);
  expect(tree.postOrder()).toStrictEqual(['bananas', 'mangos', 'apples']);
})

it('should add to root of empty tree', () => {
  const tree = new BinarySearchTree();
  tree.add(5);
  expect(tree.root.value).toBe(5);
})

it('can add an additional item to the tree', () => {
  const ten = new Node(10);
  const five = new Node(5);
  const fifteen = new Node(15);
  
  ten.left = five;
  ten.right = fifteen;
  
  const tree = new BinarySearchTree(ten);

  tree.add(25);

  expect(tree.root.right.value).toBe(25);
})

it('shuld return the largest value in the tree', () => {
  const eight = new Node(8);
  const six = new Node(6);
  const five = new Node(5, eight, six);
  const tree = new BinaryTree(five);
  expect(tree.findMaximumValue()).toEqual(8);
})
