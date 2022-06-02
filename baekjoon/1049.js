let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.shift().split(" ").map(Number);

let [min6, min1] = [undefined, undefined];

for (let i in input) {
  let str = input[i].trim().split(" ").map(Number);
  if (min6 == undefined) {
    min6 = str[0];
    min1 = str[1];
  }

  if (str[0] < min6) {
    min6 = str[0];
  }

  if (str[1] < min1) {
    min1 = str[1];
  }
}

// 딱맞춰서 n 개를 살 때
let pack = Math.ceil(n / 6) * min6;
let mix = parseInt(n / 6) * min6 + (n % 6) * min1;
let all1 = n * min1;

// n 개를 살 때

console.log(Math.min(pack, mix, all1));
