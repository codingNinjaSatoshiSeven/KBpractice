/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function(root) {
  if(!root) return [];
  var q = [], level = 0, results = [];
  q.push({level: 0, node: root});
  while (q.length !== 0) {
    var curLevel = q[0].level;
    var node = q.shift().node;
    if(!results[curLevel]) {
      results[curLevel] = [];
    }
    results[curLevel].push(node.val);
    if (node.left) {
      q.push({level: curLevel +1, node: node.left});
    }
    if (node.right) {
      q.push({level: curLevel +1, node: node.right});
    }
  }
  return results;
};

var a = new TreeNode(3);
a.left = new TreeNode(9);
a.right = new TreeNode(20);
a.right.left = new TreeNode(15);
a.right.right = new TreeNode(7);

console.log(levelOrder(a));