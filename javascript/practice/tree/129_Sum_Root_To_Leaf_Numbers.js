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
var sumNumbers = function(root) {
  var result = {sum: 0};
  if(!root) return 0;
  recurse(root, ''+root.val, result);
  return result.sum;
};

function recurse(node, temp, result) {
  if (!node.left && !node.right) {
    result.sum += parseInt(temp);
    return;
  }
  if (node.left) {
    recurse(node.left, temp+node.left.val, result);
  }
  if (node.right) {
    recurse(node.right, temp+node.right.val, result);
  }
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);

console.log(sumNumbers(a));

var b = new TreeNode(4);
b.left = new TreeNode(9);
b.right = new TreeNode(0);
b.left.left = new TreeNode(5);
b.left.right = new TreeNode(1);
console.log(sumNumbers(b));

var c = new TreeNode(1);
c.right = new TreeNode(5);
console.log(sumNumbers(c));