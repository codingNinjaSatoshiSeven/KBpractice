///TODO: Need to Review
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
  var sum = {sum: 1};
  depth(root, sum);
  return sum.sum -1;
};

function depth(node, sum) {
  if (!node) return 0;
  var l = depth(node.left, sum);
  var r = depth(node.right, sum);
  sum.sum = Math.max(sum.sum, l+r+1);
  return Math.max(l, r) +1;
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
a.left.rigth = new TreeNode(5);
console.log(diameterOfBinaryTree(a));
var b = new TreeNode(1);
b.left = new TreeNode(2);
console.log(diameterOfBinaryTree(b));