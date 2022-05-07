let line = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

line.shift();

function solution(line) {
  let stack = [];

  // cnt 값을 증가시켜가면서 스택에 넣음.
  let cnt = 1;
  let answer = "";

  for (let i in line) {
    let l = line[i];

    //cnt 값이 입력받은 값보다 작을때만 스택에 증가시켜 가면서 넣음
    while (cnt <= l) {
      stack.push(cnt++);
      answer += "+ ";
    }

    // 현재 cnt 값이 입력받은 값보다 크다면
    // 스택에서 값을 뽑아 입력받은 수열 원소와 비교
    const popped = stack.pop();

    // 다르다면 스택수열로 만들기 불가능한 수열이므로 NO 출력
    if (popped !== l) {
      return "NO";
    }

    answer += "- ";
  }

  return answer.trim().split(" ").join("\n");
}

console.log(solution(line));
