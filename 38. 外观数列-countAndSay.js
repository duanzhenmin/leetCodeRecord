/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1'
    let i = 2
    while(i <= n) {
        let len = res.length
        let pre = res[0]
        let count = 1
        let _res = ''
        for (let j = 1; j < len; j++) {
            if (res[j] === pre) {
                count++
            } else {
                _res += `${count}${pre}`
                count = 1
                pre = res[j]
            }
        }
        res = `${_res}${count}${pre}`
        i++
    }
    return res
};
