/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  var sum = 0;
  for (var key in this.map) {
    if (key.indexOf(prefix)=== 0) {
      sum += this.map[key];
    }
  }
  return sum;
};

var a = new MapSum();
a.insert("apple", 3);
console.log(a.sum("ap"));
a.insert("app", 2);
