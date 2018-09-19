/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length ===0) return [];
  var d = digits.split("");
  var results = [];
  recurse(results, d, "", map, 0);
  return results;
};

function recurse(results, dArr, str, map, i) {
  if (i >= dArr.length) {
    results.push(str);
    return;
  } else {
    var t = map[dArr[i]];
    for (var j = 0; j < t.length; j++) {
      recurse(results, dArr, str+t[j], map, i+1);
    }
  }
}

console.log(letterCombinations("23"));
