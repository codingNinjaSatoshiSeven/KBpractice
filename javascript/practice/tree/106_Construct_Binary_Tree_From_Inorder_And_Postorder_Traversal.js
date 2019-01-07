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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return build(inorder, 0, inorder.length -1, postorder, 0, postorder.length -1);
};

function build(inorder, iLeft, iRight, postorder, pLeft, pRight) {
  if(iLeft > iRight || pLeft > pRight) return null;
  var cur = new TreeNode(postorder[pRight]);
  var i = 0;
  for(i = iLeft; i< inorder.length; i++) {
    if(inorder[i] === cur.val) break;
  }
  cur.left = build(inorder, iLeft, i - 1, postorder, pLeft, pLeft + i - iLeft - 1);
  cur.right = build(inorder, i + 1, iRight, postorder, pLeft + i - iLeft, pRight - 1);
  return cur;
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));