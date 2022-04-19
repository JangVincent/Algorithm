let times = require("fs").readFileSync("./test.txt").toString().split("\n");
let cnt = times.shift() * 1;
times = times[0].split(" ").map(Number);
times.sort((a, b) => {
  return a - b;
});

let acc = 0;
let accArr = [];
for (let i in times) {
  acc += times[i];
  accArr.push(acc);
}

console.log(accArr.reduce((acc, v) => (acc += v), 0));
