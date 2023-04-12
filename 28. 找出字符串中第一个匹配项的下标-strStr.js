/**
 * @param {string} str
 * @return {number[]}
 */
var getNextArray = function (str) {
  if (!str) return []
  let next = [0]
  let j = 0
  for (let i = 1; i < str.length; i++) {
    while (j >= 0) {
      if (str[i] === str[j]) {
        next[i] = ++j
        break
      } else if (j === 0) {
        next[i] = 0
        break
      }
      j = next[j - 1]
    }
  }
  return next
}
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let next = getNextArray(needle)
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && j < needle.length) {
      if (needle[j] === haystack[i]) {
        j++
        break
      } else if (j === 0) {
        break
      }
      j = next[j - 1]
    }
    if (j === needle.length) {
      return i + 1 - j
    }
  }
  return -1
}
