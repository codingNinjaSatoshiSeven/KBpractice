/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = {};
  for (var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if(!this.map[val]) {
      this.map[val] = [i];
    } else {
      this.map[val].push(i);
    }
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  var val = this.map[target];
  if (val.length === 1) return val[0];
  var index = Math.floor(Math.random() * val.length);
  return val[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */

 var a = new Solution([1,2,3,3,3]);
 console.log(a.pick(3));
 console.log(a.pick(1));