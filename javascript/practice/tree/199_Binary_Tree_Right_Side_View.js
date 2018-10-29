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
 * @return {number[]}
 */
var rightSideView = function(root) {
  var q = [];
  var level = 0;
  var results = [];
  q.push({node: root, level});
  while (q.length !== 0) {
    var curLevel = q[0].level;
    if (curLevel !== level) {
      level = curLevel;
    } else {
      results.length >=1 && results.pop();
    }
    var node = q.shift().node;
    if(node) {
      results.push(node.val);
      if (node.left) {
        q.push({ node: node.left, level: curLevel+1 });
      }
      if(node.right) {
        q.push({ node: node.right, level: curLevel+1 });
      }
    }
  }
  return results;
};

var a = new TreeNode(3);
a.left = new TreeNode(9);
a.right = new TreeNode(20);
a.right.left = new TreeNode(15);
a.right.right = new TreeNode(7);

console.log(rightSideView(a));