let i = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split(" ")
  .map(Number);

let s = i[0] + i[1];
let mi = i[0] - i[1];
let mul = i[0] * i[1];
let div = Math.floor(i[0] / i[1]);
let re = i[0] % i[1];
console.log(s + "\n" + mi + "\n" + mul + "\n" + div + "\n" + re);
