///TODO: REVIEW
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var leafSimilar = function(root1, root2) {
  var leaf1 = [], leaf2 = [];
  dfs(root1, leaf1);
  dfs(root2, leaf2);
  return equals(leaf1, leaf2);
};

function dfs(node, leaf) {
  if (node) {
    if (!node.left && !node.right) {
      leaf.push(node.val);
    } else {
      dfs(node.left, leaf);
      dfs(node.right, leaf);
    }
  }
}

function equals(l1, l2) {
  if (l1.length !== l2.length) return false;
  for (var i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) return false;
  }
  return true;
}