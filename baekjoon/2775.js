// 1 7 10 20 35
// 1 3 6 10 15 21
// 1 2 3 4 5 6 7 8 9 10

let [n, ...inp] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split("\n")
  .map(Number);

function sol(k, n) {
  let arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  //0층
  for (let i = 1; i <= n; i++) {
    arr[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  console.log(arr[k][n]);
}

for (let i = 1; i < inp.length; i += 2) {
  let k = inp[i - 1];
  let n = inp[i];

  sol(k, n);
}
