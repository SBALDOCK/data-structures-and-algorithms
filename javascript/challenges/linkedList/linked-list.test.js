'use strict';

const {LinkedList, zipLists} = require('./linked-list.js');


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
  expect(ll.toString()).toBe('{ bananas } -> { apples } -> ');
})

// Code Challenge 6 Tests

it('Should insert value before first value node', () => {
  const ll = new LinkedList();
  ll.insert ('apples');
  ll.insert ('dates');
  ll.insert ('bananas')
  ll.insertBefore('apples', 'cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { dates } -> { cucumbers } -> { apples } -> ');
});

it('should not insert when target missing', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('dates');
  ll.insert('bananas');
  ll.insertBefore('nothing', 'cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { dates } -> { apples } -> ');
});

it('Should insert value after first value node', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('dates');
  ll.insert('bananas');
  ll.insertAfter('dates', 'cucumbers');
  expect(ll.toString()).toBe('{ bananas } -> { dates } -> { cucumbers } -> { apples } -> ');
});

it('should handle empty list when inserting after', () => {
  const ll = new LinkedList();
  ll.insertAfter('foo', 'bar');
  expect(ll.toString()).toBe('');
});


// Code Challenge 7 test
it('should get k of 2', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('dates');
  ll.insert('bananas');
  expect(ll.kthFromTheEnd(2)).toBe('bananas');

})

// Code Challenge 8 Tests
it('should zip lists', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  list2.insert(4);
  list2.insert(9);
  list2.insert(5);
  const zipped = zipLists(list1, list2);
  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> ');
})

it('should zip top longer lists', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert(12);
  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  list2.insert(4);
  list2.insert(9);
  list2.insert(5);
  const zipped = zipLists(list1, list2);
  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> ');
});