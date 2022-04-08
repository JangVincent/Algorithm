let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let target = input.shift().split(" ").map(Number)[1];

// 값들
let arr = input[0].split(" ").map(Number);
let cnt = arr.length;
let diff = target * 1;
for (let i = 0; i <= cnt - 3; i++) {
  for (let j = i + 1; j <= cnt - 2; j++) {
    for (let k = j + 1; k <= cnt - 1; k++) {
      let localTotal = arr[i] + arr[j] + arr[k];

      if (localTotal == target) {
        diff = 0;
      }

      if (localTotal < target) {
        let localDiff = target - localTotal;

        if (diff > localDiff) {
          diff = localDiff;
        }
      }
    }
  }
}

console.log(target - diff);
