let x = require("fs").readFileSync("./test.txt").toString().split("\n");
console.log(
  String(x[1])
    .split("")
    .map(Number)
    .reduce((a, c) => {
      return (a += c * 1);
    })
);
