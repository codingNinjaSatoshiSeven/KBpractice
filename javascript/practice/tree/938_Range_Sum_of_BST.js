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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  var sum = { value: 0};
  sumHelper(root, L, R, sum);
  return sum.value;
};

function sumHelper(node, L, R, sum) {
  if(!node) return;
  if(node.val >=L && node.val <=R) {
    sum.value += node.val;
  }
  sumHelper(node.left, L, R, sum);
  sumHelper(node.right, L, R, sum);
}

var a = new TreeNode(10);
a.left = new TreeNode(5);
a.right = new TreeNode(15);
a.left.left = new TreeNode(3);
a.left.right = new TreeNode(7);
a.right.right = new TreeNode(18);

console.log(rangeSumBST(a, 7, 15));

var b = new TreeNode(10);
b.left = new TreeNode(5);
b.right = new TreeNode(15);
b.left.left = new TreeNode(3);
b.left.right = new TreeNode(7);
b.right.left = new TreeNode(13);
b.right.right = new TreeNode(18);
b.left.right.left = new TreeNode(6);

console.log(rangeSumBST(b, 6, 10));