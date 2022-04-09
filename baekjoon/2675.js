let i = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
for (let k = 1; k <= i[0] * 1; k++) {
  let s = i[k].split(" ");
  let c = s[0];
  let str = "";
  for (let j = 0; j < s[1].length; j++) {
    let char = s[1][j];
    for (let o = 1; o <= c; o++) {
      str += char;
    }
  }

  console.log(str);
}
