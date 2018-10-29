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
var getMinimumDifference = function(root) {
  if(!root) return 0;
  if(!root.left && !root.right) return 0;
  var arr = [];
  traverse(root, arr);
  arr.sort((a,b) => {
    return a-b;
  });
  var min = Number.MAX_SAFE_INTEGER;
  for(var i = 1; i < arr.length; i++) {
    min = Math.min(arr[i] - arr[i-1], min);
  }
  return min;
};

function traverse(node, arr) {
  if (!node) return;
  arr.push(node.val);
  if(node.left) {
    traverse(node.left, arr);
  }
  if(node.right) {
    traverse(node.right, arr);
  }
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
console.log(getMinimumDifference(a));

var b = new TreeNode(236);
b.left = new TreeNode(104);
b.right = new TreeNode(701);
b.left.right = new TreeNode(227);
b.right.right = new TreeNode(911);
console.log(getMinimumDifference(b));