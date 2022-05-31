let n = require("fs").readFileSync("./test.txt").toString() * 1;

function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let answer = factorial(12);

console.log(answer);
