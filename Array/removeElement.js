var removeElement = function(nums, val) {
   let k = 0;
   for(i=0; i<=nums.length - 1; i++) {
    if(nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
   }
   return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))