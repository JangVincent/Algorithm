let ls = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

ls.shift();

ls.sort((a, b) => parseFloat(a) - parseFloat(b));

console.log(ls.join("\n"));
