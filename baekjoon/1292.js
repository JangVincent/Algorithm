let range = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split(" ")
  .map(Number);

function returnPartSum(range, flag) {
  let cnt = 0;
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= i; j++) {
      cnt++;
      sum += i;
      if (cnt == range) {
        // flag 가 true이면 startSum, false : endSum
        sum = flag ? sum - i : sum;
        return sum;
      }
    }
  }
}

console.log(returnPartSum(range[1], false) - returnPartSum(range[0], true));
