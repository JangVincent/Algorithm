let input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

for (let i in input) {
  let str = input[i].trim().split(" ");
  let a = str[0].toString();
  a = a[a.length - 1] * 1;
  let b = str[1] * 1;

  switch (a) {
    case 0:
    case 1:
    case 5:
    case 6:
      if (a != 10) console.log(a);
      else console.log(10);
      break;

    case 2:
    case 3:
    case 8:
    case 7:
      {
        let remain = b % 4;
        let temp = remain == 0 ? Math.pow(a, 4) : Math.pow(a, remain);
        temp = temp.toString();
        console.log(temp[temp.length - 1] * 1);
      }
      break;

    case 4:
    case 9:
      {
        let remain = b % 2;
        if (remain == 1) {
          console.log(a);
        } else {
          a = a * a;
          a = a.toString();
          a = a[a.length - 1];
          console.log(a * 1);
        }
      }
      break;
  }
}
