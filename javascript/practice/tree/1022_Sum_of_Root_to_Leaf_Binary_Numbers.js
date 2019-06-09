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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  if(!root) return 0;
  let sum = { a: 0};
  recurse(root, "", sum);
  return sum.a;
};

function recurse(node, temp, sum){
  if(!node) {
    return;
  }
  if(!node.left && !node.right) {
    temp += node.val;
    let res = parseInt(temp,2);
    if (!isNaN(res)) {
      sum.a += res;
    }
    return;
  }
  node.left && recurse(node.left, temp+node.val, sum);
  node.right && recurse(node.right, temp+node.val, sum);
}

let a = new TreeNode(1);
a.left = new TreeNode(0);
a.left.left = new TreeNode(0);
a.left.right = new TreeNode(1);
a.right = new TreeNode(1);
a.right.left = new TreeNode(0);
a.right.right = new TreeNode(1);
console.log(sumRootToLeaf(a));