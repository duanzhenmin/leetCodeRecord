/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = ''
    let max = Math.pow(2, 31) - 1
    x = `${x}`
    for (let i = x.length - 1; i >= (x < 0 ? 1 : 0); i--) {
        res += x[i]
        if (res > max) {
            return 0
        }
    }
    return (x < 0 ? -1 : 1) * res
};
