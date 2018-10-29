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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  var sum = {n: 0};
  arrowLength(root, sum);
  return sum.n;
};

function arrowLength(node, sum) {
  if (!node) return 0;
  var l = arrowLength(node.left, sum);
  var r = arrowLength(node.right, sum);
  var al = 0, ar = 0;
  if (node.left && node.left.val === node.val) al += l +1;
  if (node.right && node.right.val === node.val) ar += r +1;
  sum.n = Math.max(sum.n, al+ar);
  return Math.max(al, ar);
}