let k = require('fs').readFileSync('test.txt').toString().trim() * 1;

let i = 665;
while (1) {
  
  if (String(i).includes('666')) {
    k--;
    if (k == 0) {
      console.log(i);
      break;
    }
  }
  i++; 
}