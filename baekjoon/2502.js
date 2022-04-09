let d_c = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = [0, 1, 1];
const fibo = (n) => {
  if (n <= 2) {
    return 1;
  }

  if (arr[n]) {
    return arr[n];
  }
  arr[n - 1] = fibo(n - 1);
  arr[n - 2] = fibo(n - 2);
  return arr[n - 1] + arr[n - 2];
};

const findCake = (fa, fb, cake) => {
  for (let i = 1; i <= cake; i++) {
    for (let j = 1; j <= cake; j++) {
      if (fa * i + fb * j == cake) {
        return i + "\n" + j;
      }
    }
  }
};

let d = d_c[0];
let cake = d_c[1];

fibo(31);

let fa = arr[d - 1];
let fb = arr[d - 2];

console.log(findCake(fb, fa, cake));
