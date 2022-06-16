let dnas = require('fs').readFileSync('test.txt').toString().split('\n');
let [w, l] = dnas.shift().trim().split(' ').map(Number);
dnas = dnas.map(v => v.trim());

let n = [0, 0, 0, 0];
let ans = ''

for (let k = 0; k < l; k++) {
  for (let i in dnas) {
    let dna = dnas[i];
    switch (dna[k]) {
      case 'A': {
        n[0]++; break;
      }
      case 'C': {
        n[1]++; break;
      }
      case 'G': {
        n[2]++; break;
      }
      case 'T': {
        n[3]++; break;
      }
    }
  }

  let mx = Math.max(...n);
  switch (n.indexOf(mx)) {
    case 0: { ans += 'A'; break; }
    case 1: { ans += 'C'; break; }
    case 2: { ans += 'G'; break; }
    case 3: { ans += 'T'; break; }
  }

  n = [0, 0, 0, 0]
}

let hd = 0
for (let k in dnas) {
  for (let i in dnas[k]) {
    if (ans[i] != dnas[k][i]) {
      hd++;
    }
  }   
}

console.log(ans+'\n'+hd)