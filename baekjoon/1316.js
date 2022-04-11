let ls = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

ls.shift();

function groupCheck(str) {
  let arr = str.split("");
  let char = "$";
  let compareArr = [];
  let set = new Set(arr);

  for (let i in arr) {
    if (char != arr[i]) {
      compareArr.push(arr[i]);
      char = arr[i];
    }
  }

  return set.size == compareArr.length ? true : false;
}

let cnt = 0;
for (let i in ls) {
  if (groupCheck(ls[i])) cnt++;
}

console.log(cnt);
