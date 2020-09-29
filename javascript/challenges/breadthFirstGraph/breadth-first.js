'use strict';

const { Graph, Node } = require('../graph/graph.js');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

function breadthFirst() {
  const graph = new Graph();
  const start = new Node();
  graph.addNode(start);
  let visited = [];
  let queue = new Queue();
  queue.enqueue(start);
  visited.push(start);

  while (!queue.isEmpty()) {
    let front = queue.dequeue();

    console.log('visited 1: ', visited);
    this.edges[front.value].forEach(vertex => {
      console.log('vertex: ', vertex);
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        queue.enqueue(vertex);
      }
    });

  }
  return visited;
}

module.exports = breadthFirst();

