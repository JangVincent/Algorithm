let i = require("fs").readFileSync("./test.txt").toString().trim();
i = i.split(" ").join("");
if (i === "12345678") {
  console.log("ascending");
} else if (i === "87654321") {
  console.log("descending");
} else {
  console.log("mixed");
}
