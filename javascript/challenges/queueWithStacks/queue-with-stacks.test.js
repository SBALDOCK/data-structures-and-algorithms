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
  stack.push('apples');
  expect(stack.pop()).toBe('apples');
})