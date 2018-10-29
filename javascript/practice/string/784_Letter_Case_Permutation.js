/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  var result = [];
  recurse(S, result, '');
  return result;
};

function recurse(str, result, temp) {
  if (str.length === 0) {
    result.push(temp);
    return;
  } else {
    var s = str[0];
    if(isLower(s)) {
      recurse(str.slice(1), result, temp+s);
      recurse(str.slice(1), result, temp+s.toUpperCase());
    } else if(isUpper(s)) {
      recurse(str.slice(1), result, temp+s.toLowerCase());
      recurse(str.slice(1), result, temp+s);
    } else {
      recurse(str.slice(1), result, temp+s);
    }
  }
}

function isLower(s){
  return s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122;
}

function isUpper(s) {
  return s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90;
}

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));
console.log(letterCasePermutation("12345"));
console.log(letterCasePermutation("C"));