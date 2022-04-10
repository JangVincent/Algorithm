let i = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);

i.sort((a, b) => {
  if (a * 1 > b * 1) {
    return 1;
  } else {
    return -1;
  }
});
console.log(i[0] * i[i.length - 1]);
