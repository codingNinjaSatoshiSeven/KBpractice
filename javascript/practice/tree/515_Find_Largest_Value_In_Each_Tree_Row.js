/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if(!root) return [];
  var res = [];
  var q = [];
  q.push(root);
  while(q.length !== 0) {
    var n = q.length, mx = Number.MIN_SAFE_INTEGER;
    for(var i =0;i <n; i++) {
      var t = q.shift();
      mx = Math.max(mx, t.val);
      if(t.left) q.push(t.left);
      if(t.right) q.push(t.right);
    }
    res.push(mx);
  }
  return res;
};

var a = new TreeNode(1);
a.left = new TreeNode(3);
a.right = new TreeNode(2);
a.left.left = new TreeNode(5);
a.left.right = new TreeNode(3);
a.right.right = new TreeNode(9);
console.log(largestValues(a));