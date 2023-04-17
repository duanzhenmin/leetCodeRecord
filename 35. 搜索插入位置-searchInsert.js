/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length || nums[0] > target) {
        return 0
    }
    let l = 0
    let r = nums.length - 1
    if (nums[r] < target) {
        return ++r
    }
    while(l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            return m
        }
        if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l
};
