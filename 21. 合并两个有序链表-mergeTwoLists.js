/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let l1 = list1
  let pre = null
  while(l1 && list2) {
    if (l1.val > list2.val) {
      if (pre) {
        pre.next = new ListNode(list2.val, l1)
        pre = pre.next
      } else {
        pre = list1 = new ListNode(list2.val, l1)
      }
      list2 = list2.next
    } else {
      pre = l1
      l1 = l1.next
    }
  }
  if (list2) {
    if (pre) {
      pre.next = list2
    } else {
      return list2
    }
  }
  return list1
};
