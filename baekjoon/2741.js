let i = require("fs").readFileSync("./test.txt").toString().trim() * 1;
let s = "";
for (let k = 1; k <= i; k++) {
  s += String(i);
  if (k != i) s += "\n";
}
c;
