let c = require("fs").readFileSync("./test.txt").toString() * 1;

let arr = [0, 1, 2, 3];

for (let i = 3; i <= c; i++) {
  arr[i] = arr[i - 1] + (arr[i - 2] % 15746);
}

console.log(arr[c]);
