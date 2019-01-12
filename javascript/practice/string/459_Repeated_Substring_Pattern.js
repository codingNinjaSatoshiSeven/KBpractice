///TODO: REVIEW
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
  for(var i = parseInt(str.length/2); i>=1; i--){
      if(str.length%i===0){
          var j=i;
          var sub=str.substring(0,j);
          while(str.indexOf(sub,j)==j)j+=i;
          if(j==str.length)return true;
      }
  }
  return false;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));