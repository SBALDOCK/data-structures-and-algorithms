'use strict';

const getEdges = (graph, cityArray) => {
  let cities = graph.adjacencyList.entries();
  let origin;
  let counter = 0;
  while (origin !== cityArray[0] && counter < graph.adjencyList.size) {
    let start = cities.next().value.value;
    if (cityArray[0] === start) {
      origin = start;
    }
    counter++;
    if (!origin) {
      return false;
    }
  }
  let pointer = 1;
  let price = 0;
  while (pointer < cityArray.length - 1) {
    for (let edge of origin.neighbors) {
      if (edge.node1.value !== origin.value && edge.node1.value === cityArray[pointer]) {
        origin = edge.node1;
        pointer++;
        price += edge.weight;
      }
      if (edge.node2.value !== origin.value && edge.node2.value === cityArray[pointer]) {
        origin = edge.node2;
        pointer++;
        price += edge.weight;
      }
      if (edge.node1.value !== cityArray[pointer] && edge.node2.value !== cityArray[pointer]) {
        return false;
      }
    }
  }
  return { true: price };

}

module.exports = getEdges;


