function removeZeroBF(arr = []) {
  let reversed = arr.reverse()
  let result = []
  for(let i=0; i<=arr.length-1; i++) {
    if(reversed[i] !== 0) {
      result.splice(0, 0 , arr[i])
    } else {
        result.push(0)
    }
  }
  return result
}


function moveZeroPos(arr=[]) {
  let interpost = 0
  for(let i=0; i<=arr.length-1; i++) {
    if(arr[i] !== 0) {
      [arr[interpost], arr[i]] = [arr[i], arr[interpost]]
      interpost++
    }
  }
  return arr;
}

console.log(moveZeroPos([0,3,0,5]))
