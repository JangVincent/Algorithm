let s = require('fs').readFileSync('test.txt').toString().trim();
s=s.replaceAll(/XXXX/g, 'AAAA')
s=s.replaceAll(/XX/g, 'BB')
console.log(s.indexOf('X') > -1 ? -1 : s)