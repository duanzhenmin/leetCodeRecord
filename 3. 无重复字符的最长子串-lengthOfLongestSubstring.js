/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {   
        return ''
    }
    let i = 0;
    let j = 1;
    let _s = s[i]
    let max = 1
    while(i <= j && j < s.length) {
        if (_s.indexOf(s[j]) < 0) {
            j++
            max = Math.max(max, j - i)
        } else {
            i++
        }
        _s = s.substring(i, j)
    }
    return Math.max(max, _s.length)
};
