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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  var val = {value: String.fromCharCode(97+25+1)};
  dfs(root, "", val);
  return val.value;
};

function dfs(node, temp, val) {
  if(!node) {
    return;
  } else {
    var char = String.fromCharCode(97+node.val);
    var newTemp = char+temp;
    if(!node.left && !node.right) {
      if(val.value >  newTemp) {
        val.value = newTemp;
      }
    } else {
      dfs(node.left, newTemp, val);
      dfs(node.right, newTemp, val);
    }

  }
}

var a = new TreeNode(0);
a.left = new TreeNode(1);
a.right = new TreeNode(2);
a.left.left = new TreeNode(3);
a.left.right = new TreeNode(4);
a.right.left = new TreeNode(3);
a.right.right = new TreeNode(4);
console.log(smallestFromLeaf(a));

var b = new TreeNode(25);
b.left = new TreeNode(1);
b.right = new TreeNode(3);
b.left.left = new TreeNode(1);
b.left.right = new TreeNode(3);
b.right.left = new TreeNode(0);
b.right.right = new TreeNode(2);
console.log(smallestFromLeaf(b));

var c = new TreeNode(0);
c.right = new TreeNode(1);
console.log(smallestFromLeaf(c));
