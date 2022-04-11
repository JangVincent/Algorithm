let n = require("fs").readFileSync("./test.txt").toString().trim() * 1;
let str = [];
// s = start
// t = through
// d = destination

const hanoi = (n, s, t, d) => {
  if (n == 1) {
    str.push(`${s} ${d}`);
    return;
  }

  hanoi(n - 1, s, d, t);
  str.push(`${s} ${d}`);
  hanoi(n - 1, t, s, d);
};

console.log(Math.pow(2, k) - 1);
hanoi(k, 1, 2, 3);
console.log(str.join("\n"));

// 메모이제이션
// let n = require("fs").readFileSync("./test.txt").toString().trim() * 1;
// oa = ["1 3", "3 2", "2 1"];
// ea = ["1 2", "2 3", "3 1"];
// arr = [[], ["1 3"], ["1 2", "1 3", "2 3"]];
// for (let j = 3; j <= n; j++) {
//   if (!arr[j]) {
//     arr[j] = [];
//   }
//   let cnt = Math.pow(2, j) - 1;
//   let io = j % 2 != 0 ? true : false;
//   let oea = io ? oa : ea;
//   let oeai = 0;
//   for (let i = 1; i <= cnt; i++) {
//     if (i % 2 == 0) {
//       arr[j].push(arr[j - 1][i / 2 - 1]);
//     } else {
//       arr[j].push(oea[oeai]);
//       oeai++;
//       if (oeai == 3) oeai -= 3;
//     }
//   }
// }
// console.log(Math.pow(2, n) - 1);
// console.log(arr[n].join("\n"));
