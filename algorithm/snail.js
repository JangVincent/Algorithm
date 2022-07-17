// function snail(n) {
//   let arr = new Array(n).fill([]);

//   for (let i in arr) {
//     arr[i] = ' '.repeat(n).split('')
//   }

//   let x = 1;
//   const max = Math.pow(n, 2)

//   let i = 0; j = 0;
//   let width = n - 1, height = n - 1, minWidth = 0; minHeight = 1

//   while (x <= max) {
    
//     for (j; j <= width; j++) {
//       arr[i][j] = x;
//       x++;
//     }
  
//     i++;
//     j--;
//     for (i; i <= height; i++) {
//       arr[i][j] = x;
//       x++;
//     }
    
//     i--;
//     j--;
//     while (j >= minWidth) {
//       arr[i][j] = x;
//       j--;
//       x++;
//     }

//     i--;
//     j++;
//     while (i >= minHeight) {
//       arr[i][j] = x;
//       i--;
//       x++;
//     }

//     i++;
//     j++;

//     width -= 1
//     height -= 1;
//     minWidth++;
//     minHeight++;
//   }

//   return arr;
// }

// let ans = snail(10)
// for (let i in ans) {
//   console.log(ans[i].join(' '))
// }


function snail(n) {

  const arr = new Array(n).fill([]);

  for (let i in arr) {
    arr[i] = ' '.repeat(n).split('')
  }
  
  let a=0, b=-1;
  let pow = Math.pow(n, 2)
  let x = 1;

  let size = n;
  let sw = 1;

  while (x <= pow) {

    // 가로이동
    for (let i = 0; i < size; i++) {
      
      b += sw;
      arr[a][b] = x;
      x++;
    }
    size--;

    // 세로이동
    for (let i = 0; i < size; i++) {
      a += sw;
      arr[a][b] = x;
      x++;
    }
    sw *= -1
    
  }

  for (let i in arr) {
    console.log(arr[i].join(' '))
  }
}

snail(10)