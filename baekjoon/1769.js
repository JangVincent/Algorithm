let x = require("fs").readFileSync("./test.txt").toString().trim();

let cnt = 0;
let result = undefined;
function reduceX(x) {
  if (Number(x) < 10) {
    result = x;
    return;
  }

  let sum = 0;
  for (let i in x) {
    sum += x[i] * 1;
  }
  cnt++;
  reduceX(String(sum));
}

reduceX(x);
console.log(cnt + "\n" + (result % 3 == 0 ? "YES" : "NO"));
