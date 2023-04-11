/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  while(i < nums.length) {
    let e = i
    while (nums[++e] === nums[i]) {}
    nums.splice(i, e - i - 1)
    i++
  }
  return i
};
