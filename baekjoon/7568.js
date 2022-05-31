let list = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

class People {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
    this.rank = undefined;
  }
}

list.shift();
for (let i in list) {
  let str = list[i];
  str = str.split(" ").map(Number);

  list[i] = new People(str[0], str[1]);
}

for (let i = 0; i < list.length; i++) {
  let grade = 1;
  for (let j = 0; j < list.length; j++) {
    if (i !== j) {
      let pi = list[i];
      let pj = list[j];

      if (pi.weight < pj.weight && pi.height < pj.height) grade++;
    }
  }

  list[i].rank = grade;
}

let answer = "";
for (let i in list) {
  answer += list[i].rank + " ";
}

console.log(answer.trimEnd());
