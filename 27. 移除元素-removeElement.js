/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let p = 0
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] ^ val) {
      nums[p] = nums[index]
      p++
    }
  }
  return p
};
