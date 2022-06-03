let [a, b] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let m = 0,
  ans = a * b;

let range1 = a < b ? a : b;
let range2 = a < b ? b : a;

for (let i = 0; i <= range1; i++) {
  if (a % i == 0 && b % i == 0) {
    if (m < i) {
      m = i;
    }
  }
}

for (let j = a * b; j >= range2; j--) {
  if (j % a == 0 && j % b == 0) {
    if (j < ans) {
      ans = j;
    }
  }
}

console.log(m + "\n" + ans);
