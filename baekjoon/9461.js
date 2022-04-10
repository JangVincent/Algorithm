// let lines = require("fs")
//   .readFileSync("./test.txt")
//   .toString()
//   .split("\n")
//   .map(Number);
// lines.shift();

// let str = [];
// for (let i in lines) {
//   let line = lines[i];

//   let arr = [0, 1, 1, 1];

//   for (let k = 4; k <= line; k++) {
//     arr[k] = arr[k - 2] + arr[k - 3];
//   }

//   str.push(arr[line]);
// }

// console.log(str.join("\n"));

const [n, ...arr] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...arr);

let dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= max + 1; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

arr.forEach((v) => {
  console.log(dp[v - 1]);
});
