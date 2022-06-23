let n = require('fs').readFileSync('test.txt').toString().trim().split('').map(Number);
if (n.indexOf(0) == -1 || n.reduce((acc, c) => { return acc += c; },0) %3 !=0) {
  console.log(-1);
} else {
  n.sort((a, b) => b - a);
  console.log(n.join(''))
}
