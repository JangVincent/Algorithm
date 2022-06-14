// Priority Queue 풀이
// let times = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(v => v.trim().split(' ').map(Number));
// times.shift();
// times.sort((a, b) => {
//   let t = a[0] - b[0]
//   return t == 0 ? a[1] - b[1] : t
// });

// let classroom = []

// for (let i in times) {
//   let time = times[i];
//   let start = time[0];
//   let end = time[1];

//   if (classroom.length == 0) {
//     classroom.push(end);
//   } else {
//     if (classroom[0] > start) {
//       classroom.push(end)
//     } else {
//       classroom[0] = end;
//     }
//     classroom.sort((a,b)=>a-b)
//   }
// }

// console.log(classroom.length)


let times = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(v => v.trim().split(' ').map(Number));
times.shift();
let ans = 0
let tmp = 0
const classroom = [];

// 시작시간, 종료시간을 각각 저장.
for (let i in times) {
  classroom.push({t:times[i][0], start: 1 })
  classroom.push({t:times[i][1], start : -1})
}

// 시간순 정렬. 시간이 같을떄는 시작 여부로 정렬
classroom.sort((a, b) => a.t == b.t ? a.start - b.start : a.t - b.t)

// 시작시간에는 강의실이 생기고
// 종료시간에는 강의실이 사라짐.
// 시간순으로 정렬되었으므로, 시간마다 강의실이 사라지고 생성되도록 함.
// tmp 는 현재 열린 강의실 개수
// 따라서 tmp가 제일 클 때가 최대 강의실 수임 
classroom.forEach(s => {
  if (s.start == -1) {
    tmp -= 1;
  } else {
    tmp += 1
  }

  ans = tmp > ans ? tmp : ans
});

console.log(ans)