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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  var res = [];
  if(!root) return res;
  var s1 = [], s2 = [];
  s1.push(root);
  var out = [];
  while(s1.length !==0 || s2.length!==0) {
    while(s1.length !==0) {
      var cur = s1.pop();
      out.push(cur.val);
      if(cur.left) {
        s2.push(cur.left);
      }
      if(cur.right) {
        s2.push(cur.right);
      }
    }
    if(out.length!==0) res.push(out);
    out = [];
    while(s2.length !==0) {
      var cur = s2.pop();
      out.push(cur.val);
      if(cur.right) {
        s1.push(cur.right);
      }
      if(cur.left) {
        s1.push(cur.left);
      }
    }
    if(out.length!==0) res.push(out);
    out = [];
  }
  return res;
};