/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arr = new Array(numRows).fill('')
  let i = 0
  numRows--
  while(s[i] !== undefined) {
    let row = 0
    while(row <= numRows && s[i] !== undefined) {
      arr[row] += s[i++]
      row++
    }
    row = 1
    while(row < numRows && s[i] !== undefined) {
      arr[numRows - row] += s[i++]
      row++
    }
  }
  return arr.join('')
};
