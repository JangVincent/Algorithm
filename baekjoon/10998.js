console.log(
  require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split(" ")
    .reduce((a, c) => (a *= c))
);
