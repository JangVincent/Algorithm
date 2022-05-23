let [m, n] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function sol(n) {
  if (n == 1) {
    return false;
  }

  let flag = true;
  for (let i = 2; i <= Math.round(n / 2); i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

let cnt = 0;
let total = 0;
let min = n;
for (let i = m; i <= n; i++) {
  if (sol(i)) {
    cnt++;
    total += i;
    min = min >= i ? i : min;
  }
}

console.log(cnt > 0 ? `${total}\n${min}` : -1);
