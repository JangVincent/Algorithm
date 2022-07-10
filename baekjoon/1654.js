let inp = require('fs').readFileSync('t').toString().split('\n').map(v=>v.trim());
let [n, k] = inp.shift().split(' ').map(v => { return Number(v.trim()) })
inp = inp.map(v => +v)

// 줄을 끊는 최소 길이 1
// 줄을 끊는 최대 길이는 필요갯수 1개 일 때 로프중 가장 긴 길이임
let min = 1, max = Math.max(...inp);

//이분탐색 시작
while (min <= max) {
  // 끊는 길이 설정 (이분탐색으로)
  let cut = parseInt((max + min) / 2)

  // 모든 로프들을 끊는 길이로 나누어서 조각들의 갯수를 구함
  let pieces = inp.map(v => parseInt(v / cut)).reduce((acc, c) => acc + c, 0);

  // 조각 갯수가 필요 갯수보다 크면 끊는 점을 +1 함
  if (pieces >= k) {
    min = cut + 1;
  } else {
    // 조각 갯수가 필요 갯수바다 적으면 끊는 점을 -1 함
    max = cut - 1;
  }
}

console.log(max)