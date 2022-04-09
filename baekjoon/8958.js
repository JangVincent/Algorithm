let i = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
i.shift();
for (let k in i) {
  let str = i[k];
  str = str.split("X");
  let p = 0;
  for (let j in str) {
    let l = str[j].length;
    if (l == 0) continue;

    p += (l * (l + 1)) / 2;
  }

  console.log(p);
}
