///TODO: REVIEW
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.nums = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (val in this.map) return false;
  this.nums.push(val);
  this.map[val] = this.nums.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!(val in this.map)) return false;
  var last = this.nums[this.nums.length-1];
  this.map[last] = this.map[val];
  this.nums[this.map[val]] = last;
  this.nums.pop();
  delete this.map[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  var index = Math.floor(Math.random() * this.nums.length) % this.nums.length;
  return this.nums[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 var a = new RandomizedSet();
 a.insert(1);
 a.remove(2);
 a.insert(2);
 a.remove(1);
 a.insert(2);
