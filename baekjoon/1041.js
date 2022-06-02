let [n, surface] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

surface = surface.trim().split(" ").map(Number);

if (n == 1) {
  let max = Math.max(...surface);
  console.log(
    surface.reduce((acc, cur) => {
      acc = cur == max ? acc + 0 : acc + cur;
      return acc;
    }, 0)
  );
} else {
  let [a, b, c, d, e, f] = surface;
  let arr = [];
  arr[0] = Math.min(a, f);
  arr[1] = Math.min(b, e);
  arr[2] = Math.min(c, d);

  arr.sort((a, b) => a - b);

  let minOf1Surface = arr[0];
  let minOf2Surface = arr[0] + arr[1];
  let minOf3Surface = minOf2Surface + arr[2];

  console.log(
    minOf3Surface * 4 +
      minOf2Surface * (4 * (n - 2) + 4 * (n - 1)) +
      minOf1Surface * (4 * (n - 1) * (n - 2) + (n - 2) * (n - 2))
  );
}
