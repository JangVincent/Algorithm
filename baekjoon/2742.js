let a = Number(require("fs").readFileSync("./test.txt").toString());
for (let i = a; i > 0; i--) {
  console.log(i);
}
