// 1.시작정점과 종료정점 입력
// 2. 필요한 데이터 구조
//   - 거리를 저장할 우선순위큐(객체)
//   - 지나온 경로를 저장할 previous 객체
// 3. 우선순위큐에 데이터가 남아있는 동안 반복행동을 한다

//! 시작 정점으로부터 거리 순으로 정점을 저장하는 역할
//! sort메서드로 구현한 기본 우선순위 큐
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

//! 가중치를 가지는 그래프
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {}; // 시작점 -> 정점 거리 저장 역할
    const previous = {}; // 이전 경로 저장 역할

    // 초기 시작점으로부터의 거리, 경로 설정
    for (let vertex in this.adjacencyList) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0); // 우선순위큐에 넣기
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity); // 우선순위큐에 넣기
      }
    }
    // 우선순위큐가 남아있는 동안->아직 방문하지 않은 정점이 있으면
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // 가장 가까운 vertex 선택
      // 가까운 정점이 끝나는 정점이라면
      if (smallest === finish) {
      }
      // 가까운 정점이 주변점과 이어져 있을 때(거리가 무한대가 아니다)
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList;
        }
      }
    }
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
