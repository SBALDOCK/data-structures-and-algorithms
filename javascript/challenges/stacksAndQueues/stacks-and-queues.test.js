'use strict';

const { Stack, Queue, Node } = require('./stacks-and-queues.js');


// stack tests
it('should be a class', () => {
  expect(Stack).toBeDefined();
})

it('should instantiate an empty stack', () => {
  const ll = new Stack();
  expect(ll).toBeDefined();
});

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
  const popped = ll.pop();
  expect(popped).toBe('bananas');
});

it('should check if it is not empty', () => {
  const ll = new Stack();
  ll.push('apples');
  expect(ll.isEmpty()).toBeFalsy();
});

it('should check if it is empty', () => {
  const ll = new Stack();
  console.log('console log stack', ll);
  expect(ll.isEmpty()).toBeTruthy();
});

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
  const apples = new Node('apples');
  ll.enqueue(apples);
  expect(ll.peek()).toBe(apples);
})

it('can enqueue multiple values into a queue', () => {
  const ll = new Queue();
  const apples = new Node('apples');
  const bananas = new Node('bananas');
  const dates = new Node('dates');
  ll.enqueue(apples);
  ll.enqueue(bananas);
  ll.enqueue(dates);
  expect(ll.peek()).toBe(apples);
})

it('can successfully dequeue out of queue', () => {
  const ll = new Queue();
  const apples = new Node('apples');
  const bananas = new Node('bananas');
  ll.enqueue(apples);
  ll.enqueue(bananas);
  expect(ll.peek()).toBe(apples);
  ll.dequeue();
  expect(ll.peek()).toBe(bananas);
})

it('can successfully empty a queue after multiple dequeues', () => {
  const ll = new Queue;
  const apples = new Node('apples');
  const bananas = new Node('bananas');
  ll.enqueue(apples);
  ll.enqueue(bananas);
  expect(ll.peek()).toBe(apples);
  ll.dequeue();
  expect(ll.peek()).toBe(bananas);
  ll.dequeue();
  expect(ll.isEmpty()).toBe(true);
})

it('can successfully peek into a queue', () => {
  const ll = new Queue();
  const apples = new Node('apples');
  ll.enqueue(apples);
  expect(ll.peek()).toBe(apples);
})

it('should instantiate an empty queue', () => {
  const ll= new Queue();
  expect(ll).toBeDefined();
})

it('should not allow dequeue from empty queue', () => {
  const ll = new Queue();
  expect(() => ll.dequeue()).toThrow(RangeError);
})

// it('should not allow peek from empty queue', () => {
//   const ll = new Queue();
//   expect(ll.peek()).toBe(apples);
// })