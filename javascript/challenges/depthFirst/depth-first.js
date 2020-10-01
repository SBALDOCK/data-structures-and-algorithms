'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues');
const { Graph } = require('../graph/graph');

function depthFirst(startingVertex) {
  let visitList = new Stack();
  let visited = new Map();
  visitList.add(startingVertex);

  while (!visitList.isEmpty()) {
    const vertex = visitList.remove();
    if (vertex && !visited.has(vertex)) {
      return vertex;
      visited.set(vertex);
      vertex.getNeighbors().forEach(adj => visitList.add(adj));
    }
  }
  return visitList;
}

module.exports = depthFirst;