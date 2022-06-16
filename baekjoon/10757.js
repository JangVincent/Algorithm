let str = require('fs').readFileSync('test.txt').toString().split(' ').map(v => { return v.trim().split('').reverse().join('') });

if (str[0].length > str[1].length) {
  let diff = str[0].length -str[1].length;
  str[1] += ' '.repeat(diff);
} else {
  let diff = str[1].length - str[0].length;
  str[0] += ' '.repeat(diff);
}

let ans=''
let carry = 0
for (let i in str[0]) {
  let s = str[0][i] * 1 + str[1][i] * 1;

  if (carry > 0) {
    s += carry;
    carry = 0;
  }

  if (s >= 10) {
    carry++;
    ans+=(s-10)
  } else {
    ans+=s
  }
}

if (carry > 0) {
  ans+='1'
}

console.log(ans.split('').reverse().join(''))
