var flattenArray = (arr, n) => {
  let result = []
  for(let i=0; i<arr.length; i++) {
    if(!Array.isArray(arr[i])) {
        result.push(arr[i])
    } else {
        result = [...result, ...flattenArray(arr[i])]
    }
  }
  return result
}