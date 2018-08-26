/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var convertBST = function(root) {
  var sum = 0;
  var node = root;
  var stack = [];
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.right;
    }
    node = stack.pop();
    sum += node.val;
    node.val = sum;
    node = node.left;
  }
  return root;
};

var a = new TreeNode(5);
a.left = new TreeNode(2);
a.right = new TreeNode(13);

console.log(convertBST(a));
