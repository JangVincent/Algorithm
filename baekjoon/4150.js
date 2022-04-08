let a = require("fs").readFileSync("./test.txt").toString() * 1;

let arr = [1, 1];

function fibo(n) {
  if (n <= 2) {
    return 1;
  }

  if (arr[n]) {
    return arr[n];
  }

  arr[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));

  return arr[n];
}

let str = fibo(a).toString();
console.log(str);
