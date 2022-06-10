let table = require("fs").readFileSync("test.txt").toString().split("\n");
table.shift();

table = table.map((v) => (v = v.trim().split(" ").map(Number)));
// 회의가 끝나는 시간을 기준으로 정렬
table.sort((a, b) => {
  let piv = a[1] - b[1];
  if (piv == 0) {
    return a[0] - b[0];
  } else {
    return piv;
  }
});

let cnt = 1;
let endTime = table[0][1];
for (let i = 1; i < n; i++) {
  if (endTime <= table[i][0]) {
    endTime = table[i][1];
    cnt += 1;
  }
}

console.log(cnt);
