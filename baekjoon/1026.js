let nums = require("fs").readFileSync("./test.txt").toString().split("\n");
nums.shift();

let arr = nums[0].split(" ").map(Number);
let brr = nums[1].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});
brr.sort((a, b) => {
  return b - a;
});

let sum = 0;

for (let i in arr) {
  sum += arr[i] * brr[i];
}

console.log(sum);
