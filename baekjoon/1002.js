let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = input.shift();

let arr = [];
for (let i = 0; i < count; i++) {
  let str = input[i];
  str = str.trim().split(" ").map(Number);

  let l = Math.pow(str[0] - str[3], 2) + Math.pow(str[1] - str[4], 2);
  let r = Math.pow(str[2] + str[5], 2);
  let r2 = Math.pow(str[2] - str[5], 2);

  // 원의 중심이 같을 때
  if (l == 0) {
    // 반지름이 같다면
    if (str[2] == str[5]) {
      // 무한대
      arr.push(-1);
      continue;
    } else {
      arr.push(0);
      continue;
    }
  } else {
    // 원의 중심이 다르고
    if (l == r || l == r2) {
      // 반지름의 합의 제곱이 거리의 제곱과 같으면 교점 1개
      arr.push(1);
      continue;
    } else if (l > r || l < r2) {
      // 반지름의 합의 제곱이 거리의 제곱보다 작으면 교점 0개
      arr.push(0);
      continue;
    } else if (l < r) {
      // 반지름의 합의 제곱이 거리의 제곱과 크면 교점 2개
      arr.push(2);
      continue;
    }
  }
}

console.log(arr.join("\n"));
