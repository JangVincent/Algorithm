let [s, t] = require('fs').readFileSync('t').toString().split('\n').map(v => v.trim())

while (t.length != s.length) {
  let c = t[-1];
  if (c == 'A') {
    t = t.slice(0, -1);
  } else {
    t = t.slice(0, -1);
    t = t.split('').reverse().join('');
  }
}

console.log(s === t ? 1 : 0)