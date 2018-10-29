/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  var words = S.split(" ");
  var goat = "ma";
  var vowel = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };
  for (var i = 0; i < words.length; i++) {
    var arr = words[i].split("");
    var first = words[i][0];
    var result;
    if (vowel[first]) {
      result = words[i] + goat + "a".repeat(i+1);
    } else {
      arr.shift();
      result = arr.join("") + first + goat + "a".repeat(i+1);
    }
    words[i] = result;
  }
  return words.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));