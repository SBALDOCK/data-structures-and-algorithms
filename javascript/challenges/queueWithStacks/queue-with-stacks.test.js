'use strict';

const Stack = require('./queue-with-stacks');

it('should be a class', () => {
  expect(Stack).toBeDefined();
})

it('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
});

it ('should successfully pop off a stack', () => {
  const stack= new Stack();
  stack.enqueue('apples');
  const popped = stack.pop();
  expect(popped).toBe('apples');
})