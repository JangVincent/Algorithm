let i = require("fs").readFileSync("./test").toString().trim().split(" ");
console.log(i[0] === "" ? 0 : i.length);
