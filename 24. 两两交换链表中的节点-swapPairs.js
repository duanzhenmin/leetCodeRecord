/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let p0 = null
    let p1 = head
    let c = head?.next
    while(c) {
      let t = c?.next
      if (p0) {
        p1.next = t
        c.next = p1
        p0.next = c
      } else {
        c.next = p1
        head = c
        p1.next = t
      }
      p0 = p1
      p1 = t
      c = t?.next
    }
    return head
};
