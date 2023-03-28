var threeSum = function(nums) {
  nums.sort((n1, n2) => n1 - n2)
  let i = 0;
  let res = []
  while(i<nums.length - 2) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i-1]) {
        i++
        continue
    }
    let j = nums.length - 1
    let k = i + 1
    while(j > k) {
        if (nums[j] < 0) break
        let sum = nums[i] + nums[j] + nums[k]
        if (sum > 0) {
            j--
            continue
        }
        if (sum < 0) {
            k++
            continue
        }
        res.push([nums[i],nums[k],nums[j]])
        while(nums[k] === nums[++k] && k < j){}
        while(nums[j] === nums[--j] && k < j){}
    }
    i++
  }
  return res
};
