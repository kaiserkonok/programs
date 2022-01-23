const hasPath = (graph, src, dst) => {
  if (src === dst) {
    return true
  }

  console.log("executing..")

  for (let neighbour of graph[src]) {
    if(hasPath(graph, neighbour, dst)) return true
  }

  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

console.log(hasPath(graph, 'f', 'k'))
