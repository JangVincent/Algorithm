let store = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
store.shift();

store = store[0].split(" ");

let str = [];

for (let i in store) {
  let milk = store[i];

  switch (milk) {
    case "0": {
      if (str.length == 0 || str[str.length - 1] == 2) str.push(milk);
      break;
    }
    case "1": {
      if (str[str.length - 1] == 0) str.push(milk);
      break;
    }
    case "2": {
      if (str[str.length - 1] == 1) str.push(milk);
      break;
    }
  }
}

console.log(str.length);
