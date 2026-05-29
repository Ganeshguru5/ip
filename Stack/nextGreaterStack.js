function nextGreater(arr){
  let stack = []
  let result = new Array(arr.length).fill(-1);
  for(let i=0 ;i<arr.length; i++) {
   while(stack.length && arr[i] > arr[stack[stack.length-1]]) {
      let index = stack.pop()
      result[index] = arr[i]
   }
   stack.push(i)
  }
  return result
}

console.log(nextGreater([73,74,75,71,69,72,76,73]));