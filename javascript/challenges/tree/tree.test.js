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

it ('can add a node in the correct location', () => {
  const node8 = new Node(8);
  const tree = new BinarySearchTree(node8)
  const node5 = new Node(5);
  tree.insert('apples');
  expect(tree.root.left).toBe(node5);
})

it ('returns a boolean', () => {
  const bananas = new Node('bananas');
  const mangos = new Node('mangos');
  const apples = new Node('apples', bananas, mangos);
  const tree = new BinaryTree(apples);
  expect(tree).root
})