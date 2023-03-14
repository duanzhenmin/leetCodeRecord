/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []
    let map = new Map()
    nums.find((n, i) => {
        let m = target - n
        if (map.has(m)) {
            res = [map.get(m), i]
            return true
        }
        map.set(n, i)
        return false
    })
    return res
};
