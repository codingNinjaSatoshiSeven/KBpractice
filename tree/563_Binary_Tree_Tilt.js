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
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findTilt = function(root) {
  var tilt = { t: 0};
  traverse(root, tilt);
  return tilt.t;
};

function traverse(node, tilt) {
  if (!node) return 0;
  var l = traverse(node.left,tilt);
  var r = traverse(node.right,tilt);
  tilt.t += Math.abs(l - r);
  return l + r + node.val;
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
console.log(findTilt(a));
var b = new TreeNode(1);
b.left = new TreeNode(2);
b.right = new TreeNode(3);
b.left.left = new TreeNode(4);
b.left.right = new TreeNode(5);
console.log(findTilt(b));