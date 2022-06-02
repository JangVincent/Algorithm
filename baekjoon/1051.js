let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.shift().split(" ").map(Number);

let maxWidth = Math.min(n, m);

for (let i in input) {
  input[i] = input[i].trim().split("").map(Number);
}

let maxSquareWidth = 0;
for (let w = maxWidth; w >= 0; w--) {
  for (let i = 0; i + w < n; i++) {
    for (let j = 0; j + w < m; j++) {
      let lt = input[i][j];
      let rt = input[i][j + w];
      let ld = input[i + w][j];
      let rd = input[i + w][j + w];

      // console.log(w, lt, rt, ld, rd);
      if (lt == rt && ld == rd && rt == ld) {
        maxSquareWidth = maxSquareWidth < w ? w : maxSquareWidth;
      }
    }

    // console.log("\n");
  }
}

console.log(Math.pow(maxSquareWidth + 1, 2));
