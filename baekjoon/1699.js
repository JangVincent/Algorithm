// 통과
// let n = require("fs").readFileSync("./test.txt").toString().trim() * 1;

// let arr = new Array(n + 1).fill(undefined);

// arr[1] = 1;
// arr[2] = 2;
// arr[3] = 3;

// for (let i = 1; i * i <= n; i++) {
//   arr[i * i] = 1;
// }

// const sol = (n) => {
//   if (arr[n] != undefined) {
//     return arr[n];
//   }

//   let a = [];
//   for (let i = 2; i * i < n; i++) {
//     a.push(i * i);
//   }

//   a.reverse()

//   arr[n] = Math.min(...a.map((v) => sol(n - v) + 1));
//   return arr[n];
// };

// console.log(sol(n));

let n = require("fs").readFileSync("./test.txt").toString().trim() * 1;

let arr = new Array(n + 1).fill(undefined);

arr[1] = 1;
arr[2] = 2;
arr[3] = 3;

for (let i = 1; i <= n; i++) {
  arr[i] = i;
}

for (let i = 2; i <= n; i++) {
  for (let j = 2; j * j <= i; j++) {
    arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
  }
}

console.log(arr[n]);
