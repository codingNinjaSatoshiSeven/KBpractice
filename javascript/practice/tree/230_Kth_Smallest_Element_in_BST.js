///TODO: REVIEW
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var count = 0;
  var stack = [];
  var node = root;
  while(node || stack.length>0) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    ++count;
    if(count === k) return node.val;
    node = node.right;
  }
  return 0;
};