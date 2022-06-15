str = require('fs').readFileSync('test.txt').toString().trim().split('-');
sum = 0
for (let i in str) {
  t = str[i].split('+').reduce((acc, c) => { return acc += +c }, 0);
  sum += i==0 ? t : -t
}
console.log(sum)