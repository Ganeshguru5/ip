var findErrorNums = function(nums) {
  let result = []
  const set = new Set(nums);
  for(let i=1; i<=nums.length; i++) {
    if(!set.has(i)) {
      result.push(nums[i-1])
      result.push(nums[i-1]+1)
    }
  }
  return result
};
console.log(findErrorNums([1,2,2,4]))