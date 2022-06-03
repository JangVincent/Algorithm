let inp = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

let ans = [];
for (let i = 0; i < inp.length - 1; i++) {
  let cases = inp[i].trim().split(" ");

  if (cases[0] == 0) {
    break;
  }

  cases.sort((a, b) => {
    return a - b;
  });

  if (Math.pow(cases[0], 2) + Math.pow(cases[1], 2) == Math.pow(cases[2], 2)) {
    ans.push("right");
  } else {
    ans.push("wrong");
  }
}

console.log(ans.join("\n"));
