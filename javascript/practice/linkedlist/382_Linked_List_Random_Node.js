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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.arr = [];
  var cur = head;
  while(cur) {
    this.arr.push(cur.val);
    cur = cur.next;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  var size = this.arr.length;
  var rand = Math.floor(Math.random() * size);
  return this.arr[rand];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
var sol = new Solution(a);
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());
console.log(sol.getRandom());