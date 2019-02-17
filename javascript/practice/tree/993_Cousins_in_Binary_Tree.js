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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  var depth ={}, parent = {};
  dfs(root, null, parent, depth);
  return (depth[x] === depth[y] && parent[x] !== parent[y]);
};

function dfs(node, par, parent, depth) {
  if(node) {
    depth[node.val] = par ? 1+ depth[par.val] :0;
    parent[node.val] = par;
    dfs(node.left, node, parent, depth);
    dfs(node.right, node, parent, depth);
  }
}