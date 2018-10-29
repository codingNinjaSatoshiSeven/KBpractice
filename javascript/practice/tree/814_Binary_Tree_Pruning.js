///TODO: REVIEW
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  return containsOne(root) ? root: null;
};

function containsOne(node) {
  if(!node) return false;
  var l = containsOne(node.left);
  var r = containsOne(node.right);
  if(!l) node.left = null;
  if(!r) node.right = null;
  return node.val === 1 || l || r;
}

var a = new TreeNode(1);
a.right = new TreeNode(0);
a.right.left = new TreeNode(0);
a.right.right = new TreeNode(1);
console.log(pruneTree(a));

var b = new TreeNode(1);
b.left = new TreeNode(0);
b.right = new TreeNode(1);
b.left.left = new TreeNode(0);
b.left.right = new TreeNode(0);
b.right.left = new TreeNode(0);
b.right.right = new TreeNode(1);
console.log(pruneTree(b));