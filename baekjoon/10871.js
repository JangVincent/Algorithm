let i = require("fs").readFileSync("./test.txt").toString().split("\n");
let p = i[0].split(" ").map(Number)[1];
let a = i[1].split(" ").filter((v) => v < p);
console.log(...a);
