let inf = require('fs').readFileSync('t').toString().split('\n');
let [n, leng] = inf[0].trim().split(' ');
let fList = inf[1].trim().split(' ').map(v => +v).sort((a,b) => a-b)

for (let f of fList) {
  if (f <= leng) {
    leng++;
  }
}

console.log(leng)