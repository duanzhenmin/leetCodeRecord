/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = null
  let _res = null
  let sum = 0
  let pre = 0
  do {
    sum = (l1?.val || 0) + (l2?.val || 0) + (pre || 0)
    pre = 0
    if (sum > 9) {
        pre = ~~(sum / 10)
        sum = sum % 10
    }
    if (!res) {
        res = _res = new ListNode(sum)
    } else {
        _res.next = new ListNode(sum)
        _res = _res.next
    }
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    if (!pre) {
        if (l1 && !l2) {
            _res.next = l1
            l1 = null
        } else if (!l1 && l2) {
            _res.next = l2
            l2 = null
        }
    }
  } while (l1 || l2 || pre)
  
  return res
};
