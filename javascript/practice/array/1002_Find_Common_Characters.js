/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  var result = [];
  var firstword = A[0];
  for(var i = 0; i<firstword.length; i++) {
    var char = firstword[i];
    var inAllWords = true;
    for(var j = 1; j<A.length;j++) {
      var word = A[j];
      if(!word.includes(char)) {
        inAllWords = false;
        break;
      }
    }
    if(inAllWords) {
      result.push(char);
      for(var j=1; j<A.length; j++) {
        var word = A[j];
        var index = word.indexOf(char);
        word = word.substr(0, index) + word.substr(index+1);
        A[j] = word;
      }
    }
  }
  return result;
};