///TODO: REVIEW
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  var map = {};
  for (var i = 0; i < G.length; i++) {
    map[G[i]] = true;
  }
  var cur = head;
  var ans = 0;
  while (cur) {
    if(map[cur.val]&& (!cur.next || !map[cur.next.val])){
      ans++;
    }
    cur = cur.next;
  }
  return ans;
};