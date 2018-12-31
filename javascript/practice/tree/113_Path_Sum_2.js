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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if(!root) return [];
  var result = [];
  recurse(root, [], 0, result, sum);
  return result;
};

function recurse(node, temp, sum, result, target) {
  sum += node.val;
  var temp1 = temp.slice();
  temp1.push(node.val);
  if(node.left) {
    recurse(node.left, temp1.slice(), sum, result, target);
  }
  if(node.right) {
    recurse(node.right, temp1.slice(), sum, result, target);
  }
  if(!node.left && !node.right) {
    if (sum === target) {
      result.push(temp1);
      return;
    } else {
      return;
    }
  }
}

var a = new TreeNode(5);
a.left = new TreeNode(4);
a.right = new TreeNode(8);
a.left.left = new TreeNode(11);
a.right.left = new TreeNode(13);
a.right.right = new TreeNode(4);
a.left.left.left = new TreeNode(7);
a.left.left.right = new TreeNode(2);
a.right.right.left = new TreeNode(5);
a.right.right.right = new TreeNode(1);

console.log(pathSum(a, 22));