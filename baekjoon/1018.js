let input = require("fs").readFileSync("./test.txt").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

function compare(str) {
  let black =
    "BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB";
  let white =
    "WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW";

  let cntb = 0,
    cntw = 0;

  for (let i in str) {
    if (str[i] != black[i]) cntb++;
    if (str[i] != white[i]) cntw++;
  }

  return Math.min(cntb, cntw);
}

for (let i in input) {
  input[i] = input[i].trim().split("");
}

let ans = [];

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    let str = "";
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        str += input[k][l];
      }
    }

    ans.push(compare(str));
  }
}

console.log(Math.min(...ans));
