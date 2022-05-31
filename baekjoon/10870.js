let n = require("fs").readFileSync("./test.txt").toString() * 1;

function fibo(n) {
  if (n <= 1) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(n));
