function possibleSubarrayCount(arr) {
  let n = arr.length
  return (n*(n+1)) / 2
}

function sumofArray(arr) {
  let sum=0
  for(ch of arr) {
    sum+=ch
  }
  return sum;
}

function listAllSubArray(arr) {
  let result=[]
  let maxSum = 0
  for(let i=0; i<arr.length-1; i++) {
    let singleArray = []
    for(let j=i; j<arr.length; j++){
      singleArray.push(arr[j])
      result.push([...singleArray])
    }
  }
  return result;
}

function maxSubarray(arr){
   let pastbag = arr[0]
   let bestbag = arr[0]

   for(let i=1; i<=arr.length-1; i++) {
      let futurevalue = arr[i]
      console.log(pastbag, futurevalue, bestbag)
      pastbag = Math.max(futurevalue, pastbag+futurevalue)
      bestbag = Math.max(pastbag, bestbag)
   }
   return bestbag
}

console.log(maxSubarray( [-2,1,-3,4,-1,2,1,-5,4]));
