///TODO: REVIEW
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  var l = -1;
  var r = s.length;
  while (++l < --r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
    }
  }
  return true;
};

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }
  return true;
}

console.log(validPalindrome("abca"));