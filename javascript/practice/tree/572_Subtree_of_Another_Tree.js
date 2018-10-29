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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  return traverse(s, t);
};

function equal (x, y) {
  if (!x && !y) return true;
  if (!x || !y) return false;
  return x.val=== y.val && equal(x.left, y.left) && equal(x.right, y.right);
}

function traverse(s, t) {
  return !!(s && (equal(s,t) || traverse(s.left, t) || traverse(s.right,t)));
}

var a = new TreeNode(3);
a.left = new TreeNode(4);
a.right = new TreeNode(5);
a.left.left = new TreeNode(1);
a.left.right = new TreeNode(2);

var b = new TreeNode(4);
b.left = new TreeNode(1);
b.right = new TreeNode(2);

console.log(isSubtree(a, b));

var c = new TreeNode(3);
c.left = new TreeNode(4);
c.right = new TreeNode(5);
c.left.left = new TreeNode(1);
c.left.right = new TreeNode(2);
c.left.right.left = new TreeNode(0);
console.log(isSubtree(c, b));