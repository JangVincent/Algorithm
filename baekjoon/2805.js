let inp = require('fs').readFileSync('t').toString().split('\n')
let [n, m] = inp.shift().split(' ').map(v => { return Number(v.trim()) })
inp = inp[0].split(' ').map(Number)

let min = 1, max = Math.max(...inp)

console.log(inp)

while (min <= max) {
  let cut = parseInt((min + max) / 2);
  let remain = inp.map(v => {
    if (v - cut < 0) {
      return 0
    } else {
      return v - cut;
    }
  }).reduce((acc, c) => acc + c, 0)
  
  
  
  if(remain >= m) {
    min = cut + 1;
  } else if(remain < m) {
    max = cut-1
  }
}

console.log(max)