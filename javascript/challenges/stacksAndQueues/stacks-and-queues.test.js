'use strict';

const Stack = require('./stacks-and-queues.js');
const Queue = require('./stacks-and-queues.js');


// stack tests
it('should be a class', () => {
  expect(Stack).toBeDefined();
})

it('Can successfully push onto a stack', () => {
  const ll = new Stack();
  ll.push('apples');
  expect(ll.peek()).toBe('apples');
})

it('Can successfully push multiple values onto a stack', () => {
  const ll = new Stack();
  ll.push('apples');
  ll.push('bananas');
  expect(ll.peek()).toBe('bananas');
});

it('should successully pop off stack', () => {
  const ll = new Stack;
  ll.push('apples');
  ll.push('bananas');
  expect(ll.pop()).toBe('bananas');
});

it('should empty stack after multiple pops', () => {
  const ll = new Stack;
  ll.push('apples');
  ll.push('bananas');
  expect(ll.pop()).toBe('bananas');
  // expect(ll.peek()).toBe('apples');
  // expect(ll.isEmpty()).toBe(true);
});

it('should instantiate an empty stack', () => {
  const ll = new Stack();
  expect(ll).toBeDefined();
});

it('should check if it is empty', () => {
  const ll = new Stack();
  ll.push('apples');
  expect(ll.isEmpty()).toBe(false);
})

it('should not allow pop from empty list', () => {
  const ll = new Stack();
  expect(() => ll.pop()).toThrow(RangeError);
})

it('should not allow peek from empty list', () => {
  const ll = new Stack();
  expect(() => ll.peek()).toThrow(RangeError);
})

// queue tests
it('should be a class', () => {
  expect(Queue).toBeDefined();
})

it('can successfully enqueue into a queue', () => {
  const ll = new Queue();
  ll.push('apples');
  expect(ll.peek()).toBe('apples');
})

it('can enqueue multiple values into a queue', () => {
  const ll = new Queue();
  ll.push('apples');
  ll.push('bananas');
  ll.push('dates');
  expect(ll.peek()).toBe('dates');
})

it('can successfully dequeue out of queue', () => {
  const ll = new Queue();
  ll.push('apples');
  ll.push('bananas');
  expect(ll.pop()).toBe('bananas');
})

it('can successfully empty a queue after multiple dequeues', () => {
  const ll = new Queue;
  ll.push('apples');
  ll.push('bananas');
  ll.pop('bananas');
  expect(ll.peek()).toBe('apples');
})

it('can successfully peek into a queue', () => {
  const ll = new Queue();
  ll.push('apples');
  expect(ll.peek()).toBe('apples');
})

it('should instantiate an empty queue', () => {
  const ll= new Queue();
  expect(ll).toBeDefined();
})

it('should not allow dequeue from empty queue', () => {
  const ll = new Queue();
  expect(() => ll.pop()).toThrow(RangeError);
})

it('should not allow peek from empty queue', () => {
  const ll = new Queue();
  expect(() => ll.peek()).toThrow(RangeError);
})