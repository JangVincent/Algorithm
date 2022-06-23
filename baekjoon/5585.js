let k = 1000-require('fs').readFileSync('test.txt').toString()*1
let c = [500,100,50,10,5,1];
let cnt = 0;
c.forEach((v) => {
  cnt += parseInt(k / v)
  k = k % v
});
console.log(cnt)
