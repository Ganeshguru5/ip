var findMaxConsecutiveOnes = function(nums) {
  let last = 0
  let r = 0
  for(let i=0; i<nums.length; i++) {
    if(nums[i] == 1) {
      r++
      last = Math.max(r, last)
    } else {
      r=0
    }
  }
  return last
};
console.log(findMaxConsecutiveOnes([1,0,1,1,1,0,1]))