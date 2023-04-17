/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) {
        return [-1, -1]
    }
    let l = 0
    let r = nums.length - 1
    while(l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            l = m
            r = m
            while(nums[--l] === target) {}
            while(nums[++r] === target) {}
            return [l + 1, r - 1]
        }
        if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return [-1, -1]
};
