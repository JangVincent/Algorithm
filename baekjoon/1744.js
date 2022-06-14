let arr = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number)
arr.shift();

let pos = arr.filter(v => v > 0).sort((a, b) => b - a);
let neg = arr.filter(v => v <= 0).sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < pos.length; i+=2) {
  if (i == pos.length - 1) sum += pos[i];
  else {
    let s = pos[i] + pos[i + 1]
    let m = pos[i] * pos[i + 1]
    sum += s > m ? s : m
  } 
}

for (let i = 0; i < neg.length; i += 2) {
  sum += (i==neg.length-1) ? neg[i] : neg[i] * neg[i + 1];
}

console.log(sum)