arr = [5, 2, 1, 4, 6, 0, 8]

let key;

for (let i = 1; i < arr.length; i++) {
  key = arr[i]

  for (j = i - 1; j >= 0 && arr[j] > key; j--) {
    arr[j+1] = arr[j]
  }

  arr[j + 1] = key;
}

console.log(arr)