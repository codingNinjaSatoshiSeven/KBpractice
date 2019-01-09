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
var preorderTraversal = function(root) {
  if(!root) return [];
  var res = [], stack = [];
  stack.push(root);
  while(stack.length !==0) {
    var t = stack.pop();
    res.push(t.val);
    if(t.right) stack.push(t.right);
    if(t.left) stack.push(t.left);
  }
  return res;
};

var a = new TreeNode(1);
a.right = new TreeNode(2);
a.right.left = new TreeNode(3);

console.log(preorderTraversal(a));