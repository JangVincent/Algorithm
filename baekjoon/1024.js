let [n, l] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let founded = false;
let answer = undefined;

for (let i = l; i <= 100; i++) {
  let t = (i * (i - 1)) / 2;

  if ((n - t) % i == 0 && (n - t) / i >= 0) {
    answer = {
      start: (n - t) / i,
      count: i,
    };
    founded = true;
    break;
  }
}

if (founded) {
  let str = "";
  for (let i = answer.start; i < answer.start + answer.count; i++) {
    str += i + " ";
  }
  console.log(str);
} else {
  console.log(-1);
}
