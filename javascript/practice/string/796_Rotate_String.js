/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if(A.length === 0 && B.length === 0) return true;
  if(A.length !== B.length) return false;
  var indexes = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] === B[0]) indexes.push(i);
  }
  var val = false;
  for(var n = 0; n < indexes.length; n++) {
    var index = indexes[n];
    if (valid(index, A, B)) {
      return true;
    }
  }
  return val;
};

function valid(index, A, B) {
  for (var i = 0; i < B.length; i++) {
    var ci = (i + index >= A.length) ? i+index - A.length : i+index;
    if(A[ci] !== B[i]) {
      return false;
    }
  }
  return true;
}

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));
console.log(rotateString("ohbrwzxvxe", "uornhegseo"));
console.log(rotateString("vcuszhlbtpmksjleuchmjffufrwpiddgyynfujnqblngzoogzg"
,"fufrwpiddgyynfujnqblngzoogzgvcuszhlbtpmksjleuchmjf"));