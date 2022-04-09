let i = require("fs").readFileSync("./test.txt").toString().trim();
let ar = new Array(26).fill(-1);
for (let j in i) {
  let idx = i[j].charCodeAt() - 97;
  ar[idx] = i.indexOf(i[j]);
}
console.log(...ar);
