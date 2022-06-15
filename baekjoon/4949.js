let sen = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(v => { return v.trimEnd() });
let s = [];
sen.pop();

for (let i in sen) {
  let se = sen[i];
  for (let j in se) {
    let char = se[j];
    if (char == '[' || char == '(') {
      s.push(char);
    } else if (char == ']' || char == ')') {
      if (s.length > 0) {
        if (s[s.length - 1] == '[' && char == ']') {
          s.pop();
          continue;
        }
        if(s[s.length - 1] == '(' && char == ')') {
          s.pop();
          continue;
        }
      }

      s.push(char)
    }
  }

  if (s.length == 0)
    console.log('yes');
  else
    console.log('no');

  s = [];
}