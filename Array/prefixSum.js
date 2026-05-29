function prefixSum(arr) {
  let result = []
  let storedSum = 0
  for(let ch of arr) {
    storedSum = storedSum + ch
    result.push(storedSum)
  }
  console.log(result)
}

prefixSum([2,3,3,4,45,5])

function buildPrefix(arr){
   let prefix = [];
   let sum = 0;

   for(let num of arr){
      sum += num;
      prefix.push(sum);
   }

   return prefix;
}

function rangeSum(prefix, left, right){
   if(left === 0) return prefix[right];
   return prefix[right] - prefix[left - 1];
}

console.log(rangeSum([2,4,5,6,6], 2,3))