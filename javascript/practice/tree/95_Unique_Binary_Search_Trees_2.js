///TODO: REVIEW
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n===0) return [];
  return generateTreeDFS(1, n);
};

function generateTreeDFS(start, end) {
  var subTree = [];
  if(start > end ) subTree.push(null);
  else {
    for(var i = start; i<=end; i++) {
      var leftSubTree = generateTreeDFS(start, i-1);
      var rightSubTree = generateTreeDFS(i+1, end);
      for(var j = 0; j<leftSubTree.length; j++) {
        for(var k = 0; k<rightSubTree.length; k++) {
          var node = new TreeNode(i);
          node.left = leftSubTree[j];
          node.right = rightSubTree[k];
          subTree.push(node);
        }
      }
    }
  }
  return subTree;
}

console.log(generateTrees(3));