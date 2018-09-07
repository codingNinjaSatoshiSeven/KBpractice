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
var averageOfLevels = function(root) {
  var q = [], result = [];
  q.push({level: 0, node: root});
  var count = 0, sum = 0, level = 0;
  while (q.length !== 0) {
    var n = q.shift();
    var node = n.node;
    var nlevel = n.level;
    if (n.level === level) {
      count++;
      sum += n.node.val;
    } else {
      result.push(sum / count);
      level = n.level;
      count = 1;
      sum = n.node.val;
    }
    if (node.left) q.push({level: nlevel+1, node: node.left});
    if (node.right) q.push({level: nlevel+1, node: node.right});
  }
  result.push(sum / count);
  return result;
};

var a = new TreeNode(3);
a.left = new TreeNode(9);
a.right = new TreeNode(20);
a.right.left = new TreeNode(15);
a.right.right = new TreeNode(7);
console.log(averageOfLevels(a));