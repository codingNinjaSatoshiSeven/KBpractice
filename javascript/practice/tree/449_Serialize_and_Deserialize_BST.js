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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var res = "";
  LDR(root);
  if(res[0] === '#') res = res.substring(1);
  return res;
  function LDR(node) {
    if(node !== null && node.val !== undefined) {
      res += "#" + node.val;
      if(node.left !== null) {
        LDR(node.left);
      } else {
        res += "#N";
      }
      if(node.right !== null) {
        LDR(node.right);
      } else {
        res +="#N";
      }
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  ///  1#2#N#N#3#4#N#N#5#N#N
  var nodes = data.split('#');
  return LDR(0).node;
  function LDR(i) {
    if(nodes[i] !== undefined && nodes[i] !== "" && nodes[i] !== 'N') {
      var root = new TreeNode(parseInt(nodes[i]));
      i++;
      var res = LDR(i);
      i = res.i;
      root.left = res.node;
      res = LDR(i);
      i = res.i;
      root.right = res.node;
      return {node: root, i:i};
    } else {
      return {node: null, i: ++i};
    }
  }
};

let str = '1#2#N#N#3#4#N#N#5#N#N';
console.log(deserialize(str));
