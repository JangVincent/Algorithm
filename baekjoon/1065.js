let n = require("fs").readFileSync("./test.txt").toString() * 1;

function hansoo(n) {
  if (n < 10) return true;

  let str = n.toString();
  str = str.split("").map(Number);

  let d = undefined;

  for (let i = 1; i < str.length; i++) {
    let a = str[i];
    let b = str[i - 1];

    if (d == undefined) {
      d = b - a;
    } else {
      d = d === b - a ? b - a : undefined;

      if (d == undefined) {
        break;
      }
    }
  }

  return d !== undefined ? true : false;
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (hansoo(i)) {
    cnt++;
  }
}

console.log(cnt);
