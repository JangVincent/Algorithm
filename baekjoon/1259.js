let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

const sol = (str) => {
  let ans = true;

  for (let k in str) {
    let char = str[k];
    let char2 = str[str.length - k - 1];

    if (char != char2) {
      ans = false;
      break;
    }
  }

  return ans;
};

for (let i in input) {
  let str = input[i].toString().trim();

  if (str == "0") break;

  let ans = sol(str);

  console.log(ans ? "yes" : "no");
}
