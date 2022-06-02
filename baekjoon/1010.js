let cases = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

cases.shift();

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  }

  return factorial(n - 1) * n;
}

for (let i in cases) {
  let str = cases[i].split(" ").map(Number);

  let n = str[0];
  let m = str[1];

  console.log(parseInt(factorial(m) / (factorial(m - n) * factorial(n)) + 0.5));
}
