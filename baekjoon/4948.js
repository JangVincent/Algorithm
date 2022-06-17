let n = require('fs').readFileSync('test.txt').toString().split('\n').map(v => v.trim()*1);
function isPrime(a) {
  for (let i=2;i*i<=a;i++) {
    if (a%i==0) return false;
  }
  return true;
}
for (let i in n) {
  if (n[i]==0) break;
  let n2=n[i]*2;
  let c=0;
  for (let j=n[i]+1;j<=n2;j++) {
    if (isPrime(j)) c++;
  }
  console.log(cnt)
}