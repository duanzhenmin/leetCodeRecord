/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((n1, n2) => n1 - n2)
    let i = 0
    let dif = Infinity
    while(dif !== 0 && i < nums.length - 2) {
        if (i > 0 && nums[i] === nums[i-1]) {
            i++
            continue
        }
        let j = nums.length - 1
        let k = i + 1
        while(dif !== 0 && j > k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(target - sum) < Math.abs(dif)) {
                dif = target - sum
            }
            if (sum > target) {
                j--
                continue
            }
            if (sum < target) {
                k++
                continue
            }
            while(nums[k] === nums[++k] && k < j){}
            while(nums[j] === nums[--j] && k < j){}
        }
        i++
    }
    return target - dif
};
