/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0
  let max = s.length ? 1 : 0
  for (let i = 0; i < s.length && i < (s.length - Math.floor(max / 2)); i++) {
    let left = i - 1
    let _max = 1
    while(s[i] === s[i + 1]) {
      _max++
      i++
    }
    let right = i + 1
    while(s[left] === s[right] && s[left] !== undefined) {
      _max += 2
      left--
      right++
    }
    if (_max > max) {
      start = left + 1
      max = _max
    }
  }
  return s.substr(start, max)
};
