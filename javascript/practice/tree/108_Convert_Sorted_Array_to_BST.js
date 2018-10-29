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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return recurse(nums, 0, nums.length -1);
};

function recurse(nums, start, end) {
  if (start > end) return null;
  var mid = Math.floor((start+end) /2);
  var root = new TreeNode(nums[mid]);
  root.left = recurse(nums, start, mid-1);
  root.right = recurse(nums, mid+1, end);
  return root;
}