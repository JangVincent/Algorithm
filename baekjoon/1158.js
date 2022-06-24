let [n, k] = require('fs').readFileSync('t').toString().trim().split(' ').map(v => +v);

class Node {
  constructor(v) {
    this.v = v;
    this.next = undefined;
    this.prev = undefined;
  }
}

let cnt = n;

let start = new Node(1);
let tail = start;
for (let i = 2; i <= n; i++) {
  let newNode = new Node(i);
  tail.next = newNode;
  newNode.prev = tail;
  tail = newNode;
}

tail.next = start;
start.prev = tail;

let ans = []
let node = start;
while (true) {

  if (cnt == 0) {
    break;
  }

  for (let i = 1; i < k; i++) {
    node = node.next;
  }

  node.next.prev = node.prev;
  (node.prev).next = node.next;

  ans.push(node.v);
  node = node.next;

  cnt--;
}

console.log(`<${ans.join(', ')}>`)