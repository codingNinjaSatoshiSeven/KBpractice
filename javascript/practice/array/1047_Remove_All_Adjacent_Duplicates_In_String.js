/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  var arr = S.split('');
  for (var i = 0; i<arr.length-1; i++) {
    if(arr[i] === arr[i+1]) {
      arr.splice(i, 2);
      i -=2;
    }
    if(i<0) i = -1;
  }
  return arr.join('');
};

console.log(removeDuplicates("abbaca"))