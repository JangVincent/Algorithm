let w = require('fs').readFileSync('test.txt').toString().split('\n').map(v => v.trim())
w.shift();
let arr = new Array(8).fill('')

// arr 에는 각 자리수 합 문자열 들어감.
for (let i in w) {
  let t =w[i].split('').reverse();
  for (let j in t) {
    arr[j]+=t[j]
  }
}

let alpha = {}
// 빈 원소 삭제
arr = arr.filter(v => v != '');

// arr 순회하면서
for (let i in arr) {
  let str = arr[i];

  // 각 자리수에 포함된 문자마다 가중치 넣어줌
  /* ex : ABC+BC라면
  {
    A : 100
    B : 20
    C : 2
  }*/
  for (let k in str) {
    if (!alpha[str[k]])
      alpha[str[k]] = Math.pow(10, i)
    else alpha[str[k]] += Math.pow(10, i)
  }
}

// 가중치 객체를 값이 큰 순으로 정렬
alpha = Object.entries(alpha).sort((a,b) => -(a[1] - b[1]))
let value = 9;
let sum = 0
// 9부터 차례대로 넣어서 계산. value * 가중치
for (let i in alpha) {
  sum += alpha[i][1] * value;
  value--;
}

console.log(sum)
