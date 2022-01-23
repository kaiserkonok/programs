const undirectedGraph = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)

  return hasPath(graph, nodeA, nodeB)
}

const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true

  if (visited.has(src)) return false

  visited.add(src)

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visited) === true) {
      return true
    }
  }

  return false
}

const buildGraph = (edges) => {
  let graph = {}

  for (let edge of edges) {
    const [nodeA, nodeB] = edge

    if (!graph[nodeA]) {
      graph[nodeA] = []
    }

    if (!graph[nodeB]) {
      graph[nodeB] = []
    }

    graph[nodeA].push(nodeB)
    graph[nodeB].push(nodeA)
  }

  return graph
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(buildGraph(edges))
