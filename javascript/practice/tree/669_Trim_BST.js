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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  return trim(root, L, R);
};

function trim(node, L, R) {
  if (!node) {
    return null;
  } else if (node.val > R) {
    return trim(node.left, L, R);
  } else if (node.val < L) {
    return trim(node.right, L, R);
  } else {
    node.left = trim(node.left, L, R);
    node.right = trim(node.right, L, R);
    return node;
  }
}

var a = new TreeNode(3);
a.left = new TreeNode(0);
a.right = new TreeNode(4);
a.left.right = new TreeNode(2);
a.left.right.left = new TreeNode(1);
console.log(trimBST(a, 1, 3));