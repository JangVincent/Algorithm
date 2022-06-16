let input = require('fs').readFileSync('test.txt').toString().split('\n');

let count = Number(input.shift());

let answer = [];
// for (let i = 1; i <= count; i++) {
  // let splitedInput = input[i].split(" ").map(Number);
  // let d = splitedInput[1] - splitedInput[0];

  // if (Math.sqrt(d) % 1 === 0) {
  //   answer.push(2 * Math.sqrt(d) - 1);
  // } else {
  //   let a = Math.pow(Math.ceil(Math.sqrt(d)), 2);
  //   let b = Math.pow(Math.ceil(Math.sqrt(d)) - 1, 2) + 1

  //   if ((a + b) / 2 <= d) {
  //     answer.push(2 * Math.ceil(Math.sqrt(d)) - 1);
  //   } else {
  //     answer.push(2 * Math.ceil(Math.sqrt(d)) - 2);
  //   }
  // }
  // console.log(answer[answer.length - 1]);
// }