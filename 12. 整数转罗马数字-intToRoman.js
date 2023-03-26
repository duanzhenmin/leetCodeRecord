/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let char = new Map([[1000, 'M'], [500, 'D'], [100, 'C'], [50, 'L'], [10, 'X'], [5, 'V'], [1, 'I']])
  let res = ''
  for (let [k, v] of char.entries()) {
    let shang = ~~(num / k)
    if (shang) {
      res += v.repeat(shang)
      num = num % k
    }
    if (num <= 0) {
      break
    }
    let t = num < 10 ? 1 : Math.pow(10, Math.ceil(Math.log10(k)) - 1)
    if ((k = k - t) <= num) {
      res += (char.get(t) + v)
      num -= k
    }
    if (num <= 0) {
      break
    }
  }
  return res
};
var intToRoman2 = function(num) {
  let char = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']])
  let res = ''
  for (let [k, v] of char.entries()) {
    res += v.repeat(~~(num / k))
    num = num % k
    if (num <= 0) {
      break
    }
  }
  return res
};
