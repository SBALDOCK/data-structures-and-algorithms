'use strict';

const { breadthFirst } = require('./breadth-first');
const { Graph, Node } = require('../graph/graph');


it('should return all vertices', () => {
  const graph = new BreadthFirstGraph();
  let node1 = graph.addNode('hello');
  let node2 = graph.addNode('there');
  let node3 = graph.addNode('!!!');
  let node4 = graph.addNode('???');
  graph.addEdge(node1, node2);
  graph.addEdge(node1, node3);
  graph.addEdge(node2, node3);
  graph.addEdge(node3, node4);
  let result = graph.breadthFirst(node1);
  expect(result).toEqual([
    { value: 'hello' },
    { value: 'there' },
    { value: '!!!' },
    { value: '???' }
  ]);
});














const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];