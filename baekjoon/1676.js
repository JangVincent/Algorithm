let k = require("fs").readFileSync("./test.txt").toString() * 1;

let f = [1, 1, 2];

for (let i = 1; i <= k; i++) {
  f[i] = BigInt(f[i - 1]) * BigInt(i);
}

let str = f[k].toString().split("").reverse();
let cnt = 0;
for (let i in str) {
  if (str[i] != "0") {
    break;
  }
  cnt++;
}

console.log(cnt == undefined ? 0 : cnt);
