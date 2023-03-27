/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let char = new Map([['M', [1000, 'CM', 900]], ['D', [500, 'CD', 400]], ['C', [100, 'XC', 90]], ['L', [50, 'XL', 40]], ['X', [10, 'IX', 9]], ['V', [5, 'IV', 4]], ['I', [1]]])
  if (!s) {
    return 0
  }
  let res = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let v = char.get(s[i])
    if (v[1] && v[1][0] === s[i-1]) {
      i--
      res += v[2]
    } else {
      res += v[0]
    }
  }
  return res
};
