let r = require('fs').readFileSync('test.txt').toString().split('\n').map(Number);
r.shift();
r.sort((a, b) => b-a)

let w = 0;
while (r.length > 0) {
  let partW = r.length * r[r.length - 1];
  w = w < partW ? partW : w;
  r.pop();
}

console.log(w)