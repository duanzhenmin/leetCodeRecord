/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = strs[0] || ''
  let n = 0
  for (let i = 1; i < strs.length && res; i++) {
    n = 0
    while(n < strs[i].length) {
      if (strs[i][n] !== res[n]) {
        break
      }
      n++
    }
    res = res.substr(0, n)
  }
  return res
};
