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
var minDiffInBST = function(root) {
  var map = {};
  recurse(root, map);
  var a = Object.keys(map).sort((n1, n2) => n1 - n2);
  var min = Number.POSITIVE_INFINITY;
  for (var i = 1; i < a.length; i++) {
    min = Math.min(min, Math.abs((+a[i])- (+a[i-1])));
  }
  return min;
}

function recurse(node, map) {
  if (!node) return;
  map[node.val] = true;
  recurse(node.left, map);
  recurse(node.right, map);
}

var a = new TreeNode(4);
a.left = new TreeNode(2);
a.right = new TreeNode(6);
a.left.left = new TreeNode(1);
a.left.right = new TreeNode(3);

console.log(minDiffInBST(a));
