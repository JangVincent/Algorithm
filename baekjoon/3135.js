let input = require('fs').readFileSync('t').toString().split('\n');
let [a, b] = input.shift().trim().split(' ').map(Number);
let n = input.shift();
input = input.map(v => Number(v.trim()))

let p = Math.abs(b-a)

for (let i = 0; i < n; i++) {
  p = Math.min(Math.abs(b-input[i])+1, p)
}

console.log(p)