let i = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((i[2] - i[1]) / (i[0] - i[1])));
