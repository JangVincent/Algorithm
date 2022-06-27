let d = require('fs').readFileSync('t').toString().trim().split('\n').map(Number);
d.shift();

let sum = 0;

d.reverse();
for (let i = 1; i < d.length; i++) {
  if (d[i] >= d[i-1]) {
    let df =  (d[i] - d[i-1] + 1);
    d[i] -= df;
    sum += df;
  }
}

console.log(sum)