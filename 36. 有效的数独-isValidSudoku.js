/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = {}
    let col = {}
    let sub = {}
    for (let i = 0; i < board.length; i++) {
        let item = board[i]
        row = {}
        if (i % 3 === 0) {
            sub = {}
        }
        for (let j = 0; j < item.length; j++) {
            if (item[j] !== '.') {
                if (row[item[j]]) {
                    return false
                }
                row[item[j]] = true

                if (!col[j]) {
                    col[j] = []
                }
                if (col[j][item[j]]) {
                    return false
                }
                col[j][item[j]] = true

                if (!sub[Math.floor(j / 3)]) {
                    sub[Math.floor(j / 3)] = {}
                }
                if (sub[Math.floor(j / 3)][item[j]]) {
                    return false
                }
                sub[Math.floor(j / 3)][item[j]] = true
            }
        }
    }
    return true
};
