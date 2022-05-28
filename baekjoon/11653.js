let a = require("fs").readFileSync("./test.txt").toString().trim() * 1;

let answer = [];

let idx = 2;

while (a > 1) {
  if (a % idx == 0) {
    answer.push(idx);
    a = parseInt(a / idx);
  } else {
    idx++;
  }
}

console.log(answer.join("\n"));
