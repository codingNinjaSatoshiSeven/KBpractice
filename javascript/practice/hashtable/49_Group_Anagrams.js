/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = {};
  for (var i = 0; i < strs.length; i++) {
    var temp = sort(strs[i]);
    if (!map[temp]) {
      map[temp] = [strs[i]];
    } else {
      map[temp].push(strs[i]);
    }
  }
  var result = [];
  for (var key in map) {
    result.push(map[key]);
  }
  return result;
};

function sort(str) {
  var arr = str.split('');
  arr = arr.sort((a,b) => {
    return a > b ? 1 :-1;
  });
  return arr.join('');
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
