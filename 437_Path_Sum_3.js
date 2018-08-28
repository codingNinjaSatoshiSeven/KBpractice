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
 * @param {number} sum
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var pathSum = function(root, sum) {
  if (!root) return 0;
  return sumUp(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

function sumUp(node, pre, sum) {
  if (!node) return 0;
  var cur = pre + node.val;
  return (cur === sum) + sumUp(node.left, cur, sum) + sumUp(node.right, cur, sum);
}
