let p = require('fs').readFileSync('test.txt').toString().trim().split('\n');
p = p.map(v => v.trim());
let [n, m] = p.shift().split(' ').map(v => +v)
let ans = [];

let hear = {};
for (let i = 0; i < n; i++)
  hear[p[i]] = 1;

for (let i = n; i < n + m; i++)
  if (hear[p[i]] == 1)
    ans.push(p[i])

console.log(ans.length+'\n'+ans.sort().join('\n'))