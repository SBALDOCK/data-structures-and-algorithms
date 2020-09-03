'use strict';

const { fizzBuzzTree, Node, Tree } = require('./buzz-tree');
const { BinaryTree } = require('../tree/tree.js');



it('should create a new tree', () => {
expect(fizzBuzzTree).toBeDefined();
})

it ('should return fizz for nodes divisible by 3', () => {
  const three = new Node(3);
  const tree = new BinaryTree(three);
  fizzBuzzTree(tree);
  expect(tree.inOrder()).toEqual(['fizz']);
});

it('should return buzz for nodes divisible by 5', () => {
  const five = new Node(5);
  const tree = new BinaryTree(five);
  fizzBuzzTree(tree);
  expect(tree.inOrder()).toEqual(['buzz']);
});

it('should return fizzbuzz for nodes divisible of both 3 and 5', () => {
  const fifteen = new Node(15);
  const tree = new BinaryTree(fifteen);
  fizzBuzzTree(tree);
  expect(tree.inOrder()).toEqual(['fizzbuzz']);
});