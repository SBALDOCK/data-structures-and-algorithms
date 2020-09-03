'use strict'

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');
const { BinaryTree } = require('../tree/tree.js');
const { Tree, Node } = require('./breadth-first.js');

it('should instantiate an empty queue', () => {
  expect(Queue).toBeDefined();
})

it('should add a node to an empty queue', () => {
  const queue = new Queue();
  const five = new Node(5);
  queue.enqueue(five);
  expect(queue.peek()).toBe(five);
})

it('should create a new Binary Tree', () => {
  const five = new Node(5);
  const tree = new BinaryTree(five);
  expect(tree.root).toStrictEqual(five);
})

it('should empty the queue', () => {
  const queue = new Queue();
  const five = new Node(5);
  queue.enqueue(five);
  expect(queue.peek()).toBe(five);
  queue.dequeue();
  expect(queue.isEmpty()).toBe(true)
})