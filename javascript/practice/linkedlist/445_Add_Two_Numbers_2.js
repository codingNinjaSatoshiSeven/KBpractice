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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var s1=[], s2 =[];
  while(l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  var sum = 0;
  var res = new ListNode(0);
  while(s1.length !== 0 || s2.length !==0) {
    if(s1.length !== 0) {
      sum += s1.pop();
    }
    if(s2.length !== 0) {
      sum += s2.pop();
    }
    res.val = sum % 10;
    var head = new ListNode(Math.floor(sum/10));
    head.next = res;
    res = head;
    sum = Math.floor(sum /10);
  }
  return res.val === 0 ? res.next : res;
};