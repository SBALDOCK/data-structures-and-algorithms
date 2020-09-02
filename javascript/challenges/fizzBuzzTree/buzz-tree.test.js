'use strict';

const { fizzBuzzTree, Node } = require('./buzz-tree');

it('should create a new tree', () => {
expect(fizzBuzzTree).toBeDefined();
})

it ('should return fizz for nodes divisible by 3', () => {
  const three = new Node(3);
  const five = new Node(5);
  const fifteen = new Node(15);
  const tree = new fizzBuzzTree();
  tree.root = three;
  expect(tree.root).toBe('fizz');
})

it('should return buzz for nodes divisible by 5', () => {
  const three = new Node(3);
  const five = new Node(5);
  const fifteen = new Node(15);
  const tree = new fizzBuzzTree();
  tree.root = five;
  expect(tree.root.value).toBe('buzz');
})

it('should return fizzbuzz for nodes divisible of both 3 and 5', () => {
  const three = new Node(3);
  const five = new Node(5);
  const fifteen = new Node(15);
  const tree = new fizzBuzzTree();
  tree.root = fifteen;
  expect(tree.root.value).toBe('fizzbuzz');
})