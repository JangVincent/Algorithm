let p = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .split(" ")
  .map(Number);

let prime = new Array(1000001).fill(true);

for (let i = 2; i <= p[1] / 2; i++) {
  for (let j = 2 * i; j < p[1] + 1; j += i) {
    if (prime[j]) {
      prime[j] = false;
    }
  }
}

for (let i = p[0]; i < p[1]; i++) {
  if (!prime[i]) console.log(i);
}
