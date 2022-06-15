let s=require('fs').readFileSync('test.txt').toString().trim();
let z=(s.match(new RegExp(/0{1,}/g))||[]).length
let o=(s.match(new RegExp(/1{1,}/g))||[]).length
console.log(z>o?o:z)