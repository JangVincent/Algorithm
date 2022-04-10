let input = require("fs").readFileSync("./test.txt").toString().split("\n");
input.shift();

input = input[0].split(" ").map(Number);

let dp = [input[0]];

for (let i = 1; i < input.length; i++) {
  dp[i] = input[i] > dp[i - 1] + input[i] ? input[i] : dp[i - 1] + input[i];
}

console.log(Math.max(...dp));
