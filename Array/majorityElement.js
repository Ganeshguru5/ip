var majorityElement = function(nums) {
  const map = new Map()
  for(let i=0; i<nums.length; i++) {
    if(map.has(nums[i])) {
      count = map.get(nums[i])
      map.set(nums[i], count+1)
    } else {
        map.set(nums[i], 1)
    }
  }
  let maxoccurence = 0
  let result = 0
  for(let i=0; i<nums.length; i++) {
    if(map.get(nums[i]) > maxoccurence) {
     maxoccurence = map.get(nums[i])
     result = nums[i]
    }
  }
  return result
};

console.log(majorityElement([3,2,3]))