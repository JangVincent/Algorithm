let p = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map(Number);
let a = p[0];
let s = p[1];
if (a > 0 && s > 0) {
  console.log(1);
}
if (a > 0 && s < 0) {
  console.log(4);
}
if (a < 0 && s > 0) {
  console.log(2);
}
if (a < 0 && s < 0) {
  console.log(3);
}
