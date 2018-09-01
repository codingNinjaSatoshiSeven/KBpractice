/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var searchBST = function(root, val) {
  if (!root) {
    return [];
  }
  if (root.val === val) {
    return root;
  } else if ( val > root.val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
};

var a = new TreeNode(4);
a.left = new TreeNode(2);
a.right = new TreeNode(7);
a.left.left = new TreeNode(1);
a.left.right = new TreeNode(3);

console.log(searchBST(a, 2));
console.log(searchBST(a, 5));