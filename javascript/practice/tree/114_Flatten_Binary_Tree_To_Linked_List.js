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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root) return;
  if(root.left) flatten(root.left);
  if(root.right) flatten(root.right);
  var tmp = root.right;
  root.right = root.left;
  root.left = null;
  while(root.right) root= root.right;
  root.right = tmp;
};

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(5);
a.left.left = new TreeNode(3);
a.left.right = new TreeNode(4);
a.right.right = new TreeNode(6);

flatten(a);
console.log(a);
