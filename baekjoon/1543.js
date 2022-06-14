s = require('fs').readFileSync('test.txt').toString().split('\n')
r = s[0].match(new RegExp(`${s[1]}`,'g'))
console.log(r == null ? 0 : r.length)