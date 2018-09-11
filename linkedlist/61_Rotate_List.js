///TODO: REVIEW
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k < 1 || !head) return head;
  var p = head;
  var len = 1;
  while (p.next) {
    p = p.next;
    len++;
  }
  p.next = head;
  k = len - k % len;
  while (k > 0) {
    p = p.next;
    k--;
  }
  head = p.next;
  p.next = null;
  return head;
};

var a = new ListNode(0);
a.next = new ListNode(1);
a.next.next = new ListNode(2);
console.log(rotateRight(a, 4));