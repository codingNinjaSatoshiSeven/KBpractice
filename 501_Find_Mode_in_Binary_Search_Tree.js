/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findMode = function(root) {
  var map = {};
  traverseTree(root, map);
  var max = 0, result= [];
  for (var key in map) {
    if (map[key] >= max) {
      max = map[key];
    }
  }
  for (var key in map) {
    if (map[key] === max) {
      result.push(+key);
    }
  }
  return result;
};

function traverseTree(node, map) {
  if (!node) {
    return;
  }
  if (!map[node.val]) {
    map[node.val] = 1;
  } else {
    map[node.val] ++;
  }
  traverseTree(node.left, map);
  traverseTree(node.right, map);
}

var a = new TreeNode(2);
a.left = new TreeNode(1);
a.right = new TreeNode(2);
console.log(findMode(a));
