let k = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ar = [];
for (let i = 1; i <= k[0]; i++) {
  ar[i - 1] = i;
}
let pos = 0;
let ans = [];
while (ar.length > 0) {
  if (k[1] + pos > ar.length) {
    pos = ((k[1] + pos) % ar.length) - 1;
    if (pos < 0) pos += ar.length;
  } else {
    pos = pos + k[1] - 1;
  }

  ans.push(ar[pos]);
  ar.splice(pos, 1);
}

console.log("<" + ans.join(", ") + ">");
