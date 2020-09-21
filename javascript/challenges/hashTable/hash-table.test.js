'use strict';

const Hashtable = require('./hash-table');

it('should get a correct value with no collisions', () => {
  const table = new Hashtable();
  table.add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
});

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