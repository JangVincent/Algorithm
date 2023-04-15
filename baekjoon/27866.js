let i = require('fs').readFileSync('./t').toString().split('\n')
console.log(i[0].split('')[Number(i[1]) - 1])
