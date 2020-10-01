'use strict';

const { Graph } = require('../graph/graph');
const depthFirst = require('./depth-first');

const graph = new Graph();
let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addEdge(A, B);
graph.addEdge(A, D);
graph.addEdge(B, C);
graph.addEdge(C, G);
graph.addEdge(B, D);
graph.addEdge(D, E);
graph.addEdge(D, H);
graph.addEdge(D, F);
graph.addEdge(H, F);


it('should perform a depth first traversal', () => {
  expect(depthFirst(A)).toEqual()
})
