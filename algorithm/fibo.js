// recursive
const arr = [0,1,1,2]
const fibo = (n) => {
  if (n <= 1) return n;
  if (arr[n]) {
    return arr[n]
  } else {
    arr[n] = fibo(n - 1) + fibo(n - 2)
    return arr[n]
  }
}



const fibo2 = (n) => {

  if (n <= 1) return n;

  let head = 0, mid = 1, tail = 0
  
  for (let i = 1; i < n; i++) {
    tail = head + mid;
    head = mid;
    mid = tail;
  }

  return tail
}


let fiboStr = ''
let fibo2Str = ''

for (let i = 0; i <= 100; i++) {
  fiboStr += fibo(i) + ' '
  fibo2Str += fibo2(i) + ' '
}

console.log(fiboStr)
console.log(fibo2Str)