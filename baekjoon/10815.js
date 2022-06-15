let card = require('fs').readFileSync('test.txt').toString().split('\n').map(v => { return v.trim() });
card[1] = card[1].split(' ').map(Number)
card[3] = card[3].split(' ').map(Number)
let set = new Set(card[1])

let ans = ''
for (let i in card[3]) {
  let n = card[3][i];
  if (set.has(n)) {
    ans += '1 ';
  } else {
    ans += '0 ';
  }
}

console.log(ans.trim())