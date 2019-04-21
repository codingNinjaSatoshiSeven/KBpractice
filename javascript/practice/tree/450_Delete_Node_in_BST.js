///TODO: review
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) return null;
  if(root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else { // equal case
    if(!root.left || !root.right) {
      root = root.left ? root.left : root.right;
    } else {
      var cur = root.right;
      while(cur.left) cur = cur.left;
      root.val = cur.val;
      root.right = deleteNode(root.right, cur.val);
    }
  }
  return root;
};

var a = new TreeNode(5);
a.left = new TreeNode(3);
a.right = new TreeNode(6);
a.left.left = new TreeNode(2);
a.left.right = new TreeNode(4);
a.right.right = new TreeNode(7);

console.log(deleteNode(a, 3));
