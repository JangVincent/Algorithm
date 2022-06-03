// let [n, arrn, m, arrm] = require("fs")
//   .readFileSync("./test.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const bSearch = (arr, t, l, r) => {
//   while (l <= r) {
//     let idx = Math.floor((l + r) / 2);
//     if (arr[idx] == t) {
//       return 1;
//     } else {
//       if (arr[idx] > t) {
//         r = idx - 1;
//       } else {
//         l = idx + 1;
//       }
//     }
//   }

//   return 0;
// };

// arrn = arrn.trim().split(" ").sort();
// arrm = arrm.trim().split(" ");

// let ans = [];
// for (let i in arrm) {
//   let target = arrm[i];
//   ans.push(bSearch(arrn, target, 0, arrn.length));
// }

// console.log(ans.join("\n"));

let ip = require("fs").readFileSync("./test.txt").toString().split("\n");
let s = new Set(ip[1].trim().split(" "));
let a = ip[3].trim().split(" ");
let ans = [];
a.map((v) => ans.push(s.has(v) ? 1 : 0));
console.log(ans.join("\n"));
