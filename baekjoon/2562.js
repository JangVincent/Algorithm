let a = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map(Number);
let m = Math.max(...a);
console.log(m);
console.log(a.indexOf(m));
