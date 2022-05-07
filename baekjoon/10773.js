let line = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

line.shift();
let arr = [];

for (let i in line) {
  if (line[i] != 0) {
    arr.push(line[i]);
  } else {
    arr.pop();
  }
}

console.log(arr.reduce((acc, c) => acc + c, 0));
