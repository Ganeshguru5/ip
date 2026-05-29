function nextGreater(arr = []) {
  let stack = arr
  let pushed = []
  for(let i = 0; i<=stack.length - 1; i++) {
    let isFound = false
    let currentNumberTocheck = stack[i]
    for(let j=i; j <= stack.length - 1; j++) {
      let comparenum = stack[j]
      if(comparenum > currentNumberTocheck) {
        isFound = true
        pushed.push(comparenum)
        break;
      }
    }
    if(isFound === false) {
        pushed.push(-1)
      }
      isFound = false
  }
  return pushed
}

const result = nextGreater([1,2,4,5,6,7,9])
console.log(result)