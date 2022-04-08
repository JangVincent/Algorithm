let input = require("fs").readFileSync("./test.txt").toString();

let alphaArr = new Array(27).fill(0);

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  let ascii = char.charCodeAt();

  if (ascii >= 97) {
    // 소문자의 경우
    alphaArr[ascii - 96]++;
  } else {
    // 대문자의 경우
    alphaArr[ascii - 64]++;
  }
}

let max = Math.max(...alphaArr);
let cnt = 0;
let idx = -1;
for (let i = 1; i < 27; i++) {
  if (alphaArr[i] == max) {
    cnt++;
    idx = i;

    if (cnt > 1) {
      break;
    }
  }
}

if (cnt > 1) {
  console.log("?");
} else if (cnt == 1) {
  console.log(String.fromCharCode(64 + idx));
}
