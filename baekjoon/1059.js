let input = require("fs").readFileSync("test.txt").toString().split("\n");

input.shift();

let setS = input[0].trim().split(" ").map(Number);
let n = input[1] * 1;

setS.sort((a, b) => a - b);

let minMax = setS[0];
let overMin = setS[setS.length - 1];

let included = false;

for (let i in setS) {
  let s = setS[i];

  if (s > n) {
    overMin = overMin > s ? s : overMin;
  } else if (s < n) {
    minMax = minMax < s ? s : minMax;
  } else {
    included = true;
  }
}

if (included) {
  console.log(0);
} else {
  if (overMin == minMax) {
    console.log(n * (overMin - n) - 1);
  } else {
    console.log(included ? 0 : (n - minMax) * (overMin - n) - 1);
  }
}
