let string = require('fs').readFileSync('t').toString().split('\n').map(v => v.trim())
string.shift()
let str = string.shift()

let r = 1
let m = 1234567891;
let hash = 0

for (let i in str) {
  hash += (str[i].charCodeAt() - 96) * r
  hash %= m;
  r *= 31;
  r %= m;
}

console.log(hash)
