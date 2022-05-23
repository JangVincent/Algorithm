let inp = require("fs").readFileSync("./test.txt").toString().split("\n");
inp.shift();

inp = inp[0].trim().split(" ").map(Number);

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

let answer = 0;
for (let i in inp) {
  if (sol(inp[i])) {
    answer++;
  }
}

console.log(answer);
