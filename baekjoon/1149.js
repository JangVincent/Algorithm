let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let houseCnt = input.shift();

for (let i in input) {
  input[i] = input[i].split(" ").map(Number);
}

/*
모든 집이 겹치지 않고 다른 색이어야한다.(최소비용으로)
첫집을 R,G,B 로 칠할 경우를 모두 생각해주자.

따라서 
R을 칠한경우 다음집은 G, B 중 최소 값을 골라야한다.
G를 칠할경우 다음 집은 R,B 중 최소 값을 골라야한다.
...

따라서 다음과같은 식이 성립힌다.
임의의 n 번째 집에 대하여
n번쨰 집이 R을 칠했다면,
house[n][R] = house[n][R] + (house[n-1][B], house[n-1][G] 중 최소 값)

똑같이 G, 와 B를 칠했을 경우도 점화식을 세워 해결해준다
*/
for (let i = 1; i < houseCnt; i++) {
  input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
  input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
  input[i][2] = Math.min(input[i - 1][1], input[i - 1][0]) + input[i][2];
}

console.log(Math.min(...input[houseCnt - 1]));
