let s = require('fs').readFileSync('t').toString() * 1;
let b = [300,60,10]
let ans = [0, 0, 0]

for (let i in b) {
  ans[i] = parseInt(s / b[i]);
  s %= b[i]
}


// ans[0] = parseInt(s / 300);
//   s %= 300
// ans[1] = parseInt(s / 60);
// s %= 60;
// ans[2] = parseInt(s / 10);
// s %= 10;

if (s != 0) {
  console.log(-1)
} else {
  console.log(ans.join(' '))
}
