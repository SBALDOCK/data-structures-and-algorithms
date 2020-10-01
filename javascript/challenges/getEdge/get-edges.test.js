'use strict';

const getEdges = require('./get-edges')
const { Graph } = require('../graph/graph');

it('should determine connection', () => {
  const graph = new Graph();

  const Metroville = new Vertex('Metroville');
  const Pandora = new Vertex('Pandora');

  graph.addVertex(Metroville);
  graph.addVertex(Pandora);

  graph.addEdge(Metroville, Pandora, 82);

  const result = getEdges(graph, [Metroville, Pandora]);

  expect(result.isPossible);
  expect(result.cost).toBe(82);
})

it('should determine connection', () => {
  const graph = new Graph();

  const Arendelle = new Vertex('Arenedelle');
  const Monstropolis = new Vertex('Monstropolis');
  const Naboo = new Vertex('Naboo');



  graph.addVertex(Arendelle);
  graph.addVertex(Monstropolis);
  graph.addVertex(Naboo);

  graph.addEdge(Arendelle, Monstropolis, 42);
  graph.addEdge(Monstropolis, Naboo, 73);

  const result = getEdges(graph, [Arendelle, Monstropolis, Naboo]);

  expect(result.isPossible).toBe(true);
  expect(result.cost).toBe(225);
})