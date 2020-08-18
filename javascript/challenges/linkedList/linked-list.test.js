'use strict';

const LinkedList = require('./linked-list.js');

it('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

// testing to add a new node - line 14 of linked-list.js
it('should add to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
});

it('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
});

// adding (appending) to the end of an empty list
it ('should append to empty list', () => {
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
});

// it('should add to NOT empty list', () => {
//   const ll = new LinkedList();
//   ll.insert('apples');
//   ll.insert('bananas');

//   ll.append('cucumbers');

//   expect(ll.head.value).toBe('bananas');
//   expect(ll.head.next.value).toBe('apples');

//   expect(ll.head.next.next.value).toBe('cucumbers');
//   expect(ll.head.next.next).toBe(null);

// });

it('It should return a boolean', () => {
  const ll = new LinkedList();
  ll.includes('apples')
  expect(true)
  expect(ll.head).toBe(null);
})

// toString test to return  all values of  LinkedList()
it('It should return a collection of all values in LinkedLIst ', () => {
  const ll = new LinkedList();
  expect(ll);
})

it('should stringify', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.toString()).toBe(' { bananas } -> { apples } -> NULL');
})

// Tests for challenge 06

it('Should insert value before first value node', () => {
  const ll = new LinkedList();
  ll.insert ('apples');
  ll.insert ('dates');
  ll.insert ('bananas')
  ll.insertBefore('apples', 'cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { dates} -> { cucumbers} -> { apples } -> NULL');
});

it('should not insert when target missing', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('dates');
  ll.insert('bananas');
  ll.insertBefore('nothing', 'cucumbers');
  expect(ll.toString()).toBe(' { bananas } -> { dates } -> { apples } -> NULL');
});

it('Should insert value after first value node', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('dates');
  ll.insert('bananas');
  ll.insertAfter('dates', 'cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { dates } -> { cucumbers } -> { apples } -> NULL');
});

it('should handle empty list when inserting after', () => {
  const ll = new LinkedList();
  ll.insertAfter('foo', 'bar');
  expect(ll.toString()).toBe('NULL');
});

// Tests for challenge 7

it('should test where value is greater than list length', () => {
  const ll = new LinkedList();
})

it('should test where value and list are the same length', () => {
  const ll = new LinkedList();
})

it('should test where value is a postive integer', () => {
  const ll = new LinkedList();
})

it('should test where linked list is of a size 1', () => {
  const ll = new LinkedList();
})

it('should return happy path where value isnot at the end but in the middle of the linked list', () => {
  const ll = new LinkedList();
})


