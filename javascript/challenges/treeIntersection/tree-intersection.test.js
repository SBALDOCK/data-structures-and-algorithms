'use strict';

const { BinaryTree, Node } = require('../tree/tree.js');
const Tree = require('./tree-intersection.js');

it('should instantiate a tree', () => {
  expect(Tree).toBeDefined();
})

it('can successfully instantiate a tree with a single root node', () => {
  const tree = new BinaryTree('bananas');
  expect(tree.root).toBe('bananas');
})

it('can successfully add a left child and right child to a single root node', () => {
  const apples = new Node('apples', 'bananas', 'mangos');
  expect(apples.value).toStrictEqual('apples');
  expect(apples.left).toStrictEqual('bananas');
  expect(apples.right).toStrictEqual('mangos')
})

it('can create an empty array', () => {
  const array = [];
  expect(array).toBeDefined();
});

it('returns common values from two trees', () => {
  const bananas = new Node('bananas');
  const mangos = new Node('mangos');
  const apples = new Node('apples', bananas, mangos);
  const tree1 = new BinaryTree(apples);
  const oranges = new Node('oranges');
  const mangos = new Node('mangos');
  const apples = new Node('apples', oranges, mangos);
  const tree2 = new BinaryTree(apples);
  expect(Tree).toStrictEqual(['apples, mangoes']);
})