'use strict';

const Hashtable = require('./hash-table');

// Adding a key/value to your hashtable results in the value being in the data structure
it('should add a key/value pair to the hash table', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
})


// Retrieving based on a key returns the value stored
it('should get a correct value with no collisions', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
});

// Successfully returns null for a key that does not exist in the hashtable
it('should return null for a key that does not exist', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('orange');
  expect(value).toBe(null);
})

// Successfully hash a key to an in -range value
it('should successfully has a key to an in-range value', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
})

// Successfully handle a collision within the hashtable



// Successfully retrieve a value from a bucket within the hashtable that has a collision
it('should get correct values with collisions', () => {
  const table = new Hashtable();

  const appleHash = table.hash('apple');
  const papelHash = table.hash('papel');

  expect(appleHash).toBe(papelHash);

  table.add('apple', 'pippin');
  table.add('papel', 'paper in spanish');

  const appleValue = table.get('apple');
  const papelValue = table.get('papel');

  expect(appleValue).toBe('pippin');
  expect(papelValue).toBe('paper in spanish');

});





