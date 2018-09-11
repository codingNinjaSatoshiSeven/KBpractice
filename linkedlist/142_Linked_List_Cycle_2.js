//TODO: REVIEW
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  var f = head, s = head;
  if (!head || !head.next) return null;
  while (f.next && f.next.next) {
    f = f.next.next;
    s = s.next;
    if (s === f) {
      s = head;
      while (s !== f) {
        s = s.next;
        f = f.next;
      }
      return s;
    }
  }
  return null;
};

var a = new ListNode(1);
var b = a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);
a.next.next.next.next.next = new ListNode(6);
a.next.next.next.next.next.next = b;

console.log(detectCycle(a));