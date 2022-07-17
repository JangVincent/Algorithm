const arr = [5, 2, 1, 4, 6, 0, 8]

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = [arr[0]]
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      left.push(arr[i])
    } else if (arr[i] > pivot[0]) {
      right.push(arr[i])
    } else {
      pivot.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(arr))