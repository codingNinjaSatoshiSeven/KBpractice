/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var r = arr[i].split("").reverse().join("");
    arr[i] = r;
  }
  return arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));