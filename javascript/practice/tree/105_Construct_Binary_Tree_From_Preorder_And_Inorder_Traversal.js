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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return build(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);
};

function build(preorder, pLeft, pRight, inorder, iLeft, iRight) {
  if(pLeft > pRight || iLeft > iRight) return null;
  var i = 0;
  for (i = iLeft; i<=iRight; i++) {
    if(preorder[pLeft] === inorder[i]) break;
  }
  var cur = new TreeNode(preorder[pLeft]);
  cur.left = build(preorder, pLeft+1, pLeft + i - iLeft, inorder, iLeft, i - 1);
  cur.right = build(preorder, pLeft + i - iLeft + 1, pRight, inorder, i + 1, iRight);
  return cur;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));