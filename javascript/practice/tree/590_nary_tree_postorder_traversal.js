/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function Node(val,children) {
  this.val = val;
  this.children = children;
};

var postorder = function(root) {
  var results = [];
  traverse(root, results);
  return results;
};

function traverse(node, results) {
  if(!node) return;
  if(node.children) {
    for (var i = 0; i<node.children.length; i++){
      traverse(node.children[i], results);
    }
  }

  results.push(node.val);
  return;
}

var a = new Node(1);
var b = new Node(3);
var c = new Node(2);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
a.children = [b,c,d];
b.children=[e,f];

console.log(postorder(a));