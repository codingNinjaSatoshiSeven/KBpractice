///TODO: NEED OPTIMIZE
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findTarget = function(root, k) {
  var map = {};
  traverse(root, map);
  for (var key in map) {
    var other = k - (+key);
    if (other === (+key)) {
      if (map[key] > 1) {
        return true;
      }
    } else {
      if (map[other]) {
        return true;
      }
    }
  }
  return false;
};

function traverse(node, map) {
  if (!node) return;
  if (!map[node.val]) {
    map[node.val] = 1;
  } else {
    map[node.val]++;
  }
  traverse(node.left, map);
  traverse(node.right, map);
}

var a = new TreeNode(5);
a.left = new TreeNode(3);
a.right = new TreeNode(6);
a.left.left = new TreeNode(2);
a.left.right = new TreeNode(4);
a.right.right = new TreeNode(7);
console.log(findTarget(a, 9));
console.log(findTarget(a, 28));

var b = new TreeNode(1);
console.log(findTarget(b, 2));