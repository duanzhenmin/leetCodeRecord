/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) {
        return -1
    }
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            return m
        }
        if (nums[0] <= nums[m]) {
            if (target < nums[m] && target >= nums[0]) {
              r = m - 1
            } else {
              l = m + 1
            }
        } else {
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
};
