function secondLargest(arr) {
  if(arr.length < 2) return null
  let firstLargest = -Infinity
  let secondLargest = -Infinity
  for(let i=0; i<arr.length; i++)  {
    if(arr[i] > firstLargest) {
      firstLargest = arr[i]
    } else if(arr[i] < firstLargest && arr[i] > secondLargest) {
        secondLargest = arr[i]
    }
  }
  return secondLargest;
}

console.log(secondLargest([10, 20, 4, 99, 99, 45]))