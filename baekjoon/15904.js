// console.log(`I ${/U.*C.*P.*C/.test(require("fs").readFileSync(0) + '') ? 'love' : 'hate'} UCPC`)
process.stdin.on('data',s=>console.log(`I ${/U.*C.*P.*C/.test(s)?'love':'hate'} UCPC`))