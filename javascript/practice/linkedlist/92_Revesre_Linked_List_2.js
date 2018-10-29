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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var dummy = new ListNode(0);
  dummy.next = head;
  var premNode = dummy;
  for (var i = 1; i<m; i++) {
    premNode = premNode.next;
  }
  var prev = null, cur = premNode.next;
  while (cur && (m <=n)) {
    var nextNode = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextNode;
    m++;
  }
  premNode.next.next = cur;
  premNode.next = prev;
  return dummy.next;
};