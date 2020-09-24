'use strict';

const leftJoin = require('./left-join.js');
const Hashtable = require('../hashTable/hash-table.js');

// Adding a key/value to your hashtable results in the value being in the data structure
it('expect Hash Tables to be defined', () => {
  const table1 = new Hashtable();
  const table2 = new Hashtable();
  expect(table1).toBeDefined();
  expect(table2).toBeDefined();
})

it('should add a key/value pair to the hash table', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
})

it('should return null for a key that does not exist', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('orange');
  expect(value).toBe(null);
})

it('should return array with one key and two values', () => {
  const table1 = new Hashtable();
  table1.add('apple', 'pippin');
  const table2 = new Hashtable();
  table2.add('apple', 'honeycrisp');
  leftJoin(table1, table2);
  expect(leftJoin).toStrictEqual(['apple', 'pippin', 'honeycrisp']);
})