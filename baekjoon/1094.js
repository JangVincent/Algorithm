/*
 * 문제는 막대기를 반으로 나누어 가면서(2로 나눔)
 * 남아있는 막대기 합이 입력값보다 크거나 같으면 또 나누고..
 * 결국 입력값을 2진수로 표현한 것중의 1의 갯수를 묻는 문제이다.
 */

let x = require("fs").readFileSync("./test.txt").toString() * 1;
let b = x.toString(2);
let c = 0;
for (let i in b) {
  if (b[i] == "1") c++;
}
console.log(c);
