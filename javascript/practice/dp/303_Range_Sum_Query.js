/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.sum = [nums[0]];
  for (var i = 0; i < nums.length; i++) {
    this.sum[i+1] = this.sum[i] + nums[i+1];
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i-1 < 0) return this.sum[j];
  return this.sum[j] - this.sum[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));