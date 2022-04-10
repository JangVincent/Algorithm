let line = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

let count = line.shift() * 1;

function vps(str) {
  let result = true;
  let stack = [];
  for (let i in str) {
    let char = str[i];
    if (char == "(") {
      stack.push(char);
    } else {
      if (stack.pop() == undefined) {
        result = false;
        break;
      }
    }
  }

  if (stack.length != 0) {
    result = false;
  }

  console.log(result ? "YES" : "NO");
}

for (let i = 1; i <= count; i++) {
  vps(line[i - 1]);
}
