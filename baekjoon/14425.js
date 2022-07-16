const ins = require('fs').readFileSync('t').toString().split('\n')
const [n, m] = ins.shift().trim().split(' ').map(Number)

const strList = ins.map(v => v.trim() );
const list = strList.slice(0, n);
const candidates = strList.slice(n);
const strSet = new Set(list);

let count = 0
candidates.forEach(e => {
    if (strSet.has(e)) count++
});


console.log(count)