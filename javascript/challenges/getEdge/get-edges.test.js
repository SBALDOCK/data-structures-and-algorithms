'use strict';

const getEdges = require('./get-edges')
const Graph = require('../graph/graph');

const graph = new Graph();
let Pandora = graph.addNode('Pandora');
let Metroville = graph.addNode('Metroville');
let Narnia = graph.addNode('Narnia');
let Arendelle = graph.addNode('Arendelle');
let Naboo = graph.addNode('Naboo');
let Monstropolis = graph.addNode('Monstropolis');
graph.addEdge(Pandora, Arendelle, 150);
graph.addEdge(Pandora, Metroville, 82);
graph.addEdge(Metroville, Arendelle, 99);
graph.addEdge(Narnia, Metroville, 37);
graph.addEdge(Metroville, Naboo, 26);
graph.addEdge(Narnia, Naboo, 250);
graph.addEdge(Metroville, Monstropolis, 105);
graph.addEdge(Monstropolis, Naboo, 73);
graph.addEdge(Monstropolis, Arendelle, 42);


// describe('get edge tests', () => {
//   it('should work for happy path inputs', () => {
//     expect(getEdges(graph, [Metroville, Pandora])).toBe('True, $82')
//     expect(getEdges(graph, [Arendelle, Monstropolis, Naboo])).toBe('True, $115')
//   });
// });