/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var tree2str = function(t) {
  if (!t) {
    return "";
  }
  if (!t.left && !t.right) {
    return t.val+"";
  }
  if (!t.right) {
    return t.val + "(" + tree2str(t.left) + ")";
  }
  return t.val + "(" + tree2str(t.left) + ")(" + tree2str(t.right)+")";
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
console.log(tree2str(a));
a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.right = new TreeNode(4);
console.log(tree2str(a));