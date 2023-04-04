/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let arr = []
    let i = 0
    while (i < s.length) {
        if (s[i] in map) {
            if (arr.pop() !== map[s[i]]) {
                return false
            }
        } else {
            arr.push(s[i])
        }
        i++
    }
    return arr.length === 0
};
