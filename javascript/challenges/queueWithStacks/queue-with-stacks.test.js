'use strict';

const { PseudoQueue, Node } = require('./queue-with-stacks');

it('should be a class', () => {
  expect(PseudoQueue).toBeDefined();
})

it('should instantiate an empty stack', () => {
  const pseudo = new PseudoQueue();
  expect(pseudo).toBeDefined();
});

it('Can successfully push onto a stack', () => {
  const pseudo = new PseudoQueue();
  const apples = new Node('apples');
  pseudo.push(apples);
  expect(pseudo.top()).toBe('apples');
})

it ('should successfully pop off a stack', () => {
  const stack= new PseudoQueue();
  stack.enqueue('apples');
  const popped = stack.pop();
  expect(popped).toBe('apples');
})