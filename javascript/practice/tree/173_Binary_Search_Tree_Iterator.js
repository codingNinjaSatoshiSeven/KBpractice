/**
 * Definition for a binary tree node.

 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function traverse(node, arr) {
  if(node) {
    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
  }
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.arr = [];
  traverse(root, this.arr);
  this.curIndex = -1;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.curIndex++;
  return this.arr[this.curIndex];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.curIndex+1 < this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var a = new TreeNode(7);
a.left = new TreeNode(3);
a.right = new TreeNode(15);
a.right.left = new TreeNode(9);
a.right.right = new TreeNode(20);

var iterator = new BSTIterator(a);
console.log(iterator.next());    // return 3
console.log(iterator.next());    // return 7
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 9
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 15
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 20
console.log(iterator.hasNext()); // return false

