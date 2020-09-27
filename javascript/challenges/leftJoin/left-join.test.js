'use strict';

const leftJoin = require('./left-join');

let object1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher'
};

let object2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam'
};


it('should perform a left join when two objects are provided', () => {
  expect(leftJoin(object1, object2)).toStrictEqual(
    [
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow']
    ])
})







