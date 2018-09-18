/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var map = {}, inv = {};
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }
  for (var k in map) {
    var count = map[k];
    if(!inv[count]) {
      inv[count] = [k.repeat(+count)];
    } else {
      inv[count].push(k.repeat(+count));
    }
  }
  var keys = Object.keys(inv);
  keys = keys.sort((a,b) => {
    return (+b) - (+a);
  });
  var result = [];
  for (var i = 0 ; i < keys.length; i++) {
    var count = keys[i];
    result = result.concat(inv[count]);
  }
  return result.join("");
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
