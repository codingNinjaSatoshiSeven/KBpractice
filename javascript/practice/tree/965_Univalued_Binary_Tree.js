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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return true;
  var map = {};
  return traverse(root, map);
};

function traverse(node, map) {
  if (!node) {
    return true;
  } else {
    var val = node.val;
    map[val] = true;
    if(Object.keys(map).length >1) return false;
    else {
      return traverse(node.left, map) && traverse(node.right, map);
    }
  }
}

var a = new TreeNode(1);
a.left = new TreeNode(1);
a.right = new TreeNode(1);
console.log(isUnivalTree(a));

var b = new TreeNode(2);
b.left = new TreeNode(2);
b.right = new TreeNode(2);
b.left.left = new TreeNode(5);
b.left.right = new TreeNode(2);
console.log(isUnivalTree(b));