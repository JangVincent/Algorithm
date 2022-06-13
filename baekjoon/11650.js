let crd = require("fs").readFileSync("test.txt").toString().trim().split("\n");
crd.shift();

crd = crd
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

crd = crd.map((v) => v.join(" "));
console.log(crd.join("\n"));
