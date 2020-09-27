const { Edge, Node, Graph } = require('./graph');

it('should add a new node to graph', () => {
  const node = new Node();
  const graph = new Graph();
  graph.addNode(node);
  expect(graph.AdjList).toContain(node);
})

it('should add an edge to graph', () => {
  const graph = new Graph();
  const edge = new Edge();
  graph.addEdge(edge)
  expect(graph.edges).toContain(edge)
})