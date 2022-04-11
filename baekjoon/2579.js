let stair = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = stair.shift();
let score = new Array(n).fill(0);
score[0] = stair[0];
score[1] = Math.max(stair[0] + stair[1], stair[1]);
score[2] = Math.max(stair[0] + stair[2], stair[1] + stair[2]);

for (let i = 3; i < n; i++) {
  score[i] = Math.max(
    stair[i] + stair[i - 1] + score[i - 3],
    stair[i] + score[i - 2]
  );
}

console.log(score[n - 1]);
