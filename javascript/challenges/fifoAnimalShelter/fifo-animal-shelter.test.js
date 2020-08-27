'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

it ('should be a class', () => {
  const shelter = new AnimalShelter();
  expect(shelter).toBeDefined();
});

it('should successfully enqueue a new animal to an empty queue', () => {
  const shelter = new AnimalShelter();
  shelter.enqueue('dog');
  expect(shelter.front.value).toBe('dog');
  expect(shelter.rear.value).toBe('dog');
});

it ('should successfully dequeue a preferred animal from a queue', () => {
  const shelter = new AnimalShelter();
  shelter.enqueue('dog');
  shelter.enqueue('cat');
  shelter.enqueue('horse');
  
})
