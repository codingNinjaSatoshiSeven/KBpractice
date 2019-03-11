///TODO: REVIEW
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = (root, v, d) => {
  const helper = (root, level, v, d) => {
    if (!root) {
      return;
    }

    if (level < d - 1) {
      helper(root.left, level + 1, v, d);
      helper(root.right, level + 1, v, d);
    } else {
      // Handle the left subtree
      const left = root.left;
      root.left = new TreeNode(v);
      root.left.left = left;

      // Handle the right subtree
      const right = root.right;
      root.right = new TreeNode(v);
      root.right.right = right;
    }
  };

  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  helper(root, 1, v, d);

  return root;
};