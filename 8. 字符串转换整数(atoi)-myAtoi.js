/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (!s) {
        return 0
    }
    let res = parseInt(s, 10)
    if (isNaN(res)) {
        return 0
    }
    if (res > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1
    } else if (res < -Math.pow(2, 31)) {
        return -Math.pow(2, 31) 
    }
    return res
};
