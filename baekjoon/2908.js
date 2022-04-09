let i = require("fs").readFileSync("./test.txt").toString().trim().split(" ");
let a = i[0].split("").reverse().join("") * 1;
let b = i[1].split("").reverse().join("") * 1;
console.log(a > b ? a : b);
