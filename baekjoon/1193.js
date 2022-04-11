let n = require("fs").readFileSync("./test.txt").toString().trim() * 1;
let k = n * 1;
let arr = [1];

let layer = undefined;

//진행방향 (t : 좌하 -> 우상, f : 우상 -> 좌하)
let flag = true;
for (let i = 1; i <= k; i++) {
  n -= i;
  if (n <= 0) {
    layer = i;
    if (i % 2 == 0) flag = false;
    break;
  }
}
let top = undefined;
let down = undefined;

if (flag) {
  down = layer + n;
  top = 1 - n;
} else {
  top = layer + n;
  down = 1 - n;
}

console.log(`${top}/${down}`);
