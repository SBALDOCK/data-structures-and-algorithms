'use strict';

const LinkedList = require('../linkedList/linked-list.js');

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

it('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');

  ll.append('cucumbers');

  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');

  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next).toBe(null);

});

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


