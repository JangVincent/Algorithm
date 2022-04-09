let i = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
console.log(
  new Set(
    i.map((v) => {
      return (v * 1) % 42;
    })
  ).size
);
