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
var findSecondMinimumValue = function(root) {
  var min = {m: null};
  var min2 = {m: null};
  traverse(root, min, min2);
  return min2.m === null ? -1 : min2.m;
};

function traverse(node, min, min2) {
  if (!node) return;
  if (min.m === null) {
    min2.m = min.m;
    min.m = node.val;
  } else {
    if (min2.m === null && node.val > min.m) {
      min2.m = node.val;
    } else {
      if (node.val < min.m) {
        min2.m = min.m;
        min.m = node.val;
      } else if (node.val < min2.m && node.val > min.m ) {
        min2.m = node.val;
      }
    }
  }
  traverse(node.left, min, min2);
  traverse(node.right, min, min2);
}

var a = new TreeNode(2);
a.left = new TreeNode(2);
a.right = new TreeNode(2);
console.log(findSecondMinimumValue(a));

var b = new TreeNode(2);
b.left = new TreeNode(2);
b.right = new TreeNode(5);
b.right.right = new TreeNode(5);
b.right.left = new TreeNode(5);
console.log(findSecondMinimumValue(b));