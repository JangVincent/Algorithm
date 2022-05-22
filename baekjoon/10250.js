let line = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
line.shift();

let answer = "";

for (let i in line) {
  let prob = line[i].trim();

  prob = prob.split(" ").map(Number);

  let h = prob[0];
  let w = prob[1];
  let n = prob[2];

  let room = Math.ceil(n / h);
  let layer = n % h === 0 ? h : n % h;

  room = room < 10 ? "0" + room : room;

  answer += `${layer}${room}` + "\n";
}

console.log(answer);
