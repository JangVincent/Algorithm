let cmds = require("fs").readFileSync("test.txt").toString().trim().split("\n");
cmds.shift();

let q = [];

let ans = [];
for (let i in cmds) {
  let cmd = cmds[i].trim().split(" ");
  if (cmd.length == 2) {
    q.push(cmd[1] * 1);
  } else {
    if (cmd[0] === "front") ans.push(q.length == 0 ? -1 : q[0]);
    else if (cmd[0] === "back") ans.push(q.length == 0 ? -1 : q[q.length - 1]);
    else if (cmd[0] === "empty") ans.push(q.length == 0 ? 1 : 0);
    else if (cmd[0] === "size") ans.push(q.length);
    else ans.push(q.length == 0 ? -1 : q.shift());
  }
}

console.log(ans.join("\n"));
