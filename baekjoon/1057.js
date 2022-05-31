let [n, k, h] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split(" ")
  .map(Number);

// k 김지만, h 임한수
let totalRound = Math.ceil(Math.log2(n));
let round = 1;
while (true) {
  if (round > totalRound) {
    break;
  }

  if (h + k == 3) {
    break;
  }

  if (h == k) {
    round--;
    break;
  }

  h = Math.ceil(h / 2);
  k = Math.ceil(k / 2);
  round++;
}

if (round > totalRound) {
  console.log(-1);
} else {
  console.log(round);
}
