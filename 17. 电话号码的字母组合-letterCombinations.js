/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return []
  }
  let chartMap = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = [...chartMap[digits[0]]]
  let i = 1;
  while(i < digits.length) {
    let n = res.length
    for (let j = 0; j < n; j++) {
      let s = res.shift()
      for (const chart of chartMap[digits[i]]) {
        res.push(`${s}${chart}`)
      }
    }
    i++
  }
  return res
};
