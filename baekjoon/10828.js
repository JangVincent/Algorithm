let s = [];
let answer = "";

const move = {
  push: function (n) {
    s.push(n);
  },
  top: function () {
    return s.length > 0 ? s[s.length - 1] : -1;
  },
  pop: function () {
    return s.length > 0 ? s.pop() : -1;
  },
  empty: function () {
    return s.length == 0 ? 1 : 0;
  },
  size: function () {
    return s.length;
  },
};

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
  input.map((line) => {
    let c = line.trim().split(" ");
    if (c[0] === "push") {
      move[c[0]](Number(c[1]));
    } else {
      answer += move[c[0]]() + "\n";
    }
  });
  console.log(answer);
  process.exit();
});
