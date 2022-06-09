let [n, r] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(n, r);

function factorial(n) {
  if (n < 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(n) / (factorial(r) * factorial(n - r)));
