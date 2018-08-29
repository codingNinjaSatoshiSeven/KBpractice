/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.map = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.map[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  delete this.map[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.map[key] === true;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
console.log(hashSet.contains(1));    // returns true
console.log(hashSet.contains(3));    // returns false (not found)
hashSet.add(2);          
console.log(hashSet.contains(2));    // returns true
hashSet.remove(2);          
console.log(hashSet.contains(2));    // returns false (already removed)