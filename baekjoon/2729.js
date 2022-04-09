const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  for (let k in input) {
    let arr = input[k].split(" ");
    let b1 = BigInt("0b" + arr[0]);
    let b2 = BigInt("0b" + arr[1]);
    console.log((b1 + b2).toString(2));
  }
  process.exit();
});
