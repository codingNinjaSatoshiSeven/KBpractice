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
var deleteDuplicates = function(head) {
  var map = {};
  var cur = head, prev = head;
  while (cur) {
    var val = cur.val;
    if (!map[val]) map[val] = 1;
    else map[val]++;
    cur = cur.next;
  }
  var dummy = new ListNode(0);
  dummy.next = head;
  cur = head, prev = dummy;
  while (cur) {
    var val = cur.val;
    if (map[val] > 1) {
      cur = cur.next;
      prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return dummy.next;
};

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(3);
a.next.next.next.next = new ListNode(4);
a.next.next.next.next.next = new ListNode(4);
a.next.next.next.next.next.next = new ListNode(5);
console.log(deleteDuplicates(a));

var b = new ListNode(1);
b.next = new ListNode(1);
b.next.next = new ListNode(1);
b.next.next.next = new ListNode(2);
b.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(b));