let tree = require('fs').readFileSync('t').toString().split("\n")[1].trim().split(' ').map(v => +v);


tree.sort((a, b) => b - a);
console.log(tree)

let d = tree[0]+1;
for (let i = 1; i < tree.length; i++) {
  if (d < i + tree[i]+1) {
    d = i+tree[i]+1
  }
}

console.log(d+1)