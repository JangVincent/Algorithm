let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

let visit = new Set();
let result = 0;
const dfs = (n) => {
  if (visit.has(n)) {
    return;
  }

  visit.add(n);
  result++;

  node[n].forEach((e) => {
    if (!visit.has(e)) {
      dfs(e);
    }
  });
};

input.shift();
let size = input.shift();

input = input.map((v) => v.trim().split(" ").map(Number));

let node = new Array(size + 1);

for (let i in input) {
  let [a, b] = input[i];
  if (node[a] == undefined) {
    node[a] = [];
  }

  if (node[b] == undefined) {
    node[b] = [];
  }

  node[a].push(b);
  node[b].push(a);
}

dfs(1);

console.log(result - 1);
