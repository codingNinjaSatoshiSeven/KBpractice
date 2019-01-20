/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  var temp = [];
  S = S.split('');
  for(var i = 0;i<S.length; i++) {
    if(isLetter(S[i])) {
      temp.push(S[i]);
      S[i]='';
    }
  }
  var i = temp.length -1;
  var j = 0;
  while(i>=0) {
    while(S[j]!==''){
      j++;
    }
    S[j] = temp[i];
    i--;
  }
  return S.join('');
};

function isLetter(c) {
  var val =c.charCodeAt(0);
  return (val >=65 && val <=90) || (val >=97 && val <=122);
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));