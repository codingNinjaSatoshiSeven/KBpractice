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
var findBottomLeftValue = function(root) {
  var q = [];
  var level = 0;
  var result;
  if(!root.left && !root.right) return root.val;
  q.push({node: root, level});
  while (q.length !== 0) {
    var { node, level: curLevel } = q.shift();
    if(curLevel !== level) {
      result = node.val;
      level++;
    }
    if(node) {
      if (node.left) {
        q.push({ node: node.left, level: curLevel+1 });
      }
      if(node.right) {
        q.push({ node: node.right, level: curLevel+1 });
      }
    }
  }
  return result;
};

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
console.log(findBottomLeftValue(a));

var b = new TreeNode(1);
b.left = new TreeNode(2);
b.right = new TreeNode(3);
b.left.left = new TreeNode(4);
b.right.left = new TreeNode(5);
b.right.right = new TreeNode(6);
b.right.left.left = new TreeNode(7);
console.log(findBottomLeftValue(b));

var c = new TreeNode(0);
console.log(findBottomLeftValue(c));