let n = require('fs').readFileSync('test.txt').toString().split('\n').map(v => v.trim() * 1);
n.shift();
function isPrime(a) {
  for (let i=2;i*i<=a;i++) {
    if (a % i == 0) return false;
  }
  return true;
}
for (let i in n) {
  for (let k = n[i] / 2; k >= 2; k--) {
    if (isPrime(k) && isPrime(n[i]-k)) {
        console.log(`${k} ${n[i]-k}`)
        break;
    }
  }
}
