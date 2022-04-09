let i = require("fs").readFileSync("./test.txt").toString().split("\n");
for (let k in i) {
  let s = i[k].split(" ").reduce((a, c) => (a += c * 1), 0);
  if (s == 0) break;
  console.log(s);
}
