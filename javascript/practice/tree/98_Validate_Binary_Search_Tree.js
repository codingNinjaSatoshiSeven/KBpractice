/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;
  return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function valid(node, low, high) {
  if(!node) return true;
  if(node.val <= low || node.val >= high) return false;
  return valid(node.left, low, node.val) && valid(node.right, node.val, high);
}