let mat = require('fs').readFileSync('test.txt').toString().trim().split('\n')
let [n, m] = mat.shift().split(' ').map(Number);
mat = mat.map(v => { return v.trim().split(' ').map(Number) });
let sum = []
for (let i = 0; i < n; i++) {
  sum[i] = []
  for (let j = 0; j < m; j++) {
    sum[i][j] = mat[i][j] + mat[i+n][j]
  }
}

console.log(sum.map(v=>v.join(' ')).join('\n'))


