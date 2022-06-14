a = require('fs').readFileSync('/dev/stdin').toString()*1
for (let i = 1;; i++)
  if ((i*i+i)/2 > a) {console.log(--i); break;}