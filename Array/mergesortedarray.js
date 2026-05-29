var merge = function(nums1, m, nums2, n) {
    if(n === 0) {
        return nums1
    }
    let i = m - 1 || 0 // nums1 last index
    let j = n -1
    let k = (m+n) - 1 // 5
    while(j >= 0) {
      if(nums2[j] > nums1[i]) {
        nums1[k] = nums2[j]
        k--
      } else {
        console.log({ i, j,k  })
        const temp = nums1[i]
        nums1[i] = nums2[j]
        nums1[k] = temp
      }
      j--
    }
   return nums1
};

console.log(merge([1], 1, [0], 0))