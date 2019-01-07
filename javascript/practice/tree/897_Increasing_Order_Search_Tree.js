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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  var list = [];
  inorder(root, list);
  var ans = new TreeNode(0);
  var cur = ans;
  for (var i = 0; i<list.length; i++) {
    cur.right = new TreeNode(list[i]);
    cur = cur.right;
  }
  return ans.right;
};

function inorder(node, list) {
  if(!node) return;
  inorder(node.left, list);
  list.push(node.val);
  inorder(node.right, list);
}

var a = new TreeNode(5);
a.left = new TreeNode(3);
a.right = new TreeNode(6);
a.left.left = new TreeNode(2);
a.left.right = new TreeNode(4);
a.left.left.left = new TreeNode(1);
a.right.right = new TreeNode(8);
a.right.right.left = new TreeNode(7);
a.right.right.right = new TreeNode(9);

console.log(increasingBST(a));