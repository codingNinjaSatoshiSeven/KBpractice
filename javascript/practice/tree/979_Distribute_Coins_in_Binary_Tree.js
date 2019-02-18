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
var distributeCoins = function(root) {
  var ans= {val: 0};
  dfs(root, ans);
  return ans.val;
};

function dfs(node, ans) {
  if(!node) return 0;
  var L = dfs(node.left, ans);
  var R = dfs(node.right, ans);
  ans.val =  ans.val + Math.abs(L) + Math.abs(R);
  return node.val + L + R -1;
}