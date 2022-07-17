const bs = (arr, target) => {

  if (target == undefined) {
    return -1
  }

  let left = 0;
  let right = arr.length - 1
  let mid = undefined
  
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    
    if (arr[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return mid == undefined ? -1 : mid
}


console.log(bs([1,3,4,5,6,8,10,23,55,67,86,90,100].reverse(), 1))