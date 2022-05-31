let n = require("fs").readFileSync("./test.txt").toString() * 1;

function sum(n) {
  let str = n.toString();

  let sum = n;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    sum += Number(char);
  }

  return sum;
}

let arr = [];
for (let i = 0; i <= 1000000; i++) {
  if (sum(i) == n) {
    arr.push(i);
  }
}

console.log(arr.length == 0 ? 0 : Math.min(...arr));
