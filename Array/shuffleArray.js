var shuffle = function(nums, n) {
    let k = n
    let result = [] 
    for(let i=n; i<nums.length; i++) {
        result.push(nums[i-k])
        result.push(nums[i])
    }
    return result
};

console.log(shuffle([2,5,1,3,4,7], 3))