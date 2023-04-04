/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let map = new Map()
    let t = 0
    while(head) {
        map.set(t, head)
        t++
        head = head.next
    }
    n = t - n
    if (n) {
        map.get(n - 1).next = map.get(n + 1) ?? null
    } else {
        map.delete(0)
    }
    return map.get(n ? 0 : 1) || null
};
