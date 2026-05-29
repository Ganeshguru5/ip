var searchInsert = function(nums, target) {
  let k = 0
  for(let i=0; i<nums.length; i++) {
    if(nums[i] < target) {
      k++
    }
  }
  return k
};

console.log(searchInsert([1,3,5,6], 7))