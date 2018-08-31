/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var middleNode = function(head) {
  var size = 0;
  var current = head;
  while (current !== null) {
    size++;
    current = current.next;
  }
  var mid = Math.floor(size / 2);
  var count = 0;
  current = head;
  while (current !== null) {
    if (count === mid) {
      return current;
    }
    count++;
    current = current.next;
  }
};

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);
a.next.next.next.next.next = new ListNode(6);
console.log(middleNode(a));
var b = new ListNode(1);
b.next = new ListNode(2);
b.next.next = new ListNode(3);
b.next.next.next = new ListNode(4);
b.next.next.next.next = new ListNode(5);
console.log(middleNode(b));