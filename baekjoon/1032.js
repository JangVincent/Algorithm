let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 테스트 케이스 갯수가 1개 이상일 떄
input.shift();

// 테스트 케이스 문자열 개수
let stringLength = input[0].length;

// 정답
let returnString = "";

/*
 *모든 문자열을 1번째 문자부터 비교하면서 1개라도 다른게 있다면 ?로, 모두 맞으면 패스
 */
for (let i = 0; i < stringLength; i++) {
  let isDiff = false;
  let char = input[0][i];
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== char) {
      isDiff = true;
      break;
    }
  }

  returnString = isDiff ? (returnString += "?") : (returnString += char);
}

console.log(returnString);
