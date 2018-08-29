/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.map = {};
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
 if (key in this.map) {
   return this.map[key];
 } else {
   return -1;
 }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  delete this.map[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
var hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
console.log(hashMap.get(1));            // returns 1
console.log(hashMap.get(3));            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
console.log(hashMap.get(2));            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
console.log(hashMap.get(2));            // returns -1 (not found) 