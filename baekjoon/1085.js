let coord = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split(" ")
  .map(Number);

coord = [coord[0], coord[1], coord[2] - coord[0], coord[3] - coord[1]];

console.log(Math.min(...coord));
