///TODO: REVIEW
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.root = new Node(nums[0]);
  var i = 1;
  while(i<nums.length) {
    this.addNode(nums[i], this.root);
    i++;
  }
};

KthLargest.prototype.addNode = function (val, current) {
  if(val<current.val) {
    if(current.left) {
      this.addNode(val, current.left);
    } else {
      current.left = new Node(val);
    }
  } else {
    current.rightCount +=1;
    if(current.right) {
      this.addNode(val, current.right);
    } else {
      current.right = new Node(val);
    }
  }
}

KthLargest.prototype.find = function (current, k) {
  if(current) {
    if(current.rightCount === k) {
      return current;
    } else if (current.rightCount>k) {
      return this.find(current.right, k);
    } else {
      return this.find(current.left, k-current.rightCount);
    }
  } else {
    return null;
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.addNode(val, this.root);
  var result = this.find(this.root, this.k);
  return result ? result.val: null;
};

function Node(val) {
  this.val = val;
  this.rightCount = 1;
  this.left = null;
  this.right = null;
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */