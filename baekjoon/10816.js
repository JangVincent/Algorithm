let data = require("fs").readFileSync("test.txt").toString().trim().split("\n");
let arr_n = data[1].trim().split(" ");
let arr_m = data[3].trim().split(" ");

let arrp = new Array(data[0] * 1 + 1).fill(undefined);
let arrn = new Array(data[0] * 1 + 1).fill(undefined);

class d {
  constructor(n, c) {
    this.n = n;
    this.c = c;
  }
}

for (let i in arr_n) {
  let n = arr_n[i] * 1;

  if (n < 0) {
    if (arrn[n * -1] != undefined) {
      arrn[n * -1].c++;
    } else {
      arrn[n * -1] = new d(n, 1);
    }
  } else {
    if (arrp[n] != undefined) {
      arrp[n].c++;
    } else {
      arrp[n] = new d(n, 1);
    }
  }
}

let ans = [];
for (let i in arr_m) {
  let f = arr_m[i] * 1;

  if (f < 0) {
    if (arrn[f * -1] != undefined) {
      ans.push(arrn[f * -1].c);
    } else ans.push(0);
  } else {
    if (arrp[f] != undefined) {
      ans.push(arrp[f].c);
    } else ans.push(0);
  }
}

console.log(ans.join(" "));
