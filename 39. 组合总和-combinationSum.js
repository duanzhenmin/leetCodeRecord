var sort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = sort(arr.splice(0, middle))
    let right = sort(arr)
    let res = []
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    res = [...res, ...left, ...right]
    return res
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = sort(candidates)
    let res = []
    function fn (current, target, index) {
        if (index >= candidates.length || candidates[index] > target) {
            return
        }
        if (candidates[index] === target) {
            res.push([...current, candidates[index]])
            return
        }
        current.push(candidates[index])
        fn(current, target - candidates[index], index)
        current.pop()
        fn(current, target, index + 1)
    }

    fn([], target, 0)
    return res
};
