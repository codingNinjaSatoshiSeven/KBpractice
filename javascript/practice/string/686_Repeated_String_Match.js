/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  var n1 = A.length, n2 = B.length, count =1;
  var t = A;
  while(t.length < n2) {
    t+=A;
    ++count;
  }
  if(t.includes(B)) return count;
  t +=A;
  return (t.includes(B)) ? count+1: -1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab"));