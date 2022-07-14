const graph = {
  'A': ['B', 'C', 'D'],
  'B': ['E', 'F'],
  'C': ['G'],
  'D' : ['H', 'I'],
  'E': ['J'],
  'F': [],
  'G': ['K'],
  'H': [],
  'I': [],
  'J': [],
  'K' : []
};

const dfs = (graph, start) => {
  let visited = []; // 이미 방문한 노드 저장 
  let needVisit = [];  // 앞으로 탐색해야 하는 노드 저장 (stack으로 구현해야함)
  
  needVisit.push(start);  // 시작노드부터 탐색 시작
  
  // 탐색해야 하는 노드가 아직 남아있다면
  while(needVisit.length !== 0){
    let node = needVisit.shift()  // stack이므로 후에 들어온 것부터 선출
    if(!visited.includes(node)){
      visited.push(node);
      needVisit = [...graph[node], ...needVisit] // 깊이 우선(자식우선) 이므로 자식을 미방문 큐의 앞쪽에 넣는다.
    }
  }
  return visited.join(' ');
}


const bfs = (graph, start) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(start)

  while (needVisit.length != 0) {
    const node = needVisit.shift(); // queue 먼저 들어온 것 대로 선출
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]]; // 레이어 우선이므로 자식들을 뒤에 넣는다
    }
  }

  return visited.join(' ');
}

console.log('DFS : ' + dfs(graph, "A"));
console.log('BFS : ' + bfs(graph, "A"));