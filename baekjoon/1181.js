let line = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
let count = line.shift() * 1;

let set = new Set(line);
line = [...set];
line.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }

  if (a.length == b.length) {
    let arr = [a, b];
    arr.sort();
    if (a == arr[0]) {
      return -1;
    } else {
      return 1;
    }
  }
});
console.log(...line);
