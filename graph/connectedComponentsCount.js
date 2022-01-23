const connectedComponentsCount = (graph) => {
  const visited = new Set()

  let count = 0

  for (let node in graph) {
    if (explore(graph, node, visited)) count += 1
  }

  return count
}


const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false
  visited.add(String(node))

  for (let neighbour of graph[node]) {
    explore(graph, neighbour, visited)
  }

  return true
}

console.log(connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}))
