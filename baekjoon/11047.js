let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

// 얼마를 만들어야하나
let v = input[0].split(" ")[1] * 1;

// 주어진 동전들
input.shift();
let coins = input.map((v) => v.trim() * 1);

coins.reverse();

let cnt = 0;

while (v > 0) {
  for (let i in coins) {
    let coin = coins[i];
    if (v < coin) {
      continue;
    } else {
      cnt += Math.floor(v / coin);
      v %= coin;
      break;
    }
  }
}

console.log(cnt);
